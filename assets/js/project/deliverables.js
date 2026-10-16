(() => {
  const root = document.querySelector('[data-deliverables]');
  if (!root) return;

  const buttons = Array.from(root.querySelectorAll('[data-wp]'));
  const content = root.querySelector('#deliverable-content');
  const label = root.querySelector('[data-wp-label]');
  let pendingRequest;
  const cache = new Map();
  const notice = document.createElement('p');
  notice.className = 'deliverable-notice';
  notice.setAttribute('role', 'status');
  content.before(notice);

  async function selectPackage(button) {
    if (pendingRequest) pendingRequest.abort();
    const request = new AbortController();
    pendingRequest = request;

    content.setAttribute('aria-busy', 'true');
    notice.textContent = `Loading WP ${button.dataset.wp}…`;

    try {
      let tasks = cache.get(button.dataset.url);
      if (!tasks) {
        const response = await fetch(button.dataset.url, { signal: request.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const html = await response.text();
        if (request.signal.aborted) return;
        const page = new DOMParser().parseFromString(html, 'text/html');
        tasks = page.querySelector('[role="main"] > .row > div');
        if (!tasks) throw new Error('Work package content not found');
        cache.set(button.dataset.url, tasks);
      }
      if (request.signal.aborted) return;
      content.replaceChildren(...Array.from(tasks.cloneNode(true).childNodes));
      buttons.forEach(item => {
        const selected = item === button;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      label.textContent = `Tasks & progress · WP ${button.dataset.wp}`;
      notice.replaceChildren();
    } catch (error) {
      if (request.signal.aborted) return;
      const message = document.createElement('p');
      message.textContent = 'The tasks could not be loaded. ';
      const link = document.createElement('a');
      link.href = button.dataset.url;
      link.textContent = 'Open the work package page';
      message.append(link);
      notice.replaceChildren(message);
    } finally {
      if (!request.signal.aborted) content.setAttribute('aria-busy', 'false');
    }
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => selectPackage(button));
  });
  selectPackage(buttons[0]);
})();
