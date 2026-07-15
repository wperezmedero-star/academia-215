// ============================================================
// PEARSON KILLER — pk-migration-auto-cycle.js
// Ciclo automático por lotes de 20: seleccionar -> producir -> filtrar -> avanzar.
// Requiere un producerAdapter externo para generar las reescrituras.
// NO autoaprueba preguntas y NO toca main.
// ============================================================

(function(global){
  'use strict';

  const VERSION = '1.1.0';
  const DEFAULT_BATCH_SIZE = 20;

  function requireDependency(name, value){
    if(!value) throw new Error(`${name} no está cargado`);
    return value;
  }

  function createState(){
    return {
      version: VERSION,
      status: 'ready',
      batch_size: DEFAULT_BATCH_SIZE,
      processed_fingerprints: [],
      completed_batches: [],
      totals: {
        source: 0,
        processed: 0,
        strict_candidates: 0,
        rewrite: 0,
        rejected: 0
      },
      last_batch: null
    };
  }

  function validateProducerAdapter(adapter){
    if(!adapter || typeof adapter.produceBatch !== 'function'){
      throw new Error('Se requiere producerAdapter.produceBatch(jobs, context)');
    }
    return adapter;
  }

  async function runNextBatch(options){
    const opts = options || {};
    const concepts = opts.concepts || global.PK_CONCEPTOS_FULL || [];
    const state = opts.state || createState();
    const producer = validateProducerAdapter(opts.producerAdapter);

    const pipeline = requireDependency('PK_MIGRATION_PIPELINE', global.PK_MIGRATION_PIPELINE);
    const strict = requireDependency('PK_STRICT_PREAUDITOR', global.PK_STRICT_PREAUDITOR);

    const rows = pipeline.normalizeOldBank(concepts);
    state.totals.source = rows.length;

    const processed = new Set(state.processed_fingerprints || []);
    const selected = rows.filter(row => {
      const fp = [row.source_id, row.source_variant_index, row.q].join('::');
      return !processed.has(fp);
    }).slice(0, state.batch_size || DEFAULT_BATCH_SIZE);

    if(selected.length === 0){
      state.status = 'complete';
      state.last_batch = null;
      return { state, batch: null };
    }

    const jobs = selected.map((row, index) => ({
      migration_id: `auto_${String(state.completed_batches.length + 1).padStart(3,'0')}_${String(index + 1).padStart(3,'0')}`,
      source_fingerprint: [row.source_id, row.source_variant_index, row.q].join('::'),
      source: row,
      rewrite_job: pipeline.createRewriteBatches([{
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
      }], 1)[0].jobs[0]
    }));

    state.status = 'producing';
    const produced = await producer.produceBatch(jobs, {
      batch_index: state.completed_batches.length + 1,
      batch_size: selected.length,
      strict_pre_auditor_version: strict.VERSION,
      pipeline_version: pipeline.VERSION
    });

    if(!Array.isArray(produced) || produced.length !== selected.length){
      throw new Error(`El productor devolvió ${Array.isArray(produced) ? produced.length : 0} candidatas; se esperaban ${selected.length}`);
    }

    produced.forEach((c, i) => {
      if(!c || !c.id) throw new Error(`Candidata ${i + 1} sin id`);
      if(c.human_review_status && c.human_review_status !== 'pending'){
        throw new Error(`Candidata ${c.id} intentó salir autoaprobada`);
      }
      c.human_review_status = 'pending';
    });

    state.status = 'filtering';
    const basicRows = pipeline.preAuditBatch(produced);
    const basicPassed = basicRows
      .filter(x => x.audit.decision === 'candidate_for_human_review')
      .map(x => x.concept);

    const strictResult = strict.strictPreAuditBatch(basicPassed);
    const strictCandidateIds = new Set(strictResult.candidates.map(x => x.concept.id));
    const strictRewriteIds = new Set(strictResult.rewrite.map(x => x.concept.id));
    const strictRejectedIds = new Set(strictResult.rejected.map(x => x.concept.id));

    const basicRewrite = basicRows.filter(x => x.audit.decision === 'rewrite_again').map(x => x.concept.id);
    const basicRejected = basicRows.filter(x => x.audit.decision === 'reject').map(x => x.concept.id);

    const batchRecord = {
      batch_id: `auto_batch_${String(state.completed_batches.length + 1).padStart(3,'0')}`,
      selected_count: selected.length,
      produced_count: produced.length,
      strict_candidates: Array.from(strictCandidateIds),
      rewrite: Array.from(new Set([...strictRewriteIds, ...basicRewrite])),
      rejected: Array.from(new Set([...strictRejectedIds, ...basicRejected])),
      fingerprints: jobs.map(j => j.source_fingerprint)
    };

    state.processed_fingerprints = Array.from(new Set([
      ...(state.processed_fingerprints || []),
      ...batchRecord.fingerprints
    ]));
    state.completed_batches.push(batchRecord);
    state.last_batch = batchRecord;
    state.totals.processed = state.processed_fingerprints.length;
    state.totals.strict_candidates += batchRecord.strict_candidates.length;
    state.totals.rewrite += batchRecord.rewrite.length;
    state.totals.rejected += batchRecord.rejected.length;
    state.status = state.totals.processed >= state.totals.source ? 'complete' : 'ready_for_next_batch';

    return {
      state,
      batch: batchRecord,
      produced,
      basic_audit: basicRows,
      strict_audit: strictResult
    };
  }

  async function runAll(options){
    const opts = options || {};
    let state = opts.state || createState();
    const results = [];

    while(state.status !== 'complete'){
      const result = await runNextBatch({ ...opts, state });
      state = result.state;
      if(result.batch) results.push(result);
      if(!result.batch) break;
      if(typeof opts.onBatchComplete === 'function'){
        await opts.onBatchComplete(result);
      }
    }

    return { state, results };
  }

  const API = { VERSION, DEFAULT_BATCH_SIZE, createState, runNextBatch, runAll };
  if(typeof module !== 'undefined') module.exports = API;
  global.PK_MIGRATION_AUTO_CYCLE = API;
})(typeof window !== 'undefined' ? window : globalThis);
