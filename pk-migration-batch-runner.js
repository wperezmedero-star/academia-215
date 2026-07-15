// ============================================================
// PEARSON KILLER — pk-migration-batch-runner.js
// Runner maestro secuencial para recorrer el banco viejo en lotes de 50.
// NO reescribe contenido por sí solo: prepara trabajos, registra progreso,
// evita duplicados y encadena el siguiente lote hasta agotar el banco.
// NO aprueba preguntas automáticamente y NO toca main.
// ============================================================

(function(global){
  'use strict';

  const VERSION = '1.0.0';
  const DEFAULT_BATCH_SIZE = 50;

  function requirePipeline(){
    const pipeline = global.PK_MIGRATION_PIPELINE;
    if(!pipeline) throw new Error('PK_MIGRATION_PIPELINE no está cargado');
    return pipeline;
  }

  function sourceFingerprint(row){
    return [row.source_id, row.source_variant_index, row.q].join('::');
  }

  function normalizeProgress(progress){
    const p = progress && typeof progress === 'object' ? progress : {};
    return {
      version: VERSION,
      batch_size: Number.isInteger(p.batch_size) && p.batch_size > 0 ? p.batch_size : DEFAULT_BATCH_SIZE,
      completed_fingerprints: Array.isArray(p.completed_fingerprints) ? [...new Set(p.completed_fingerprints)] : [],
      runs: Array.isArray(p.runs) ? p.runs.slice() : [],
      status: p.status === 'complete' ? 'complete' : 'in_progress'
    };
  }

  function inventory(concepts, progress){
    const pipeline = requirePipeline();
    const rows = pipeline.normalizeOldBank(concepts || []);
    const p = normalizeProgress(progress);
    const completed = new Set(p.completed_fingerprints);
    const remaining = rows.filter(row => !completed.has(sourceFingerprint(row)));
    const totalBatches = Math.ceil(rows.length / p.batch_size);
    const remainingBatches = Math.ceil(remaining.length / p.batch_size);

    return {
      total_questions: rows.length,
      completed_questions: rows.length - remaining.length,
      remaining_questions: remaining.length,
      batch_size: p.batch_size,
      total_batches: totalBatches,
      completed_batches_equivalent: Math.floor((rows.length - remaining.length) / p.batch_size),
      remaining_batches: remainingBatches,
      complete: remaining.length === 0
    };
  }

  function buildNextRun(concepts, progress){
    const pipeline = requirePipeline();
    const p = normalizeProgress(progress);
    const rows = pipeline.normalizeOldBank(concepts || []);
    const completed = new Set(p.completed_fingerprints);
    const remaining = rows.filter(row => !completed.has(sourceFingerprint(row)));

    if(remaining.length === 0){
      return {
        done: true,
        run: null,
        progress: { ...p, status: 'complete' },
        inventory: inventory(concepts, p)
      };
    }

    const selected = remaining.slice(0, p.batch_size);
    const runNumber = p.runs.length + 1;
    const runId = `migration_auto_${String(runNumber).padStart(3,'0')}`;

    const jobs = selected.map((row, index) => {
      const one = {
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
      };
      const job = pipeline.createRewriteBatches([one], 1)[0].jobs[0];
      return {
        ...job,
        migration_id: `${runId}_${String(index + 1).padStart(3,'0')}`,
        source_fingerprint: sourceFingerprint(row)
      };
    });

    const run = {
      run_id: runId,
      runner_version: VERSION,
      pipeline_version: pipeline.VERSION,
      batch_size_target: p.batch_size,
      selected_count: selected.length,
      is_final_partial_batch: selected.length < p.batch_size,
      jobs
    };

    return {
      done: false,
      run,
      progress: p,
      inventory: inventory(concepts, p)
    };
  }

  function completeRun(progress, run, resultSummary){
    const p = normalizeProgress(progress);
    if(!run || !Array.isArray(run.jobs)) throw new Error('run inválido');

    const completedFingerprints = new Set(p.completed_fingerprints);
    run.jobs.forEach(job => {
      if(job.source_fingerprint) completedFingerprints.add(job.source_fingerprint);
    });

    const runRecord = {
      run_id: run.run_id,
      selected_count: run.selected_count,
      completed_at: new Date().toISOString(),
      result_summary: resultSummary || null
    };

    return {
      ...p,
      completed_fingerprints: [...completedFingerprints],
      runs: [...p.runs, runRecord],
      status: 'in_progress'
    };
  }

  function advance(concepts, progress, completedRun, resultSummary){
    let nextProgress = normalizeProgress(progress);
    if(completedRun) nextProgress = completeRun(nextProgress, completedRun, resultSummary);
    const next = buildNextRun(concepts, nextProgress);
    if(next.done) next.progress.status = 'complete';
    return next;
  }

  function validateCandidateBatch(candidates, expectedCount){
    const rows = Array.isArray(candidates) ? candidates : [];
    const errors = [];
    const ids = new Set();

    if(Number.isInteger(expectedCount) && rows.length !== expectedCount){
      errors.push(`cantidad recibida ${rows.length}; esperada ${expectedCount}`);
    }

    rows.forEach((c, index) => {
      if(!c || typeof c !== 'object'){
        errors.push(`posición ${index}: candidata inválida`);
        return;
      }
      if(!c.id) errors.push(`posición ${index}: falta id`);
      else if(ids.has(c.id)) errors.push(`id duplicado: ${c.id}`);
      else ids.add(c.id);

      if(c.human_review_status === 'approved'){
        errors.push(`${c.id || index}: autoaprobación prohibida`);
      }
      const v = c.variantes && c.variantes[0];
      if(!v) errors.push(`${c.id || index}: falta variante`);
      else {
        if(!Array.isArray(v.o) || v.o.length !== 4) errors.push(`${c.id || index}: debe tener 4 opciones`);
        if(!Number.isInteger(v.a) || v.a < 0 || v.a > 3) errors.push(`${c.id || index}: respuesta correcta inválida`);
      }
    });

    return { valid: errors.length === 0, errors };
  }

  const API = {
    VERSION,
    DEFAULT_BATCH_SIZE,
    sourceFingerprint,
    normalizeProgress,
    inventory,
    buildNextRun,
    completeRun,
    advance,
    validateCandidateBatch
  };

  if(typeof module !== 'undefined') module.exports = API;
  global.PK_MIGRATION_BATCH_RUNNER = API;

})(typeof window !== 'undefined' ? window : globalThis);
