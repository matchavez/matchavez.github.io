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

  /* 3. Bilingual search placeholder (te reo + english) */
  try {
    var rapua = function () {
      var i = document.querySelector(".md-search__input");
      if (i) { i.placeholder = "rapua \u00b7 search"; i.setAttribute("aria-label", "rapua \u00b7 search"); }
    };
    if (document.readyState === "loading")
      document.addEventListener("DOMContentLoaded", rapua);
    else rapua();
  } catch (e) { /* stock placeholder remains */ }

  /* 4. Texture dealer: every content page gets one of the five
     handbook textures (tussock, water, ridgeline, harakeke, scree)
     along its foot \u2014 never the same one twice in a row. The
     homepage deals itself out (it has the territory). Without JS,
     CSS falls back to the tussock. */
  try {
    var deal = function () {
      if (document.body.classList.contains("has-masthead")) return;
      var N = 5;
      var last = parseInt(sessionStorage.getItem("mc-texture"), 10);
      var pick = Math.floor(Math.random() * N);
      if (!isNaN(last) && pick === last) pick = (pick + 1 + Math.floor(Math.random() * (N - 1))) % N;
      sessionStorage.setItem("mc-texture", String(pick));
      document.body.setAttribute("data-texture", String(pick));
    };
    if (document.readyState === "loading")
      document.addEventListener("DOMContentLoaded", deal);
    else deal();
  } catch (e) { /* the tussock stands in */ }
})();
