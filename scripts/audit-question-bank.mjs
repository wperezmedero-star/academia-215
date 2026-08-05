import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const context = vm.createContext({ console });
context.window = context;
context.globalThis = context;

function load(file) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  vm.runInContext(source, context, { filename: file });
}

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
  .replace(/[^a-z0-9]+/g, " ")
  .trim();

const pearson = context.PK_CONCEPTOS_FULL.flatMap((concept) =>
  concept.variantes.map((question) => ({ ...question, area: concept.area })),
);

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const dataStart = html.indexOf("const L=[");
const dataEnd = html.indexOf("let cur=null", dataStart);
if (dataStart < 0 || dataEnd < 0) throw new Error("No se pudo aislar el banco de Academia en index.html");
vm.runInContext(`${html.slice(dataStart, dataEnd)}\nthis.__ACADEMIA_L__=L;`, context, {
  filename: "index.html#question-bank",
});
const academia = context.__ACADEMIA_L__.flatMap((lesson) => lesson.questions || []);

const failures = [];
const validate = (questions, label) => {
  questions.forEach((question, index) => {
    if (!question || typeof question.q !== "string" || !question.q.trim()) {
      failures.push(`${label}[${index}]: texto vacío`);
    }
    if (!Array.isArray(question.o) || question.o.length < 2) {
      failures.push(`${label}[${index}]: opciones inválidas`);
    }
    if (!Number.isInteger(question.a) || question.a < 0 || question.a >= (question.o || []).length) {
      failures.push(`${label}[${index}]: respuesta correcta inválida`);
    }
  });
};

validate(pearson, "Pearson");
validate(academia, "Academia");

const pearsonKeys = pearson.map((question) => normalize(question.q));
const uniquePearson = new Set(pearsonKeys);
if (pearson.length < 1000) failures.push(`Pearson tiene ${pearson.length} preguntas; se requieren al menos 1000`);
if (uniquePearson.size !== pearson.length) {
  failures.push(`Pearson conserva ${pearson.length - uniquePearson.size} preguntas duplicadas`);
}
if (context.PK_LOADER_STATUS.loadedSources !== context.PK_LOADER_STATUS.registeredSources) {
  failures.push(`Fuentes cargadas: ${context.PK_LOADER_STATUS.loadedSources}/${context.PK_LOADER_STATUS.registeredSources}`);
}

const combined = [];
const combinedKeys = new Set();
for (const question of [...academia, ...pearson]) {
  const key = normalize(question.q);
  if (!key || combinedKeys.has(key)) continue;
  combinedKeys.add(key);
  combined.push(question);
}

const ceQuestions = academia.filter((question) => /educaci[oó]n continua|continuing education|\bce\b/i.test(question.q));
for (const question of ceQuestions) {
  const correct = String(question.o[question.a] || "");
  if (/5\s+horas?\s+de\s+[eé]tica|5\s+de\s+[eé]tica/i.test(correct)) {
    failures.push(`Regla antigua de CE marcada como correcta: ${question.q}`);
  }
}

// Ejecuta la implementación real de rotación del simulacro contra todo el
// banco unificado. Diez bloques de 150 deben cubrir 1,500 preguntas sin repetir;
// el bloque 11 debe consumir las 29 restantes antes de comenzar el ciclo nuevo.
const storage = new Map();
context.localStorage = {
  getItem: (key) => storage.has(key) ? storage.get(key) : null,
  setItem: (key, value) => storage.set(key, String(value)),
  removeItem: (key) => storage.delete(key),
};
const simulacroSource = fs.readFileSync(path.join(root, "simulacro-upgrade.js"), "utf8");
const rotationStart = simulacroSource.indexOf("  function normalizeText");
const rotationEnd = simulacroSource.indexOf("  function ensureLiveScorePanel", rotationStart);
if (rotationStart < 0 || rotationEnd < 0) throw new Error("No se pudo aislar la rotación del simulacro");
vm.runInContext(
  `${simulacroSource.slice(rotationStart, rotationEnd)}\nthis.__SELECT_ROTATING__=selectRotating;`,
  context,
  { filename: "simulacro-upgrade.js#rotation" },
);

const rotationPool = combined.map((question) => ({
  q: question.q,
  o: [...question.o],
  a: question.a,
}));
const firstCycleKeys = new Set();
for (let session = 1; session <= 10; session += 1) {
  const selected = context.__SELECT_ROTATING__(rotationPool, 150);
  const sessionKeys = new Set(selected.map((question) => normalize(question.q)));
  if (selected.length !== 150 || sessionKeys.size !== 150) {
    failures.push(`Simulacro ${session}: no contiene 150 preguntas únicas`);
  }
  for (const key of sessionKeys) {
    if (firstCycleKeys.has(key)) failures.push(`Simulacro ${session}: repitió antes de terminar el primer ciclo`);
    firstCycleKeys.add(key);
  }
  selected.forEach((question) => {
    if (question.a < 0 || question.a >= question.o.length) {
      failures.push(`Simulacro ${session}: respuesta inválida después de mezclar opciones`);
    }
  });
}
if (firstCycleKeys.size !== 1500) failures.push(`La rotación inicial cubrió ${firstCycleKeys.size}/1500 sin repetir`);
const crossingSession = context.__SELECT_ROTATING__(rotationPool, 150);
crossingSession.forEach((question) => firstCycleKeys.add(normalize(question.q)));
if (firstCycleKeys.size !== combined.length) {
  failures.push(`La rotación no recorrió todo el banco: ${firstCycleKeys.size}/${combined.length}`);
}

const report = {
  pearsonConcepts: context.PK_LOADER_STATUS.totalConceptos,
  pearsonQuestions: pearson.length,
  pearsonUniqueQuestions: uniquePearson.size,
  academiaQuestions: academia.length,
  unifiedUniqueQuestions: combined.length,
  approvedSources: `${context.PK_LOADER_STATUS.loadedSources}/${context.PK_LOADER_STATUS.registeredSources}`,
  approvedImportedQuestions: context.PK_LOADER_STATUS.approvedMigrationQuestions,
  duplicatesRemovedByLoader: context.PK_LOADER_STATUS.preguntasDuplicadasEliminadas,
  firstTenSimulacrosWithoutRepeats: firstCycleKeys.size >= 1500,
  fullBankReachedOnSimulacro: 11,
  failures,
};

console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;
