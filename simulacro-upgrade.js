// Mejora del Simulacro Oficial 2-15
// Fusiona Academia + Pearson Killer, elimina duplicados, reduce la repetición
// inmediata y muestra el rendimiento en vivo durante el simulacro.
(function(){
  'use strict';

  const PK_BASE_SCRIPTS = [
    'pk-synonyms.js','pk-traps.js','pk-blueprint.js','pk-schema.js','pk-storage.js',
    'pk-data-underwriting.js','pk-data-life.js','pk-data-annuities.js','pk-data-health.js',
    'pk-data-retirement.js','pk-data-florida.js','pk-data-medicare.js','pk-data-ltc.js',
    'pk-data-general.js','pk-data-material-filtrado.js','pk-data-nivel1.js','pk-data-nivel2.js','pk-data-nivel3.js',
    'pk-data-nivel4.js','pk-data-nivel5.js','pk-data-refuerzo.js','pk-data-disposiciones.js',
    'pk-data-campo.js','pk-data-killer-hmoppo.js','pk-data-killer-pilot.js','pk-data-sim128.js'
  ];

  let pkLoadPromise = null;

  function loadScript(src){
    return new Promise((resolve)=>{
      const existing=[...document.scripts].find(s=>{
        const value=s.getAttribute('src')||'';
        return value===src || value.endsWith('/'+src);
      });
      if(existing){
        if(existing.dataset.simLoaded==='yes' || existing.readyState==='complete') resolve();
        else {
          existing.addEventListener('load',resolve,{once:true});
          existing.addEventListener('error',resolve,{once:true});
          setTimeout(resolve,2500);
        }
        return;
      }
      const s=document.createElement('script');
      s.src=src;
      s.async=false;
      s.dataset.simUpgrade=src;
      s.onload=()=>{s.dataset.simLoaded='yes';resolve();};
      s.onerror=()=>{console.warn('No se pudo cargar',src);resolve();};
      document.head.appendChild(s);
    });
  }

  function ensurePearsonBank(){
    if(pkLoadPromise) return pkLoadPromise;
    pkLoadPromise=(async()=>{
      for(const src of PK_BASE_SCRIPTS) await loadScript(src);

      // El cargador original usa document.write y solo funciona mientras el HTML
      // se está construyendo. En Academia se carga después, así que aquí cargamos
      // explícitamente el manifiesto, sus fuentes aprobadas, el registro y el runtime.
      await loadScript('pk-approved-sources.js');
      const approvedSources=(window.PK_APPROVED_SOURCE_INDEX &&
        Array.isArray(window.PK_APPROVED_SOURCE_INDEX.sources))
        ? window.PK_APPROVED_SOURCE_INDEX.sources
        : [];
      for(const source of approvedSources){
        if(source && source.path) await loadScript(source.path);
      }
      await loadScript('pk-approved-registry.js');
      await loadScript('pk-loader-runtime.js?v=20260810-2');

      if(!Array.isArray(window.PK_CONCEPTOS_FULL) || window.PK_CONCEPTOS_FULL.length===0){
        console.error('No se pudo construir el banco completo de Pearson Killer.');
      }
    })();
    return pkLoadPromise;
  }

  // Contrato público para que los demás simulacros de la Academia esperen
  // exactamente la misma carga verificada antes de construir sus bloques.
  window.ensurePearsonBank = ensurePearsonBank;
  window.PK_BANK_READY = ensurePearsonBank();

  function normalizeText(value){
    return String(value||'')
      .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
      .toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  }

  function questionKey(q){
    return normalizeText(q && q.q);
  }

  function shuffled(items){
    const a=[...items];
    for(let i=a.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  }

  function shuffleQuestionOptions(question){
    const copy={...question};
    const options=(question.o||[]).map((text,index)=>({text,index}));
    const mixed=shuffled(options);
    copy.o=mixed.map(item=>item.text);
    copy.a=mixed.findIndex(item=>item.index===question.a);
    return copy;
  }

  function academiaQuestions(){
    const out=[];
    if(typeof L==='undefined' || !Array.isArray(L)) return out;
    L.filter(l=>!(l.intro||'').includes('Próximamente')).forEach(l=>{
      (l.questions||[]).forEach(q=>{
        if(q && q.q && Array.isArray(q.o) && Number.isInteger(q.a)){
          out.push({...q,lessonId:l.id,lessonTitle:l.title,source:'academia'});
        }
      });
    });
    return out;
  }

  function pearsonQuestions(){
    const out=[];
    const areas=window.PK_AREAS_FULL||{};
    const concepts=[...(window.PK_CONCEPTOS_FULL||[])];
    const pilot=window.PK_KILLER_PILOT||[];

    concepts.forEach(c=>{
      const area=c.area||'pearson';
      const areaLabel=areas[area]||area;
      (c.variantes||c.variants||[]).forEach(v=>{
        if(v&&v.q&&Array.isArray(v.o)&&Number.isInteger(v.a)){
          out.push({...v,lessonId:'pk-'+area,lessonTitle:'Pearson Killer: '+areaLabel,source:'pearson'});
        }
      });
    });

    pilot.forEach(v=>{
      if(v&&v.q&&Array.isArray(v.o)&&Number.isInteger(v.a)){
        const area=v.area||'salud';
        out.push({...v,lessonId:'pk-'+area,lessonTitle:'Pearson Killer: '+(v.areaLabel||areas[area]||area),source:'pilot'});
      }
    });
    return out;
  }

  function uniqueQuestions(items){
    if(window.QUESTION_ROTATION){
      return window.QUESTION_ROTATION.dedupeItems(items);
    }
    const seen=new Set();
    const unique=[];
    for(const q of items){
      const key=questionKey(q);
      if(!key || seen.has(key)) continue;
      seen.add(key);
      unique.push(q);
    }
    return unique;
  }

  function readStoredArray(key){
    try{
      const value=JSON.parse(localStorage.getItem(key)||'[]');
      return Array.isArray(value) ? value : [];
    }catch(e){ return []; }
  }

  function selectRotating(pool,count){
    if(window.QUESTION_ROTATION){
      return window.QUESTION_ROTATION.select(pool,count,{
        storageKey:'sim215_seen_keys_v2',
        lastStorageKey:'sim215_last_keys',
        itemStorageKey:'sim215_seen_items_v3',
        cycleStorageKey:'sim215_rotation_cycle_v2',
        shuffleQuestions:true,
        shuffleOptions:true
      });
    }
    const uniquePool=uniqueQuestions(pool);
    const target=Math.min(count,uniquePool.length);
    const validKeys=new Set(uniquePool.map(questionKey));
    const seenSet=new Set(
      readStoredArray('sim215_seen_keys_v2').filter(key=>validKeys.has(key))
    );
    const lastSet=new Set(
      readStoredArray('sim215_last_keys').filter(key=>validKeys.has(key))
    );

    // Primero toma preguntas que nunca se han presentado en el ciclo actual.
    // Dentro de ellas, evita también las del simulacro inmediatamente anterior.
    const unseen=uniquePool.filter(q=>!seenSet.has(questionKey(q)));
    const unseenNotLast=shuffled(unseen.filter(q=>!lastSet.has(questionKey(q))));
    const unseenFromLast=shuffled(unseen.filter(q=>lastSet.has(questionKey(q))));
    let selected=[...unseenNotLast,...unseenFromLast].slice(0,target);
    let nextSeen=new Set(seenSet);
    selected.forEach(q=>nextSeen.add(questionKey(q)));
    let wrappedCycle=false;

    // Si quedan menos de 150 sin ver, termina ese recorrido y completa el
    // simulacro comenzando un ciclo nuevo, sin duplicar dentro del mismo examen.
    if(selected.length<target){
      wrappedCycle=true;
      const selectedKeys=new Set(selected.map(questionKey));
      const candidates=uniquePool.filter(q=>!selectedKeys.has(questionKey(q)));
      const candidatesNotLast=shuffled(candidates.filter(q=>!lastSet.has(questionKey(q))));
      const candidatesFromLast=shuffled(candidates.filter(q=>lastSet.has(questionKey(q))));
      const fill=[...candidatesNotLast,...candidatesFromLast].slice(0,target-selected.length);
      selected=selected.concat(fill);
      nextSeen=new Set(fill.map(questionKey));
    }else if(nextSeen.size>=uniquePool.length){
      // El ciclo terminó exactamente al completar este simulacro.
      nextSeen=new Set();
    }

    const mixed=shuffled(selected).map(shuffleQuestionOptions);
    try{
      const previousCycle=parseInt(localStorage.getItem('sim215_rotation_cycle_v2')||'1',10)||1;
      localStorage.setItem('sim215_seen_keys_v2',JSON.stringify([...nextSeen]));
      localStorage.setItem('sim215_last_keys',JSON.stringify(mixed.map(questionKey)));
      localStorage.setItem('sim215_last_pool_size',String(uniquePool.length));
      localStorage.setItem('sim215_rotation_cycle_v2',String(wrappedCycle?previousCycle+1:previousCycle));
      localStorage.setItem('sim215_rotation_remaining_v2',String(Math.max(0,uniquePool.length-nextSeen.size)));
    }catch(e){}
    return mixed;
  }

  function ensureLiveScorePanel(){
    let panel=document.getElementById('sim-live-score');
    if(panel) return panel;

    panel=document.createElement('div');
    panel.id='sim-live-score';
    panel.style.cssText='display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin:8px 0 10px;';
    panel.innerHTML=
      '<div><div>✅ <span id="sim-correct">0</span></div><div>Correctas</div></div>'+
      '<div><div>❌ <span id="sim-incorrect">0</span></div><div>Incorrectas</div></div>'+
      '<div><div>📝 <span id="sim-answered-live">0</span></div><div>Respondidas</div></div>'+
      '<div><div>📊 <span id="sim-percent">0%</span></div><div>Rendimiento</div></div>';

    const progress=document.querySelector('#simulacro-exam .prog');
    if(progress && progress.parentNode) progress.parentNode.insertBefore(panel,progress);
    return panel;
  }

  function updateLiveScore(){
    if(typeof simQs==='undefined' || typeof simAnswers==='undefined') return;
    if(!ensureLiveScorePanel()) return;

    let answered=0, correct=0;
    simAnswers.forEach((answer,i)=>{
      if(answer===null || answer===undefined) return;
      answered++;
      if(simQs[i] && answer===simQs[i].a) correct++;
    });
    const incorrect=answered-correct;
    const pct=answered ? Math.round((correct/answered)*100) : 0;
    const pctColor=pct>=70?'#22c55e':pct>=60?'#f59e0b':'#ef4444';

    const setText=(id,value)=>{
      const element=document.getElementById(id);
      if(element) element.textContent=String(value);
    };
    setText('sim-correct',correct);
    setText('sim-incorrect',incorrect);
    setText('sim-answered-live',answered);
    setText('sim-answered',answered+' de '+simQs.length+' respondidas');
    setText('sim-percent',pct+'%');

    const percent=document.getElementById('sim-percent');
    if(percent) percent.style.color=pctColor;
  }

  async function upgradedLaunchSimulacro(){
    const startButton=document.querySelector('button[onclick="launchSimulacro()"]');
    const originalText=startButton?startButton.innerHTML:'';
    if(startButton){
      startButton.disabled=true;
      startButton.textContent='Preparando preguntas…';
    }

    await ensurePearsonBank();
    const combined=uniqueQuestions([...academiaQuestions(),...pearsonQuestions()]);
    const selected=selectRotating(combined,150);

    if(selected.length===0){
      if(startButton){startButton.disabled=false;startButton.innerHTML=originalText;}
      alert('No se pudo cargar el banco de preguntas. Recarga la página e inténtalo otra vez.');
      return;
    }

    simQs=selected;
    simAnswers=new Array(simQs.length).fill(null);
    simCurrent=0;
    simTimeLeft=165*60;
    simRunning=true;

    if(startButton){startButton.disabled=false;startButton.innerHTML=originalText;}
    hide();
    document.getElementById('simulacro-exam').classList.remove('hidden');
    renderSimQ();
    renderSimNav();
    updateLiveScore();
    startSimTimer();

    console.info('Simulacro variable:',simQs.length,'seleccionadas de',combined.length,'preguntas únicas.');
  }

  launchSimulacro=upgradedLaunchSimulacro;
  window.launchSimulacro=upgradedLaunchSimulacro;

  // Registra cada selección antes de volver a dibujar la interfaz.
  // El marcador se actualiza en finally para que un fallo visual no pierda la respuesta.
  simPick=function(i){
    const question=simQs[simCurrent];
    if(!question || !Number.isInteger(i) || i<0 || i>=question.o.length) return;
    simAnswers[simCurrent]=i;
    try{
      renderSimQ();
      renderSimNav();
    }finally{
      updateLiveScore();
    }
  };
  window.simPick=simPick;

  // Si el usuario vuelve a una pregunta ya contestada, "Siguiente" lo lleva
  // directamente a la próxima pendiente, en vez de recorrer otra vez las respondidas.
  const originalSimNext=simNext;
  simNext=function(){
    const nextPending=simAnswers.findIndex((answer,index)=>
      index>simCurrent && (answer===null || answer===undefined)
    );
    if(nextPending!==-1){
      simCurrent=nextPending;
      renderSimQ();
      renderSimNav();
      updateLiveScore();
      return;
    }
    originalSimNext();
    updateLiveScore();
  };
  window.simNext=simNext;

  async function refreshBankStatus(){
    await ensurePearsonBank();
    const combined=uniqueQuestions([...academiaQuestions(),...pearsonQuestions()]);
    const total=window.QUESTION_ROTATION
      ? window.QUESTION_ROTATION.dedupePrompts(combined).length
      : combined.length;
    try{ localStorage.setItem('sim215_last_pool_size',String(total)); }catch(e){}
    const menu=document.getElementById('simulacro-menu');
    if(!menu) return total;
    let badge=document.getElementById('sim-bank-status');
    if(!badge){
      badge=document.createElement('div');
      badge.id='sim-bank-status';
      badge.className='box';
      badge.style.cssText='margin-top:14px;border-color:#22c55e;color:#d1fae5;font-weight:800';
      const row=menu.querySelector('.row');
      if(row) row.insertAdjacentElement('beforebegin',badge);
      else menu.appendChild(badge);
    }
    badge.textContent='✅ Banco verificado: '+total.toLocaleString('es-US')+' preguntas únicas disponibles';
    return total;
  }

  async function initializeBank(){
    try{ await refreshBankStatus(); }
    catch(err){ console.warn('No se pudo verificar el tamaño del banco:',err); }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initializeBank,{once:true});
  else initializeBank();
})();
