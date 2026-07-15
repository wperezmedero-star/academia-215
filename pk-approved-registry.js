// PEARSON KILLER — Registro machine-readable de preguntas aprobadas para examen
// Fase inicial de integración: Run 010 revisado editorialmente y autorizado para entrar al pool.
(function(global){
  'use strict';
  const approvedIds = [
    'manual20_r010_001','manual20_r010_002','manual20_r010_003','manual20_r010_004','manual20_r010_005',
    'manual20_r010_006','manual20_r010_007','manual20_r010_008','manual20_r010_009','manual20_r010_010',
    'manual20_r010_011','manual20_r010_012','manual20_r010_013','manual20_r010_014','manual20_r010_015',
    'manual20_r010_016','manual20_r010_017','manual20_r010_018','manual20_r010_019','manual20_r010_020'
  ];
  global.PK_APPROVED_REGISTRY = {
    version: '1.0.0',
    approved_ids: approvedIds,
    approved_set: new Set(approvedIds),
    source: 'manual20_run_010',
    status: 'approved_for_branch_exam_integration'
  };
})(typeof window !== 'undefined' ? window : globalThis);
