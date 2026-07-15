// ============================================================
// PEARSON KILLER — pk-migration-producer-bridge.js
// Puente ejecutable entre PK_MIGRATION_AUTO_CYCLE y PK_MIGRATION_PRODUCER_ADAPTER.
// Convierte el contrato produceBatch(jobs, context) en una llamada al transport
// real del modelo y valida toda la salida antes de devolverla al ciclo.
// NO autoaprueba preguntas y NO toca main.
// ============================================================

(function(global){
  'use strict';

  const VERSION = '1.0.0';

  function requireDependency(name, value){
    if(!value) throw new Error(`${name} no está cargado`);
    return value;
  }

  function buildSyntheticRun(jobs, context){
    const list = Array.isArray(jobs) ? jobs : [];
    return {
      run_id: `auto_bridge_${String((context && context.batch_index) || 0).padStart(3,'0')}`,
      jobs: list.map(job => ({
        migration_id: job.migration_id,
        source_fingerprint: job.source_fingerprint || null,
        source: job.source,
        target_contract: job.rewrite_job && job.rewrite_job.target_contract
          ? job.rewrite_job.target_contract
          : {},
        rewrite_rules: job.rewrite_job && Array.isArray(job.rewrite_job.rewrite_rules)
          ? job.rewrite_job.rewrite_rules
          : []
      }))
    };
  }

  function validateTransport(transport){
    if(typeof transport !== 'function'){
      throw new Error('Se requiere un transport async(payload, context)');
    }
    return transport;
  }

  function createProducerAdapter(transport, options){
    const send = validateTransport(transport);
    const opts = options || {};

    return {
      version: VERSION,
      provider_name: opts.provider_name || 'custom_model_transport',

      async produceBatch(jobs, context){
        const contract = requireDependency(
          'PK_MIGRATION_PRODUCER_ADAPTER',
          global.PK_MIGRATION_PRODUCER_ADAPTER
        );

        const run = buildSyntheticRun(jobs, context);
        const payload = contract.buildProductionPayload(run);

        const produced = await send(payload, {
          ...(context || {}),
          bridge_version: VERSION,
          provider_name: opts.provider_name || 'custom_model_transport'
        });

        const validation = contract.validateProducedBatch(payload, produced);
        if(!validation.ok){
          const error = new Error(`salida del productor rechazada por el puente: ${validation.errors.join(' | ')}`);
          error.validation = validation;
          throw error;
        }

        return validation.candidates.map(candidate => ({
          ...candidate,
          human_review_status: 'pending'
        }));
      }
    };
  }

  const API = {
    VERSION,
    buildSyntheticRun,
    createProducerAdapter
  };

  if(typeof module !== 'undefined') module.exports = API;
  global.PK_MIGRATION_PRODUCER_BRIDGE = API;

})(typeof window !== 'undefined' ? window : globalThis);
