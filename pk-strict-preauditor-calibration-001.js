// ============================================================
// PEARSON KILLER — pk-strict-preauditor-calibration-001.js
// Calibración supervisada del preauditor celoso usando la Corrida 001.
// Verdad humana estricta conocida:
//   approved: 001, 003, 006, 008, 010
//   pending/rewrite: 002, 004, 005, 007, 009
//
// Este archivo NO aprueba preguntas ni toca main.
// Mide concordancia entre el filtro automático y la auditoría humana.
// ============================================================

(function(global){
  'use strict';

  const HUMAN_GOLD = {
    migration001_life_001: 'pass',
    migration001_life_002: 'hold',
    migration001_life_003: 'pass',
    migration001_life_004: 'hold',
    migration001_life_005: 'hold',
    migration001_life_006: 'pass',
    migration001_life_007: 'hold',
    migration001_life_008: 'pass',
    migration001_life_009: 'hold',
    migration001_life_010: 'pass'
  };

  function runCalibration(concepts, strictAuditor){
    if(!strictAuditor || typeof strictAuditor.strictPreAuditBatch !== 'function'){
      throw new Error('PK_STRICT_PREAUDITOR no está disponible');
    }

    const result = strictAuditor.strictPreAuditBatch(concepts || []);
    const rows = result.rows.map(row => {
      const id = row.audit.id;
      const human = HUMAN_GOLD[id] || 'unknown';
      const automatic = row.audit.decision === 'candidate_for_strict_human_review' ? 'pass' : 'hold';
      return {
        id,
        human,
        automatic,
        match: human === automatic,
        score: row.audit.score,
        decision: row.audit.decision,
        blockers: row.audit.blockers,
        warnings: row.audit.warnings
      };
    });

    const known = rows.filter(r => r.human !== 'unknown');
    const tp = known.filter(r => r.human === 'pass' && r.automatic === 'pass').length;
    const tn = known.filter(r => r.human === 'hold' && r.automatic === 'hold').length;
    const fp = known.filter(r => r.human === 'hold' && r.automatic === 'pass').length;
    const fn = known.filter(r => r.human === 'pass' && r.automatic === 'hold').length;
    const accuracy = known.length ? (tp + tn) / known.length : 0;
    const precision = (tp + fp) ? tp / (tp + fp) : 0;
    const recall = (tp + fn) ? tp / (tp + fn) : 0;
    const specificity = (tn + fp) ? tn / (tn + fp) : 0;

    return {
      total_known: known.length,
      true_positive: tp,
      true_negative: tn,
      false_positive: fp,
      false_negative: fn,
      accuracy,
      precision,
      recall,
      specificity,
      rows,
      recommendation:
        fp > 0
          ? 'Endurecer bloqueadores: el filtro todavía deja pasar preguntas humanas pendientes.'
          : fn > 2
            ? 'Revisar exceso de dureza: hay demasiadas preguntas humanas aprobadas retenidas.'
            : 'Calibración conservadora aceptable para avanzar a la Corrida 002.'
    };
  }

  const API = { HUMAN_GOLD, runCalibration };
  if(typeof module !== 'undefined') module.exports = API;
  global.PK_STRICT_PREAUDITOR_CALIBRATION_001 = API;

})(typeof window !== 'undefined' ? window : globalThis);
