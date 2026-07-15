// ============================================================
// PEARSON KILLER — pk-migration-pipeline.js
// Pipeline semiautomático para migrar el banco viejo al estándar Pearson real.
// NO aprueba preguntas automáticamente y NO toca main.
//
// Objetivo:
// 1) Inventariar preguntas antiguas.
// 2) Crear trabajos de reescritura por lotes para un modelo externo (Claude/OpenAI).
// 3) Exigir salida estructurada con el patrón validado de los Lotes 10, 14, 15 y 16.
// 4) Preauditar automáticamente estructura y señales de calidad.
// 5) Separar candidatas fuertes, reescritura adicional y rechazo.
// 6) Mantener human_review_status="pending" hasta revisión humana real.
// ============================================================

(function(global){
  'use strict';

  const VERSION = '1.0.0';
  const TARGET_BATCH_SIZE = 10;

  const QUALITY = {
    MIN_QUESTION_CHARS: 150,
    MIN_OPTION_WORDS: 5,
    MIN_CORRECT_EXPLANATION_CHARS: 70,
    MIN_WRONG_EXPLANATION_CHARS: 25,
    MAX_OPTION_LENGTH_RATIO: 1.9,
    MIN_SCORE_CANDIDATE: 8,
    MIN_SCORE_REWRITE: 5
  };

  const DECISIVE_WORDS = [
    'mejor', 'más apropiada', 'más apropiado', 'primero', 'principal',
    'principalmente', 'excepto', 'más probable', 'menos probable'
  ];

  const ABSOLUTES = ['siempre','nunca','todos','ningún','ninguna','únicamente','solo'];

  function words(text){
    return String(text || '').trim().split(/\s+/).filter(Boolean);
  }

  function normalizeOldBank(concepts){
    const rows = [];
    (concepts || []).forEach((concept, ci) => {
      const variants = concept.variantes || concept.variants || [];
      variants.forEach((v, vi) => {
        rows.push({
          source_id: concept.id || `old_concept_${ci+1}`,
          source_variant_index: vi,
          source_area: concept.area || concept.area_blueprint || 'sin_area',
          source_concept: concept.concepto || concept.concept || concept.nombre || '',
          q: v.q || '',
          o: Array.isArray(v.o) ? v.o.slice(0,4) : [],
          a: Number.isInteger(v.a) ? v.a : null,
          e: v.e || v.correcto || '',
          tipo_trampa: v.tipo_trampa || null
        });
      });
    });
    return rows;
  }

  function buildRewriteJob(row, index){
    return {
      migration_id: `migration_${String(index+1).padStart(4,'0')}`,
      source: row,
      target_contract: {
        id: 'string único',
        area: 'área temática',
        subtema_blueprint: 'subtema real',
        concepto: 'principio probado sin regalar la respuesta',
        variantes: [{
          nivel: 5,
          tipo_trampa: 'tipo descriptivo',
          q: 'escenario realista; principio oculto; palabra decisiva solo cuando cambie la lógica',
          o: ['4 opciones de longitud y tono comparables'],
          a: 'índice 0-3',
          trampa: 'por qué al menos dos distractores son tentadores',
          correcto: 'explicación completa de la mejor respuesta',
          incorrectos: ['3 explicaciones individuales'],
          distractor_condicional: 'qué dato haría correcto a un distractor'
        }],
        category: 'killer_ready',
        human_review_status: 'pending'
      },
      rewrite_rules: [
        'No conservar una pregunta definicional si puede convertirse en escenario.',
        'Crear al menos dos distractores técnicamente plausibles basados en reglas vecinas.',
        'La respuesta correcta debe depender de un dato decisivo del escenario, no del tono.',
        'Evitar absolutos como pista automática.',
        'Equilibrar longitud, precisión y estilo entre las cuatro opciones.',
        'No hacer que la respuesta correcta sea sistemáticamente la más larga o más explicativa.',
        'Incluir información secundaria realista sin introducir ambigüedad.',
        'Rechazar la pregunta si dos respuestas son igualmente defendibles.',
        'Explicar individualmente por qué cada opción incorrecta falla en ESTE escenario.',
        'Mantener human_review_status="pending"; ningún modelo puede autoaprobar.'
      ]
    };
  }

  function createRewriteBatches(concepts, batchSize){
    const rows = normalizeOldBank(concepts);
    const size = Math.max(1, batchSize || TARGET_BATCH_SIZE);
    const jobs = rows.map(buildRewriteJob);
    const batches = [];
    for(let i=0;i<jobs.length;i+=size){
      batches.push({
        batch_id: `oldbank_rewrite_${String((i/size)+1).padStart(3,'0')}`,
        version: VERSION,
        jobs: jobs.slice(i, i+size)
      });
    }
    return batches;
  }

  function containsDecisiveWord(q){
    const t = String(q || '').toLowerCase();
    return DECISIVE_WORDS.some(w => t.includes(w));
  }

  function optionLengthRatio(options){
    const lens = (options || []).map(o => Math.max(1, words(o).length));
    if(lens.length !== 4) return Infinity;
    return Math.max(...lens) / Math.min(...lens);
  }

  function absolutePattern(options, answerIndex){
    const flags = (options || []).map(o => {
      const t = String(o || '').toLowerCase();
      return ABSOLUTES.some(a => new RegExp(`\\b${a}\\b`, 'i').test(t));
    });
    const wrongFlags = flags.filter((_,i)=>i!==answerIndex);
    return {
      correct_has_absolute: !!flags[answerIndex],
      wrong_absolute_count: wrongFlags.filter(Boolean).length,
      giveaway_risk: wrongFlags.filter(Boolean).length >= 2 && !flags[answerIndex]
    };
  }

  function preAuditCandidate(concept){
    const v = concept && concept.variantes && concept.variantes[0];
    if(!v) return { score:0, decision:'reject', reasons:['sin variante'] };

    const reasons = [];
    let score = 0;
    const q = v.q || '';
    const o = Array.isArray(v.o) ? v.o : [];
    const wrong = Array.isArray(v.incorrectos) ? v.incorrectos : [];

    if(q.length >= QUALITY.MIN_QUESTION_CHARS) score++; else reasons.push('escenario demasiado corto');
    if(o.length === 4) score++; else reasons.push('no tiene exactamente 4 opciones');
    if(o.length === 4 && o.every(x => words(x).length >= QUALITY.MIN_OPTION_WORDS)) score++; else reasons.push('opciones demasiado simples');
    if(Number.isInteger(v.a) && v.a >= 0 && v.a <= 3) score++; else reasons.push('respuesta correcta inválida');
    if((v.correcto || '').length >= QUALITY.MIN_CORRECT_EXPLANATION_CHARS) score++; else reasons.push('explicación correcta insuficiente');
    if(wrong.length === 3 && wrong.every(x => String(x).length >= QUALITY.MIN_WRONG_EXPLANATION_CHARS)) score++; else reasons.push('faltan explicaciones individuales sólidas');
    if((v.distractor_condicional || '').length >= 35) score++; else reasons.push('distractor condicional débil o ausente');
    if((v.trampa || '').length >= 45) score++; else reasons.push('trampa poco explicada');
    if(optionLengthRatio(o) <= QUALITY.MAX_OPTION_LENGTH_RATIO) score++; else reasons.push('longitud de opciones desequilibrada');

    const abs = absolutePattern(o, v.a);
    if(!abs.giveaway_risk) score++; else reasons.push('posible pista por absolutos en distractores');

    const hasScenarioSignal = /\b(tiene|quiere|necesita|considera|solicita|recibe|puede|desea|prioridad|antes|después)\b/i.test(q);
    if(hasScenarioSignal) score++; else reasons.push('parece definicional, no escenario');

    // La palabra decisiva no es obligatoria, pero si existe debe estar acompañada de escenario.
    if(!containsDecisiveWord(q) || hasScenarioSignal) score++;

    let decision = 'reject';
    if(score >= QUALITY.MIN_SCORE_CANDIDATE) decision = 'candidate_for_human_review';
    else if(score >= QUALITY.MIN_SCORE_REWRITE) decision = 'rewrite_again';

    return {
      score,
      max_score: 12,
      decision,
      reasons,
      human_review_status: 'pending',
      category: decision === 'candidate_for_human_review' ? 'killer_ready' : 'rewrite_required'
    };
  }

  function preAuditBatch(concepts){
    return (concepts || []).map(c => ({
      id: c.id || null,
      audit: preAuditCandidate(c),
      concept: c
    }));
  }

  function splitByDecision(audited){
    return {
      candidates: audited.filter(x => x.audit.decision === 'candidate_for_human_review'),
      rewrite_again: audited.filter(x => x.audit.decision === 'rewrite_again'),
      rejected: audited.filter(x => x.audit.decision === 'reject')
    };
  }

  const API = {
    VERSION,
    QUALITY,
    normalizeOldBank,
    createRewriteBatches,
    preAuditCandidate,
    preAuditBatch,
    splitByDecision
  };

  if(typeof module !== 'undefined') module.exports = API;
  global.PK_MIGRATION_PIPELINE = API;

})(typeof window !== 'undefined' ? window : globalThis);
