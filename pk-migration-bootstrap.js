// ============================================================
// PEARSON KILLER — pk-migration-bootstrap.js
// Entrada maestra para ejecutar la migración automática por lotes de 50.
// Une: pipeline -> productor -> validación -> preauditor básico -> preauditor celoso -> progreso.
// NO autoaprueba preguntas y NO toca main.
// ============================================================

(function(global){
  'use strict';

  const VERSION = '1.0.0';

  function assertReady(){
    const required = [
      'PK_MIGRATION_PIPELINE',
      'PK_STRICT_PREAUDITOR',
      'PK_MIGRATION_PRODUCER_ADAPTER',
      'PK_MIGRATION_PRODUCER_BRIDGE',
      'PK_MIGRATION_AUTO_CYCLE'
    ];

    const missing = required.filter(name => !global[name]);
    if(missing.length){
      throw new Error(`Dependencias faltantes: ${missing.join(', ')}`);
    }

    return {
      ok: true,
      bootstrap_version: VERSION,
      pipeline_version: global.PK_MIGRATION_PIPELINE.VERSION,
      strict_pre_auditor_version: global.PK_STRICT_PREAUDITOR.VERSION,
      producer_contract_version: global.PK_MIGRATION_PRODUCER_ADAPTER.VERSION,
      producer_bridge_version: global.PK_MIGRATION_PRODUCER_BRIDGE.VERSION,
      auto_cycle_version: global.PK_MIGRATION_AUTO_CYCLE.VERSION
    };
  }

  function createRuntime(options){
    const opts = options || {};
    assertReady();

    if(typeof opts.transport !== 'function'){
      throw new Error('createRuntime requiere transport async(payload, context)');
    }

    const producerAdapter = global.PK_MIGRATION_PRODUCER_BRIDGE.createProducerAdapter(
      opts.transport,
      { provider_name: opts.provider_name || 'custom_model_transport' }
    );

    const baseOptions = {
      concepts: opts.concepts || global.PK_CONCEPTOS_FULL || [],
      producerAdapter,
      state: opts.state || global.PK_MIGRATION_AUTO_CYCLE.createState(),
      onBatchComplete: opts.onBatchComplete
    };

    return {
      version: VERSION,
      readiness: assertReady(),
      producerAdapter,
      state: baseOptions.state,

      async runNextBatch(){
        const result = await global.PK_MIGRATION_AUTO_CYCLE.runNextBatch({
          ...baseOptions,
          state: this.state
        });
        this.state = result.state;
        return result;
      },

      async runAll(){
        const result = await global.PK_MIGRATION_AUTO_CYCLE.runAll({
          ...baseOptions,
          state: this.state
        });
        this.state = result.state;
        return result;
      }
    };
  }

  const API = { VERSION, assertReady, createRuntime };

  if(typeof module !== 'undefined') module.exports = API;
  global.PK_MIGRATION_BOOTSTRAP = API;

})(typeof window !== 'undefined' ? window : globalThis);
