(function () {
  const guide = document.querySelector('[data-getting-started-guide]');

  if (!guide) return;

  const stepButtons = Array.from(guide.querySelectorAll('[data-guide-step]'));
  const panels = Array.from(guide.querySelectorAll('[data-guide-panel]'));
  const mobilePanelContainers = Array.from(guide.querySelectorAll('[data-guide-mobile-panel]'));
  const connectors = Array.from(guide.querySelectorAll('[data-guide-connector]'));
  const previousButton = guide.querySelector('[data-guide-previous]');
  const nextButton = guide.querySelector('[data-guide-next]');
  const progress = guide.querySelector('[data-guide-progress]');
  const desktopPanelContainer = guide.querySelector('.getting-started-explainer__content');
  const compactLayout = window.matchMedia('(max-width: 900px)');

  if (!stepButtons.length || stepButtons.length !== panels.length ||
      mobilePanelContainers.length !== panels.length || !desktopPanelContainer) return;

  let currentStep = 0;
  const visitedSteps = new Set([currentStep]);

  guide.classList.add('is-enhanced');

  const arrangePanels = () => {
    panels.forEach((panel, index) => {
      const destination = compactLayout.matches
        ? mobilePanelContainers[index]
        : desktopPanelContainer;

      destination.append(panel);
    });
    guide.classList.toggle('is-compact', compactLayout.matches);
  };

  const render = () => {
    stepButtons.forEach((button, index) => {
      const isActive = index === currentStep;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    panels.forEach((panel, index) => {
      panel.classList.toggle('is-active', index === currentStep);
    });

    connectors.forEach((connector, index) => {
      connector.classList.toggle('is-active', currentStep > index);
      connector.classList.toggle('is-complete', visitedSteps.has(index + 1));
    });

    const progressLabel = guide.dataset.progressLabel;
    const progressSeparator = guide.dataset.progressSeparator;
    progress.textContent = `${progressLabel} ${currentStep + 1} ${progressSeparator} ${panels.length}`;
    previousButton.disabled = currentStep === 0;
    nextButton.disabled = currentStep === panels.length - 1;

  };

  const selectStep = (step) => {
    if (step < 0 || step >= panels.length) return;
    currentStep = step;
    visitedSteps.add(step);
    render();
  };

  stepButtons.forEach((button) => {
    button.addEventListener('click', () => selectStep(Number(button.dataset.guideStep)));
  });

  previousButton.addEventListener('click', () => selectStep(currentStep - 1));
  nextButton.addEventListener('click', () => selectStep(currentStep + 1));

  guide.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      selectStep(currentStep - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      selectStep(currentStep + 1);
    }
  });

  if (typeof compactLayout.addEventListener === 'function') {
    compactLayout.addEventListener('change', arrangePanels);
  } else {
    compactLayout.addListener(arrangePanels);
  }

  arrangePanels();
  render();
}());
