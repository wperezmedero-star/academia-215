// ============================================================
// PEARSON KILLER — pk-migration-manual-cycle-20.js
// Flujo sin API: preparar 40 -> exportar payload -> importar 40 -> auditar -> avanzar.
// Mantiene el nombre histórico del archivo por compatibilidad.
// NO autoaprueba preguntas y NO toca main.
// ============================================================

(function(global){
  'use strict';

  const VERSION = '1.1.0';
  const BATCH_SIZE = 40;

  function requireDependency(name, value){
    if(!value) throw new Error(`${name} no está cargado`);
    return value;
  }

  function fingerprint(row){
    return [row.source_id, row.source_variant_index, row.q].join('::');
  }

  function prepareNext(state, concepts){
    const pipeline = requireDependency('PK_MIGRATION_PIPELINE', global.PK_MIGRATION_PIPELINE);
    const current = state || (global.PK_MIGRATION_AUTO_CYCLE && global.PK_MIGRATION_AUTO_CYCLE.createState()) || {
      batch_size:BATCH_SIZE, processed_fingerprints:[], completed_batches:[], totals:{source:0,processed:0,strict_candidates:0,rewrite:0,rejected:0}
    };
    current.batch_size = BATCH_SIZE;

    const rows = pipeline.normalizeOldBank(concepts || global.PK_CONCEPTOS_FULL || []);
    current.totals.source = rows.length;
    const seen = new Set(current.processed_fingerprints || []);
    const selected = rows.filter(row => !seen.has(fingerprint(row))).slice(0, BATCH_SIZE);

    if(!selected.length){
      current.status = 'complete';
      return { state:current, run:null, payload:null };
    }

    const batchIndex = (current.completed_batches || []).length + 1;
    const jobs = selected.map((row, index) => {
      const rewrite = pipeline.createRewriteBatches([{
        id: row.source_id,
        area: row.source_area,
        concepto: row.source_concept,
        variantes:[{ q:row.q, o:row.o, a:row.a, e:row.e, tipo_trampa:row.tipo_trampa }]
      }], 1)[0].jobs[0];
      return {
        ...rewrite,
        migration_id:`manual40_${String(batchIndex).padStart(3,'0')}_${String(index+1).padStart(3,'0')}`,
        source_fingerprint:fingerprint(row)
      };
    });

    const run = {
      run_id:`manual40_run_${String(batchIndex).padStart(3,'0')}`,
      batch_size:BATCH_SIZE,
      selected_count:selected.length,
      jobs
    };

    const producerContract = global.PK_MIGRATION_PRODUCER_ADAPTER;
    const payload = producerContract && typeof producerContract.buildProductionPayload === 'function'
      ? producerContract.buildProductionPayload(run)
      : { run_id:run.run_id, expected_count:jobs.length, jobs };

    current.status = 'awaiting_manual_production';
    return { state:current, run, payload };
  }

  function importAndAudit(prepared, produced){
    if(!prepared || !prepared.run || !prepared.payload) throw new Error('No hay un lote preparado');
    const pipeline = requireDependency('PK_MIGRATION_PIPELINE', global.PK_MIGRATION_PIPELINE);
    const strict = requireDependency('PK_STRICT_PREAUDITOR', global.PK_STRICT_PREAUDITOR);
    const producerContract = requireDependency('PK_MIGRATION_PRODUCER_ADAPTER', global.PK_MIGRATION_PRODUCER_ADAPTER);

    const validation = producerContract.validateProducedBatch(prepared.payload, produced);
    if(!validation.ok){
      const error = new Error(`Importación inválida: ${validation.errors.join(' | ')}`);
      error.validation = validation;
      throw error;
    }

    const candidates = validation.candidates;
    const basicRows = pipeline.preAuditBatch(candidates);
    const basicPassed = basicRows.filter(x => x.audit.decision === 'candidate_for_human_review').map(x => x.concept);
    const strictResult = strict.strictPreAuditBatch(basicPassed);

    const strictCandidateIds = new Set(strictResult.candidates.map(x => x.concept.id));
    const strictRewriteIds = new Set(strictResult.rewrite.map(x => x.concept.id));
    const strictRejectedIds = new Set(strictResult.rejected.map(x => x.concept.id));
    const basicRewrite = basicRows.filter(x => x.audit.decision === 'rewrite_again').map(x => x.concept.id);
    const basicRejected = basicRows.filter(x => x.audit.decision === 'reject').map(x => x.concept.id);

    const state = prepared.state;
    const batchRecord = {
      batch_id:prepared.run.run_id,
      selected_count:prepared.run.selected_count,
      produced_count:candidates.length,
      strict_candidates:Array.from(strictCandidateIds),
      rewrite:Array.from(new Set([...strictRewriteIds, ...basicRewrite])),
      rejected:Array.from(new Set([...strictRejectedIds, ...basicRejected])),
      fingerprints:prepared.run.jobs.map(j => j.source_fingerprint)
    };

    state.processed_fingerprints = Array.from(new Set([...(state.processed_fingerprints || []), ...batchRecord.fingerprints]));
    state.completed_batches = [...(state.completed_batches || []), batchRecord];
    state.last_batch = batchRecord;
    state.totals.processed = state.processed_fingerprints.length;
    state.totals.strict_candidates += batchRecord.strict_candidates.length;
    state.totals.rewrite += batchRecord.rewrite.length;
    state.totals.rejected += batchRecord.rejected.length;
    state.status = state.totals.processed >= state.totals.source ? 'complete' : 'ready_for_next_batch';

    return { state, batch:batchRecord, candidates, basic_audit:basicRows, strict_audit:strictResult };
  }

  const API = { VERSION, BATCH_SIZE, prepareNext, importAndAudit };
  if(typeof module !== 'undefined') module.exports = API;
  // Alias histórico + nuevo alias explícito para no romper nada existente.
  global.PK_MIGRATION_MANUAL_CYCLE_20 = API;
  global.PK_MIGRATION_MANUAL_CYCLE_40 = API;
})(typeof window !== 'undefined' ? window : globalThis);
