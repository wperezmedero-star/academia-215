// ============================================================
// PEARSON KILLER — pk-loader.js
// Cargador central del banco + integración automática de preguntas aprobadas.
// v1.8 — 15/07/2026
// ============================================================

// Carga síncrona de fuentes Nueva Generación auditadas.
// El registro machine-readable decide cuáles entran realmente al examen.
if (typeof document !== 'undefined' && document.readyState === 'loading') {
  document.write('<script src="pk-migration-manual20-run-010-candidates-01.js"><\/script>');
  document.write('<script src="pk-migration-manual20-run-010-candidates-02.js"><\/script>');
  document.write('<script src="pk-migration-manual40-run-013-candidates-01.js"><\/script>');
  document.write('<script src="pk-migration-manual40-run-013-candidates-02.js"><\/script>');
  document.write('<script src="pk-migration-manual40-run-013-rewrites-01.js"><\/script>');
  document.write('<script src="pk-migration-manual40-run-013-rewrites-02.js"><\/script>');
  document.write('<script src="pk-migration-manual40-run-014-candidates-01.js"><\/script>');
  document.write('<script src="pk-migration-manual40-run-014-rewrites-01.js"><\/script>');
  document.write('<script src="pk-approved-registry.js"><\/script>');
}

(function() {
  'use strict';

  const MODULOS = [
    { nombre: 'underwriting', data: window.PK_UNDERWRITING || null },
    { nombre: 'life', data: window.PK_LIFE || null },
    { nombre: 'annuities', data: window.PK_ANNUITIES || null },
    { nombre: 'health', data: window.PK_HEALTH || null },
    { nombre: 'retirement', data: window.PK_RETIREMENT || null },
    { nombre: 'florida', data: window.PK_FLORIDA || null },
    { nombre: 'medicare', data: window.PK_MEDICARE || null },
    { nombre: 'ltc', data: window.PK_LTC || null },
    { nombre: 'general', data: window.PK_GENERAL || null },
    { nombre: 'nivel1', data: window.PK_NIVEL1 || null },
    { nombre: 'nivel2', data: window.PK_NIVEL2 || null },
    { nombre: 'nivel3', data: window.PK_NIVEL3 || null },
    { nombre: 'nivel4', data: window.PK_NIVEL4 || null },
    { nombre: 'nivel5', data: window.PK_NIVEL5 || null },
    { nombre: 'refuerzo', data: window.PK_REFUERZO || null },
    { nombre: 'disposiciones', data: window.PK_DISPOSICIONES || null },
    { nombre: 'campo', data: window.PK_CAMPO || null },
    { nombre: 'killer_hmoppo', data: window.PK_KILLER_HMOPPO || null }
  ];

  let conceptosUnificados = [];
  const modulosOK = [];
  const modulosFaltantes = [];

  MODULOS.forEach(function(mod) {
    if (mod.data && Array.isArray(mod.data)) {
      conceptosUnificados = conceptosUnificados.concat(mod.data);
      modulosOK.push(mod.nombre + ' (' + mod.data.length + ' conceptos)');
    } else {
      modulosFaltantes.push(mod.nombre);
    }
  });

  // ------------------------------------------------------------
  // NUEVA GENERACIÓN — integración automática por auditoría.
  // Solo entra lo incluido explícitamente en PK_APPROVED_REGISTRY.
  // Las fuentes pueden permanecer pending; el registro es la autorización.
  // ------------------------------------------------------------
  const approvedRegistry = window.PK_APPROVED_REGISTRY || { approved_ids: [] };
  const approvedSet = approvedRegistry.approved_set instanceof Set
    ? approvedRegistry.approved_set
    : new Set(approvedRegistry.approved_ids || []);

  const migrationSources = [
    { name: 'run_010_01', data: window.PK_MIGRATION_MANUAL20_RUN_010_01 },
    { name: 'run_010_02', data: window.PK_MIGRATION_MANUAL20_RUN_010_02 },
    { name: 'run_013_01', data: window.PK_MIGRATION_MANUAL40_RUN_013_01 },
    { name: 'run_013_02', data: window.PK_MIGRATION_MANUAL40_RUN_013_02 },
    { name: 'run_013_rewrites_01', data: window.PK_MIGRATION_MANUAL40_RUN_013_REWRITES_01 },
    { name: 'run_013_rewrites_02', data: window.PK_MIGRATION_MANUAL40_RUN_013_REWRITES_02 },
    { name: 'run_014_01', data: window.PK_MIGRATION_MANUAL40_RUN_014_01 },
    { name: 'run_014_rewrites_01', data: window.PK_MIGRATION_MANUAL40_RUN_014_REWRITES_01 }
  ].filter(function(src){ return Array.isArray(src.data); });

  // Un ID aprobado produce una sola pregunta. Si hubiera una versión reescrita
  // con el mismo ID en una fuente posterior, esa versión sustituye a la anterior.
  const approvedById = new Map();

  migrationSources.forEach(function(source) {
    source.data.forEach(function(item) {
      if (!item || !approvedSet.has(item.id)) return;

      const variants = (item.variantes || item.variants || []).filter(function(v) {
        return v && typeof v.q === 'string' && v.q.trim() &&
          Array.isArray(v.o) && v.o.length === 4 &&
          Number.isInteger(v.a) && v.a >= 0 && v.a <= 3;
      }).map(function(v) {
        const copy = Object.assign({}, v);
        copy.category = 'killer_ready';
        copy.human_review_status = 'approved';
        if (!copy.e) copy.e = copy.correcto || '';
        return copy;
      });

      if (!variants.length) return;

      approvedById.set(item.id, {
        id: item.id,
        area: item.area,
        concepto: item.concepto || item.subtema_blueprint || item.id,
        category: 'killer_ready',
        human_review_status: 'approved',
        source: source.name,
        variantes: variants
      });
    });
  });

  const approvedMigrationConcepts = Array.from(approvedById.values());
  conceptosUnificados = conceptosUnificados.concat(approvedMigrationConcepts);

  // Killer Pilot permanece aislado.
  const killerPilot = Array.isArray(window.PK_KILLER_PILOT) ? window.PK_KILLER_PILOT : [];
  const erroresKillerPilot = [];
  let totalPreguntasKillerPilot = 0;

  killerPilot.forEach(function(concepto, conceptoIdx) {
    const conceptoId = concepto.id || ('concepto_' + (conceptoIdx + 1));
    const variantes = concepto.variantes || concepto.variants || [];
    if (!Array.isArray(variantes) || variantes.length === 0) {
      erroresKillerPilot.push(conceptoId + ': sin variantes válidas');
      return;
    }
    variantes.forEach(function(pregunta, varianteIdx) {
      totalPreguntasKillerPilot++;
      const etiqueta = conceptoId + '#' + (varianteIdx + 1);
      if (!pregunta || typeof pregunta.q !== 'string' || pregunta.q.trim().length === 0) {
        erroresKillerPilot.push(etiqueta + ': falta texto de pregunta');
      }
      if (!Array.isArray(pregunta.o) || pregunta.o.length !== 4 || pregunta.o.some(function(opcion) {
        return typeof opcion !== 'string' || opcion.trim().length === 0;
      })) {
        erroresKillerPilot.push(etiqueta + ': debe tener exactamente 4 opciones no vacías');
      }
      if (!Number.isInteger(pregunta.a) || pregunta.a < 0 || pregunta.a > 3) {
        erroresKillerPilot.push(etiqueta + ': índice de respuesta correcta inválido');
      }
      const explicacion = pregunta.e || pregunta.correcto || '';
      if (typeof explicacion !== 'string' || explicacion.trim().length === 0) {
        erroresKillerPilot.push(etiqueta + ': falta explicación de la respuesta correcta');
      } else if (!pregunta.e) {
        pregunta.e = explicacion;
      }
    });
  });

  const killerPilotOK = totalPreguntasKillerPilot === 15 && erroresKillerPilot.length === 0;
  window.PK_KILLER_PILOT_STATUS = {
    cargado: killerPilot.length > 0,
    totalConceptos: killerPilot.length,
    totalPreguntas: totalPreguntasKillerPilot,
    esperado: 15,
    errores: erroresKillerPilot,
    totalErrores: erroresKillerPilot.length,
    valido: killerPilotOK,
    aisladoDelBancoPrincipal: true
  };

  const AREAS_UNIFICADAS = {
    suscripcion: 'Procedimientos de Suscripción en Campo',
    vida: 'Tipos de Seguros de Vida',
    anualidades: 'Anualidades',
    salud: 'Tipos de Pólizas de Salud',
    medicare: 'Medicare y Medicaid',
    ltc: 'Seguro de Cuidado a Largo Plazo',
    cobra: 'COBRA, ERISA e HIPAA',
    cuentas: 'HSA, HRA y FSA',
    ss: 'Seguro Social',
    retiro: 'Planes de Retiro',
    florida: 'Leyes y Regulaciones de Florida',
    provisiones: 'Provisiones, Cláusulas y Anexos',
    generales: 'Conceptos Generales de Seguros'
  };

  window.PK_CONCEPTOS_FULL = conceptosUnificados;
  window.PK_AREAS_FULL = AREAS_UNIFICADAS;
  window.PK_SINONIMOS_FULL = window.PK_SINONIMOS || {};
  window.PK_TRAMPAS_FULL = window.PK_TRAMPAS || {};
  window.PK_APPROVED_EXAM_CONCEPTS = approvedMigrationConcepts;

  let totalVariantes = 0;
  conceptosUnificados.forEach(function(c) {
    if (c.variantes) totalVariantes += c.variantes.length;
  });

  window.PK_LOADER_STATUS = {
    modulosOK: modulosOK,
    modulosFaltantes: modulosFaltantes,
    totalConceptos: conceptosUnificados.length,
    totalVariantes: totalVariantes,
    approvedMigrationConcepts: approvedMigrationConcepts.length,
    approvedMigrationQuestions: approvedMigrationConcepts.reduce(function(n,c){return n+(c.variantes||[]).length;},0),
    approvedRegistryTotal: approvedRegistry.total || (approvedRegistry.approved_ids || []).length,
    approvedRegistryVersion: approvedRegistry.version || null,
    autoIntegrationPolicy: approvedRegistry.policy || null,
    killerPilot: window.PK_KILLER_PILOT_STATUS,
    version: '1.8'
  };

  window.addEventListener('DOMContentLoaded', function() {
    window.PK_RUNTIME_MODE = '';
    window.PK_LAST_POOL_SIZE = null;

    if (typeof window.buildPool === 'function') {
      const buildPoolOriginal = window.buildPool;
      window.buildPool = function(m, max) {
        const resultado = buildPoolOriginal(m, max);
        window.PK_LAST_POOL_SIZE = Array.isArray(resultado) ? resultado.length : 0;
        return resultado;
      };
    }

    if (typeof window.startMode === 'function') {
      const startModeOriginal = window.startMode;
      window.startMode = function(m, max) {
        if (m === 'killer_pilot' && (!window.PK_KILLER_PILOT_STATUS || !window.PK_KILLER_PILOT_STATUS.valido)) {
          alert('El Killer Pilot no está listo: deben cargarse exactamente 15 preguntas válidas.');
          return;
        }
        window.PK_RUNTIME_MODE = m;
        startModeOriginal(m, max);
      };
    }

    if (typeof window.renderQ === 'function') {
      const renderQOriginal = window.renderQ;
      window.renderQ = function() {
        if (window.PK_LAST_POOL_SIZE === 0) {
          const quiz = document.getElementById('quiz');
          const home = document.getElementById('home');
          if (quiz) quiz.classList.add('hidden');
          if (home) home.classList.remove('hidden');
          alert('No se encontraron preguntas para este modo. Revisa que el banco correspondiente haya cargado correctamente.');
          return;
        }
        renderQOriginal();
        if (window.PK_RUNTIME_MODE === 'killer_pilot') {
          const label = document.getElementById('q-variant');
          const count = document.getElementById('q-count');
          if (label && count) label.textContent = 'Killer Pilot · Pregunta ' + count.textContent;
        }
      };
    }
  });
})();