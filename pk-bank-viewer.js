// PEARSON KILLER — Banco completo interactivo
(function(){
  'use strict';
  function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function flattenBank(){
    var concepts=Array.isArray(window.PK_CONCEPTOS_FULL)?window.PK_CONCEPTOS_FULL:[],rows=[];
    concepts.forEach(function(c){(Array.isArray(c.variantes)?c.variantes:[]).forEach(function(v,idx){
      if(!v||typeof v.q!=='string'||!Array.isArray(v.o)||v.o.length!==4)return;
      rows.push({id:c.id||'',area:c.area||'generales',areaLabel:(window.AREAS&&window.AREAS[c.area])||c.area||'Generales',concept:c.concepto||c.id||'Concepto',source:c.source||v.source||'',variant:idx+1,q:v.q,o:v.o,a:Number.isInteger(v.a)?v.a:null,e:v.e||v.correcto||'',tipo_trampa:v.tipo_trampa||null});
    });});
    return rows;
  }
  function init(){
    var all=flattenBank(); if(!all.length)return;
    var state={page:1,size:25,query:'',area:'all'},areas=Array.from(new Set(all.map(function(x){return x.area;}))).sort();
    var style=document.createElement('style');
    style.textContent='\
#pk-bank-open{position:fixed;left:18px;bottom:18px;z-index:9998;border:1px solid rgba(245,207,107,.55);background:linear-gradient(180deg,#244b82,#132d55);color:#ffe9a8;border-radius:999px;padding:12px 18px;font-weight:800;box-shadow:0 8px 22px rgba(0,0,0,.45);cursor:pointer}\
#pk-bank-view{position:fixed;inset:0;z-index:10000;background:#050c1b;color:#e8eef7;overflow:auto;display:none}#pk-bank-view.open{display:block}\
#pk-bank-shell{max-width:980px;margin:0 auto;padding:18px}#pk-bank-head{position:sticky;top:0;z-index:2;background:rgba(5,12,27,.97);padding:10px 0 14px;border-bottom:1px solid #27466f}\
#pk-bank-title{font-size:1.35rem;font-weight:900;color:#f5cf6b;margin-bottom:4px}#pk-bank-tools{display:grid;grid-template-columns:1fr 220px auto;gap:10px;margin-top:12px}\
#pk-bank-tools input,#pk-bank-tools select{background:#0b1b35;color:#fff;border:1px solid #31527c;border-radius:10px;padding:11px}#pk-bank-close{background:#9f2f35;color:#fff;border:0;border-radius:10px;padding:0 16px;font-weight:800}\
.pk-bank-card{background:linear-gradient(160deg,#10264a,#0b1b35);border:1px solid rgba(245,207,107,.18);border-radius:16px;padding:16px;margin:14px 0}.pk-bank-meta{font-size:.76rem;color:#9db0cc;margin-bottom:8px}.pk-bank-q{font-weight:800;line-height:1.45;margin-bottom:10px}\
.pk-bank-opt{display:block;width:100%;text-align:left;padding:10px 12px;border-radius:9px;background:#08162c;color:#e8eef7;margin:7px 0;border:1px solid #203c62;cursor:pointer;font-size:1rem}.pk-bank-opt:hover{border-color:#4d78ad}.pk-bank-opt.correct{border-color:#34d399;background:#0b2a29}.pk-bank-opt.wrong{border-color:#ef4444;background:#35151b}.pk-bank-opt:disabled{cursor:default;opacity:1}\
.pk-bank-exp{display:none;margin-top:10px;color:#b9c8dd;font-size:.84rem;line-height:1.45}.pk-bank-exp.show{display:block}.pk-bank-result{display:none;margin-top:10px;font-weight:800}.pk-bank-result.show{display:block}.pk-bank-result.ok{color:#34d399}.pk-bank-result.bad{color:#f87171}\
#pk-bank-nav{display:flex;align-items:center;justify-content:center;gap:12px;padding:18px 0 36px}#pk-bank-nav button{background:#17365f;color:#fff;border:1px solid #31527c;border-radius:10px;padding:10px 16px;font-weight:800}\
@media(max-width:700px){#pk-bank-tools{grid-template-columns:1fr}#pk-bank-close{padding:11px}#pk-bank-open{left:12px;bottom:12px}}';
    document.head.appendChild(style);
    var open=document.createElement('button');open.id='pk-bank-open';open.textContent='📚 Ver banco completo ('+all.length+')';document.body.appendChild(open);
    var view=document.createElement('section');view.id='pk-bank-view';
    view.innerHTML='<div id="pk-bank-shell"><div id="pk-bank-head"><div id="pk-bank-title">Banco completo interactivo</div><div id="pk-bank-summary"></div><div id="pk-bank-tools"><input id="pk-bank-search" type="search" placeholder="Buscar palabra o concepto"><select id="pk-bank-area"><option value="all">Todas las áreas</option>'+areas.map(function(a){return '<option value="'+esc(a)+'">'+esc(a)+'</option>';}).join('')+'</select><button id="pk-bank-close">Cerrar</button></div></div><div id="pk-bank-list"></div><div id="pk-bank-nav"><button id="pk-bank-prev">Anterior</button><span id="pk-bank-page"></span><button id="pk-bank-next">Siguiente</button></div></div>';
    document.body.appendChild(view);
    var search=view.querySelector('#pk-bank-search'),area=view.querySelector('#pk-bank-area');
    function filtered(){var q=state.query.trim().toLowerCase();return all.filter(function(x){if(state.area!=='all'&&x.area!==state.area)return false;if(!q)return true;return [x.q,x.concept,x.area,x.source].join(' ').toLowerCase().includes(q);});}
    function render(){
      var data=filtered(),pages=Math.max(1,Math.ceil(data.length/state.size));if(state.page>pages)state.page=pages;var start=(state.page-1)*state.size,slice=data.slice(start,start+state.size);
      view.querySelector('#pk-bank-summary').textContent=data.length+' preguntas encontradas · mostrando '+(data.length?start+1:0)+'–'+Math.min(start+state.size,data.length)+' · toca una opción para responder';
      view.querySelector('#pk-bank-list').innerHTML=slice.map(function(x,i){
        var opts=x.o.map(function(opt,j){return '<button class="pk-bank-opt" data-answer="'+j+'">'+String.fromCharCode(65+j)+') '+esc(opt)+'</button>';}).join('');
        return '<article class="pk-bank-card" data-row="'+(start+i)+'" data-correct="'+x.a+'"><div class="pk-bank-meta">#'+(start+i+1)+' · '+esc(x.area)+' · '+esc(x.concept)+(x.source?' · '+esc(x.source):'')+'</div><div class="pk-bank-q">'+esc(x.q)+'</div>'+opts+'<div class="pk-bank-result"></div>'+(x.e?'<div class="pk-bank-exp"><strong>Explicación:</strong> '+esc(x.e)+'</div>':'')+'</article>';
      }).join('')||'<div class="pk-bank-card">No se encontraron preguntas con ese filtro.</div>';
      view.querySelector('#pk-bank-page').textContent='Página '+state.page+' de '+pages;view.querySelector('#pk-bank-prev').disabled=state.page<=1;view.querySelector('#pk-bank-next').disabled=state.page>=pages;view.scrollTop=0;
    }
    view.addEventListener('click',function(e){
      var btn=e.target.closest('.pk-bank-opt');if(!btn)return;var card=btn.closest('.pk-bank-card');if(!card||card.dataset.answered==='1')return;
      var chosen=Number(btn.dataset.answer),correct=Number(card.dataset.correct),row=all[Number(card.dataset.row)];card.dataset.answered='1';
      card.querySelectorAll('.pk-bank-opt').forEach(function(b){b.disabled=true;var n=Number(b.dataset.answer);if(n===correct)b.classList.add('correct');else if(n===chosen)b.classList.add('wrong');});
      var ok=chosen===correct;
      if(row){
        var q={q:row.q,o:row.o,a:row.a,e:row.e,concept:row.concept,area:row.area,areaLabel:row.areaLabel,tipo_trampa:row.tipo_trampa};
        if(ok&&typeof window.recordCorrect==='function')window.recordCorrect(q);
        if(!ok&&typeof window.recordError==='function')window.recordError(q,chosen);
        if(window.PK_STORAGE&&typeof window.PK_STORAGE.recordAttempt==='function')window.PK_STORAGE.recordAttempt({q:q,correcta:ok,userAnswerIdx:chosen,tiempoMs:null,cambioRespuesta:false});
        if(typeof window.renderStatsSummary==='function')window.renderStatsSummary();
      }
      var result=card.querySelector('.pk-bank-result');result.textContent=ok?'✅ Correcto':'❌ Incorrecto · guardado en Mis errores';result.className='pk-bank-result show '+(ok?'ok':'bad');var exp=card.querySelector('.pk-bank-exp');if(exp)exp.classList.add('show');
    });
    open.addEventListener('click',function(){view.classList.add('open');state.page=1;render();});view.querySelector('#pk-bank-close').addEventListener('click',function(){view.classList.remove('open');});
    search.addEventListener('input',function(){state.query=this.value;state.page=1;render();});area.addEventListener('change',function(){state.area=this.value;state.page=1;render();});
    view.querySelector('#pk-bank-prev').addEventListener('click',function(){if(state.page>1){state.page--;render();}});view.querySelector('#pk-bank-next').addEventListener('click',function(){var p=Math.ceil(filtered().length/state.size)||1;if(state.page<p){state.page++;render();}});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();