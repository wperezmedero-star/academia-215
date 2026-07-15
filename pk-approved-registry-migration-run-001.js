// PEARSON KILLER — Registro de aprobación final — Migración manual Run 001
// Revisión editorial final: 2026-07-15
// Este registro NO activa preguntas en el examen por sí solo.
(function(global){
'use strict';
const APPROVALS = [
  {id:'manual20_001',tier:'premium',human_review_status:'approved',source:'original'},
  {id:'manual20_002',tier:'premium',human_review_status:'approved',source:'rewrite'},
  {id:'manual20_003',tier:'premium',human_review_status:'approved',source:'original'},
  {id:'manual20_004',tier:'approved',human_review_status:'approved',source:'original'},
  {id:'manual20_005',tier:'premium',human_review_status:'approved',source:'rewrite'},
  {id:'manual20_006',tier:'premium',human_review_status:'approved',source:'original'},
  {id:'manual20_007',tier:'approved',human_review_status:'approved',source:'rewrite'},
  {id:'manual20_008',tier:'premium',human_review_status:'approved',source:'original'},
  {id:'manual20_009',tier:'approved',human_review_status:'approved',source:'original'},
  {id:'manual20_010',tier:'approved',human_review_status:'approved',source:'original'},
  {id:'manual20_011',tier:'premium',human_review_status:'approved',source:'original'},
  {id:'manual20_012',tier:'premium',human_review_status:'approved',source:'rewrite'},
  {id:'manual20_013',tier:'approved',human_review_status:'approved',source:'original'},
  {id:'manual20_014',tier:'premium',human_review_status:'approved',source:'original'},
  {id:'manual20_015',tier:'premium',human_review_status:'approved',source:'rewrite'},
  {id:'manual20_016',tier:'premium',human_review_status:'approved',source:'original'},
  {id:'manual20_017',tier:'approved',human_review_status:'approved',source:'original'},
  {id:'manual20_018',tier:'premium',human_review_status:'approved',source:'rewrite'},
  {id:'manual20_019',tier:'approved',human_review_status:'approved',source:'original'},
  {id:'manual20_020',tier:'approved',human_review_status:'approved',source:'original'}
];
const SUMMARY = Object.freeze({run_id:'manual20_run_001',total:20,premium:11,approved:9,rewrite:0,rejected:0,final_human_review:true,active_in_exam:false});
if(typeof module!=='undefined') module.exports={APPROVALS,SUMMARY};
global.PK_APPROVED_MIGRATION_RUN_001={approvals:APPROVALS,summary:SUMMARY};
})(typeof window!=='undefined'?window:globalThis);
