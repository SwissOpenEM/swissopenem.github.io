(function () {
  "use strict";

  function isExternalHttpLink(link) {
    var url;

    try {
      url = new URL(link.href, window.location.href);
    } catch (error) {
      return false;
    }

    return (url.protocol === "http:" || url.protocol === "https:") &&
      url.origin !== window.location.origin;
  }

  function configureLink(link) {
    if (!isExternalHttpLink(link)) {
      return;
    }

    link.target = "_blank";
    link.relList.add("noopener", "noreferrer");
  }

  function configureLinks(root) {
    if (root.nodeType === Node.ELEMENT_NODE && root.matches("a[href]")) {
      configureLink(root);
    }

    if (root.querySelectorAll) {
      root.querySelectorAll("a[href]").forEach(configureLink);
    }
  }

  function initialiseExternalLinks() {
    configureLinks(document);

    // Keep the policy intact for links inserted or updated by page scripts.
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "attributes") {
          configureLink(mutation.target);
          return;
        }

        mutation.addedNodes.forEach(configureLinks);
      });
    });

    observer.observe(document.body, {
      attributeFilter: ["href"],
      attributes: true,
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseExternalLinks, { once: true });
  } else {
    initialiseExternalLinks();
  }
}());
