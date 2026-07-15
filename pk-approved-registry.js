// PEARSON KILLER — Registro machine-readable de preguntas aprobadas para examen
// Incluye aprobadas editoriales y simulacros importados con control acelerado.
(function(global){
  'use strict';

  const approvedIds = [
    'manual20_r010_001','manual20_r010_002','manual20_r010_003','manual20_r010_004','manual20_r010_005',
    'manual20_r010_006','manual20_r010_007','manual20_r010_008','manual20_r010_009','manual20_r010_010',
    'manual20_r010_011','manual20_r010_012','manual20_r010_013','manual20_r010_014','manual20_r010_015',
    'manual20_r010_016','manual20_r010_017','manual20_r010_018','manual20_r010_019','manual20_r010_020',
    'manual40_r013_004','manual40_r013_005','manual40_r013_006','manual40_r013_007','manual40_r013_008',
    'manual40_r013_009','manual40_r013_015','manual40_r013_018','manual40_r013_019','manual40_r013_022',
    'manual40_r013_024','manual40_r013_026','manual40_r013_032','manual40_r013_033','manual40_r013_034',
    'manual40_r013_035','manual40_r013_036','manual40_r013_037','manual40_r013_038','manual40_r013_039',
    'manual40_r013_040','manual40_r013_001','manual40_r013_002','manual40_r013_003','manual40_r013_010',
    'manual40_r013_011','manual40_r013_012','manual40_r013_014','manual40_r013_016','manual40_r013_017',
    'manual40_r013_020','manual40_r013_021_rw','manual40_r013_023_rw','manual40_r013_027_rw','manual40_r013_028_rw',
    'manual40_r013_029_rw','manual40_r013_030_rw','manual40_r014_001','manual40_r014_002','manual40_r014_003',
    'manual40_r014_004','manual40_r014_005','manual40_r014_006','manual40_r014_007','manual40_r014_008',
    'manual40_r014_009','manual40_r014_010','manual40_r014_011','manual40_r014_012','manual40_r014_013',
    'manual40_r014_014','manual40_r014_015','manual40_r014_016','manual40_r014_017','manual40_r014_018',
    'manual40_r014_019','manual40_r014_020','manual40_r014_022','manual40_r014_024','manual40_r014_025',
    'manual40_r014_026','manual40_r014_027','manual40_r014_028','manual40_r014_029','manual40_r014_031',
    'manual40_r014_032','manual40_r014_033','manual40_r014_034','manual40_r014_037','manual40_r014_038',
    'manual40_r014_039','manual40_r014_021_rw','manual40_r014_023_rw','manual40_r014_030_rw','manual40_r014_035_rw',
    'manual40_r014_036_rw','manual40_r014_040_rw','manual40_r015_001','manual40_r015_003','manual40_r015_004',
    'manual40_r015_005','manual40_r015_009','manual40_r015_011','manual40_r015_012','manual40_r015_013',
    'manual40_r015_015','manual40_r015_016','manual40_r015_018','manual40_r015_020','manual40_r015_002_rw',
    'manual40_r015_006_rw','manual40_r015_007_rw','manual40_r015_008_rw','manual40_r015_010_rw','manual40_r015_014_rw',
    'manual40_r015_017_rw','manual40_r015_019_rw','manual40_r015_021','manual40_r015_022','manual40_r015_023',
    'manual40_r015_024','manual40_r015_026','manual40_r015_029','manual40_r015_030','manual40_r015_032',
    'manual40_r015_034','manual40_r015_036','manual40_r015_037','manual40_r015_039','manual40_r015_040',
    'manual40_r015_025_rw','manual40_r015_027_rw','manual40_r015_028_rw','manual40_r015_031_rw','manual40_r015_033_rw',
    'manual40_r015_035_rw','manual40_r015_038_rw',
    'sim_b1_001','sim_b1_002','sim_b1_003','sim_b1_004','sim_b1_005','sim_b1_006','sim_b1_007','sim_b1_008','sim_b1_009',
    'sim_b1_011','sim_b1_012','sim_b1_013','sim_b1_014','sim_b1_015','sim_b1_016','sim_b1_017','sim_b1_018','sim_b1_019',
    'sim_b1_020','sim_b1_021','sim_b1_022','sim_b1_023','sim_b1_024','sim_b1_025','sim_b1_026','sim_b1_027','sim_b1_028','sim_b1_029',
    'sim_b1_030','sim_b1_031','sim_b1_032','sim_b1_033','sim_b1_034','sim_b1_035','sim_b1_036','sim_b1_037','sim_b1_038','sim_b1_039',
    'sim_b1_040','sim_b1_041','sim_b1_042','sim_b1_043','sim_b1_044','sim_b1_045','sim_b1_046','sim_b1_047','sim_b1_048','sim_b1_049',
    'sim_b1_050','sim_b1_051','sim_b1_053','sim_b1_054','sim_b1_055',
    'sim_b2_001','sim_b2_002','sim_b2_003','sim_b2_004','sim_b2_005','sim_b2_006','sim_b2_007','sim_b2_008','sim_b2_009','sim_b2_010',
    'sim_b2_011','sim_b2_012','sim_b2_013','sim_b2_014','sim_b2_015','sim_b2_016','sim_b2_017','sim_b2_018','sim_b2_019','sim_b2_020',
    'sim_b2_021','sim_b2_022','sim_b2_023','sim_b2_024','sim_b2_025','sim_b2_026','sim_b2_027','sim_b2_028','sim_b2_029','sim_b2_030',
    'sim_b2_031','sim_b2_032','sim_b2_033','sim_b2_034','sim_b2_035',
    'sim_b2_036','sim_b2_037','sim_b2_038','sim_b2_039','sim_b2_040','sim_b2_041','sim_b2_042','sim_b2_043','sim_b2_044','sim_b2_045',
    'sim_b2_046','sim_b2_047','sim_b2_048','sim_b2_049','sim_b2_050'
  ];

  global.PK_APPROVED_REGISTRY = {
    version: '2026-07-15.14',
    approved_ids: approvedIds,
    approved_set: new Set(approvedIds),
    total: approvedIds.length,
    runs: {
      run_010: 20,
      run_013: 37,
      run_014: 40,
      run_015: 40,
      simulacro_b1_imported: 53,
      simulacro_b1_held_for_current_fact_check: 2,
      simulacro_b2_imported: 50
    },
    status: 'approved_and_accelerated_imports_for_branch_exam_integration',
    policy: 'audit_pass_or_verified_import_auto_register; current_fact_items_can_be_held'
  };
})(typeof window !== 'undefined' ? window : globalThis);