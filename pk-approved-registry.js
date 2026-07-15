// PEARSON KILLER — Registro machine-readable de preguntas aprobadas para examen
// Flujo: toda pregunta que supera auditoría final como Premium/Aprobada se añade aquí;
// el loader la incorpora automáticamente al pool del examen. Reescritura/Rechazada queda fuera.
(function(global){
  'use strict';

  const approvedIds = [
    // Run 010 — 20 aprobadas
    'manual20_r010_001','manual20_r010_002','manual20_r010_003','manual20_r010_004','manual20_r010_005',
    'manual20_r010_006','manual20_r010_007','manual20_r010_008','manual20_r010_009','manual20_r010_010',
    'manual20_r010_011','manual20_r010_012','manual20_r010_013','manual20_r010_014','manual20_r010_015',
    'manual20_r010_016','manual20_r010_017','manual20_r010_018','manual20_r010_019','manual20_r010_020',

    // Run 013 — supervivientes directas 01-20
    'manual40_r013_004','manual40_r013_005','manual40_r013_006','manual40_r013_007','manual40_r013_008',
    'manual40_r013_009','manual40_r013_015','manual40_r013_018','manual40_r013_019',

    // Run 013 — supervivientes directas 21-40
    'manual40_r013_022','manual40_r013_024','manual40_r013_026','manual40_r013_032','manual40_r013_033',
    'manual40_r013_034','manual40_r013_035','manual40_r013_036','manual40_r013_037','manual40_r013_038',
    'manual40_r013_039','manual40_r013_040',

    // Run 013 — reescrituras 01 reauditoría aprobada
    'manual40_r013_001','manual40_r013_002','manual40_r013_003','manual40_r013_010','manual40_r013_011',
    'manual40_r013_012','manual40_r013_014','manual40_r013_016','manual40_r013_017','manual40_r013_020',

    // Run 013 — reescrituras 02 reauditoría aprobada
    'manual40_r013_021_rw','manual40_r013_023_rw','manual40_r013_027_rw','manual40_r013_028_rw',
    'manual40_r013_029_rw','manual40_r013_030_rw'
  ];

  global.PK_APPROVED_REGISTRY = {
    version: '2026-07-15.2',
    approved_ids: approvedIds,
    approved_set: new Set(approvedIds),
    total: approvedIds.length,
    runs: {
      run_010: 20,
      run_013: 37
    },
    status: 'approved_for_branch_exam_integration',
    policy: 'audit_pass_auto_register'
  };
})(typeof window !== 'undefined' ? window : globalThis);