// ============================================================
// PEARSON KILLER — pk-migration-run-001.js
// CORRIDA 001 — Primer lote real del banco viejo hacia el pipeline de migración.
// Fuente: primeras 10 variantes de PK_LIFE (vida_001 y vida_002).
// NO modifica las preguntas originales, NO aprueba automáticamente y NO toca main.
// ============================================================

(function(global){
  'use strict';

  function takeFirstVariants(concepts, limit){
    const selected = [];
    for(const concept of (concepts || [])){
      const variants = concept.variantes || concept.variants || [];
      for(let vi = 0; vi < variants.length; vi++){
        selected.push({
          id: concept.id,
          area: concept.area,
          concepto: concept.concepto,
          variantes: [variants[vi]],
          migration_source_variant_index: vi
        });
        if(selected.length >= limit) return selected;
      }
    }
    return selected;
  }

  const sourceConcepts = Array.isArray(global.PK_LIFE) ? global.PK_LIFE : [];
  const pipeline = global.PK_MIGRATION_PIPELINE;
  const selected = takeFirstVariants(sourceConcepts, 10);

  let rewriteBatch = null;
  let error = null;

  if(!pipeline){
    error = 'PK_MIGRATION_PIPELINE no está cargado';
  } else if(selected.length !== 10){
    error = 'No se pudieron seleccionar exactamente 10 variantes de PK_LIFE';
  } else {
    const batches = pipeline.createRewriteBatches(selected, 10);
    rewriteBatch = batches[0] || null;
  }

  const RUN = {
    run_id: 'migration_run_001',
    source_module: 'PK_LIFE',
    requested_questions: 10,
    selected_questions: selected.length,
    status: error ? 'blocked' : 'rewrite_jobs_ready',
    human_review_status: 'pending',
    auto_approval_allowed: false,
    error,
    source_selection: selected.map((c, i) => ({
      migration_order: i + 1,
      source_id: c.id,
      source_variant_index: c.migration_source_variant_index,
      source_concept: c.concepto,
      source_question: c.variantes[0] && c.variantes[0].q
    })),
    rewrite_batch: rewriteBatch
  };

  if(typeof module !== 'undefined') module.exports = { PK_MIGRATION_RUN_001: RUN };
  global.PK_MIGRATION_RUN_001 = RUN;

  if(typeof console !== 'undefined' && console.log){
    console.log('Pearson Killer migration run 001:', RUN.status, RUN.selected_questions + '/10');
  }

})(typeof window !== 'undefined' ? window : globalThis);
