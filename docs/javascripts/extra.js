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
  /* 4. Home page at night: a hand-held torch.
     With a mouse or trackpad the torch follows the pointer, centred
     40 px up and 40 px left of it, and trails it a little, as a hand
     would. With no pointer (touch screens, or before the mouse moves,
     or after it leaves the window) the torch rests on the track sign.
     A slight hand wobble is added unless the visitor asks for reduced
     motion. Each frame works out where the beam lands: on the land
     behind (.mc-night, viewport pixels) and on each lit object
     (.mc-lamp, in that object's own pixels, so the beam turns with the
     board), and places the board's shadow, which fades as the beam
     moves off the sign. Runs only on the cover page; idle by day. */
  try {
    var torch = function () {
      var night = document.querySelector(".mc-night");
      var board = document.querySelector(".mc-sign__board");
      if (!night || !board) return;
      var shadow = night.querySelector(".mc-night__shadow");
      var lamps = Array.prototype.slice.call(document.querySelectorAll(".mc-lamp"));
      var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var mouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      var target = null;           /* pointer position, or null = rest on the sign */
      var cx = null, cy = null;    /* where the torch points now */
      if (mouse) {
        document.addEventListener("pointermove", function (ev) {
          if (ev.pointerType === "mouse" || ev.pointerType === "pen")
            target = { x: ev.clientX - 40, y: ev.clientY - 40 };
        }, { passive: true });
        document.documentElement.addEventListener("mouseleave", function () { target = null; });
      }
      var t0 = performance.now();
      var frame = function (now) {
        if (document.body.getAttribute("data-md-color-scheme") === "slate") {
          var r = board.getBoundingClientRect();
          var t = (now - t0) / 1000;
          var dx = still ? 0 : Math.sin(t * 0.41) * 14 + Math.sin(t * 1.13 + 1.7) * 5 + Math.sin(t * 2.9) * 1.2;
          var dy = still ? 0 : Math.sin(t * 0.33 + 0.6) * 9 + Math.sin(t * 0.97 + 2.4) * 4 + Math.cos(t * 3.4) * 1;
          var dr = still ? 0 : Math.sin(t * 0.23) * 6;
          var gx = target ? target.x : r.left + r.width * 0.42;
          var gy = target ? target.y : r.top + r.height * 0.5;
          if (cx === null || still) { cx = gx; cy = gy; }
          else { cx += (gx - cx) * 0.18; cy += (gy - cy) * 0.18; }
          var wob = target ? 0.35 : 1;   /* a hand on a mouse wobbles less */
          var bx = cx + dx * wob;
          var by = cy + dy * wob;
          var lr = r.width * 0.36 + dr;
          /* the spill on the land sits just past the beam on the sign */
          night.style.setProperty("--bx", (bx + r.width * 0.03).toFixed(1) + "px");
          night.style.setProperty("--by", (by - r.height * 0.06).toFixed(1) + "px");
          night.style.setProperty("--br", (lr * 1.9).toFixed(1) + "px");
          if (shadow) {
            /* shadow falls away from the torch; strongest when the beam
               is on the board, gone when it is well away */
            var mx = r.left + r.width / 2, my = r.top + r.height / 2;
            var d = Math.hypot(bx - mx, by - my);
            var o = Math.max(0, Math.min(1, 1.3 - d / (lr * 1.4)));
            shadow.style.opacity = o.toFixed(2);
            shadow.style.setProperty("--sx", (r.left + (mx - bx) * 0.22 + r.width * 0.06).toFixed(1) + "px");
            shadow.style.setProperty("--sy", (r.top - r.height * 0.3 + (my - by) * 0.22).toFixed(1) + "px");
            shadow.style.setProperty("--sw", (r.width * 1.06).toFixed(1) + "px");
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
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };
    if (document.readyState === "loading")
      document.addEventListener("DOMContentLoaded", torch);
    else torch();
  } catch (e) { /* the beam stays in its CSS position */ }
  /* 5. Day/night symbol on the home-page sign: works the theme's own
     palette switch, so it gets the same circular reveal. */
  try {
    var dn = function () {
      var b = document.querySelector(".mc-daynight");
      if (!b) return;
      b.hidden = false;
      /* Home page: always opens in day. Only this moon/sun symbol on the
         sign switches it, for this visit only; the stored site-wide
         choice (used on every other page) is left alone. */
      if (document.body.classList.contains("has-masthead")) {
        var want = "default";
        var body = document.body;
        var keep = function () {
          if (body.getAttribute("data-md-color-scheme") !== want)
            body.setAttribute("data-md-color-scheme", want);
        };
        keep();
        new MutationObserver(keep).observe(body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
        b.addEventListener("click", function (ev) {
          var flip = function () { want = want === "default" ? "slate" : "default"; keep(); };
          if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) { flip(); return; }
          var r0 = b.getBoundingClientRect();
          var x = r0.left + r0.width / 2, y = r0.top + r0.height / 2;
          var rr = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
          document.documentElement.classList.add("vt-theme");
          var t = document.startViewTransition(flip);
          t.ready.then(function () {
            document.documentElement.animate(
              { clipPath: ["circle(0px at " + x + "px " + y + "px)", "circle(" + rr + "px at " + x + "px " + y + "px)"] },
              { duration: 380, easing: "ease-in-out", pseudoElement: "::view-transition-new(root)" });
          }).catch(function () {});
          t.finished.finally(function () { document.documentElement.classList.remove("vt-theme"); });
        });
        return;
      }
      b.addEventListener("click", function () {
        var labels = document.querySelectorAll("label[for^='__palette']");
        for (var i = 0; i < labels.length; i++) {
          if (labels[i].offsetParent !== null || getComputedStyle(labels[i]).display !== "none") {
            labels[i].click();
            return;
          }
        }
      });
    };
    if (document.readyState === "loading")
      document.addEventListener("DOMContentLoaded", dn);
    else dn();
  } catch (e) { /* the header switch still works */ }
  /* 5. Home page: the top bar shows only while the pointer moves.
     It fades out after 2.5 s without pointer movement, and fades back
     in 1 s after the pointer starts moving (CSS transition delay). It stays while
     the pointer is over the bar or something in it has keyboard focus
     (so Tab still reaches it), and a tap shows it on touch screens. */
  try {
    var bar = function () {
      if (!document.body.classList.contains("has-masthead")) return;
      var header = document.querySelector(".md-header");
      if (!header) return;
      var timer = null;
      var hide = function () {
        if (header.matches(":hover") || header.contains(document.activeElement)) {
          timer = setTimeout(hide, 2500);
          return;
        }
        document.body.classList.add("mc-idle");
      };
      var wake = function () {
        document.body.classList.remove("mc-idle");
        clearTimeout(timer);
        timer = setTimeout(hide, 2500);
      };
      ["pointermove", "pointerdown", "keydown", "focusin"].forEach(function (t) {
        document.addEventListener(t, wake, { passive: true });
      });
      wake();
    };
    if (document.readyState === "loading")
      document.addEventListener("DOMContentLoaded", bar);
    else bar();
  } catch (e) { /* the bar stays visible */ }
})();

/* 6. Home page: the sign is part of the photo. The cover photo (1600 x
   1200, object-fit: cover) moves and scales when the window changes
   size. .mc-scene is a 1600 x 1200 layer; move and scale it the same
   way, so the sign (placed in photo pixels) never moves or changes
   size against the land. */
(function () {
  try {
    var place = function () {
      var body = document.body;
      if (!body || !body.classList.contains("has-masthead")) return;
      var img = document.querySelector(".masthead img");
      var scene = document.querySelector(".mc-scene");
      if (!img || !scene) return;
      var r = img.getBoundingClientRect();
      if (!r.width || !r.height) return;
      /* photo px are px of the 1600 x 1200 original (naturalWidth is no
         use here, as srcset changes it with the window) */
      var iw = 1600, ih = 1200;
      var s = Math.max(r.width / iw, r.height / ih);
      var pos = getComputedStyle(img).objectPosition.split(" ");
      var fx = (parseFloat(pos[0]) || 50) / 100, fy = (parseFloat(pos[1]) || 50) / 100;
      var ox = r.left + (r.width - iw * s) * fx, oy = r.top + (r.height - ih * s) * fy;
      scene.style.setProperty("--ox", ox.toFixed(2) + "px");
      scene.style.setProperty("--oy", oy.toFixed(2) + "px");
      scene.style.setProperty("--s", s.toFixed(5));
      /* the theme makes the root font bigger on wide screens; the sign is
         sized in rem, so undo that here (20 px is the base size) */
      var rf = 20 / (parseFloat(getComputedStyle(document.documentElement).fontSize) || 20);
      scene.style.setProperty("--rf", rf.toFixed(4));
    };
    if (document.readyState === "loading")
      document.addEventListener("DOMContentLoaded", place);
    else place();
    window.addEventListener("resize", place, { passive: true });
    window.addEventListener("load", place);
    if (window.ResizeObserver) {
      var im = document.querySelector(".masthead img");
      if (im) new ResizeObserver(place).observe(im);
    }
  } catch (e) { /* CSS fallback position */ }
})();
