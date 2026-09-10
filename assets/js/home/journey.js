(function () {
  const namePools = [
    ['UNIBAS', 'ETHZ', 'DCI-L'],
    ['PSI', 'DCI-G'],
    ['UNIBE', 'EMPA']
  ];
  const labels = Array.from(document.querySelectorAll('[data-organisation-slot]'));

  if (labels.length !== namePools.length) return;

  let step = 0;
  const updateLabels = () => {
    labels.forEach((label, index) => {
      const pool = namePools[index];
      label.classList.add('is-changing');
      window.setTimeout(() => {
        label.textContent = pool[(step + index) % pool.length];
        label.classList.remove('is-changing');
      }, 220);
    });
    step += 1;
  };

  window.setInterval(updateLabels, 3600);
}());
