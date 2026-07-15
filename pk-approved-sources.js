// PEARSON KILLER — Índice único de fuentes Nueva Generación
// Desde Run 015 en adelante, los nuevos archivos se registran aquí; pk-loader.js no se edita por cada Run.
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
    {name:'simulacro_b1_001',path:'pk-simulacro-b1-import-001.js',global_name:'PK_SIMULACRO_B1_001'}
  ];

  global.PK_APPROVED_SOURCE_INDEX = {
    version:'2026-07-15.6',
    sources:sources,
    total_sources:sources.length,
    policy:'single_manifest_for_approved_runs_and_verified_imports'
  };

  if(typeof document!=='undefined' && document.readyState==='loading'){
    sources.forEach(function(source){
      document.write('<script src="'+source.path+'"><\/script>');
    });
  }
})(typeof window!=='undefined'?window:globalThis);
