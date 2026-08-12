/*
 * Academia 2-15 — Compuerta de calidad para opciones de respuesta.
 *
 * No cambia preguntas, respuestas correctas ni explicaciones. Su única función
 * es impedir que los modos de examen seleccionen ítems con distractores
 * obviamente descartables, duplicados o desproporcionados.
 */
(function (global) {
  "use strict";

  const VERSION = "1.0.0";
  const WEAK_DISTRACTOR_PATTERNS = [
    /ninguna de las anteriores/i,
    /todas las anteriores/i,
    /no existe/i,
    /sin ning[uú]n requisito/i,
    /comisi[oó]n del agente/i,
    /cuenta bancaria/i,
    /licencia de conducir/i,
    /impuestos? a la propiedad/i,
    /fideicomiso estatal/i,
    /premio en efectivo/i,
    /viaje gratis/i,
    /tarjeta de regalo/i,
    /autom[oó]vil del agente/i,
    /color de la p[oó]liza/i,
    /signo zodiacal/i,
    /equipo deportivo/i,
    /n[uú]mero de tel[eé]fono/i,
    /redes sociales/i,
  ];
  const ABSOLUTE_PATTERN = /\b(?:siempre|nunca|autom[aá]ticamente|necesariamente|sin importar|en todos los casos|bajo ninguna circunstancia)\b/i;

  function text(value) {
    return String(value || "").trim();
  }

  function normalize(value) {
    return text(value)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9%$]+/g, " ")
      .trim();
  }

  function wordCount(value) {
    const normalized = normalize(value);
    return normalized ? normalized.split(/\s+/).length : 0;
  }

  function isStructurallyValid(question) {
    const options = question && question.o;
    return Boolean(
      question && text(question.q) &&
      Array.isArray(options) && options.length === 4 &&
      Number.isInteger(question.a) && question.a >= 0 && question.a < 4 &&
      options.every(function (option) { return Boolean(text(option)); }) &&
      new Set(options.map(normalize)).size === 4
    );
  }

  function evaluate(question) {
    if (!isStructurallyValid(question)) {
      return {
        version: VERSION,
        examReady: false,
        practiceReady: false,
        score: 0,
        reasons: ["estructura inválida o respuesta correcta ambigua"],
      };
    }

    const options = question.o;
    const lengths = options.map(wordCount);
    const correctLength = Math.max(1, lengths[question.a]);
    const shortPeerSet = Math.max.apply(null, lengths) <= 7;
    const wrong = options.map(function (option, index) {
      return { option: option, index: index, length: lengths[index] };
    }).filter(function (entry) { return entry.index !== question.a; });

    let weakCount = 0;
    let absoluteCount = 0;
    let competitiveCount = 0;
    const distractors = wrong.map(function (entry) {
      const weak = WEAK_DISTRACTOR_PATTERNS.some(function (pattern) {
        return pattern.test(entry.option);
      });
      const absolute = ABSOLUTE_PATTERN.test(entry.option);
      const ratio = entry.length / correctLength;
      const balanced = shortPeerSet || (ratio >= 0.42 && ratio <= 2.4);
      const competitive = !weak && !absolute && balanced;
      if (weak) weakCount += 1;
      if (absolute) absoluteCount += 1;
      if (competitive) competitiveCount += 1;
      return {
        index: entry.index,
        weak: weak,
        absolute: absolute,
        balanced: balanced,
        competitive: competitive,
      };
    });

    const lengthRatio = Math.max.apply(null, lengths) / Math.max(1, Math.min.apply(null, lengths));
    const balancedSet = shortPeerSet || lengthRatio <= 3.2;
    const examReady = weakCount === 0 && absoluteCount === 0 &&
      competitiveCount === 3 && balancedSet;
    const practiceReady = weakCount === 0 && absoluteCount <= 1 &&
      competitiveCount >= 2 && balancedSet;
    const score = Math.max(0, Math.min(100,
      25 + (competitiveCount * 20) + (balancedSet ? 10 : 0) -
      (weakCount * 30) - (absoluteCount * 15)
    ));
    const reasons = [];
    if (weakCount) reasons.push("contiene distractores ajenos u obviamente descartables");
    if (absoluteCount) reasons.push("contiene distractores revelados por absolutos");
    if (competitiveCount < 3) reasons.push("no tiene tres distractores competitivos");
    if (!balancedSet) reasons.push("la longitud de las opciones revela la respuesta");

    return {
      version: VERSION,
      examReady: examReady,
      practiceReady: practiceReady,
      score: score,
      reasons: reasons,
      diagnostics: {
        weakCount: weakCount,
        absoluteCount: absoluteCount,
        competitiveCount: competitiveCount,
        lengthRatio: Math.round(lengthRatio * 100) / 100,
        shortPeerSet: shortPeerSet,
        distractors: distractors,
      },
    };
  }

  function filter(items, options) {
    const tier = options && options.tier === "practice" ? "practiceReady" : "examReady";
    return (Array.isArray(items) ? items : []).filter(function (item) {
      return evaluate(item)[tier];
    });
  }

  function report(items) {
    const rows = (Array.isArray(items) ? items : []).map(evaluate);
    return {
      version: VERSION,
      total: rows.length,
      examReady: rows.filter(function (row) { return row.examReady; }).length,
      practiceReady: rows.filter(function (row) { return row.practiceReady; }).length,
      rejected: rows.filter(function (row) { return !row.practiceReady; }).length,
    };
  }

  global.PK_OPTION_QUALITY = {
    version: VERSION,
    evaluate: evaluate,
    filter: filter,
    report: report,
    isExamReady: function (question) { return evaluate(question).examReady; },
    isPracticeReady: function (question) { return evaluate(question).practiceReady; },
  };
})(typeof window !== "undefined" ? window : globalThis);
