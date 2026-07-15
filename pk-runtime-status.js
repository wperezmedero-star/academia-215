// PEARSON KILLER — Verificador visible del banco en ejecución
(function(global){
  'use strict';

  function countQuestions(concepts){
    return (concepts || []).reduce(function(total, concept){
      return total + (Array.isArray(concept && concept.variantes) ? concept.variantes.length : 0);
    }, 0);
  }

  function renderRuntimeStatus(){
    var status = global.PK_LOADER_STATUS || {};
    var concepts = Array.isArray(global.PK_CONCEPTOS_FULL) ? global.PK_CONCEPTOS_FULL : [];
    var questions = countQuestions(concepts);
    var missing = Array.isArray(status.missingSources) ? status.missingSources : [];
    var loaded = Number(status.loadedSources || 0);
    var registered = Number(status.registeredSources || 0);
    var approved = Number(status.approvedMigrationQuestions || 0);
    var ok = concepts.length > 0 && questions > 0 && missing.length === 0 && loaded === registered;

    global.PK_RUNTIME_VERIFICATION = {
      ok: ok,
      totalConcepts: concepts.length,
      totalQuestions: questions,
      approvedImportedQuestions: approved,
      registeredSources: registered,
      loadedSources: loaded,
      missingSources: missing.slice(),
      loaderVersion: status.version || null,
      checkedAt: new Date().toISOString()
    };

    var home = document.getElementById('home');
    if (!home || document.getElementById('pk-runtime-bank-status')) return;

    var box = document.createElement('div');
    box.id = 'pk-runtime-bank-status';
    box.style.cssText = 'margin:0 0 14px;padding:12px 14px;border-radius:14px;font-size:.78rem;line-height:1.45;text-align:center;background:' +
      (ok ? 'rgba(52,211,153,.10)' : 'rgba(239,68,68,.10)') + ';border:1px solid ' +
      (ok ? 'rgba(52,211,153,.40)' : 'rgba(239,68,68,.45)') + ';color:' +
      (ok ? '#a7f3d0' : '#fecaca') + ';';

    if (ok) {
      box.innerHTML = '<strong>Banco verificado en ejecución</strong><br>' +
        concepts.length + ' conceptos · ' + questions + ' preguntas/variantes · ' +
        approved + ' importadas aprobadas · ' + loaded + '/' + registered + ' fuentes cargadas';
    } else {
      box.innerHTML = '<strong>Banco con carga incompleta</strong><br>' +
        concepts.length + ' conceptos · ' + questions + ' preguntas/variantes · fuentes ' + loaded + '/' + registered +
        (missing.length ? '<br>Faltan: ' + missing.join(', ') : '');
    }

    home.insertBefore(box, home.firstChild);
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderRuntimeStatus);
    else renderRuntimeStatus();
  }
})(typeof window !== 'undefined' ? window : globalThis);
