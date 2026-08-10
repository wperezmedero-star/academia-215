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
  const SOUND_KEY = "ui215-intro-sound-v1";
  const ICONS = {
    home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5"/><path d="M9.5 20v-6h5v6"/>',
    zap: '<path d="m13 2-9 12h7l-1 8 9-12h-7z"/>',
    chart: '<path d="M4 19V9"/><path d="M10 19V5"/><path d="M16 19v-7"/><path d="M22 19H2"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="m15 9 6-6"/><path d="M17 3h4v4"/>',
    clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2"/><path d="M9 9h6M9 13h6M9 17h4"/>',
    arrow: '<path d="m15 18-6-6 6-6"/><path d="M9 12h11"/>',
    pencil: '<path d="m4 20 4.5-1 10-10-3.5-3.5-10 10z"/><path d="m13.5 7 3.5 3.5"/>',
    flame: '<path d="M12 22c4 0 7-3 7-7 0-3-1.5-5.5-4-8 .2 3-1.2 4.2-2.5 5.2.2-4-2-7-5-9 .5 4-3.5 6.2-3.5 11.8 0 4 3.2 7 8 7z"/>',
    cards: '<rect x="6" y="4" width="13" height="16" rx="2"/><path d="m6 7-2 .5A2 2 0 0 0 2.5 10l2.2 8"/><path d="M10 9h5M10 13h5"/>',
    volume: '<path d="M4 10v4h4l5 4V6l-5 4z"/><path d="M17 9a4 4 0 0 1 0 6"/><path d="M19.5 6.5a8 8 0 0 1 0 11"/>',
    shield: '<path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6z"/><path d="m9 12 2 2 4-4"/>',
    book: '<path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22z"/><path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22z"/>',
    scale: '<path d="M12 3v18M7 5h10M5 8l-3 6h6zM19 8l-3 6h6zM8 21h8"/>',
    heart: '<path d="M20.8 5.8a5.5 5.5 0 0 0-7.8 0L12 6.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.4a5.5 5.5 0 0 0 0-7.8z"/><path d="M7 13h3l1.2-3 2 6 1.2-3H18"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    coins: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v5c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 11v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/>',
    building: '<path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6M8 10h.01M12 10h.01M16 10h.01"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
    file: '<path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 13h6M9 17h6"/>',
    brain: '<path d="M9.5 4.5A3 3 0 0 0 5 7a3 3 0 0 0-1 5.8A3.5 3.5 0 0 0 7.5 18H9"/><path d="M14.5 4.5A3 3 0 0 1 19 7a3 3 0 0 1 1 5.8 3.5 3.5 0 0 1-3.5 5.2H15M12 3v18M8 9h4M12 15h4"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
    badge: '<circle cx="12" cy="9" r="6"/><path d="m8 14-2 8 6-3 6 3-2-8"/><path d="m9.5 9 1.6 1.6 3.4-3.4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    moon: '<path d="M20.5 15.5A9 9 0 0 1 8.5 3.5a9 9 0 1 0 12 12z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    auto: '<path d="M12 3a9 9 0 1 0 9 9"/><path d="M12 3v18M12 3a9 9 0 0 1 0 18"/>',
  };
  const LESSON_ICONS = [
    "shield", "scale", "heart", "file", "users", "coins", "building", "heart", "calendar", "file",
    "brain", "layers", "badge", "clock", "shield", "chart", "users", "coins", "calendar", "badge",
  ];

  function iconMarkup(name, className) {
    return (
      '<svg class="' + (className || "ui-icon") +
      '" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" ' +
      'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      (ICONS[name] || ICONS.badge) + "</svg>"
    );
  }

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

  function closeSplash(delay) {
    const splash = document.getElementById("splash");
    if (!splash) return;
    window.setTimeout(function () {
      splash.classList.add("ui-splash-exit");
      window.setTimeout(function () {
        splash.remove();
      }, 650);
    }, delay || 0);
  }

  function playMotivationalTheme() {
    return fetch("academia-215-intro.b64?v=20260724-1")
      .then(function (response) {
        if (!response.ok) throw new Error("No se pudo cargar la introducción");
        return response.text();
      })
      .then(function (encoded) {
        const binary = window.atob(encoded.trim());
        const bytes = new Uint8Array(binary.length);
        for (let index = 0; index < binary.length; index += 1) {
          bytes[index] = binary.charCodeAt(index);
        }

        const source = URL.createObjectURL(new Blob([bytes], { type: "audio/mpeg" }));
        const audio = new Audio(source);
        audio.preload = "auto";
        audio.volume = 0.78;

        return new Promise(function (resolve, reject) {
          function release() {
            URL.revokeObjectURL(source);
          }
          audio.addEventListener(
            "ended",
            function () {
              release();
              resolve();
            },
            { once: true },
          );
          audio.addEventListener(
            "error",
            function () {
              release();
              reject(new Error("No se pudo reproducir la introducción"));
            },
            { once: true },
          );
          audio.play().catch(function (error) {
            release();
            reject(error);
          });
        });
      });
  }

  function installMotivationalSplash() {
    const splash = document.getElementById("splash");
    const card = splash && splash.querySelector(".splash-card");
    if (!splash || !card || card.dataset.uiReady) return;
    card.dataset.uiReady = "true";

    const artwork = document.createElement("div");
    artwork.className = "ui-splash-artwork";
    artwork.setAttribute("aria-hidden", "true");
    artwork.innerHTML = '<span class="ui-artwork-placeholder">' +
      iconMarkup("shield", "ui-icon") +
      "</span>";
    const originalIcon = card.querySelector(".splash-icon");
    if (originalIcon) originalIcon.replaceWith(artwork);

    fetch("academia-215-motivacion.b64?v=20260724-1")
      .then(function (response) {
        if (!response.ok) throw new Error("Ilustración no disponible");
        return response.text();
      })
      .then(function (encoded) {
        const image = new Image();
        image.alt = "";
        image.decoding = "async";
        image.src = "data:image/webp;base64," + encoded.trim();
        image.addEventListener(
          "load",
          function () {
            artwork.replaceChildren(image);
            artwork.classList.add("ui-artwork-ready");
          },
          { once: true },
        );
      })
      .catch(function () {
        // El escudo vectorial permanece como alternativa si la imagen no carga.
      });

    const muted = safeGet(SOUND_KEY, "on") === "off";
    const phrase = document.createElement("div");
    phrase.className = "ui-splash-phrase";
    phrase.textContent = "Entrena. Avanza. Aprueba.";

    const actions = document.createElement("div");
    actions.className = "ui-splash-actions";
    actions.innerHTML =
      '<button type="button" class="ui-splash-start">' +
      iconMarkup("zap", "ui-icon") +
      "<span>" + (muted ? "Entrar" : "Comenzar entrenamiento") + "</span></button>" +
      '<button type="button" class="ui-splash-sound" aria-pressed="' + String(muted) + '">' +
      iconMarkup(muted ? "volume" : "volume", "ui-icon") +
      "<span>" + (muted ? "Activar sonido" : "Silenciar") + "</span></button>";

    card.append(phrase, actions);
    const loader = card.querySelector(".splash-loader");
    if (loader) loader.classList.add("ui-waiting");

    actions.querySelector(".ui-splash-sound").addEventListener("click", function () {
      const isMuted = safeGet(SOUND_KEY, "on") === "off";
      safeSet(SOUND_KEY, isMuted ? "on" : "off");
      this.setAttribute("aria-pressed", String(!isMuted));
      this.querySelector("span").textContent = isMuted ? "Silenciar" : "Activar sonido";
      actions.querySelector(".ui-splash-start span").textContent =
        isMuted ? "Comenzar entrenamiento" : "Entrar";
    });

    actions.querySelector(".ui-splash-start").addEventListener("click", function () {
      if (card.classList.contains("ui-intro-running")) return;
      const soundOff = safeGet(SOUND_KEY, "on") === "off";
      if (soundOff) {
        closeSplash(0);
        return;
      }

      card.classList.add("ui-intro-running");
      this.querySelector("span").textContent = "Preparando tu reto…";
      actions.querySelector(".ui-splash-sound").hidden = true;
      if (loader) loader.classList.remove("ui-waiting");
      window.setTimeout(function () {
        phrase.classList.add("ui-visible");
      }, 5300);

      playMotivationalTheme()
        .then(function () {
          closeSplash(180);
        })
        .catch(function () {
          closeSplash(250);
        });
    });
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
      const icon = themeMode === "auto" ? "auto" : themeMode === "dark" ? "moon" : "sun";
      const label =
        themeMode === "auto"
          ? "Tema automático"
          : themeMode === "dark"
            ? "Modo oscuro"
            : "Modo claro";
      themeButton.innerHTML = iconMarkup(icon, "ui-icon");
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
        queueMicrotask(updateCompetencyRing);
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
      if (!card.querySelector(".ui-lesson-icon")) {
        const mark = document.createElement("span");
        mark.className = "ui-lesson-icon";
        mark.innerHTML = iconMarkup(LESSON_ICONS[index % LESSON_ICONS.length], "ui-icon");
        card.prepend(mark);
      }
    });
  }

  function cleanIconLabel(text) {
    return String(text || "")
      .replace(/^[\s←🏠⚡📊🎯📋✏️🔥🃏🔊📚🛡️⏱️🧠🧩✨]+/u, "")
      .trim();
  }

  function decorateVectorIcons() {
    const actionIcons = [
      ["training-launcher", "brain"],
      ["startSimulacro", "target"],
      ["startMixed", "zap"],
      ["showStats", "chart"],
      ["showPlan", "clipboard"],
      ["startFC", "cards"],
      ["speak", "volume"],
      ["startLQ(true)", "flame"],
      ["startLQ(false)", "pencil"],
      ["goHome", "home"],
    ];

    document.querySelectorAll("button").forEach(function (button) {
      if (button.querySelector(".ui-icon")) return;
      const action = button.getAttribute("onclick") || "";
      const match = actionIcons.find(function (entry) {
        return action.includes(entry[0]);
      });
      if (!match) return;
      const label = cleanIconLabel(button.textContent);
      button.textContent = label;
      button.insertAdjacentHTML("afterbegin", iconMarkup(match[1], "ui-icon"));
      button.classList.add("ui-icon-button");
    });

    const title = document.querySelector("header h1");
    if (title && !title.querySelector(".ui-icon")) {
      title.textContent = cleanIconLabel(title.textContent);
      title.insertAdjacentHTML("afterbegin", iconMarkup("book", "ui-icon"));
    }

    const splash = document.querySelector(".splash-icon");
    if (splash) splash.innerHTML = iconMarkup("shield", "ui-icon ui-splash-vector");

    document.querySelectorAll("#plan .box h4").forEach(function (heading, index) {
      if (heading.querySelector(".ui-icon")) return;
      const names = ["clock", "target", "brain"];
      heading.textContent = cleanIconLabel(heading.textContent);
      heading.insertAdjacentHTML("afterbegin", iconMarkup(names[index] || "badge", "ui-icon"));
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
        (active === "home" && action.trim() === "goHome()") ||
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
    decorateVectorIcons();
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
    installMotivationalSplash();
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
