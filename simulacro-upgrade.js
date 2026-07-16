// Mejora del Simulacro Oficial 2-15
// Fusiona Academia + Pearson Killer, elimina duplicados y evita repetir
// inmediatamente la misma selección de 150 preguntas.
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
      if(document.querySelector('script[data-sim-upgrade="'+src+'"]')){ resolve(); return; }
      const s=document.createElement('script');
      s.src=src;
      s.async=false;
      s.dataset.simUpgrade=src;
      s.onload=()=>resolve();
      s.onerror=()=>{ console.warn('No se pudo cargar',src); resolve(); };
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
    return normalizeText(q.q);
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
    if(!Array.isArray(window.L)) return out;
    window.L.filter(l=>!(l.intro||'').includes('Próximamente')).forEach(l=>{
      (l.questions||[]).forEach(q=>out.push({...q,lessonId:l.id,lessonTitle:l.title,source:'academia'}));
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
      if(!key||seen.has(key)) continue;
      seen.add(key);
      unique.push(q);
    }
    return unique;
  }

  function selectRotating(pool,count){
    let previous=[];
    try{ previous=JSON.parse(localStorage.getItem('sim215_last_keys')||'[]'); }catch(e){}
    const previousSet=new Set(previous);
    const fresh=shuffled(pool.filter(q=>!previousSet.has(questionKey(q))));
    const repeated=shuffled(pool.filter(q=>previousSet.has(questionKey(q))));

    // Primero preguntas que no salieron en el intento anterior.
    // Solo repite las necesarias para completar las 150.
    const selected=[...fresh,...repeated].slice(0,Math.min(count,pool.length));
    const mixed=shuffled(selected);
    try{ localStorage.setItem('sim215_last_keys',JSON.stringify(mixed.map(questionKey))); }catch(e){}
    return mixed;
  }

  window.launchSimulacro = async function(){
    const startButton=document.querySelector('button[onclick="launchSimulacro()"]');
    const originalText=startButton?startButton.innerHTML:'';
    if(startButton){ startButton.disabled=true; startButton.textContent='Preparando preguntas…'; }

    await ensurePearsonBank();

    const combined=uniqueQuestions([...academiaQuestions(),...pearsonQuestions()]);
    window.simQs=selectRotating(combined,150);
    window.simAnswers=new Array(window.simQs.length).fill(null);
    window.simCurrent=0;
    window.simTimeLeft=210*60;
    window.simRunning=true;

    if(startButton){ startButton.disabled=false; startButton.innerHTML=originalText; }
    if(typeof window.hide==='function') window.hide();
    document.getElementById('simulacro-exam').classList.remove('hidden');
    window.renderSimQ();
    window.renderSimNav();
    window.startSimTimer();

    console.info('Simulacro variable:',window.simQs.length,'preguntas seleccionadas de',combined.length,'únicas.');
  };

  // Precarga silenciosa para que el botón responda más rápido.
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',ensurePearsonBank,{once:true});
  else ensurePearsonBank();
})();
