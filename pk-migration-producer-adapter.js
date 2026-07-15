// ============================================================
// PEARSON KILLER — pk-migration-producer-adapter.js
// Contrato estándar para conectar un modelo productor (Claude/OpenAI/backend propio)
// con el ciclo automático de migración por lotes de 50.
//
// Requisitos de seguridad/calidad:
// - El productor NUNCA aprueba preguntas.
// - Toda salida debe llegar con human_review_status="pending".
// - La salida debe contener exactamente una candidata por job.
// - Los IDs deben ser únicos y trazables al migration_id original.
// - Cualquier lote incompleto se rechaza antes de los auditores.
// ============================================================

(function(global){
  'use strict';

  const VERSION = '1.0.0';

  function buildProductionPayload(run){
    if(!run || !Array.isArray(run.jobs)) throw new Error('run.jobs inválido');

    return {
      contract_version: VERSION,
      run_id: run.run_id,
      expected_count: run.jobs.length,
      output_format: 'json_array_only',
      global_rules: [
        'Producir exactamente una candidata por cada job recibido y en el mismo orden.',
        'No devolver texto fuera del JSON.',
        'Mantener human_review_status="pending".',
        'No usar category="approved" ni equivalentes.',
        'Cada pregunta debe ser un escenario profesional realista, no una definición disfrazada.',
        'Debe haber una sola mejor respuesta, pero al menos dos distractores deben ser técnicamente plausibles.',
        'La respuesta correcta no debe distinguirse por longitud, tono, precisión o ausencia de absolutos.',
        'Incluir una condición bajo la cual un distractor real podría convertirse en la mejor respuesta.',
        'Explicar por qué cada distractor falla en ESTE escenario.',
        'Si una pregunta fuente no admite una transformación clara y no ambigua, reconstruirla desde el principio conservando solo el principio evaluado.'
      ],
      jobs: run.jobs.map(job => ({
        migration_id: job.migration_id,
        source_fingerprint: job.source_fingerprint || null,
        source: job.source,
        target_contract: job.target_contract,
        rewrite_rules: job.rewrite_rules
      }))
    };
  }

  function validateProducedBatch(payload, produced){
    const errors = [];
    const expected = payload && Number.isInteger(payload.expected_count) ? payload.expected_count : 0;

    if(!Array.isArray(produced)){
      return { ok:false, errors:['la salida del productor no es un arreglo'], candidates:[] };
    }

    if(produced.length !== expected){
      errors.push(`cantidad inválida: esperadas ${expected}, recibidas ${produced.length}`);
    }

    const seenIds = new Set();
    const candidates = produced.map((c, index) => {
      const expectedJob = payload.jobs[index];
      const clone = c && typeof c === 'object' ? { ...c } : {};
      const v = clone.variantes && clone.variantes[0];

      if(!clone.id) errors.push(`candidata ${index+1}: falta id`);
      else if(seenIds.has(clone.id)) errors.push(`candidata ${index+1}: id duplicado ${clone.id}`);
      else seenIds.add(clone.id);

      if(!expectedJob) errors.push(`candidata ${index+1}: no existe job correspondiente`);

      clone.migration_id = expectedJob ? expectedJob.migration_id : (clone.migration_id || null);
      clone.source_fingerprint = expectedJob ? expectedJob.source_fingerprint : (clone.source_fingerprint || null);
      clone.human_review_status = 'pending';

      if(clone.category === 'approved'){
        errors.push(`candidata ${index+1}: intento de autoaprobación`);
      }

      if(!Array.isArray(clone.variantes) || clone.variantes.length !== 1){
        errors.push(`candidata ${index+1}: debe contener exactamente una variante`);
      }

      if(v){
        if(!Array.isArray(v.o) || v.o.length !== 4) errors.push(`candidata ${index+1}: debe tener exactamente 4 opciones`);
        if(!Number.isInteger(v.a) || v.a < 0 || v.a > 3) errors.push(`candidata ${index+1}: índice de respuesta inválido`);
        if(!Array.isArray(v.incorrectos) || v.incorrectos.length !== 3) errors.push(`candidata ${index+1}: faltan 3 explicaciones de distractores`);
        if(!v.distractor_condicional) errors.push(`candidata ${index+1}: falta distractor_condicional`);
      }

      return clone;
    });

    return { ok:errors.length === 0, errors, candidates };
  }

  async function produceWithAdapter(run, adapter){
    if(typeof adapter !== 'function') throw new Error('producer adapter debe ser una función async');
    const payload = buildProductionPayload(run);
    const produced = await adapter(payload);
    const validation = validateProducedBatch(payload, produced);
    if(!validation.ok){
      const error = new Error(`lote producido inválido: ${validation.errors.join(' | ')}`);
      error.validation = validation;
      throw error;
    }
    return validation.candidates;
  }

  const API = {
    VERSION,
    buildProductionPayload,
    validateProducedBatch,
    produceWithAdapter
  };

  if(typeof module !== 'undefined') module.exports = API;
  global.PK_MIGRATION_PRODUCER_ADAPTER = API;

})(typeof window !== 'undefined' ? window : globalThis);
