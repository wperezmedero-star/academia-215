// ============================================================
// PEARSON KILLER — pk-migration-run-002-orchestrator.js
// Orquestador de la Corrida 002 (50 preguntas):
// fuente -> candidatas reescritas -> preauditor básico -> preauditor celoso.
// NO aprueba preguntas y NO modifica main.
// ============================================================

(function(global){
  'use strict';

  const VERSION = '1.0.0';
  const RUN_ID = 'migration_run_002_50';

  function requireApi(name, value){
    if(!value) throw new Error(`${name} no está cargado`);
    return value;
  }

  function idsOf(rows){
    return (rows || []).map(x => x && (x.id || (x.concept && x.concept.id))).filter(Boolean);
  }

  function validateCandidateSet(candidates, expectedCount){
    const rows = Array.isArray(candidates) ? candidates : [];
    const errors = [];
    const ids = rows.map(x => x && x.id).filter(Boolean);
    const unique = new Set(ids);

    if(rows.length !== expectedCount){
      errors.push(`cantidad inesperada: ${rows.length}; se esperaban ${expectedCount}`);
    }
    if(ids.length !== rows.length){
      errors.push('hay candidatas sin id');
    }
    if(unique.size !== ids.length){
      errors.push('hay ids duplicados');
    }

    rows.forEach((c, i) => {
      const v = c && Array.isArray(c.variantes) ? c.variantes[0] : null;
      if(!v) errors.push(`candidata ${i+1}: sin variante`);
      else {
        if(!Array.isArray(v.o) || v.o.length !== 4) errors.push(`candidata ${i+1}: opciones inválidas`);
        if(!Number.isInteger(v.a) || v.a < 0 || v.a > 3) errors.push(`candidata ${i+1}: índice correcto inválido`);
      }
      if(c && c.human_review_status !== 'pending'){
        errors.push(`candidata ${i+1}: human_review_status debe permanecer pending`);
      }
    });

    return {
      ok: errors.length === 0,
      expected_count: expectedCount,
      actual_count: rows.length,
      unique_ids: unique.size,
      errors
    };
  }

  function executeDualAudit(candidates, expectedCount){
    const pipeline = requireApi('PK_MIGRATION_PIPELINE', global.PK_MIGRATION_PIPELINE);
    const strict = requireApi('PK_STRICT_PREAUDITOR', global.PK_STRICT_PREAUDITOR);
    const validation = validateCandidateSet(candidates, expectedCount);

    const basicRows = pipeline.preAuditBatch(candidates || []);
    const basicSplit = pipeline.splitByDecision(basicRows);

    // Solo las que sobreviven al filtro básico llegan al filtro celoso.
    const basicCandidates = basicSplit.candidates.map(x => x.concept);
    const strictResult = strict.strictPreAuditBatch(basicCandidates);

    const strictCandidateIds = new Set(idsOf(strictResult.candidates));
    const strictRewriteIds = new Set(idsOf(strictResult.rewrite));
    const strictRejectedIds = new Set(idsOf(strictResult.rejected));

    const finalRows = (candidates || []).map(concept => {
      const basic = basicRows.find(x => x.id === concept.id);
      let final_decision = 'reject_or_rebuild';
      let strict_audit = null;

      if(basic && basic.audit.decision === 'candidate_for_human_review'){
        const strictRow = strictResult.rows.find(x => x.concept && x.concept.id === concept.id);
        strict_audit = strictRow ? strictRow.audit : null;
        if(strictCandidateIds.has(concept.id)) final_decision = 'candidate_for_strict_human_review';
        else if(strictRewriteIds.has(concept.id)) final_decision = 'rewrite_before_human';
        else if(strictRejectedIds.has(concept.id)) final_decision = 'reject_or_rebuild';
      } else if(basic && basic.audit.decision === 'rewrite_again'){
        final_decision = 'rewrite_before_human';
      }

      return {
        id: concept.id,
        concept,
        basic_audit: basic ? basic.audit : null,
        strict_audit,
        final_decision,
        human_review_status: 'pending'
      };
    });

    return {
      version: VERSION,
      run_id: RUN_ID,
      validation,
      total: finalRows.length,
      candidate_for_strict_human_review: finalRows.filter(x => x.final_decision === 'candidate_for_strict_human_review'),
      rewrite_before_human: finalRows.filter(x => x.final_decision === 'rewrite_before_human'),
      reject_or_rebuild: finalRows.filter(x => x.final_decision === 'reject_or_rebuild'),
      rows: finalRows,
      policy: {
        auto_approval: false,
        human_review_required: true,
        exam_integration: false
      }
    };
  }

  function summarize(result){
    return {
      run_id: result.run_id,
      total: result.total,
      valid_input: !!(result.validation && result.validation.ok),
      strict_candidates: result.candidate_for_strict_human_review.length,
      rewrite: result.rewrite_before_human.length,
      rejected: result.reject_or_rebuild.length,
      human_review_status: 'pending'
    };
  }

  const API = {
    VERSION,
    RUN_ID,
    validateCandidateSet,
    executeDualAudit,
    summarize
  };

  if(typeof module !== 'undefined') module.exports = API;
  global.PK_MIGRATION_RUN_002_ORCHESTRATOR = API;

})(typeof window !== 'undefined' ? window : globalThis);
