// PEARSON KILLER — Motor de deduplicación para banco unificado
// Objetivo: mezclar banco viejo + Nueva Generación + simulacros evitando repeticiones exactas y casi duplicadas.
(function(global){
  'use strict';

  function normalizeText(value){
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g,'')
      .toLowerCase()
      .replace(/&[a-z]+;/g,' ')
      .replace(/[^a-z0-9ñáéíóúü\s]/gi,' ')
      .replace(/\b(un|una|unos|unas|el|la|los|las|de|del|al|y|o|que|cual|cuales|como|por|para|en)\b/g,' ')
      .replace(/\s+/g,' ')
      .trim();
  }

  function questionText(item){
    if(!item) return '';
    if(item.q) return item.q;
    if(item.pregunta) return item.pregunta;
    if(Array.isArray(item.variantes) && item.variantes[0]){
      return item.variantes[0].q || item.variantes[0].pregunta || '';
    }
    return '';
  }

  function tokenSet(text){
    return new Set(normalizeText(text).split(' ').filter(function(t){ return t.length > 2; }));
  }

  function jaccard(a,b){
    var A = tokenSet(a), B = tokenSet(b);
    if(!A.size || !B.size) return 0;
    var intersection = 0;
    A.forEach(function(t){ if(B.has(t)) intersection++; });
    return intersection / (A.size + B.size - intersection);
  }

  function conceptKey(item){
    return normalizeText((item && (item.concepto || item.topic || item.area)) || '');
  }

  function similarity(a,b){
    var qa = questionText(a), qb = questionText(b);
    if(!qa || !qb) return 0;
    var textScore = jaccard(qa,qb);
    var ca = conceptKey(a), cb = conceptKey(b);
    var conceptBoost = (ca && cb && (ca === cb || jaccard(ca,cb) >= 0.7)) ? 0.08 : 0;
    return Math.min(1, textScore + conceptBoost);
  }

  function priority(item){
    // Preferimos versiones ya aprobadas; después Nueva Generación; luego fuente general.
    if(item && item.human_review_status === 'approved') return 300;
    if(item && item.category === 'killer_ready') return 200;
    if(item && item.source === 'simulacros') return 120;
    return 100;
  }

  function dedupe(items, options){
    options = options || {};
    var nearThreshold = typeof options.nearThreshold === 'number' ? options.nearThreshold : 0.84;
    var result = [];
    var exactMap = new Map();
    var removed = [];

    (items || []).forEach(function(item){
      var q = questionText(item);
      var exactKey = normalizeText(q);
      if(!exactKey) return;

      if(exactMap.has(exactKey)){
        var existingIndex = exactMap.get(exactKey);
        var existing = result[existingIndex];
        if(priority(item) > priority(existing)){
          removed.push({kept:item, removed:existing, reason:'exact_replaced_by_higher_priority', score:1});
          result[existingIndex] = item;
        } else {
          removed.push({kept:existing, removed:item, reason:'exact_duplicate', score:1});
        }
        return;
      }

      var nearIndex = -1;
      var nearScore = 0;
      for(var i=0;i<result.length;i++){
        var score = similarity(item,result[i]);
        if(score >= nearThreshold && score > nearScore){
          nearIndex = i;
          nearScore = score;
        }
      }

      if(nearIndex >= 0){
        var current = result[nearIndex];
        if(priority(item) > priority(current)){
          removed.push({kept:item, removed:current, reason:'near_duplicate_replaced_by_higher_priority', score:nearScore});
          result[nearIndex] = item;
          exactMap.set(exactKey,nearIndex);
        } else {
          removed.push({kept:current, removed:item, reason:'near_duplicate', score:nearScore});
        }
        return;
      }

      exactMap.set(exactKey,result.length);
      result.push(item);
    });

    return {
      input:(items || []).length,
      output:result.length,
      removed:removed.length,
      questions:result,
      duplicate_report:removed,
      near_threshold:nearThreshold
    };
  }

  global.PK_DEDUPE_ENGINE = {
    version:'2026-07-15.1',
    normalizeText:normalizeText,
    similarity:similarity,
    dedupe:dedupe,
    default_near_threshold:0.84,
    policy:'approved_first_then_killer_ready_then_simulacros'
  };
})(typeof window!=='undefined'?window:globalThis);
