import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manualPath = path.join(root, "tmp/audit/manual.txt");
if (!fs.existsSync(manualPath)) {
  throw new Error("Falta tmp/audit/manual.txt; extráelo con pdftotext antes de ejecutar la auditoría.");
}

const context = vm.createContext({ console });
context.window = context;
context.globalThis = context;
const load = (file) => vm.runInContext(
  fs.readFileSync(path.join(root, file), "utf8"),
  context,
  { filename: file },
);

const baseScripts = [
  "pk-synonyms.js", "pk-traps.js", "pk-blueprint.js", "pk-schema.js", "pk-storage.js",
  "pk-data-underwriting.js", "pk-data-life.js", "pk-data-annuities.js", "pk-data-health.js",
  "pk-data-retirement.js", "pk-data-florida.js", "pk-data-medicare.js", "pk-data-ltc.js",
  "pk-data-general.js", "pk-data-nivel1.js", "pk-data-nivel2.js", "pk-data-nivel3.js",
  "pk-data-nivel4.js", "pk-data-nivel5.js", "pk-data-refuerzo.js", "pk-data-disposiciones.js",
  "pk-data-campo.js", "pk-data-killer-hmoppo.js", "pk-data-killer-pilot.js",
];
baseScripts.forEach(load);
load("pk-approved-sources.js");
context.PK_APPROVED_SOURCE_INDEX.sources.forEach((source) => load(source.path));
load("pk-approved-registry.js");
load("pk-loader-runtime.js");

const normalize = (value) => String(value || "")
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9$%]+/g, " ")
  .trim();

const stopWords = new Set(normalize(`
  a al algo ante bajo con contra cual cuando de del desde donde durante e el ella en entre era es esa ese
  esta este esto fue ha hacia hasta hay la las lo los mas me mi no o para pero por porque que quien se si
  sin sobre son su sus te tiene tu un una uno y ya how what when where which who why the an and are as at
  be by for from has have if in into is it its of on or that this to was were will with would insurance
  seguro seguros poliza polizas agente florida afirmacion siguiente correcta respuesta opcion
`).split(" "));

const synonyms = new Map(Object.entries({
  aseguradora: "asegurador", compania: "asegurador", companias: "asegurador", insurer: "asegurador",
  prima: "premium", primas: "premium", premium: "premium",
  asegurado: "insured", asegurada: "insured", insured: "insured",
  beneficiario: "beneficiary", beneficiarios: "beneficiary", beneficiary: "beneficiary",
  anualidad: "annuity", anualidades: "annuity", annuity: "annuity",
  discapacidad: "disability", incapacidad: "disability", disability: "disability",
  suscripcion: "underwriting", suscriptor: "underwriting", underwriting: "underwriting",
  rescate: "surrender", surrender: "surrender",
  deducible: "deductible", deductible: "deductible",
  coseguro: "coinsurance", coinsurance: "coinsurance",
  reclamacion: "claim", reclamaciones: "claim", claim: "claim",
  fallecimiento: "muerte", muerte: "muerte", death: "muerte",
  termino: "term", temporal: "term", term: "term",
  entera: "wholelife", permanente: "wholelife", whole: "wholelife",
  revocable: "revocable", irrevocable: "irrevocable",
}));

function tokens(value) {
  return normalize(value).split(/\s+/).filter((token) => {
    if (!token || stopWords.has(token)) return false;
    return token.length > 2 || /^\d/.test(token) || token.includes("$") || token.includes("%");
  }).map((token) => synonyms.get(token) || token);
}

const manualPages = fs.readFileSync(manualPath, "utf8").split("\f");
const pageTokens = manualPages.map((page) => tokens(page));
const pageTermCounts = pageTokens.map((terms) => {
  const counts = new Map();
  terms.forEach((term) => counts.set(term, (counts.get(term) || 0) + 1));
  return counts;
});
const documentFrequency = new Map();
pageTermCounts.forEach((counts) => {
  counts.forEach((_, term) => documentFrequency.set(term, (documentFrequency.get(term) || 0) + 1));
});
const averagePageLength = pageTokens.reduce((sum, terms) => sum + terms.length, 0) / pageTokens.length;

function bm25(queryTerms, pageIndex) {
  const counts = pageTermCounts[pageIndex];
  const pageLength = pageTokens[pageIndex].length || 1;
  const uniqueQuery = [...new Set(queryTerms)];
  let score = 0;
  uniqueQuery.forEach((term) => {
    const frequency = counts.get(term) || 0;
    if (!frequency) return;
    const df = documentFrequency.get(term) || 0;
    const idf = Math.log(1 + ((manualPages.length - df + 0.5) / (df + 0.5)));
    const numerator = frequency * 2.2;
    const denominator = frequency + 1.2 * (1 - 0.75 + 0.75 * (pageLength / averagePageLength));
    score += idf * (numerator / denominator);
  });
  return score;
}

function bestPages(query, count = 3) {
  const queryTerms = tokens(query);
  return manualPages.map((_, index) => ({ page: index + 1, score: bm25(queryTerms, index) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}

const questions = context.PK_CONCEPTOS_FULL.flatMap((concept) =>
  concept.variantes.map((question, variantIndex) => ({
    id: `${concept.id || concept.concepto || "concept"}:${variantIndex + 1}`,
    conceptId: concept.id || null,
    concept: concept.concepto || concept.concept || concept.id || "",
    area: concept.area || "generales",
    source: concept.source || "pearson_base",
    q: question.q,
    options: question.o,
    answerIndex: question.a,
    correct: question.o[question.a],
    explanation: question.e || question.correcto || "",
  })),
);

const manualNormalized = normalize(manualPages.join(" "));
const currentFactPattern = /(florida|dfs\b|oir\b|estatuto|statute|licencia|nombramiento|continuing education|educaci[oó]n continua|medicare|medicaid|seguro social|social security|kidcare|fpl|fondo de garant|flahiga|plhso|hmo|aca\b|cobra\b|hipaa\b|erisa\b|l[ií]mite legal|d[ií]as h[aá]biles)/i;

const results = questions.map((question) => {
  const query = `${question.concept} ${question.q} ${question.correct} ${question.explanation}`;
  const pages = bestPages(query);
  const correctTokens = [...new Set(tokens(question.correct))];
  const correctInManual = correctTokens.filter((token) => manualNormalized.includes(token)).length;
  const correctCoverage = correctTokens.length ? correctInManual / correctTokens.length : 0;
  const numericFacts = [...new Set((`${question.q} ${question.correct} ${question.explanation}`.match(/\$?\d[\d,.]*(?:%|\s*(?:d[ií]as|meses|a[nñ]os|horas))?/gi) || []).map(normalize))];
  const topText = normalize(pages.map(({ page }) => manualPages[page - 1]).join(" "));
  const missingNumbers = numericFacts.filter((fact) => !topText.includes(fact));
  const optionKeys = question.options.map(normalize);
  const duplicateOptions = optionKeys.length !== new Set(optionKeys).size;
  let classification = "supported";
  if (pages[0].score < 4.5 || correctCoverage < 0.45) classification = "low_evidence";
  if (currentFactPattern.test(query)) classification = classification === "supported" ? "current_fact" : "current_fact_low_evidence";
  if (duplicateOptions || missingNumbers.length >= 3) classification = "manual_review";
  return {
    ...question,
    topPages: pages.map((item) => ({ page: item.page, score: Number(item.score.toFixed(2)) })),
    correctCoverage: Number(correctCoverage.toFixed(2)),
    numericFacts,
    missingNumbers,
    duplicateOptions,
    classification,
  };
});

const classificationCounts = results.reduce((counts, result) => {
  counts[result.classification] = (counts[result.classification] || 0) + 1;
  return counts;
}, {});
const areaCounts = results.reduce((counts, result) => {
  counts[result.area] = (counts[result.area] || 0) + 1;
  return counts;
}, {});

const flagged = results.filter((result) => result.classification !== "supported")
  .sort((a, b) => a.topPages[0].score - b.topPages[0].score);
const verificationMarkers = results.filter((result) =>
  /\[(?:REQUIERE VERIFICACI[ÓO]N|PENDIENTE DE VERIFICAR|POR VERIFICAR|CONFIRMAR CONTRA)[^\]]*\]/i.test(result.explanation),
);

console.log(JSON.stringify({
  manualPages: manualPages.length,
  questions: results.length,
  classificationCounts,
  areaCounts,
  flaggedCount: flagged.length,
  verificationMarkerCount: verificationMarkers.length,
  verificationMarkers,
  flagged,
}, null, 2));
