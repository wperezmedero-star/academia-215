// Mejora del Simulacro Oficial 2-15
// Fusiona Academia + Pearson Killer, elimina duplicados, reduce la repetición
// inmediata y muestra el rendimiento en vivo durante el simulacro.
(function(){
  'use strict';

  const PK_SCRIPTS = [
    'pk-synonyms.js','pk-traps.js','pk-blueprint.js','pk-schema.js','pk-storage.js',
    'pk-data-underwriting.js','pk-data-life.js','pk-data-annuities.js','pk-data-health.js',
    'pk-data-retirement.js','pk-data-florida.js','pk-data-medicare.js','pk-data-ltc.js',
    'pk-data-general.js','pk-data-nivel1.js','pk-data-nivel2.js','pk-data-nivel3.js',
    'pk-data-nivel4.js','pk-data-nivel5.js','pk-data-refuerzo.js','pk-data-disposiciones.js',
    'pk-data-campo.js','pk-data-killer-hmoppo.js','pk-data-killer-pilot.js','pk-loader.js'
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
      for(const src of PK_SCRIPTS) await loadScript(src);
    })();
    return pkLoadPromise;
  }

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

  function selectRotating(pool,count){
    let previous=[];
    try{ previous=JSON.parse(localStorage.getItem('sim215_last_keys')||'[]'); }
    catch(e){ previous=[]; }

    const previousSet=new Set(previous);
    const fresh=shuffled(pool.filter(q=>!previousSet.has(questionKey(q))));
    const repeated=shuffled(pool.filter(q=>previousSet.has(questionKey(q))));
    const selected=[...fresh,...repeated].slice(0,Math.min(count,pool.length));
    const mixed=shuffled(selected);

    try{
      localStorage.setItem('sim215_last_keys',JSON.stringify(mixed.map(questionKey)));
      localStorage.setItem('sim215_last_pool_size',String(pool.length));
    }catch(e){}
    return mixed;
  }

  function ensureLiveScorePanel(){
    let panel=document.getElementById('sim-live-score');
    if(panel) return panel;

    panel=document.createElement('div');
    panel.id='sim-live-score';
    panel.style.cssText='display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin:8px 0 10px;';

    const progress=document.querySelector('#simulacro-exam .prog');
    if(progress && progress.parentNode) progress.parentNode.insertBefore(panel,progress);
    return panel;
  }

  function updateLiveScore(){
    if(typeof simQs==='undefined' || typeof simAnswers==='undefined') return;
    const panel=ensureLiveScorePanel();
    if(!panel) return;

    let answered=0, correct=0;
    simAnswers.forEach((answer,i)=>{
      if(answer===null || answer===undefined) return;
      answered++;
      if(simQs[i] && answer===simQs[i].a) correct++;
    });
    const incorrect=answered-correct;
    const pct=answered ? Math.round((correct/answered)*100) : 0;
    const pctColor=pct>=70?'#22c55e':pct>=60?'#f59e0b':'#ef4444';

    panel.innerHTML=
      '<div style="background:#092313;border:1px solid #166534;border-radius:9px;padding:7px 4px;text-align:center"><div style="font-size:1rem;font-weight:900;color:#22c55e">✅ '+correct+'</div><div style="font-size:.64rem;color:#86efac">Correctas</div></div>'+ 
      '<div style="background:#2a0909;border:1px solid #991b1b;border-radius:9px;padding:7px 4px;text-align:center"><div style="font-size:1rem;font-weight:900;color:#ef4444">❌ '+incorrect+'</div><div style="font-size:.64rem;color:#fca5a5">Incorrectas</div></div>'+ 
      '<div style="background:#111d36;border:1px solid #334155;border-radius:9px;padding:7px 4px;text-align:center"><div style="font-size:1rem;font-weight:900;color:#93c5fd">📝 '+answered+'</div><div style="font-size:.64rem;color:#94a3b8">Respondidas</div></div>'+ 
      '<div style="background:#1b1230;border:1px solid #6d28d9;border-radius:9px;padding:7px 4px;text-align:center"><div style="font-size:1rem;font-weight:900;color:'+pctColor+'">📊 '+pct+'%</div><div style="font-size:.64rem;color:#c4b5fd">Rendimiento</div></div>';
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
    simTimeLeft=210*60;
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

  // Actualiza el marcador incluso cuando el usuario cambia una respuesta anterior.
  const originalSimPick=simPick;
  simPick=function(i){
    originalSimPick(i);
    updateLiveScore();
  };
  window.simPick=simPick;

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',ensurePearsonBank,{once:true});
  else ensurePearsonBank();
})();