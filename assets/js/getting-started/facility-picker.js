(function () {
  const dialog = document.querySelector('[data-facility-picker]');
  const openers = Array.from(document.querySelectorAll('[data-facility-picker-open]'));

  // Without <dialog> support the openers keep their plain automatic-discovery link.
  if (!dialog || typeof dialog.showModal !== 'function' || !openers.length) return;

  const closeButton = dialog.querySelector('[data-facility-picker-close]');
  const testToggle = dialog.querySelector('[data-facility-picker-test]');
  const host = dialog.querySelector('[data-facility-picker-host]');
  const links = Array.from(dialog.querySelectorAll('[data-production-href]'));
  const testOnlyItems = Array.from(dialog.querySelectorAll('[data-facility-picker-test-only]'));

  const render = () => {
    const useTest = testToggle.checked;

    links.forEach((link) => {
      link.href = useTest ? link.dataset.testHref : link.dataset.productionHref;
    });
    testOnlyItems.forEach((item) => {
      item.hidden = !useTest;
    });
    host.textContent = useTest ? dialog.dataset.testHost : dialog.dataset.productionHost;
    dialog.classList.toggle('is-test', useTest);
  };

  openers.forEach((opener) => {
    opener.addEventListener('click', (event) => {
      event.preventDefault();
      dialog.showModal();
    });
  });

  closeButton.addEventListener('click', () => dialog.close());

  // Clicks on the backdrop land on the <dialog> itself rather than its contents.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  testToggle.addEventListener('change', render);
  render();
}());
