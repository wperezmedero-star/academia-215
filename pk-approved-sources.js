// PEARSON KILLER — Índice único de fuentes aprobadas e importaciones verificadas
(function(global){
  'use strict';
  const sources = [
    {name:'run_010_01',path:'pk-migration-manual20-run-010-candidates-01.js',global_name:'PK_MIGRATION_MANUAL20_RUN_010_01'},
    {name:'run_010_02',path:'pk-migration-manual20-run-010-candidates-02.js',global_name:'PK_MIGRATION_MANUAL20_RUN_010_02'},
    {name:'run_013_01',path:'pk-migration-manual40-run-013-candidates-01.js',global_name:'PK_MIGRATION_MANUAL40_RUN_013_01'},
    {name:'run_013_02',path:'pk-migration-manual40-run-013-candidates-02.js',global_name:'PK_MIGRATION_MANUAL40_RUN_013_02'},
    {name:'run_013_rewrites_01',path:'pk-migration-manual40-run-013-rewrites-01.js',global_name:'PK_MIGRATION_MANUAL40_RUN_013_REWRITES_01'},
    {name:'run_013_rewrites_02',path:'pk-migration-manual40-run-013-rewrites-02.js',global_name:'PK_MIGRATION_MANUAL40_RUN_013_REWRITES_02'},
    {name:'run_014_01',path:'pk-migration-manual40-run-014-candidates-01.js',global_name:'PK_MIGRATION_MANUAL40_RUN_014_01'},
    {name:'run_014_rewrites_01',path:'pk-migration-manual40-run-014-rewrites-01.js',global_name:'PK_MIGRATION_MANUAL40_RUN_014_REWRITES_01'},
    {name:'run_014_02',path:'pk-migration-manual40-run-014-candidates-02.js',global_name:'PK_MIGRATION_MANUAL40_RUN_014_02'},
    {name:'run_014_rewrites_02',path:'pk-migration-manual40-run-014-rewrites-02.js',global_name:'PK_MIGRATION_MANUAL40_RUN_014_REWRITES_02'},
    {name:'run_015_01',path:'pk-migration-manual40-run-015-candidates-01.js',global_name:'PK_MIGRATION_MANUAL40_RUN_015_01'},
    {name:'run_015_rewrites_01',path:'pk-migration-manual40-run-015-rewrites-01.js',global_name:'PK_MIGRATION_MANUAL40_RUN_015_REWRITES_01'},
    {name:'run_015_02',path:'pk-migration-manual40-run-015-candidates-02.js',global_name:'PK_MIGRATION_MANUAL40_RUN_015_02'},
    {name:'run_015_rewrites_02',path:'pk-migration-manual40-run-015-rewrites-02.js',global_name:'PK_MIGRATION_MANUAL40_RUN_015_REWRITES_02'},
    {name:'simulacro_b1_001',path:'pk-simulacro-b1-import-001.js',global_name:'PK_SIMULACRO_B1_001'},
    {name:'simulacro_b1_006_055',path:'pk-simulacro-b1-import-006-055.js',global_name:'PK_SIMULACRO_B1_006_055'},
    {name:'simulacro_b2_001_035',path:'pk-simulacro-b2-import-001.js',global_name:'PK_SIMULACRO_B2_001'},
    {name:'simulacro_b2_036_050',path:'pk-simulacro-b2-import-036-050.js',global_name:'PK_SIMULACRO_B2_036_050'},
    {name:'sim_batch_050_1',path:'pk-simulacro-batch-050-01.js',global_name:'PK_SIM_BATCH_050_1'},
    {name:'sim_batch_050_2',path:'pk-simulacro-batch-050-02.js',global_name:'PK_SIM_BATCH_050_2'},
    {name:'sim_batch_050_3',path:'pk-simulacro-batch-050-03.js',global_name:'PK_SIM_BATCH_050_3'},
    {name:'sim_batch_050_4',path:'pk-simulacro-batch-050-04.js',global_name:'PK_SIM_BATCH_050_4'},
    {name:'sim_batch_050_5',path:'pk-simulacro-batch-050-05.js',global_name:'PK_SIM_BATCH_050_5'},
    {name:'sim_batch_050_6',path:'pk-simulacro-batch-050-06.js',global_name:'PK_SIM_BATCH_050_6'},
    {name:'simulacro_b4_011_060',path:'pk-simulacro-b4-import-011-060.js',global_name:'PK_SIMULACRO_B4_011_060'}
  ];
  global.PK_APPROVED_SOURCE_INDEX={version:'2026-07-15.12',sources:sources,total_sources:sources.length,policy:'single_manifest_for_approved_runs_and_verified_imports'};
  if(typeof document!=='undefined'&&document.readyState==='loading') sources.forEach(function(source){document.write('<script src="'+source.path+'"><\/script>');});
})(typeof window!=='undefined'?window:globalThis);