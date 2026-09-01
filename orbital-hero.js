/* Academia 2-15 — órbita 3D con accesos reales, sin dependencias externas. */
(function () {
  "use strict";

  const system = document.querySelector("[data-orbital-system]");
  if (!system) return;

  const nodes = Array.from(system.querySelectorAll("[data-orbital-node]"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0;
  let start = performance.now();
  let elapsedBeforePause = 0;
  let visible = true;
  let userPaused = false;
  let width = 0;
  let height = 0;

  function dimensions() {
    const rect = system.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
  }

  function positionNodes(time, stationary) {
    const elapsed = stationary ? 0 : elapsedBeforePause + (time - start) / 1000;
    const radiusX = Math.max(102, Math.min(width * .37, 205));
    const radiusY = Math.max(72, Math.min(height * .3, 116));
    nodes.forEach(function (node, index) {
      const phase = (index / nodes.length) * Math.PI * 2 - Math.PI / 2;
      const angle = phase + elapsed * .34;
      const x = Math.cos(angle) * radiusX;
      const y = Math.sin(angle) * radiusY;
      const depth = (Math.sin(angle) + 1) / 2;
      const scale = .72 + depth * .34;
      const opacity = .5 + depth * .5;
      const blur = (1 - depth) * .75;

      node.style.transform =
        "translate(-50%, -50%) translate3d(" +
        x.toFixed(2) + "px," + y.toFixed(2) + "px,0) scale(" + scale.toFixed(3) + ")";
      node.style.opacity = opacity.toFixed(3);
      node.style.filter = "blur(" + blur.toFixed(2) + "px) brightness(" + (.82 + depth * .28).toFixed(2) + ")";
      node.style.zIndex = String(3 + Math.round(depth * 7));
    });
  }

  function tick(time) {
    frame = 0;
    if (!visible || document.hidden || reduceMotion.matches || userPaused) return;
    positionNodes(time, false);
    frame = requestAnimationFrame(tick);
  }

  function resume() {
    if (frame || !visible || document.hidden || reduceMotion.matches || userPaused) return;
    start = performance.now();
    frame = requestAnimationFrame(tick);
  }

  function pause() {
    if (frame) {
      elapsedBeforePause += Math.max(0, performance.now() - start) / 1000;
      cancelAnimationFrame(frame);
    }
    frame = 0;
  }

  function scrollHomeTarget(id) {
    if (typeof window.goHome === "function") window.goHome();
    window.setTimeout(function () {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
    }, 60);
  }

  function activate(action) {
    if (action === "mixed" && typeof window.startMixed === "function") window.startMixed();
    if (action === "lessons") scrollHomeTarget("grid");
    if (action === "killer") window.location.href = "modo-trampa.html";
    if (action === "simulacro" && typeof window.startSimulacro === "function") window.startSimulacro();
    if (action === "progress" && typeof window.showStats === "function") window.showStats();
  }

  system.addEventListener("click", function (event) {
    const control = event.target.closest("[data-orbital-action]");
    if (!control || !system.contains(control)) return;
    activate(control.dataset.orbitalAction);
  });

  system.addEventListener("pointerenter", function (event) {
    if (event.pointerType === "touch") return;
    userPaused = true;
    pause();
  });

  system.addEventListener("pointerleave", function (event) {
    if (event.pointerType === "touch") return;
    userPaused = false;
    resume();
  });

  system.addEventListener("focusin", function () {
    userPaused = true;
    pause();
  });

  system.addEventListener("focusout", function () {
    userPaused = false;
    resume();
  });

  dimensions();
  positionNodes(performance.now(), true);

  if ("ResizeObserver" in window) {
    new ResizeObserver(function () {
      dimensions();
      if (reduceMotion.matches) positionNodes(performance.now(), true);
    }).observe(system);
  } else {
    window.addEventListener("resize", function () {
      dimensions();
      if (reduceMotion.matches) positionNodes(performance.now(), true);
    }, { passive: true });
  }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0] ? entries[0].isIntersecting : true;
      if (visible) resume(); else pause();
    }, { rootMargin: "120px" }).observe(system);
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) pause(); else resume();
  });

  reduceMotion.addEventListener("change", function () {
    pause();
    positionNodes(performance.now(), true);
    resume();
  });

  resume();
}());
