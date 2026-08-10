/* Academia 2-15 Pro — resumen no destructivo de actividad local. */
(function () {
  "use strict";

  function readArray(key) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "[]");
      return Array.isArray(value) ? value : [];
    } catch (error) {
      return [];
    }
  }

  function percent(value) {
    const number = Number(value);
    return Number.isFinite(number) ? Math.max(0, Math.min(100, Math.round(number))) : 0;
  }

  function quizBest(attempts) {
    return attempts.reduce(function (best, attempt) {
      if (Number.isFinite(Number(attempt.p))) return Math.max(best, percent(attempt.p));
      return best;
    }, 0);
  }

  function simulationBest(attempts) {
    return attempts.reduce(function (best, attempt) {
      if (Number.isFinite(Number(attempt.pct))) return Math.max(best, percent(attempt.pct));
      if (Number(attempt.total) > 0) {
        return Math.max(best, percent((Number(attempt.correct) / Number(attempt.total)) * 100));
      }
      return best;
    }, 0);
  }

  function statCard(label, value, description, tone) {
    return (
      '<article class="pro-stat-card" data-tone="' + tone + '">' +
      "<span>" + label + "</span>" +
      "<strong>" + value + "</strong>" +
      "<small>" + description + "</small>" +
      "</article>"
    );
  }

  function renderOverview() {
    const target = document.getElementById("pro-progress-overview");
    if (!target) return;

    const quizzes = readArray("a215v2");
    const simulations = readArray("sim215");
    const best = Math.max(quizBest(quizzes), simulationBest(simulations));
    const passed = simulations.filter(function (attempt) {
      return attempt.passed === true || Number(attempt.pct) >= 70;
    }).length;

    target.innerHTML =
      statCard("SESIONES", String(quizzes.length), "Quizzes guardados en este dispositivo", "blue") +
      statCard("MEJOR MARCA", best ? best + "%" : "—", best ? "Tu resultado más alto conservado" : "Aparecerá después de tu primer quiz", "violet") +
      statCard("SIMULACROS", String(simulations.length), passed ? passed + " con 70% o más" : "Historial oficial conservado", "gold") +
      statCard("ACCESO", "Fundador", "Sin bloqueos durante esta modernización", "green");
  }

  function watchHome() {
    const home = document.getElementById("home");
    if (!home) return;
    new MutationObserver(function () {
      if (!home.classList.contains("hidden")) renderOverview();
    }).observe(home, { attributes: true, attributeFilter: ["class"] });
  }

  function init() {
    document.body.classList.add("academia-pro-ready");
    renderOverview();
    watchHome();
    window.addEventListener("storage", renderOverview);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
