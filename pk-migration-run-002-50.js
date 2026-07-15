// ============================================================
// PEARSON KILLER — pk-migration-run-002-50.js
// Corrida 002: primera corrida estándar de 50 preguntas del banco viejo.
// Selección reproducible desde PK_CONCEPTOS_FULL.
// NO aprueba preguntas y NO modifica main.
// ============================================================

(function(global){
  'use strict';

  const RUN_ID = 'migration_run_002_50';
  const BATCH_SIZE = 50;

  function fingerprint(row){
    return [row.source_id, row.source_variant_index, row.q].join('::');
  }

  function buildRun(concepts, alreadyMigratedFingerprints){
    const pipeline = global.PK_MIGRATION_PIPELINE;
    if(!pipeline) throw new Error('PK_MIGRATION_PIPELINE no está cargado');

    const migrated = new Set(alreadyMigratedFingerprints || []);
    const rows = pipeline.normalizeOldBank(concepts || []);
    const selected = rows.filter(row => !migrated.has(fingerprint(row))).slice(0, BATCH_SIZE);
    const jobs = selected.map((row, index) => ({
      ...pipeline.createRewriteBatches([{ 
        id: row.source_id,
        area: row.source_area,
        concepto: row.source_concept,
        variantes: [{
          q: row.q,
          o: row.o,
          a: row.a,
          e: row.e,
          tipo_trampa: row.tipo_trampa
        }]
      }], 1)[0].jobs[0],
      migration_id: `${RUN_ID}_${String(index + 1).padStart(3,'0')}`,
      source_fingerprint: fingerprint(row)
    }));

    return {
      run_id: RUN_ID,
      pipeline_version: pipeline.VERSION,
      batch_size_target: BATCH_SIZE,
      selected_count: selected.length,
      source_total_available: rows.length,
      jobs
    };
  }

  const API = { RUN_ID, BATCH_SIZE, fingerprint, buildRun };
  if(typeof module !== 'undefined') module.exports = API;
  global.PK_MIGRATION_RUN_002_50 = API;

})(typeof window !== 'undefined' ? window : globalThis);
