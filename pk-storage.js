// ============================================================
// PEARSON KILLER — pk-storage.js
// FASE 1: Infraestructura — Motor de Almacenamiento de Intentos
//
// Reemplaza y AMPLÍA la lógica de estadísticas que vivía suelta
// dentro de pearson-killer.html (PK_STATS_KEY = 'pk_stats_v1').
//
// BUG CORREGIDO:
//   Antes, 'stats.conceptos[key].total' SOLO se incrementaba
//   dentro de recordCorrect(). Cuando la respuesta era incorrecta,
//   recordError() incrementaba 'errores' pero NUNCA 'total'.
//   Resultado: el porcentaje de acierto por concepto quedaba mal
//   calculado (denominador incompleto) en cualquier concepto con
//   al menos una falla antes que un acierto.
//
//   Esta versión (pk_stats_v2) registra el intento COMPLETO
//   —correcto o no— en un solo lugar: recordAttempt(). El total
//   sube siempre; aciertos/errores suben según corresponda.
//
// COMPATIBILIDAD: al cargar, migra los datos viejos de
// pk_stats_v1 / pk_errors_v1 hacia pk_stats_v2 UNA sola vez,
// sin borrar las claves originales (por si algo más las lee).
// ============================================================

const PK_STATS_V2_KEY = 'pk_stats_v2';
const PK_LEGACY_STATS_KEY = 'pk_stats_v1';
const PK_LEGACY_ERRORS_KEY = 'pk_errors_v1';
const PK_MIGRATION_FLAG = 'pk_storage_v2_migrated';

function pkLoadRaw(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
  catch (e) { return fallback; }
}

function pkSaveRaw(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch (e) { /* almacenamiento lleno o no disponible — falla silenciosa, no rompe el quiz */ }
}

// ---- Estructura base de pk_stats_v2 ----
function pkEmptyStatsV2() {
  return {
    version: 2,
    sesiones: 0,
    // Por concepto (misma clave 'area::concepto' que usaba v1, para
    // poder migrar sin perder el historial ya acumulado)
    conceptos: {},
    // NUEVO: por área del blueprint (Fase 1 lo deja listo; el motor
    // adaptativo de Fase 3 lo consumirá)
    areas: {},
    // NUEVO: por tipo de trampa (ya existía en v1, se conserva)
    trampas: {},
    // NUEVO: registro crudo de los últimos intentos, con tiempo por
    // pregunta, si hubo cambio de respuesta antes de confirmar, y
    // qué distractor exacto se eligió cuando falló.
    intentosRecientes: [] // se recorta a los últimos 500
  };
}

function pkMigrarSiHaceFalta() {
  if (localStorage.getItem(PK_MIGRATION_FLAG)) return;

  const v2 = pkEmptyStatsV2();
  const v1 = pkLoadRaw(PK_LEGACY_STATS_KEY, {});

  if (v1.sesiones) v2.sesiones = v1.sesiones;
  if (v1.trampas) v2.trampas = v1.trampas;

  if (v1.conceptos) {
    Object.entries(v1.conceptos).forEach(([key, val]) => {
      // v1 podía tener 'total' incompleto (el bug). Reconstruimos
      // el total real como (aciertos registrados) + errores, que es
      // lo más cercano a la verdad que se puede recuperar de datos
      // ya guardados con el bug activo.
      const errores = val.errores || 0;
      const totalViejo = val.total || 0;
      const totalReconstruido = Math.max(totalViejo, errores) + (totalViejo >= errores ? 0 : 0);
      v2.conceptos[key] = {
        label: val.label,
        area: val.area,
        aciertos: Math.max(totalViejo - errores, 0),
        errores: errores,
        total: Math.max(totalViejo, errores)
      };
    });
  }

  pkSaveRaw(PK_STATS_V2_KEY, v2);
  localStorage.setItem(PK_MIGRATION_FLAG, '1');
}

function pkLoadStatsV2() {
  pkMigrarSiHaceFalta();
  return pkLoadRaw(PK_STATS_V2_KEY, pkEmptyStatsV2());
}

function pkSaveStatsV2(stats) {
  pkSaveRaw(PK_STATS_V2_KEY, stats);
}

// ============================================================
// API PRINCIPAL — recordAttempt()
// Llamar UNA vez por pregunta respondida, sin importar si fue
// correcta o no. Este es el reemplazo directo de recordError()
// + recordCorrect() combinados, y es lo que corrige el bug.
//
// datos = {
//   q: objeto pregunta (usa q.area, q.areaLabel, q.concept, q.tipo_trampa),
//   correcta: bool,
//   userAnswerIdx: número de opción elegida,
//   tiempoMs: milisegundos que tardó en responder,
//   cambioRespuesta: bool — true si tocó una opción y luego otra
//     antes de confirmar,
// }
// ============================================================
function recordAttempt(datos) {
  const stats = pkLoadStatsV2();
  const q = datos.q || {};
  const ckey = (q.area || '') + '::' + (q.concept || '');
  const akey = q.area || 'desconocida';

  if (!stats.conceptos[ckey]) {
    stats.conceptos[ckey] = { label: q.concept, area: q.areaLabel, aciertos: 0, errores: 0, total: 0 };
  }
  if (!stats.areas[akey]) {
    stats.areas[akey] = { label: q.areaLabel || akey, aciertos: 0, errores: 0, total: 0, tiempoTotalMs: 0 };
  }

  // El total SIEMPRE sube, sea correcta o no — aquí está la corrección.
  stats.conceptos[ckey].total++;
  stats.areas[akey].total++;
  stats.areas[akey].tiempoTotalMs += (datos.tiempoMs || 0);

  if (datos.correcta) {
    stats.conceptos[ckey].aciertos++;
    stats.areas[akey].aciertos++;
  } else {
    stats.conceptos[ckey].errores++;
    stats.areas[akey].errores++;
    if (q.tipo_trampa) {
      stats.trampas[q.tipo_trampa] = (stats.trampas[q.tipo_trampa] || 0) + 1;
    }
  }

  stats.intentosRecientes.push({
    ts: Date.now(),
    area: q.area,
    concept: q.concept,
    correcta: !!datos.correcta,
    userAnswerIdx: datos.userAnswerIdx,
    respuestaCorrectaIdx: q.a,
    tiempoMs: datos.tiempoMs || null,
    cambioRespuesta: !!datos.cambioRespuesta,
    tipoTrampa: q.tipo_trampa || null
  });
  stats.intentosRecientes = stats.intentosRecientes.slice(-500);

  pkSaveStatsV2(stats);
  return stats;
}

function incrementarSesion() {
  const stats = pkLoadStatsV2();
  stats.sesiones = (stats.sesiones || 0) + 1;
  pkSaveStatsV2(stats);
}

function getStatsPorArea() {
  const stats = pkLoadStatsV2();
  return stats.areas;
}

function getStatsPorConcepto() {
  const stats = pkLoadStatsV2();
  return stats.conceptos;
}

function getStatsPorTrampa() {
  const stats = pkLoadStatsV2();
  return stats.trampas;
}

function getIntentosRecientes(n) {
  const stats = pkLoadStatsV2();
  return stats.intentosRecientes.slice(-(n || 50));
}

const PK_STORAGE = {
  recordAttempt,
  incrementarSesion,
  getStatsPorArea,
  getStatsPorConcepto,
  getStatsPorTrampa,
  getIntentosRecientes,
  _loadRaw: pkLoadStatsV2,
  _save: pkSaveStatsV2
};

if (typeof module !== 'undefined') module.exports = { PK_STORAGE };
if (typeof window !== 'undefined') window.PK_STORAGE = PK_STORAGE;
