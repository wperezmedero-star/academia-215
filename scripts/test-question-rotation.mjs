import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const storage = new Map();
let seed = 0x2152026;
const seededMath = Object.create(Math);
seededMath.random = () => {
  seed = (1664525 * seed + 1013904223) >>> 0;
  return seed / 0x100000000;
};
const context = vm.createContext({ console, Math: seededMath });
context.window = context;
context.globalThis = context;
context.localStorage = {
  getItem: (key) => storage.has(key) ? storage.get(key) : null,
  setItem: (key, value) => storage.set(key, String(value)),
  removeItem: (key) => storage.delete(key),
};
vm.runInContext(fs.readFileSync(path.join(root, "question-rotation.js"), "utf8"), context);
const rotation = context.QUESTION_ROTATION;

const makeQuestion = (index, prompt = `Pregunta ${index}`) => ({
  q: prompt,
  o: [`Correcta ${index}`, `B ${index}`, `C ${index}`, `D ${index}`],
  a: 0,
});
const promptKeys = (items) => new Set(items.map(rotation.promptKey));
const overlap = (a, b) => {
  const B = promptKeys(b);
  return [...promptKeys(a)].filter((key) => B.has(key)).length;
};

// Una copia exacta se elimina, pero dos preguntas distintas con el mismo
// enunciado genérico se preservan mediante opciones y respuesta correcta.
const genericA = makeQuestion(1, "¿Cuál comparación es correcta?");
const genericB = makeQuestion(2, "¿Cuál comparación es correcta?");
assert.equal(rotation.dedupeItems([genericA, { ...genericA }, genericB]).length, 2);
assert.equal(rotation.dedupePrompts([genericA, genericB]).length, 1);

// Recorre el banco completo sin repetir y, al cruzar el ciclo, evita la sesión
// inmediatamente anterior.
const pool = Array.from({ length: 65 }, (_, index) => makeQuestion(index));
const sessions = [];
for (let index = 0; index < 7; index += 1) {
  const selected = rotation.select(pool, 10, {
    storageKey: "test_cycle",
    lastStorageKey: "test_cycle_last",
    useGlobalRecent: false,
    shuffleOptions: true,
  });
  assert.equal(selected.length, 10);
  assert.equal(promptKeys(selected).size, 10);
  selected.forEach((question) => {
    assert.equal(question.o[question.a], `Correcta ${Number(question.q.replace("Pregunta ", ""))}`);
  });
  if (index < 6) assert.equal(overlap(selected, sessions.flat()), 0);
  if (index > 0) assert.equal(overlap(selected, sessions[index - 1]), 0);
  sessions.push(selected);
}

// El historial reciente compartido impide que cambiar de modo muestre de
// inmediato las mismas preguntas cuando existen suficientes alternativas.
storage.clear();
const sharedPool = Array.from({ length: 100 }, (_, index) => makeQuestion(index));
const modeA = rotation.select(sharedPool, 30, { storageKey: "mode_a" });
const modeB = rotation.select(sharedPool, 30, { storageKey: "mode_b" });
assert.equal(overlap(modeA, modeB), 0);

// Los dos ítems válidos que comparten enunciado se alternan entre ciclos; no se
// pierde silenciosamente uno de ellos.
storage.clear();
const firstGeneric = rotation.select([genericA, genericB], 1, {
  storageKey: "generic_cycle",
  useGlobalRecent: false,
  shuffleQuestions: false,
})[0];
const secondGeneric = rotation.select([genericA, genericB], 1, {
  storageKey: "generic_cycle",
  useGlobalRecent: false,
  shuffleQuestions: false,
})[0];
assert.notEqual(rotation.itemKey(firstGeneric), rotation.itemKey(secondGeneric));

console.log(JSON.stringify({
  engineVersion: rotation.version,
  cycleSessionsChecked: sessions.length,
  crossModeImmediateOverlap: overlap(modeA, modeB),
  genericPromptVariantsPreserved: 2,
  failures: [],
}, null, 2));
