(function () {
  const showcase = document.querySelector('[data-dataset-showcase]');

  if (!showcase) return;

  const summary = showcase.querySelector('.dataset-showcase__summary');
  const count = showcase.querySelector('[data-dataset-count]');
  const summaryText = showcase.querySelector('[data-dataset-summary]');
  const status = showcase.querySelector('[data-dataset-status]');
  const grid = showcase.querySelector('[data-dataset-grid]');
  const pageSize = 100;
  const maximumPages = 100;

  const appendTextElement = (parent, tagName, text, className) => {
    const element = document.createElement(tagName);
    element.textContent = text;
    if (className) element.className = className;
    parent.append(element);
    return element;
  };

  const displaySize = (bytes) => {
    const units = ['bytes', 'KB', 'MB', 'GB', 'TB'];
    let value = Number(bytes) || 0;
    let unit = 0;

    while (value >= 1000 && unit < units.length - 1) {
      value /= 1000;
      unit += 1;
    }

    return `${new Intl.NumberFormat('en', {
      maximumFractionDigits: unit === 0 ? 0 : 2,
    }).format(value)} ${units[unit]}`;
  };

  const displayDate = (value) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '';

    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(date);
  };

  const createCard = (dataset) => {
    const card = document.createElement('article');
    card.className = 'dataset-card';

    const meta = appendTextElement(card, 'div', '', 'dataset-card__meta');
    appendTextElement(meta, 'span', `${dataset.type || 'dataset'} data`, 'dataset-card__type');
    if (dataset.size !== undefined && dataset.size !== null) {
      appendTextElement(meta, 'span', displaySize(dataset.size));
    }
    const createdAt = displayDate(dataset.createdAt);
    if (createdAt) appendTextElement(meta, 'span', createdAt);

    appendTextElement(card, 'h3', dataset.datasetName || 'Untitled dataset');
    if (dataset.description) appendTextElement(card, 'p', dataset.description);

    if (dataset.creationLocation) {
      const location = appendTextElement(card, 'p', '', 'dataset-card__location');
      const icon = appendTextElement(location, 'span', '⌖');
      icon.setAttribute('aria-hidden', 'true');
      location.append(document.createTextNode(
        dataset.creationLocation.replace(/^\//, '').replaceAll('/', ' · '),
      ));
    }

    if (Array.isArray(dataset.keywords) && dataset.keywords.length > 0) {
      const tags = appendTextElement(card, 'ul', '', 'dataset-card__tags');
      tags.setAttribute('aria-label', 'Keywords');
      dataset.keywords.forEach((keyword) => appendTextElement(tags, 'li', keyword));
    }

    if (dataset.pid) {
      const link = appendTextElement(card, 'a', '');
      link.className = 'dataset-card__link';
      link.href = `${showcase.dataset.catalogueBaseUrl}${encodeURIComponent(dataset.pid)}`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.append(document.createTextNode(`${showcase.dataset.cardAction} `));
      const arrow = appendTextElement(link, 'span', '→');
      arrow.setAttribute('aria-hidden', 'true');
    }

    return card;
  };

  const createSkeletonCard = () => {
    const card = document.createElement('article');
    card.className = 'dataset-card dataset-card--skeleton';
    card.setAttribute('aria-hidden', 'true');

    const meta = appendTextElement(card, 'div', '', 'dataset-skeleton__meta');
    ['type', 'size', 'date'].forEach((part) => {
      appendTextElement(meta, 'span', '', `dataset-skeleton dataset-skeleton--${part}`);
    });

    appendTextElement(card, 'div', '', 'dataset-skeleton dataset-skeleton--title');
    const description = appendTextElement(card, 'div', '', 'dataset-skeleton__description');
    ['long', 'medium', 'short'].forEach((length) => {
      appendTextElement(description, 'span', '', `dataset-skeleton dataset-skeleton--${length}`);
    });
    appendTextElement(card, 'div', '', 'dataset-skeleton dataset-skeleton--location');

    const tags = appendTextElement(card, 'div', '', 'dataset-skeleton__tags');
    appendTextElement(tags, 'span', '', 'dataset-skeleton dataset-skeleton--tag-short');
    appendTextElement(tags, 'span', '', 'dataset-skeleton dataset-skeleton--tag-long');
    appendTextElement(card, 'div', '', 'dataset-skeleton dataset-skeleton--link');

    return card;
  };

  const renderSkeletons = () => {
    grid.replaceChildren(...Array.from({ length: 3 }, createSkeletonCard));
  };

  const fetchPage = async (pageNumber) => {
    const apiUrl = new URL(showcase.dataset.apiEndpoint);
    apiUrl.searchParams.set('filter', JSON.stringify({
      skip: pageNumber * pageSize,
      limit: pageSize,
      order: 'createdAt:desc',
      where: { keywords: 'OpenEM' },
      fields: {
        pid: true,
        datasetName: true,
        description: true,
        type: true,
        creationLocation: true,
        createdAt: true,
        size: true,
        keywords: true,
      },
    }));

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch(apiUrl, {
        headers: { Accept: 'application/json' },
        signal: controller.signal,
      });

      if (!response.ok) throw new Error(`SciCat returned HTTP ${response.status}`);

      const datasets = await response.json();
      if (!Array.isArray(datasets)) throw new TypeError('SciCat returned an unexpected response');
      return datasets;
    } finally {
      window.clearTimeout(timeout);
    }
  };

  const fetchDatasets = async () => {
    const datasets = [];

    for (let pageNumber = 0; pageNumber < maximumPages; pageNumber += 1) {
      const page = await fetchPage(pageNumber);
      datasets.push(...page);

      if (page.length < pageSize) return datasets;
    }

    throw new Error('SciCat pagination exceeded its safety limit');
  };

  const render = (datasets) => {
    grid.classList.remove('dataset-grid--unavailable');
    grid.replaceChildren(...datasets.map(createCard));
    count.textContent = String(datasets.length);
    const noun = datasets.length === 1 ? showcase.dataset.singular : showcase.dataset.plural;
    summaryText.textContent = `OpenEM ${noun} ${showcase.dataset.availability}`;
    summary.hidden = false;
    status.textContent = datasets.length === 0 ? showcase.dataset.emptyMessage : '';
    status.hidden = datasets.length > 0;
  };

  const showError = (error) => {
    grid.classList.add('dataset-grid--unavailable');
    status.replaceChildren();
    appendTextElement(status, 'span', showcase.dataset.errorMessage);

    const details = appendTextElement(status, 'details', '', 'dataset-showcase__error-details');
    appendTextElement(details, 'summary', showcase.dataset.errorDetailsLabel);
    const errorName = error instanceof Error && error.name ? `${error.name}: ` : '';
    const errorMessage = error instanceof Error ? error.message : String(error);
    appendTextElement(details, 'em', `${errorName}${errorMessage}`);

    status.classList.add('dataset-showcase__status--error');
    const retry = appendTextElement(status, 'button', showcase.dataset.retryAction);
    retry.type = 'button';
    retry.setAttribute('aria-label', showcase.dataset.retryAction);
    retry.addEventListener('click', load);
  };

  async function load() {
    showcase.setAttribute('aria-busy', 'true');
    summary.hidden = true;
    grid.classList.remove('dataset-grid--unavailable');
    renderSkeletons();
    status.hidden = false;
    status.classList.remove('dataset-showcase__status--error');
    status.textContent = showcase.dataset.loadingMessage;

    try {
      render(await fetchDatasets());
    } catch (error) {
      console.error('Could not load OpenEM datasets from SciCat.', error);
      showError(error);
    } finally {
      showcase.setAttribute('aria-busy', 'false');
    }
  }

  load();
}());
