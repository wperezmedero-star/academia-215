/*
 * Academia 2-15 — Entrenamientos temáticos de 30 preguntas.
 * Usa exclusivamente preguntas y términos ya existentes en L.
 */
(function () {
  "use strict";

  const TOTAL = 30;
  const DURATION_SECONDS = 36 * 60;
  let session = null;
  let timerId = null;

  const MODES = {
    terms: {
      title: "Términos",
      subtitle: "Definiciones, nombres técnicos y completar conceptos.",
      icon: "T",
      tone: "blue",
    },
    concepts: {
      title: "Conceptos",
      subtitle: "Comprensión, aplicación y diferencias fundamentales.",
      icon: "C",
      tone: "violet",
    },
    vocabulary: {
      title: "Vocabulario",
      subtitle: "Relaciona cada término del glosario con su definición.",
      icon: "V",
      tone: "cyan",
    },
    regulation: {
      title: "Regulación",
      subtitle: "Leyes, licencias, prácticas y reglas de Florida.",
      icon: "R",
      tone: "gold",
    },
    statutes: {
      title: "Estatutos de Florida",
      subtitle: "Preguntas concentradas de las leyes estatales del examen 2-15.",
      icon: "FL",
      tone: "emerald",
    },
  };

  function lessons() {
    try {
      return typeof L !== "undefined" && Array.isArray(L) ? L : [];
    } catch (error) {
      return [];
    }
  }

  function randomize(items) {
    const copy = items.slice();
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      const held = copy[index];
      copy[index] = copy[randomIndex];
      copy[randomIndex] = held;
    }
    return copy;
  }

  function uniqueQuestions(items) {
    const seen = new Set();
    return items.filter(function (item) {
      const key = String(item.q || "").trim().toLowerCase();
      if (!key || seen.has(key) || !Array.isArray(item.o) || item.o.length < 2) return false;
      seen.add(key);
      return Number.isInteger(item.a) && item.a >= 0 && item.a < item.o.length;
    });
  }

  function allQuestions() {
    return uniqueQuestions(
      lessons().flatMap(function (lesson, lessonIndex) {
        return (lesson.questions || []).map(function (question) {
          return Object.assign({}, question, { lessonIndex: lessonIndex });
        });
      }),
    );
  }

  function isRegulation(question) {
    if (question.lessonIndex === 18 || question.lessonIndex === 19) return true;
    return /(florida|ley\b|regulaci[oó]n|licencia|licenciado|agente|cfo\b|dfs\b|oir\b|naic\b|ilegal|pr[aá]ctica desleal|rebating|twisting|churning|fondo de garant[ií]a|estatuto|departamento de servicios financieros)/i.test(
      [question.q, question.e].join(" "),
    );
  }

  function isFloridaStatute(question) {
    if (question.lessonIndex === 18 || question.lessonIndex === 19) return true;
    return /(estatuto|florida statute|ley(?:es)? (?:de|en) florida|c[oó]digo de seguros de florida|dfs\b|oir\b|flahiga|departamento de servicios financieros)/i.test(
      [question.q, question.e].join(" "),
    );
  }

  function isTermQuestion(question) {
    return /(___|glosario|se define|significa|se llama|t[eé]rmino|nombre recibe|conoce como|\/|en ingl[eé]s|cu[aá]l describe)/i.test(
      question.q,
    );
  }

  function takeThirty(primary, fallback) {
    const merged = uniqueQuestions(primary.concat(fallback || []));
    return randomize(merged).slice(0, TOTAL);
  }

  function vocabularyQuestions() {
    const entries = [];
    const seen = new Set();
    lessons().forEach(function (lesson, lessonIndex) {
      (lesson.terms || []).forEach(function (entry) {
        if (!Array.isArray(entry) || entry.length < 2) return;
        const term = String(entry[0] || "").trim();
        const definition = String(entry[1] || "").trim();
        const key = term.toLowerCase();
        if (!term || !definition || seen.has(key)) return;
        seen.add(key);
        entries.push({ term: term, definition: definition, lessonIndex: lessonIndex });
      });
    });

    return randomize(entries)
      .slice(0, TOTAL)
      .map(function (entry) {
        const distractors = randomize(
          entries.filter(function (candidate) {
            return candidate.term !== entry.term && candidate.definition !== entry.definition;
          }),
        )
          .slice(0, 3)
          .map(function (candidate) {
            return candidate.definition;
          });
        const options = randomize([entry.definition].concat(distractors));
        return {
          q: "¿Qué definición corresponde a “" + entry.term + "”?",
          o: options,
          a: options.indexOf(entry.definition),
          e: entry.term + ": " + entry.definition,
          lessonIndex: entry.lessonIndex,
        };
      });
  }

  function buildBank(mode) {
    const questions = allQuestions();
    const regulation = questions.filter(isRegulation);
    const nonRegulation = questions.filter(function (question) {
      return !isRegulation(question);
    });

    if (mode === "vocabulary") return vocabularyQuestions();
    if (mode === "regulation") return takeThirty(regulation, questions);
    if (mode === "statutes") {
      return takeThirty(questions.filter(isFloridaStatute), regulation);
    }
    if (mode === "terms") {
      return takeThirty(
        nonRegulation.filter(isTermQuestion),
        nonRegulation,
      );
    }
    return takeThirty(
      nonRegulation.filter(function (question) {
        return !isTermQuestion(question);
      }),
      nonRegulation,
    );
  }

  function formatTime(seconds) {
    const minutes = Math.floor(Math.max(0, seconds) / 60);
    const remainder = Math.max(0, seconds) % 60;
    return String(minutes).padStart(2, "0") + ":" + String(remainder).padStart(2, "0");
  }

  function stopTimer() {
    if (timerId) window.clearInterval(timerId);
    timerId = null;
  }

  function hideTraining() {
    const section = document.getElementById("training-30");
    if (section) section.classList.add("hidden");
    stopTimer();
    session = null;
  }

  function showOnlyTraining() {
    document.querySelectorAll(".wrap > section").forEach(function (section) {
      section.classList.add("hidden");
    });
    document.getElementById("training-30").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startTimer() {
    stopTimer();
    timerId = window.setInterval(function () {
      if (!session) return;
      session.remaining -= 1;
      const clock = document.getElementById("training-clock");
      if (clock) {
        clock.textContent = formatTime(session.remaining);
        clock.dataset.urgency =
          session.remaining <= 300 ? "red" : session.remaining <= 900 ? "amber" : "green";
      }
      if (session.remaining <= 0) finishTraining(true);
    }, 1000);
  }

  function updateScore() {
    if (!session) return;
    document.getElementById("training-correct").textContent = String(session.correct);
    document.getElementById("training-wrong").textContent = String(session.wrong);
    document.getElementById("training-answered").textContent = String(session.index);
    document.getElementById("training-progress-fill").style.width =
      Math.round((session.index / TOTAL) * 100) + "%";
  }

  function renderQuestion() {
    if (!session) return;
    if (session.index >= session.questions.length) {
      finishTraining(false);
      return;
    }

    const question = session.questions[session.index];
    const mode = MODES[session.mode];
    const stage = document.getElementById("training-stage");
    stage.innerHTML =
      '<div class="training-question-meta"><span>' +
      mode.title +
      "</span><strong>Pregunta " +
      (session.index + 1) +
      " de " +
      TOTAL +
      '</strong></div><h3 class="training-question">' +
      escapeHtml(question.q) +
      '</h3><div class="training-options"></div>' +
      '<div class="training-feedback" hidden></div>' +
      '<button type="button" class="training-next" hidden>Siguiente pregunta</button>';

    const options = stage.querySelector(".training-options");
    question.o.forEach(function (option, optionIndex) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "training-option";
      button.innerHTML =
        '<span class="training-letter">' +
        String.fromCharCode(65 + optionIndex) +
        "</span><span>" +
        escapeHtml(option) +
        "</span>";
      button.addEventListener("click", function () {
        answerQuestion(optionIndex);
      });
      options.appendChild(button);
    });
    updateScore();
  }

  function answerQuestion(selectedIndex) {
    if (!session || session.locked) return;
    session.locked = true;
    const question = session.questions[session.index];
    const correct = selectedIndex === question.a;
    if (correct) session.correct += 1;
    else {
      session.wrong += 1;
      session.mistakes.push({
        q: question.q,
        selected: question.o[selectedIndex],
        correct: question.o[question.a],
        explanation: question.e || "",
      });
    }
    session.index += 1;

    document.querySelectorAll(".training-option").forEach(function (button, index) {
      button.disabled = true;
      if (index === question.a) button.classList.add("is-correct");
      if (index === selectedIndex && !correct) button.classList.add("is-wrong");
    });

    const feedback = document.querySelector(".training-feedback");
    feedback.hidden = false;
    feedback.className = "training-feedback " + (correct ? "is-correct" : "is-wrong");
    feedback.innerHTML =
      "<strong>" +
      (correct ? "¡Correcto!" : "Incorrecto") +
      "</strong><p>" +
      escapeHtml(question.e || "La respuesta correcta está señalada en verde.") +
      "</p>";

    const next = document.querySelector(".training-next");
    next.hidden = false;
    next.textContent = session.index >= TOTAL ? "Ver resultado" : "Siguiente pregunta";
    next.addEventListener(
      "click",
      function () {
        session.locked = false;
        renderQuestion();
      },
      { once: true },
    );
    updateScore();
  }

  function finishTraining(expired) {
    if (!session) return;
    stopTimer();
    const completed = session.index;
    const percent = completed ? Math.round((session.correct / completed) * 100) : 0;
    const mode = MODES[session.mode];
    const mistakes = session.mistakes
      .map(function (mistake, index) {
        return (
          '<details class="training-mistake"><summary>' +
          (index + 1) +
          ". " +
          escapeHtml(mistake.q) +
          "</summary><p><b>Tu respuesta:</b> " +
          escapeHtml(mistake.selected) +
          "</p><p><b>Correcta:</b> " +
          escapeHtml(mistake.correct) +
          "</p>" +
          (mistake.explanation
            ? "<p><b>Explicación:</b> " + escapeHtml(mistake.explanation) + "</p>"
            : "") +
          "</details>"
        );
      })
      .join("");

    document.getElementById("training-stage").innerHTML =
      '<div class="training-result-ring" style="--training-score:' +
      percent +
      '"><strong>' +
      percent +
      '%</strong><span>' +
      mode.title +
      '</span></div><h3 class="training-result-title">' +
      (expired ? "Tiempo terminado" : "Entrenamiento completado") +
      '</h3><div class="training-result-stats"><span><b>' +
      session.correct +
      "</b> correctas</span><span><b>" +
      session.wrong +
      "</b> incorrectas</span><span><b>" +
      completed +
      "</b> respondidas</span></div>" +
      (mistakes
        ? '<div class="training-review"><h4>Revisión de errores</h4>' + mistakes + "</div>"
        : '<p class="training-perfect">¡Excelente! No tuviste respuestas incorrectas.</p>') +
      '<div class="training-result-actions"><button type="button" data-training-retry>Repetir bloque</button><button type="button" data-training-home>Volver al inicio</button></div>';

    document.querySelector("[data-training-retry]").addEventListener("click", function () {
      startTraining(session.mode);
    });
    document.querySelector("[data-training-home]").addEventListener("click", returnHome);
  }

  function startTraining(mode) {
    const questions = buildBank(mode);
    if (questions.length < TOTAL) {
      window.alert("No hay suficientes preguntas existentes para formar este bloque.");
      return;
    }
    session = {
      mode: mode,
      questions: questions,
      index: 0,
      correct: 0,
      wrong: 0,
      mistakes: [],
      locked: false,
      remaining: DURATION_SECONDS,
    };
    showOnlyTraining();
    document.getElementById("training-mode-title").textContent =
      "Entrenamiento de " + MODES[mode].title;
    document.getElementById("training-clock").textContent = formatTime(DURATION_SECONDS);
    document.getElementById("training-clock").dataset.urgency = "green";
    renderQuestion();
    startTimer();
  }

  function returnHome() {
    hideTraining();
    if (typeof goHome === "function") goHome();
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function installTrainingModule() {
    const home = document.getElementById("home");
    const wrap = document.querySelector(".wrap");
    if (!home || !wrap || document.getElementById("training-launcher")) return;

    const launcher = document.createElement("div");
    launcher.id = "training-launcher";
    launcher.className = "card training-launcher";
    launcher.innerHTML =
      '<div class="training-launcher-head"><div><span class="training-kicker">ENTRENAMIENTO TEMÁTICO</span><h2>5 retos de 30 preguntas</h2><p>36 minutos por bloque · marcador inmediato · revisión de errores</p></div><span class="training-120">150</span></div><div class="training-mode-grid"></div>';
    const grid = launcher.querySelector(".training-mode-grid");
    Object.keys(MODES).forEach(function (key) {
      const mode = MODES[key];
      const button = document.createElement("button");
      button.type = "button";
      button.className = "training-mode-card";
      button.dataset.tone = mode.tone;
      button.innerHTML =
        '<span class="training-mode-icon">' +
        mode.icon +
        "</span><span><strong>" +
        mode.title +
        "</strong><small>" +
        mode.subtitle +
        "</small></span><em>30</em>";
      button.addEventListener("click", function () {
        startTraining(key);
      });
      grid.appendChild(button);
    });
    const lessonGrid = document.getElementById("grid");
    home.insertBefore(launcher, lessonGrid || null);

    const section = document.createElement("section");
    section.id = "training-30";
    section.className = "hidden";
    section.innerHTML =
      '<div class="card training-shell"><div class="training-topbar"><button type="button" class="training-exit" aria-label="Salir del entrenamiento">← Inicio</button><div><span>RETO 2-15</span><h2 id="training-mode-title">Entrenamiento</h2></div><time id="training-clock" data-urgency="green">36:00</time></div><div class="training-scoreboard"><span>Correctas <b id="training-correct">0</b></span><span>Incorrectas <b id="training-wrong">0</b></span><span>Respondidas <b id="training-answered">0</b>/30</span></div><div class="training-progress"><span id="training-progress-fill"></span></div><div id="training-stage"></div></div>';
    wrap.appendChild(section);
    section.querySelector(".training-exit").addEventListener("click", returnHome);

    document.addEventListener(
      "click",
      function (event) {
        const navigation = event.target.closest("header .nav button");
        if (navigation && session) hideTraining();
      },
      true,
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", installTrainingModule, { once: true });
  } else {
    installTrainingModule();
  }
})();
