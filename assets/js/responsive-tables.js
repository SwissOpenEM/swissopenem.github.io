(function () {
  "use strict";

  function initialiseTables() {
    document.querySelectorAll('[role="main"] table').forEach(function (table) {
      if (table.closest('.table-scroll')) return;

      var wrapper = document.createElement('div');
      wrapper.className = 'table-scroll';
      wrapper.setAttribute('role', 'region');
      var caption = table.caption;
      var headers = Array.from(table.querySelectorAll('thead th')).map(function (header) {
        return header.textContent.trim();
      });
      wrapper.setAttribute('aria-label', caption ? caption.textContent.trim() : 'Table: ' + headers.join(', '));
      table.before(wrapper);
      wrapper.appendChild(table);

      function updateFocus() {
        if (wrapper.scrollWidth > wrapper.clientWidth) {
          wrapper.setAttribute('tabindex', '0');
        } else {
          wrapper.removeAttribute('tabindex');
        }
      }

      if (typeof ResizeObserver !== 'undefined') {
        var observer = new ResizeObserver(updateFocus);
        observer.observe(wrapper);
        observer.observe(table);
      } else {
        window.addEventListener('resize', updateFocus);
      }
      updateFocus();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiseTables, { once: true });
  } else {
    initialiseTables();
  }
}());
