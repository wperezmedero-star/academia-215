// PEARSON KILLER — Banco completo interactivo
// v2 — 16/07/2026
// Añade: (1) contador de aciertos/errores de la sesión con resumen final,
//        (2) filtro dedicado de preguntas con fechas/días/meses/plazos.
(function(){
  'use strict';
  function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}

  // ---- Detector de preguntas de fechas/plazos -------------------------
  // Objetivo: capturar preguntas sobre PLAZOS (días/meses/semanas) y los
  // pares numéricos que más se confunden, evitando las que solo mencionan
  // edades ("un cliente de 79 años") que no son preguntas de plazos.
  var RE_PLAZO   = /\b\d+\s*(d[ií]as?|meses|mes|semanas?|trimestres?)\b/i;      // 31 días, 6 meses
  var RE_EDAD    = /\b\d+\s*a[nñ]os?\s*(de edad)?\b/i;                          // 79 años -> edad
  var RE_ANIOS_PLAZO = /\b\d+\s*a[nñ]os?\b(?![^.]*\b(edad|cliente|asegurado de|persona de|tiene)\b)/i;
  var CONCEPTOS_PLAZO = /(per[ií]odo de gracia|free look|examen gratuito|per[ií]odo de eliminaci[oó]n|per[ií]odo probatorio|incontestabilidad|contestabilidad|per[ií]odo de espera|aviso de reclamaci[oó]n|prueba de p[eé]rdida|acciones legales|restablecimiento|reinstalaci[oó]n|rollover|conversi[oó]n|elecci[oó]n de cobra|cobra|inscripci[oó]n abierta|preexisten|cambio de direcci[oó]n|backdat|retroactiv|suicidio)/i;

  function esDeFechas(row){
    var texto = [row.q, row.concept].concat(row.o||[]).join(' ');
    // 1) Marcada explícitamente como trampa de números/fechas
    if(row.tipo_trampa && /NUMEROS_FECHAS/i.test(row.tipo_trampa)) return true;
    // 2) Menciona un plazo concreto en días/meses/semanas
    if(RE_PLAZO.test(texto)) return true;
    // 3) Trata de un concepto de plazo Y tiene números en juego
    if(CONCEPTOS_PLAZO.test(texto) && /\d/.test(texto)) return true;
    // 4) Años como PLAZO (no como edad): "2 años de incontestabilidad"
    if(RE_ANIOS_PLAZO.test(texto) && CONCEPTOS_PLAZO.test(texto) && !RE_EDAD.test(row.q)) return true;
    return false;
  }

  function flattenBank(){
    var concepts=Array.isArray(window.PK_CONCEPTOS_FULL)?window.PK_CONCEPTOS_FULL:[],rows=[];
    concepts.forEach(function(c){(Array.isArray(c.variantes)?c.variantes:[]).forEach(function(v,idx){
      if(!v||typeof v.q!=='string'||!Array.isArray(v.o)||v.o.length!==4)return;
      var row={id:c.id||'',area:c.area||'generales',areaLabel:(window.AREAS&&window.AREAS[c.area])||c.area||'Generales',concept:c.concepto||c.id||'Concepto',source:c.source||v.source||'',variant:idx+1,q:v.q,o:v.o,a:Number.isInteger(v.a)?v.a:null,e:v.e||v.correcto||'',tipo_trampa:v.tipo_trampa||null};
      row.fechas = esDeFechas(row);
      rows.push(row);
    });});
    return rows;
  }

  function init(){
    var all=flattenBank(); if(!all.length)return;
    var totalFechas = all.filter(function(x){return x.fechas;}).length;
    var state={page:1,size:25,query:'',area:'all',soloFechas:false};
    var areas=Array.from(new Set(all.map(function(x){return x.area;}))).sort();
    // Marcador de la sesión
    var score={ok:0,bad:0,respondidas:{}};

    var style=document.createElement('style');
    style.textContent='\
#pk-bank-open{position:fixed;left:18px;bottom:18px;z-index:9998;border:1px solid rgba(245,207,107,.55);background:linear-gradient(180deg,#244b82,#132d55);color:#ffe9a8;border-radius:999px;padding:12px 18px;font-weight:800;box-shadow:0 8px 22px rgba(0,0,0,.45);cursor:pointer}\
#pk-bank-view{position:fixed;inset:0;z-index:10000;background:#050c1b;color:#e8eef7;overflow:auto;display:none}#pk-bank-view.open{display:block}\
#pk-bank-shell{max-width:980px;margin:0 auto;padding:18px}#pk-bank-head{position:sticky;top:0;z-index:2;background:rgba(5,12,27,.97);padding:10px 0 14px;border-bottom:1px solid #27466f}\
#pk-bank-title{font-size:1.35rem;font-weight:900;color:#f5cf6b;margin-bottom:4px}#pk-bank-tools{display:grid;grid-template-columns:1fr 200px auto;gap:10px;margin-top:12px}\
#pk-bank-tools input,#pk-bank-tools select{background:#0b1b35;color:#fff;border:1px solid #31527c;border-radius:10px;padding:11px}#pk-bank-close{background:#9f2f35;color:#fff;border:0;border-radius:10px;padding:0 16px;font-weight:800}\
#pk-bank-filters{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;align-items:center}\
.pk-chip{border:1px solid #31527c;background:#0b1b35;color:#c7d3e8;border-radius:999px;padding:8px 14px;font-weight:700;font-size:.82rem;cursor:pointer}\
.pk-chip.on{background:linear-gradient(180deg,#e6b84e,#a9781f);color:#101a2c;border-color:#f5cf6b}\
#pk-score{display:flex;gap:14px;align-items:center;flex-wrap:wrap;margin-top:10px;padding:10px 12px;background:#0a1830;border:1px solid #27466f;border-radius:12px;font-size:.86rem}\
#pk-score b{font-size:1.05rem}.pk-ok{color:#34d399}.pk-bad{color:#f87171}.pk-pct{color:#f5cf6b}\
#pk-score-reset{margin-left:auto;background:#17365f;color:#c7d3e8;border:1px solid #31527c;border-radius:8px;padding:6px 12px;font-weight:700;font-size:.78rem;cursor:pointer}\
.pk-bank-card{background:linear-gradient(160deg,#10264a,#0b1b35);border:1px solid rgba(245,207,107,.18);border-radius:16px;padding:16px;margin:14px 0}.pk-bank-meta{font-size:.76rem;color:#9db0cc;margin-bottom:8px}.pk-bank-q{font-weight:800;line-height:1.45;margin-bottom:10px}\
.pk-tag-fecha{display:inline-block;background:#3a2c0a;color:#f5cf6b;border:1px solid rgba(245,207,107,.4);border-radius:999px;padding:1px 8px;font-size:.68rem;font-weight:800;margin-left:6px}\
.pk-bank-opt{display:block;width:100%;text-align:left;padding:10px 12px;border-radius:9px;background:#08162c;color:#e8eef7;margin:7px 0;border:1px solid #203c62;cursor:pointer;font-size:1rem}.pk-bank-opt:hover{border-color:#4d78ad}.pk-bank-opt.correct{border-color:#34d399;background:#0b2a29}.pk-bank-opt.wrong{border-color:#ef4444;background:#35151b}.pk-bank-opt:disabled{cursor:default;opacity:1}\
.pk-bank-exp{display:none;margin-top:10px;color:#b9c8dd;font-size:.84rem;line-height:1.45}.pk-bank-exp.show{display:block}.pk-bank-result{display:none;margin-top:10px;font-weight:800}.pk-bank-result.show{display:block}.pk-bank-result.ok{color:#34d399}.pk-bank-result.bad{color:#f87171}\
#pk-bank-nav{display:flex;align-items:center;justify-content:center;gap:12px;padding:18px 0 36px}#pk-bank-nav button{background:#17365f;color:#fff;border:1px solid #31527c;border-radius:10px;padding:10px 16px;font-weight:800}\
@media(max-width:700px){#pk-bank-tools{grid-template-columns:1fr}#pk-bank-close{padding:11px}#pk-bank-open{left:12px;bottom:12px}#pk-score-reset{margin-left:0}}';
    document.head.appendChild(style);

    var open=document.createElement('button');open.id='pk-bank-open';open.textContent='📚 Ver banco completo ('+all.length+')';document.body.appendChild(open);

    var view=document.createElement('section');view.id='pk-bank-view';
    view.innerHTML='<div id="pk-bank-shell"><div id="pk-bank-head">'+
      '<div id="pk-bank-title">Banco completo interactivo</div>'+
      '<div id="pk-bank-summary"></div>'+
      '<div id="pk-score">'+
        '<span>Aciertos: <b class="pk-ok" id="pk-sc-ok">0</b></span>'+
        '<span>Errores: <b class="pk-bad" id="pk-sc-bad">0</b></span>'+
        '<span>Respondidas: <b id="pk-sc-tot">0</b></span>'+
        '<span>Puntaje: <b class="pk-pct" id="pk-sc-pct">—</b></span>'+
        '<button id="pk-score-reset">Reiniciar marcador</button>'+
      '</div>'+
      '<div id="pk-bank-tools"><input id="pk-bank-search" type="search" placeholder="Buscar palabra o concepto">'+
      '<select id="pk-bank-area"><option value="all">Todas las áreas</option>'+areas.map(function(a){return '<option value="'+esc(a)+'">'+esc(a)+'</option>';}).join('')+'</select>'+
      '<button id="pk-bank-close">Cerrar</button></div>'+
      '<div id="pk-bank-filters">'+
        '<button class="pk-chip on" id="pk-chip-todas">Todas</button>'+
        '<button class="pk-chip" id="pk-chip-fechas">📅 Fechas, días y plazos ('+totalFechas+')</button>'+
      '</div>'+
      '</div><div id="pk-bank-list"></div><div id="pk-bank-nav"><button id="pk-bank-prev">Anterior</button><span id="pk-bank-page"></span><button id="pk-bank-next">Siguiente</button></div></div>';
    document.body.appendChild(view);

    var search=view.querySelector('#pk-bank-search'),area=view.querySelector('#pk-bank-area');
    var chipTodas=view.querySelector('#pk-chip-todas'),chipFechas=view.querySelector('#pk-chip-fechas');

    function renderScore(){
      var tot=score.ok+score.bad;
      view.querySelector('#pk-sc-ok').textContent=score.ok;
      view.querySelector('#pk-sc-bad').textContent=score.bad;
      view.querySelector('#pk-sc-tot').textContent=tot;
      view.querySelector('#pk-sc-pct').textContent = tot ? Math.round(score.ok*100/tot)+'%' : '—';
    }

    function filtered(){
      var q=state.query.trim().toLowerCase();
      return all.filter(function(x){
        if(state.soloFechas && !x.fechas)return false;
        if(state.area!=='all'&&x.area!==state.area)return false;
        if(!q)return true;
        return [x.q,x.concept,x.area,x.source].join(' ').toLowerCase().includes(q);
      });
    }

    function render(){
      var data=filtered(),pages=Math.max(1,Math.ceil(data.length/state.size));
      if(state.page>pages)state.page=pages;
      var start=(state.page-1)*state.size,slice=data.slice(start,start+state.size);
      view.querySelector('#pk-bank-summary').textContent=data.length+' preguntas encontradas · mostrando '+(data.length?start+1:0)+'–'+Math.min(start+state.size,data.length)+' · toca una opción para responder';
      view.querySelector('#pk-bank-list').innerHTML=slice.map(function(x,i){
        var globalIdx=all.indexOf(x);
        var yaResp=score.respondidas[globalIdx];
        var opts=x.o.map(function(opt,j){
          var cls='pk-bank-opt';
          if(yaResp){ if(j===x.a)cls+=' correct'; else if(j===yaResp.chosen)cls+=' wrong'; }
          return '<button class="'+cls+'" data-answer="'+j+'"'+(yaResp?' disabled':'')+'>'+String.fromCharCode(65+j)+') '+esc(opt)+'</button>';
        }).join('');
        var resHtml = yaResp ? '<div class="pk-bank-result show '+(yaResp.ok?'ok':'bad')+'">'+(yaResp.ok?'✅ Correcto':'❌ Incorrecto · guardado en Mis errores')+'</div>' : '<div class="pk-bank-result"></div>';
        var expHtml = x.e ? '<div class="pk-bank-exp'+(yaResp?' show':'')+'"><strong>Explicación:</strong> '+esc(x.e)+'</div>' : '';
        return '<article class="pk-bank-card" data-row="'+globalIdx+'" data-correct="'+x.a+'"'+(yaResp?' data-answered="1"':'')+'><div class="pk-bank-meta">#'+(start+i+1)+' · '+esc(x.area)+' · '+esc(x.concept)+(x.source?' · '+esc(x.source):'')+(x.fechas?'<span class="pk-tag-fecha">📅 plazo</span>':'')+'</div><div class="pk-bank-q">'+esc(x.q)+'</div>'+opts+resHtml+expHtml+'</article>';
      }).join('')||'<div class="pk-bank-card">No se encontraron preguntas con ese filtro.</div>';
      view.querySelector('#pk-bank-page').textContent='Página '+state.page+' de '+pages;
      view.querySelector('#pk-bank-prev').disabled=state.page<=1;
      view.querySelector('#pk-bank-next').disabled=state.page>=pages;
      view.scrollTop=0;
      renderScore();
    }

    view.addEventListener('click',function(e){
      var btn=e.target.closest('.pk-bank-opt');if(!btn)return;
      var card=btn.closest('.pk-bank-card');if(!card||card.dataset.answered==='1')return;
      var chosen=Number(btn.dataset.answer),correct=Number(card.dataset.correct);
      var rowIdx=Number(card.dataset.row),row=all[rowIdx];
      card.dataset.answered='1';
      card.querySelectorAll('.pk-bank-opt').forEach(function(b){b.disabled=true;var n=Number(b.dataset.answer);if(n===correct)b.classList.add('correct');else if(n===chosen)b.classList.add('wrong');});
      var ok=chosen===correct;
      // Marcador de la sesión (una sola vez por pregunta)
      if(!score.respondidas[rowIdx]){
        score.respondidas[rowIdx]={ok:ok,chosen:chosen};
        if(ok)score.ok++; else score.bad++;
        renderScore();
      }
      if(row){
        var q={q:row.q,o:row.o,a:row.a,e:row.e,concept:row.concept,area:row.area,areaLabel:row.areaLabel,tipo_trampa:row.tipo_trampa};
        if(ok&&typeof window.recordCorrect==='function')window.recordCorrect(q);
        if(!ok&&typeof window.recordError==='function')window.recordError(q,chosen);
        if(window.PK_STORAGE&&typeof window.PK_STORAGE.recordAttempt==='function')window.PK_STORAGE.recordAttempt({q:q,correcta:ok,userAnswerIdx:chosen,tiempoMs:null,cambioRespuesta:false});
        if(typeof window.renderStatsSummary==='function')window.renderStatsSummary();
      }
      var result=card.querySelector('.pk-bank-result');
      result.textContent=ok?'✅ Correcto':'❌ Incorrecto · guardado en Mis errores';
      result.className='pk-bank-result show '+(ok?'ok':'bad');
      var exp=card.querySelector('.pk-bank-exp');if(exp)exp.classList.add('show');
    });

    view.querySelector('#pk-score-reset').addEventListener('click',function(){
      score.ok=0;score.bad=0;score.respondidas={};render();
    });

    function setFechas(on){
      state.soloFechas=on;state.page=1;
      chipFechas.classList.toggle('on',on);
      chipTodas.classList.toggle('on',!on);
      render();
    }
    chipFechas.addEventListener('click',function(){setFechas(true);});
    chipTodas.addEventListener('click',function(){setFechas(false);});

    open.addEventListener('click',function(){view.classList.add('open');state.page=1;render();});
    view.querySelector('#pk-bank-close').addEventListener('click',function(){view.classList.remove('open');});
    search.addEventListener('input',function(){state.query=this.value;state.page=1;render();});
    area.addEventListener('change',function(){state.area=this.value;state.page=1;render();});
    view.querySelector('#pk-bank-prev').addEventListener('click',function(){if(state.page>1){state.page--;render();}});
    view.querySelector('#pk-bank-next').addEventListener('click',function(){var p=Math.ceil(filtered().length/state.size)||1;if(state.page<p){state.page++;render();}});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
