// ============================================================
// PEARSON KILLER — pk-strict-preauditor.js
// Segunda capa automática: preauditor "celoso" de calidad Pearson.
// v1.1.0 — calibrado con Corrida 001.
// Propósito: preferir falsos negativos antes que dejar pasar preguntas débiles.
// NO aprueba preguntas. Solo decide si una candidata merece revisión humana.
// NO toca main ni mezcla preguntas con el modo examen.
// ============================================================

(function(global){
  'use strict';

  const VERSION = '1.1.0';

  const CFG = {
    MIN_STRICT_SCORE: 12,
    MIN_STRONG_DISTRACTORS: 2,
    MAX_CORRECT_LENGTH_RATIO: 1.35,
    MAX_ANY_OPTION_LENGTH_RATIO: 1.65,
    MAX_ABSOLUTE_DISTRACTORS: 1,
    MIN_SCENARIO_CHARS: 180,
    MIN_DECISIVE_FACT_SIGNALS: 3,
    MIN_TRADEOFF_MARKERS: 1
  };

  const ABSOLUTES = ['siempre','nunca','todos','ningún','ninguna','únicamente','solo','automáticamente','necesariamente'];
  const WEAK_DEFINITION_PATTERNS = [
    /qué característica identifica mejor/i,
    /qué producto responde mejor/i,
    /qué opción describe mejor/i,
    /qué análisis es más preciso/i,
    /qué resultado es más probable conforme al funcionamiento normal/i,
    /qué respuesta .* más precisa/i,
    /se llama[:?]?$/i,
    /corresponde a[:?]?$/i
  ];
  const DIRECT_RECOGNITION_PATTERNS = [
    /permanece constante.*prima.*aument/i,
    /devolución de prima/i,
    /edad de maduración/i,
    /no acumula valor en efectivo/i,
    /saldo pendiente.*reduce.*beneficio/i,
    /valor en efectivo.*igual.*beneficio/i
  ];
  const SCENARIO_SIGNALS = [
    'presupuesto','prioridad','antes','después','plazo','salud','necesidad','objetivo',
    'puede pagar','quiere conservar','no puede','ha empeorado','vence','familia','hipoteca',
    'liquidez','costo','riesgo','garantía','flexibilidad','temporal','permanente','sostenible',
    'renunciar','sacrificar','mantener','proteger','conservar','recuperar','comparar'
  ];
  const TRADEOFF_MARKERS = ['pero','aunque','a la vez','sin embargo','mientras','prioridad','limitado','no puede','quiere','sin sacrificar','prefiere'];
  const CONDITIONAL_SIGNALS = ['si ', 'salvo', 'a menos que', 'dependería', 'podría ser correcta', 'sería apropiada'];

  function txt(x){ return String(x || '').trim(); }
  function words(x){ return txt(x).split(/\s+/).filter(Boolean); }
  function lower(x){ return txt(x).toLowerCase(); }

  function countAbsolutes(text){
    const t = lower(text);
    return ABSOLUTES.filter(a => new RegExp(`\\b${a}\\b`, 'i').test(t)).length;
  }

  function lengthStats(options, answerIndex){
    const lens = (options || []).map(o => Math.max(1, words(o).length));
    if(lens.length !== 4 || answerIndex < 0 || answerIndex > 3){
      return { anyRatio: Infinity, correctRatio: Infinity, lens };
    }
    const min = Math.min(...lens);
    const avgWrong = lens.filter((_,i)=>i!==answerIndex).reduce((a,b)=>a+b,0)/3;
    return {
      anyRatio: Math.max(...lens)/min,
      correctRatio: lens[answerIndex]/Math.max(1,avgWrong),
      lens
    };
  }

  function scenarioDepth(q){
    const t = lower(q);
    const signals = SCENARIO_SIGNALS.filter(s => t.includes(s));
    const hasPerson = /\b[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{0,15}\b/.test(txt(q));
    const tradeoffMarkers = TRADEOFF_MARKERS.filter(s => t.includes(s));
    const hasTradeoff = tradeoffMarkers.length >= CFG.MIN_TRADEOFF_MARKERS;
    return {
      signalCount: signals.length,
      signals,
      tradeoffMarkers,
      hasPerson,
      hasTradeoff,
      strong: txt(q).length >= CFG.MIN_SCENARIO_CHARS && hasPerson && hasTradeoff && signals.length >= CFG.MIN_DECISIVE_FACT_SIGNALS
    };
  }

  function looksLikeDefinitionInDisguise(q, concept){
    const ql = lower(q);
    const cl = lower(concept);
    const patternHit = WEAK_DEFINITION_PATTERNS.some(r => r.test(q));
    const directRecognitionHit = DIRECT_RECOGNITION_PATTERNS.some(r => r.test(q));
    const conceptWords = cl.split(/[^a-záéíóúñ0-9]+/i).filter(w => w.length >= 5);
    const overlap = conceptWords.filter(w => ql.includes(w)).length;
    const highOverlap = conceptWords.length > 0 && overlap / conceptWords.length >= 0.5;
    const recognitionWithoutTradeoff = directRecognitionHit && !/(presupuesto|prioridad|sacrificar|comparar|conservar|riesgo|costo)/i.test(q);
    return {
      patternHit,
      directRecognitionHit,
      highOverlap,
      overlap,
      conceptWords: conceptWords.length,
      recognitionWithoutTradeoff,
      risk: (patternHit && highOverlap) || recognitionWithoutTradeoff
    };
  }

  function distractorPlausibility(v){
    const options = Array.isArray(v.o) ? v.o : [];
    const wrong = options.map((o,i)=>({i,o})).filter(x=>x.i!==v.a);
    let strong = 0;
    const details = wrong.map(item => {
      const t = lower(item.o);
      const absurdAbsolute = countAbsolutes(t) >= 1 && /(todo|nunca|siempre|automáticamente|necesariamente|sin importar)/i.test(t);
      const substantive = words(t).length >= 9;
      const adjacentRuleFlavor = /(prima|beneficio|valor|cobertura|convers|suscrip|garant|permanent|término|salud|riesgo|préstamo|liquidación|beneficiario|costo|duración|presupuesto)/i.test(t);
      const hasNuance = /(puede|podría|si|aunque|depende|cuando|mientras|pero|antes)/i.test(t);
      const plausible = substantive && adjacentRuleFlavor && !absurdAbsolute && (hasNuance || words(t).length >= 13);
      if(plausible) strong++;
      return { index:item.i, plausible, absurdAbsolute, substantive, adjacentRuleFlavor, hasNuance };
    });
    return { strong, details };
  }

  function optionToneRisk(v){
    const options = Array.isArray(v.o) ? v.o : [];
    const correct = options[v.a] || '';
    const wrong = options.filter((_,i)=>i!==v.a);
    const correctNuance = /(evaluar|comparar|puede|si|depende|antes de|si el contrato|más coherente|equilibrar)/i.test(correct);
    const wrongAbsoluteCount = wrong.filter(o => countAbsolutes(o) > 0).length;
    const wrongAbsurdCount = wrong.filter(o => /(nunca|siempre|automáticamente|necesariamente|sin importar)/i.test(o)).length;
    const textbookContrast = correctNuance && (wrongAbsoluteCount >= 2 || wrongAbsurdCount >= 2);
    return { correctNuance, wrongAbsoluteCount, wrongAbsurdCount, textbookContrast };
  }

  function conditionalDistractorQuality(v){
    const d = lower(v.distractor_condicional);
    const hasCondition = CONDITIONAL_SIGNALS.some(s => d.includes(s));
    const namesRealAlternative = /(podría|sería|tendría|ganaría|más apropiad|preferible|coherente)/i.test(d);
    return { hasCondition, namesRealAlternative, strong: d.length >= 50 && hasCondition && namesRealAlternative };
  }

  function strictPreAudit(concept){
    const v = concept && concept.variantes && concept.variantes[0];
    if(!v) return { decision:'reject_before_human', score:0, max_score:14, blockers:['sin variante'] };

    const blockers = [];
    const warnings = [];
    let score = 0;

    const q = txt(v.q);
    const options = Array.isArray(v.o) ? v.o : [];
    const scenario = scenarioDepth(q);
    const definition = looksLikeDefinitionInDisguise(q, concept.concepto || concept.subtema_blueprint || '');
    const distractors = distractorPlausibility(v);
    const lengths = lengthStats(options, v.a);
    const tone = optionToneRisk(v);
    const conditional = conditionalDistractorQuality(v);

    if(scenario.strong) score++; else blockers.push('escenario insuficiente o sin conflicto real');
    if(!definition.risk) score++; else blockers.push('definición o reconocimiento directo disfrazado de escenario');
    if(distractors.strong >= CFG.MIN_STRONG_DISTRACTORS) score++; else blockers.push('menos de dos distractores técnicamente plausibles');
    if(lengths.correctRatio <= CFG.MAX_CORRECT_LENGTH_RATIO) score++; else warnings.push('respuesta correcta notablemente más larga que distractores');
    if(lengths.anyRatio <= CFG.MAX_ANY_OPTION_LENGTH_RATIO) score++; else warnings.push('longitud global de opciones desequilibrada');
    if(!tone.textbookContrast) score++; else blockers.push('pista por tono: correcta matizada y distractores demasiado absolutos');
    if(tone.wrongAbsoluteCount <= CFG.MAX_ABSOLUTE_DISTRACTORS) score++; else blockers.push('demasiados distractores descartables por absolutos');
    if(conditional.strong) score++; else blockers.push('distractor condicional insuficiente');
    if(txt(v.trampa).length >= 80 && /(tent|real|ventaja|prioridad|dato decisivo|confund|compite|parece|sacrifica)/i.test(v.trampa)) score++; else warnings.push('trampa no demuestra competencia real entre alternativas');

    const wrongEx = Array.isArray(v.incorrectos) ? v.incorrectos : [];
    if(wrongEx.length === 3 && wrongEx.every(x => txt(x).length >= 50 && /(pero|porque|no|aunque|sin|contradice|ignora|depende|cambia)/i.test(x))) score++;
    else warnings.push('explicaciones de distractores poco contextualizadas');

    if(scenario.signalCount >= CFG.MIN_DECISIVE_FACT_SIGNALS && scenario.hasTradeoff) score++; else blockers.push('falta verdadera tensión entre prioridades');

    const conceptText = lower(concept.concepto || '');
    const correctText = lower(options[v.a] || '');
    const conceptTokens = conceptText.split(/[^a-záéíóúñ0-9]+/i).filter(w=>w.length>=5);
    const repeated = conceptTokens.filter(w=>correctText.includes(w)).length;
    const repetitionRatio = conceptTokens.length ? repeated/conceptTokens.length : 0;
    if(repetitionRatio < 0.65) score++; else blockers.push('respuesta correcta repite demasiado el concepto etiquetado');

    if(conditional.strong && txt(v.distractor_condicional).length >= 55) score++; else blockers.push('no se demuestra una alternativa condicional real');

    const uniqueOptions = new Set(options.map(lower));
    if(options.length === 4 && uniqueOptions.size === 4 && Number.isInteger(v.a) && v.a >= 0 && v.a <= 3) score++;
    else blockers.push('estructura ambigua o inválida');

    let decision = 'rewrite_before_human';
    if(blockers.length === 0 && score >= CFG.MIN_STRICT_SCORE) decision = 'candidate_for_strict_human_review';
    if(score < 8) decision = 'reject_or_rebuild';

    return {
      version: VERSION,
      id: concept.id || null,
      score,
      max_score: 14,
      decision,
      blockers,
      warnings,
      diagnostics: { scenario, definition, distractors, lengths, tone, conditional },
      human_review_status: 'pending'
    };
  }

  function strictPreAuditBatch(concepts){
    const rows = (concepts || []).map(c => ({ concept:c, audit:strictPreAudit(c) }));
    return {
      version: VERSION,
      total: rows.length,
      candidates: rows.filter(x => x.audit.decision === 'candidate_for_strict_human_review'),
      rewrite: rows.filter(x => x.audit.decision === 'rewrite_before_human'),
      rejected: rows.filter(x => x.audit.decision === 'reject_or_rebuild'),
      rows
    };
  }

  const API = { VERSION, CFG, strictPreAudit, strictPreAuditBatch };
  if(typeof module !== 'undefined') module.exports = API;
  global.PK_STRICT_PREAUDITOR = API;

})(typeof window !== 'undefined' ? window : globalThis);
