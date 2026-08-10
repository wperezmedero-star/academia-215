(function () {
  "use strict";

  const ROOT_ID = "a215-interaction-fx";
  const SEARCH_DELAY = 240;
  const SEARCH_SELECTOR = [
    'input[type="search"]',
    '[role="searchbox"]',
    '[data-search]',
    'input[placeholder*="buscar" i]',
    'input[placeholder*="search" i]'
  ].join(",");

  let root;
  let lastEffectAt = Number.NEGATIVE_INFINITY;
  let searchTimer;

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function getRoot() {
    if (root && root.isConnected) return root;
    root = document.getElementById(ROOT_ID);
    if (!root) {
      root = document.createElement("div");
      root.id = ROOT_ID;
      root.setAttribute("aria-hidden", "true");
      document.body.appendChild(root);
    }
    return root;
  }

  function pointFromEvent(event, target) {
    if (Number.isFinite(event.clientX) && Number.isFinite(event.clientY) &&
        (event.clientX !== 0 || event.clientY !== 0)) {
      return { x: event.clientX, y: event.clientY };
    }

    const rect = target && target.getBoundingClientRect ? target.getBoundingClientRect() : null;
    if (rect) {
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    }

    return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  }

  function isCompactInteraction(target) {
    return Boolean(target && target.closest(
      '#quiz, #simulacro, #training-session, .options, .answers, .question-card, [data-quiz], [data-answer]'
    ));
  }

  function addRipple(container, x, y) {
    const ripple = document.createElement("span");
    ripple.className = "a215-fx-ripple";
    ripple.style.setProperty("--a215-fx-x", x + "px");
    ripple.style.setProperty("--a215-fx-y", y + "px");
    container.appendChild(ripple);
    window.setTimeout(() => ripple.remove(), 560);
  }

  function addSparks(container, x, y) {
    const vectors = [[-18, -15], [22, -9], [-8, 24]];
    vectors.forEach(function (vector, index) {
      const spark = document.createElement("span");
      spark.className = "a215-fx-spark";
      spark.style.setProperty("--a215-fx-x", x + "px");
      spark.style.setProperty("--a215-fx-y", y + "px");
      spark.style.setProperty("--a215-spark-x", vector[0] + "px");
      spark.style.setProperty("--a215-spark-y", vector[1] + "px");
      spark.style.animationDelay = index * 18 + "ms";
      container.appendChild(spark);
      window.setTimeout(() => spark.remove(), 560);
    });
  }

  function destinationFromPoint(x, y, compact) {
    const viewportWidth = Math.max(window.innerWidth, 320);
    const viewportHeight = Math.max(window.innerHeight, 480);
    const horizontalDirection = x < viewportWidth * .56 ? 1 : -1;
    const verticalDirection = y > viewportHeight * .52 ? -1 : 1;
    const desiredX = compact
      ? clamp(viewportWidth * .22, 120, 260)
      : clamp(viewportWidth * .42, 220, 640);
    const desiredY = compact
      ? clamp(viewportHeight * .1, 52, 118)
      : clamp(viewportHeight * .22, 105, 285);

    const availableX = horizontalDirection > 0 ? viewportWidth - x - 22 : x - 22;
    const availableY = verticalDirection > 0 ? viewportHeight - y - 22 : y - 22;
    const dx = horizontalDirection * Math.max(72, Math.min(desiredX, availableX));
    const dy = verticalDirection * Math.max(42, Math.min(desiredY, availableY));

    return { dx: dx, dy: dy };
  }

  function launchEffect(x, y, options) {
    const settings = options || {};
    const now = performance.now();
    if (!settings.force && now - lastEffectAt < 90) return;
    lastEffectAt = now;

    const container = getRoot();
    addRipple(container, x, y);

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const compact = Boolean(settings.compact);
    const destination = destinationFromPoint(x, y, compact);
    const length = Math.hypot(destination.dx, destination.dy);
    const angle = Math.atan2(destination.dy, destination.dx) * 180 / Math.PI;
    const beam = document.createElement("span");
    beam.className = "a215-fx-beam" +
      (compact ? " is-compact" : "") +
      (settings.search ? " is-search" : "");
    beam.style.setProperty("--a215-fx-x", x + "px");
    beam.style.setProperty("--a215-fx-y", (y - 17) + "px");
    beam.style.setProperty("--a215-fx-length", length + "px");
    beam.style.setProperty("--a215-fx-angle", angle + "deg");

    const orb = document.createElement("span");
    orb.className = "a215-fx-orb";
    beam.appendChild(orb);
    container.appendChild(beam);
    addSparks(container, x, y);

    window.setTimeout(() => beam.remove(), 720);
  }

  function onClick(event) {
    if (event.button !== undefined && event.button !== 0) return;
    const target = event.target instanceof Element ? event.target : null;
    if (target && target.closest("[data-no-interaction-fx]")) return;

    const point = pointFromEvent(event, target);
    launchEffect(point.x, point.y, {
      compact: isCompactInteraction(target)
    });

    if (target && target.closest("button, a, [role='button'], input, select") &&
        navigator.vibrate) {
      navigator.vibrate(7);
    }
  }

  function onSearchInput(event) {
    const target = event.target instanceof Element ? event.target : null;
    if (!target || !target.matches(SEARCH_SELECTOR)) return;
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(function () {
      const rect = target.getBoundingClientRect();
      launchEffect(rect.right - Math.min(28, rect.width / 4), rect.top + rect.height / 2, {
        search: true,
        force: true
      });
    }, SEARCH_DELAY);
  }

  function init() {
    getRoot();
    document.addEventListener("click", onClick, true);
    document.addEventListener("input", onSearchInput, true);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}());
