/*
 * Academia 2-15 Florida — Modernización visual v1
 * Mejora tema, accesibilidad y presentación. No altera preguntas ni calificación.
 */
(function () {
  "use strict";

  const root = document.documentElement;
  const mediaLight = window.matchMedia("(prefers-color-scheme: light)");
  const mediaReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const THEME_KEY = "ui215-theme-v1";
  const FONT_KEY = "ui215-font-v1";

  function safeGet(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (error) {
      return fallback;
    }
  }

  function safeSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // La apariencia sigue funcionando aunque el navegador bloquee storage.
    }
  }

  function resolvedTheme(mode) {
    return mode === "auto" ? (mediaLight.matches ? "light" : "dark") : mode;
  }

  let themeMode = safeGet(THEME_KEY, "auto");
  if (!["auto", "dark", "light"].includes(themeMode)) themeMode = "auto";
  let fontMode = safeGet(FONT_KEY, "normal");

  function applyPreferences() {
    root.dataset.theme = resolvedTheme(themeMode);
    root.dataset.themeMode = themeMode;
    root.dataset.fontSize = fontMode;

    const themeButton = document.getElementById("ui-theme-toggle");
    if (themeButton) {
      const icon = themeMode === "auto" ? "◐" : themeMode === "dark" ? "☾" : "☀";
      const label =
        themeMode === "auto"
          ? "Tema automático"
          : themeMode === "dark"
            ? "Modo oscuro"
            : "Modo claro";
      themeButton.textContent = icon;
      themeButton.title = label;
      themeButton.setAttribute("aria-label", label + ". Toca para cambiar.");
    }

    const fontButton = document.getElementById("ui-font-toggle");
    if (fontButton) {
      const large = fontMode === "large";
      fontButton.textContent = large ? "A−" : "A+";
      fontButton.title = large ? "Tamaño de texto normal" : "Aumentar texto";
      fontButton.setAttribute(
        "aria-label",
        large ? "Usar tamaño de texto normal" : "Aumentar tamaño del texto",
      );
    }
  }

  function installControls() {
    const nav = document.querySelector("header .nav");
    if (!nav || document.getElementById("ui-theme-toggle")) return;

    const controls = document.createElement("div");
    controls.className = "ui-controls";
    controls.setAttribute("aria-label", "Preferencias visuales");

    const themeButton = document.createElement("button");
    themeButton.id = "ui-theme-toggle";
    themeButton.type = "button";
    themeButton.className = "ui-control";
    themeButton.addEventListener("click", function () {
      const order = ["auto", "dark", "light"];
      themeMode = order[(order.indexOf(themeMode) + 1) % order.length];
      safeSet(THEME_KEY, themeMode);
      applyPreferences();
    });

    const fontButton = document.createElement("button");
    fontButton.id = "ui-font-toggle";
    fontButton.type = "button";
    fontButton.className = "ui-control";
    fontButton.addEventListener("click", function () {
      fontMode = fontMode === "large" ? "normal" : "large";
      safeSet(FONT_KEY, fontMode);
      applyPreferences();
    });

    controls.append(themeButton, fontButton);
    nav.appendChild(controls);
  }

  function updateZenMode() {
    const exam = document.getElementById("simulacro-exam");
    document.body.classList.toggle(
      "exam-zen",
      Boolean(exam && !exam.classList.contains("hidden")),
    );
  }

  function timerSeconds(text) {
    const parts = String(text || "")
      .trim()
      .split(":")
      .map(Number);
    if (parts.some(Number.isNaN)) return null;
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return null;
  }

  function updateTimerUrgency() {
    const timer = document.getElementById("sim-timer");
    if (!timer) return;
    const seconds = timerSeconds(timer.textContent);
    if (seconds === null) return;
    timer.dataset.urgency = seconds <= 600 ? "red" : seconds <= 1800 ? "amber" : "green";
  }

  function installCompetencyRing() {
    const panel = document.getElementById("sim-live-score");
    if (!panel) return null;

    let ring = panel.querySelector(".ui-competency-ring");
    if (!ring) {
      ring = document.createElement("div");
      ring.className = "ui-competency-ring";
      ring.setAttribute("role", "img");
      ring.innerHTML = "<strong>0%</strong><small>Competencia</small>";
      panel.prepend(ring);
    }
    return ring;
  }

  function updateCompetencyRing() {
    const ring = installCompetencyRing();
    const percent = document.getElementById("sim-percent");
    if (!ring || !percent) return;

    const value = Math.max(0, Math.min(100, Number.parseInt(percent.textContent, 10) || 0));
    if (ring.dataset.value === String(value)) return;
    ring.dataset.value = String(value);
    ring.style.setProperty("--ui-score", String(value));
    const label = ring.querySelector("strong");
    if (label) label.textContent = value + "%";
    ring.setAttribute("aria-label", "Anillo de competencia: " + value + " por ciento");
  }

  function installObservers() {
    const exam = document.getElementById("simulacro-exam");
    if (exam) {
      new MutationObserver(updateZenMode).observe(exam, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    const timer = document.getElementById("sim-timer");
    if (timer) {
      new MutationObserver(updateTimerUrgency).observe(timer, {
        childList: true,
        characterData: true,
        subtree: true,
      });
    }

    const scorePanel = document.getElementById("sim-live-score");
    if (scorePanel) {
      new MutationObserver(function () {
        window.requestAnimationFrame(updateCompetencyRing);
      }).observe(scorePanel, {
        childList: true,
        subtree: true,
      });
    }
  }

  function installMicroHaptics() {
    document.addEventListener(
      "click",
      function (event) {
        if (mediaReducedMotion.matches || typeof navigator.vibrate !== "function") return;
        const answer = event.target.closest(".opt, .pk-bank-opt");
        if (answer && !answer.disabled) navigator.vibrate(8);
      },
      { passive: true },
    );
  }

  function decorateLessons() {
    const cards = document.querySelectorAll("#grid .lc");
    cards.forEach(function (card, index) {
      card.dataset.uiIndex = String(index + 1).padStart(2, "0");
      card.style.setProperty("--ui-card-hue", String(188 + ((index * 17) % 112)));
    });
  }

  function syncNavigation() {
    const isVisible = function (id) {
      const element = document.getElementById(id);
      return Boolean(element && !element.classList.contains("hidden"));
    };

    let active = "home";
    if (isVisible("stats")) active = "stats";
    else if (
      isVisible("simulacro-menu") ||
      isVisible("simulacro-exam") ||
      isVisible("simulacro-result") ||
      isVisible("simulacro-history")
    ) {
      active = "simulacro";
    } else if (isVisible("quiz")) {
      active = "mixed";
    }

    document.querySelectorAll("header .nav > .btn").forEach(function (button) {
      const action = button.getAttribute("onclick") || "";
      const matches =
        (active === "home" && action.includes("goHome")) ||
        (active === "stats" && action.includes("showStats")) ||
        (active === "simulacro" && action.includes("startSimulacro")) ||
        (active === "mixed" && action.includes("startMixed"));
      button.dataset.uiActive = matches ? "true" : "false";
      if (matches) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
  }

  function decorateResultRing() {
    const score = document.getElementById("sim-score-big");
    if (!score) return;
    const value = Math.max(0, Math.min(100, Number.parseInt(score.textContent, 10) || 0));
    score.style.setProperty("--ui-result-score", String(value));
  }

  function installUltraInterface() {
    document.body.classList.add("ui-ultra");
    decorateLessons();
    syncNavigation();
    decorateResultRing();

    const grid = document.getElementById("grid");
    if (grid) {
      new MutationObserver(decorateLessons).observe(grid, { childList: true });
    }

    const observedSections = [
      "home",
      "lesson",
      "quiz",
      "flash",
      "result",
      "stats",
      "simulacro-menu",
      "simulacro-exam",
      "simulacro-result",
      "simulacro-history",
    ];
    observedSections.forEach(function (id) {
      const section = document.getElementById(id);
      if (!section) return;
      new MutationObserver(function () {
        syncNavigation();
        if (id === "simulacro-result") decorateResultRing();
      }).observe(section, { attributes: true, attributeFilter: ["class"] });
    });

    const score = document.getElementById("sim-score-big");
    if (score) {
      new MutationObserver(decorateResultRing).observe(score, {
        childList: true,
        characterData: true,
        subtree: true,
      });
    }
  }

  function init() {
    installUltraInterface();
    installControls();
    applyPreferences();
    installCompetencyRing();
    updateCompetencyRing();
    updateTimerUrgency();
    updateZenMode();
    installObservers();
    installMicroHaptics();
  }

  mediaLight.addEventListener?.("change", function () {
    if (themeMode === "auto") applyPreferences();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
