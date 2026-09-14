document.addEventListener('click', function (event) {
  var button = event.target.closest('.copy-to-clipboard');
  if (!button) return;

  navigator.clipboard.writeText(button.dataset.copyText).then(function () {
    var icon = button.querySelector('i');
    var originalClass = icon.className;
    icon.className = 'fas fa-check';
    setTimeout(function () {
      icon.className = originalClass;
    }, 1500);
  });
});
