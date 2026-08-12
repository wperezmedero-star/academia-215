import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const context = vm.createContext({ console });
context.window = context;
context.globalThis = context;

function load(file) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const baseScripts = [
  "pk-synonyms.js", "pk-traps.js", "pk-blueprint.js", "pk-schema.js", "pk-storage.js",
  "pk-data-underwriting.js", "pk-data-life.js", "pk-data-annuities.js", "pk-data-health.js",
  "pk-data-retirement.js", "pk-data-florida.js", "pk-data-medicare.js", "pk-data-ltc.js",
  "pk-data-general.js", "pk-data-material-filtrado.js", "pk-data-nivel1.js", "pk-data-nivel2.js",
  "pk-data-nivel3.js", "pk-data-nivel4.js", "pk-data-nivel5.js", "pk-data-refuerzo.js",
  "pk-data-disposiciones.js", "pk-data-campo.js", "pk-data-killer-hmoppo.js", "pk-data-killer-pilot.js",
];

baseScripts.forEach(load);
load("pk-approved-sources.js");
context.PK_APPROVED_SOURCE_INDEX.sources.forEach((source) => load(source.path));
load("pk-approved-registry.js");
load("pk-loader-runtime.js");
load("pk-option-quality.js");

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const dataStart = html.indexOf("const L=[");
const dataEnd = html.indexOf("let cur=null", dataStart);
assert.ok(dataStart >= 0 && dataEnd > dataStart, "No se pudo leer el banco de Academia");
vm.runInContext(`${html.slice(dataStart, dataEnd)}\nthis.__ACADEMIA_L__=L;`, context);

const academia = context.__ACADEMIA_L__.flatMap((lesson, lessonIndex) =>
  (lesson.questions || []).map((question) => ({ ...question, lessonIndex, sourceArea: "academia" })),
);
const pearson = context.PK_CONCEPTOS_FULL.flatMap((concept) =>
  (concept.variantes || []).map((question) => ({
    ...question,
    sourceArea: concept.area,
    area: concept.area,
  })),
);
const combined = [...academia, ...pearson];
const examReady = context.PK_OPTION_QUALITY.filter(combined, { tier: "exam" });
const report = context.PK_OPTION_QUALITY.report(combined);

assert.ok(examReady.length >= 750, `Solo hay ${examReady.length} preguntas de nivel examen`);
for (const question of examReady) {
  const originalCorrect = question.o[question.a];
  const audit = context.PK_OPTION_QUALITY.evaluate(question);
  assert.equal(audit.examReady, true);
  assert.equal(question.o.length, 4);
  assert.equal(new Set(question.o.map((option) => option.trim().toLowerCase())).size, 4);
  assert.equal(question.o[question.a], originalCorrect, "La auditoría no debe modificar la respuesta correcta");
  assert.equal(audit.diagnostics.competitiveCount, 3);
  assert.equal(audit.diagnostics.weakCount, 0);
  assert.equal(audit.diagnostics.absoluteCount, 0);
}

const regulation = examReady.filter((question) =>
  question.sourceArea === "florida" ||
  /(florida|ley\b|regulaci[oó]n|licencia|dfs\b|oir\b|estatuto)/i.test([question.q, question.e].join(" ")),
);
assert.ok(regulation.length >= 30, "Regulación no alcanza un reto estricto de 30 preguntas");

console.log(JSON.stringify({
  engineVersion: context.PK_OPTION_QUALITY.version,
  totalAudited: report.total,
  examReady: report.examReady,
  practiceReady: report.practiceReady,
  regulationExamReady: regulation.length,
  fullSimulacrosWithoutRepeat: Math.floor(examReady.length / 150),
  failures: [],
}, null, 2));
