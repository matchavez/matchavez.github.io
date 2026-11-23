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
  /* 4. Home page at night: a hand-held torch on the track sign.
     Each frame it works out where the beam lands: on the land behind
     (.mc-night, viewport pixels) and on each lit object (.mc-lamp,
     in that object's own pixels, so the beam turns with the board).
     It also places the board's shadow on the tussock. The hand drifts
     a little; it holds still when the visitor asks for reduced motion.
     Runs only on the cover page; does nothing by day. */
  try {
    var torch = function () {
      var night = document.querySelector(".mc-night");
      var board = document.querySelector(".mc-sign__board");
      if (!night || !board) return;
      var shadow = night.querySelector(".mc-night__shadow");
      var lamps = Array.prototype.slice.call(document.querySelectorAll(".mc-lamp"));
      var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var t0 = performance.now();
      var frame = function (now) {
        if (document.body.getAttribute("data-md-color-scheme") === "slate") {
          var r = board.getBoundingClientRect();
          var t = (now - t0) / 1000;
          var dx = still ? 0 : Math.sin(t * 0.41) * 14 + Math.sin(t * 1.13 + 1.7) * 5 + Math.sin(t * 2.9) * 1.2;
          var dy = still ? 0 : Math.sin(t * 0.33 + 0.6) * 9 + Math.sin(t * 0.97 + 2.4) * 4 + Math.cos(t * 3.4) * 1;
          var dr = still ? 0 : Math.sin(t * 0.23) * 6;
          var bx = r.left + r.width * 0.42 + dx;
          var by = r.top + r.height * 0.5 + dy;
          var lr = r.width * 0.36 + dr;
          night.style.setProperty("--bx", (bx + r.width * 0.08).toFixed(1) + "px");
          night.style.setProperty("--by", (by - r.height * 0.15).toFixed(1) + "px");
          night.style.setProperty("--br", (lr * 1.9).toFixed(1) + "px");
          if (shadow) {
            shadow.style.setProperty("--sx", (r.left + r.width * 0.1 + dx * -0.4).toFixed(1) + "px");
            shadow.style.setProperty("--sy", (r.top - r.height * 0.32 + dy * -0.4).toFixed(1) + "px");
            shadow.style.setProperty("--sw", (r.width * 1.08).toFixed(1) + "px");
            shadow.style.setProperty("--sh", (r.height * 0.95).toFixed(1) + "px");
          }
          for (var i = 0; i < lamps.length; i++) {
            var host = lamps[i].getBoundingClientRect();
            var k = host.width ? lamps[i].offsetWidth / host.width : 1;   /* undo the perspective squeeze */
            lamps[i].style.setProperty("--lx", ((bx - host.left) * k).toFixed(1) + "px");
            lamps[i].style.setProperty("--ly", (by - host.top).toFixed(1) + "px");
            lamps[i].style.setProperty("--lr", (lr * k).toFixed(1) + "px");
          }
        }
        if (!still) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
      if (still) {
        window.addEventListener("resize", function () { requestAnimationFrame(frame); });
        new MutationObserver(function () { requestAnimationFrame(frame); })
          .observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
      }
    };
    if (document.readyState === "loading")
      document.addEventListener("DOMContentLoaded", torch);
    else torch();
  } catch (e) { /* the beam stays in its CSS position */ }
})();
