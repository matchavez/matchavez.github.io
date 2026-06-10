/* matchavez.com — progressive enhancements (~1 KB)
   1. Hover prefetch: browser prerenders internal links on hover/touch.
   2. Theme toggle: soft circular reveal via the View Transitions API.
   Both feature-detected; browsers without support behave exactly as before. */

(function () {
  "use strict";

  /* 1. Speculation rules: prerender same-site links on moderate intent */
  try {
    if (
      location.protocol.indexOf("http") === 0 &&
      window.HTMLScriptElement &&
      HTMLScriptElement.supports &&
      HTMLScriptElement.supports("speculationrules")
    ) {
      var spec = document.createElement("script");
      spec.type = "speculationrules";
      spec.textContent = JSON.stringify({
        prerender: [{ where: { href_matches: "/*" }, eagerness: "moderate" }]
      });
      document.head.appendChild(spec);
    }
  } catch (e) { /* never break the page */ }

  /* 2. Theme switch wrapped in a view transition (circular reveal) */
  try {
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (document.startViewTransition && !reduced.matches) {
      document.addEventListener(
        "click",
        function (ev) {
          var label = ev.target && ev.target.closest
            ? ev.target.closest("label[for^='__palette']")
            : null;
          if (!label) return;
          var input = document.getElementById(label.getAttribute("for"));
          if (!input || input.dataset.vtBusy) return;

          ev.preventDefault();
          ev.stopPropagation();

          var x = ev.clientX || innerWidth - 48;
          var y = ev.clientY || 48;
          var r = Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y)
          );

          input.dataset.vtBusy = "1";
          document.documentElement.classList.add("vt-theme");
          var t = document.startViewTransition(function () {
            input.click();
          });
          t.ready
            .then(function () {
              document.documentElement.animate(
                {
                  clipPath: [
                    "circle(0px at " + x + "px " + y + "px)",
                    "circle(" + r + "px at " + x + "px " + y + "px)"
                  ]
                },
                {
                  duration: 380,
                  easing: "ease-in-out",
                  pseudoElement: "::view-transition-new(root)"
                }
              );
            })
            .catch(function () {});
          t.finished.finally(function () {
            delete input.dataset.vtBusy;
            document.documentElement.classList.remove("vt-theme");
          });
        },
        true
      );
    }
  } catch (e) { /* native toggle still works */ }
})();
