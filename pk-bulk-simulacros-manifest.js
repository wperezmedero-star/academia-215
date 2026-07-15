// PEARSON KILLER — Importación masiva de simulacros PDF
// Fuente: 6 bloques x 70 preguntas + 1 examen final x 100 = 520 preguntas brutas.
// Política: banco total visible para práctica; el banco aprobado conserva su filtro editorial independiente.
(function(global){
  'use strict';

  global.PK_BULK_SIMULACROS_MANIFEST = {
    version: '2026-07-15.1',
    total_raw_questions: 520,
    source_documents: [
      {id:'bloque_1',questions:70,status:'queued_for_import'},
      {id:'bloque_2',questions:70,status:'queued_for_import'},
      {id:'bloque_3',questions:70,status:'queued_for_import'},
      {id:'bloque_4',questions:70,status:'queued_for_import'},
      {id:'bloque_5',questions:70,status:'queued_for_import'},
      {id:'bloque_6',questions:70,status:'queued_for_import'},
      {id:'examen_final',questions:100,status:'queued_for_import'}
    ],
    import_policy: {
      destination:'practice_bank',
      preserve_answer_key:true,
      preserve_explanations:true,
      deduplicate_after_import:true,
      current_fact_review_required:true,
      approved_exam_bank_separate:true
    },
    status:'bulk_import_started'
  };
})(typeof window!=='undefined'?window:globalThis);
