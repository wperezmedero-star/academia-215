// Academia 2-15 — bilingual UI foundation (Spanish / English)
(function(global){
  "use strict";
  const KEY="academia215_language";
  const CACHE_KEY="academia215_en_cache_v1";
  const TRANSLATE_URL="https://translate.googleapis.com/translate_a/single";
  const SPLIT="|||A215|||";
  let translationCache={};
  let translationRun=Promise.resolve();
  try{translationCache=JSON.parse(localStorage.getItem(CACHE_KEY)||"{}")}catch(_){translationCache={}}
  const EN={
    "Preparación especializada · Florida Life, Health & Annuities":"Specialized preparation · Florida Life, Health & Annuities",
    "Características principales":"Main features","Comenzar examen mixto":"Start mixed exam","Abrir las 20 lecciones":"Open the 20 lessons","Abrir Modo Trampa completo":"Open the complete Trap Mode",
    "Abrir simulacro oficial de 150 preguntas":"Open the official-style 150-question mock exam","Ver mi progreso guardado":"View my saved progress",
    "🏠 Inicio":"🏠 Home","⚡ Examen mixto":"⚡ Mixed exam","📊 Progreso":"📊 Progress","🎯 Simulacro":"🎯 Mock exam","🧩 Modo Trampa":"🧩 Trap Mode",
    "Entrena con intención. Llega al examen con confianza.":"Train with purpose. Take the exam with confidence.",
    "Tu preparación completa para la licencia 2-15: 20 lecciones, práctica inteligente, refuerzo de errores y simulacro oficial en una sola ruta.":"Your complete preparation for the 2-15 license: 20 lessons, smart practice, mistake review, and an official-style mock exam in one path.",
    "⚡ Continuar repasando":"⚡ Continue studying","📋 Ver mi plan":"📋 View my plan","✓ Progreso conservado":"✓ Progress preserved","✓ Enfoque Florida":"✓ Florida focus","✓ Acceso fundador":"✓ Founder access",
    "SISTEMA ORBITAL":"ORBITAL SYSTEM","Toca una órbita para entrar":"Tap an orbit to enter","RUTA DE PREPARACIÓN":"PREPARATION PATH",
    "Todo lo que necesitas para dominar Florida 2-15":"Everything you need to master Florida 2-15",
    "Avanza en cuatro movimientos claros, sin perder tu historial ni cambiar el contenido.":"Move forward in four clear steps without losing your history or changing the content.",
    "Aprende":"Learn","20 lecciones organizadas con explicación, ejemplos y vocabulario.":"20 organized lessons with explanations, examples, and vocabulary.",
    "Practica":"Practice","Examen mixto para comprobar comprensión y detectar errores.":"Mixed exam to check understanding and identify mistakes.",
    "Simula":"Simulate","150 preguntas con reloj y condiciones cercanas al examen.":"150 timed questions under exam-like conditions.",
    "Corrige":"Review","Revisa resultados y vuelve directamente a tus puntos débiles.":"Review results and return directly to your weak areas.",
    "CONTENIDO ACTIVO":"ACTIVE CONTENT","Las 20 lecciones de tu academia":"Your academy's 20 lessons","← Volver":"← Back",
    "Plan de estudio — 45 min/día":"Study plan — 45 min/day","⏱️ Rutina diaria":"⏱️ Daily routine","🎯 Meta: 70% para aprobar":"🎯 Goal: 70% to pass","🧠 Cómo memorizar mejor":"🧠 How to remember better",
    "✏️ Quiz completo":"✏️ Full quiz","🔥 Solo difíciles":"🔥 Difficult only","🃏 Tarjetas":"🃏 Flashcards","🔊 Escuchar":"🔊 Listen","← Salir":"← Exit","Siguiente →":"Next →",
    "🃏 Tarjetas de memoria":"🃏 Flashcards","← Anterior":"← Previous","Resultado del quiz":"Quiz result","🔁 Repasar falladas":"🔁 Review mistakes","📊 Tu progreso":"📊 Your progress","🗑️ Borrar historial":"🗑️ Delete history",
    "🎯 Simulacro Oficial 2-15 Florida":"🎯 Official-style Florida 2-15 Mock Exam",
    "Replica el formato del examen real del estado. 150 preguntas, 2 horas y 45 minutos. Necesitas el 70% (105 correctas) para aprobar.":"Replicates the state exam format: 150 questions in 2 hours and 45 minutes. You need 70% (105 correct answers) to pass.",
    "📋 Instrucciones del simulacro":"📋 Mock exam instructions","⚠️ Antes de empezar":"⚠️ Before you begin",
    "Busca un lugar tranquilo, sin distracciones. El simulacro replica las condiciones del examen real. Tienes 1.1 minutos por pregunta en promedio.":"Find a quiet place without distractions. The mock exam replicates real exam conditions. You have an average of 1.1 minutes per question.",
    "🚀 Iniciar Simulacro":"🚀 Start Mock Exam","📊 Historial de simulacros":"📊 Mock exam history","🎯 Simulacro Oficial":"🎯 Official-style Mock Exam","Terminar":"Finish",
    "Correctas":"Correct","Incorrectas":"Incorrect","Respondidas":"Answered","Porcentaje":"Percentage","Anterior":"Previous",
    "🎯 Resultado del Simulacro":"🎯 Mock Exam Result","🔁 Nuevo Simulacro":"🔁 New Mock Exam","📊 Historial":"📊 History","📊 Historial de Simulacros":"📊 Mock Exam History","Borrar":"Delete",
    "Herramienta independiente de preparación. Siempre revisa tu manual oficial para máxima exactitud.":"Independent preparation tool. Always review your official manual for maximum accuracy.",
    "Conocer Academia Pro →":"Explore Academia Pro →","Próximamente":"Coming soon","DIFÍCIL":"DIFFICULT","MEDIO":"INTERMEDIATE","BÁSICO":"BASIC","Correcto.":"Correct.","Incorrecto.":"Incorrect.",
    "Completa esta frase:":"Complete this sentence:","Toca para siguiente":"Tap for next","Toca para ver la respuesta":"Tap to see the answer"
  };
  const clean=s=>String(s||"").replace(/\s+/g," ").trim();
  const language=()=>localStorage.getItem(KEY)==="en"?"en":"es";
  function t(text,lang){
    if(lang==="es")return text;
    const exact=EN[clean(text)];if(exact)return exact;
    if(translationCache[text])return translationCache[text];
    return text.replace(/Pregunta (\d+) de (\d+)/g,"Question $1 of $2").replace(/Tarjeta (\d+) de (\d+)/g,"Card $1 of $2").replace(/(\d+) preguntas/g,"$1 questions").replace(/(\d+) términos/g,"$1 terms").replace(/(\d+) frases/g,"$1 memory phrases").replace(/Punto (\d+)/g,"Key point $1");
  }
  function shouldTranslate(text){
    const value=clean(text);
    if(!value||value.length<2||EN[value]||translationCache[text])return false;
    if(/^[\d\s.,:%$·/—–-]+$/.test(value))return false;
    if(/^(ES|EN|FLORIDA|ACADEMIA|2[·-]15)$/.test(value))return false;
    return /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ¿¡]/.test(value);
  }
  function saveCache(){
    try{localStorage.setItem(CACHE_KEY,JSON.stringify(translationCache))}
    catch(_){
      const recent=Object.entries(translationCache).slice(-1200);translationCache=Object.fromEntries(recent);
      try{localStorage.setItem(CACHE_KEY,JSON.stringify(translationCache))}catch(__){}
    }
  }
  function translatedText(data){
    return Array.isArray(data)&&Array.isArray(data[0])?data[0].map(part=>part&&part[0]||"").join(""):"";
  }
  async function translateBatch(items){
    const joined=items.join("\n"+SPLIT+"\n");
    const params=new URLSearchParams({client:"gtx",sl:"es",tl:"en",dt:"t",q:joined});
    const response=await fetch(TRANSLATE_URL+"?"+params.toString(),{method:"GET",mode:"cors",credentials:"omit"});
    if(!response.ok)throw new Error("Translation HTTP "+response.status);
    const output=translatedText(await response.json());
    const parts=output.split(new RegExp("\\s*\\|\\|\\|A215\\|\\|\\|\\s*","g"));
    if(parts.length!==items.length)throw new Error("Translation segment mismatch");
    items.forEach((source,index)=>{translationCache[source]=parts[index].trim()||source});
    saveCache();
  }
  function makeBatches(items){
    const batches=[];let current=[],size=0;
    items.forEach(item=>{
      const next=item.length+SPLIT.length+2;
      if(current.length&&size+next>3200){batches.push(current);current=[];size=0}
      current.push(item);size+=next;
    });
    if(current.length)batches.push(current);return batches;
  }
  function setLoading(on){
    const box=document.querySelector(".academia-language-switcher");if(!box)return;
    box.classList.toggle("is-loading",on);box.setAttribute("aria-busy",String(on));
  }
  function translateMissing(root){
    if(language()!=="en")return Promise.resolve();
    const scope=root&&root.nodeType===1?root:document.body;if(!scope)return Promise.resolve();
    const walker=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT),nodes=[],missing=[];
    while(walker.nextNode()){
      const node=walker.currentNode,parent=node.parentElement;
      if(!parent||/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/.test(parent.tagName))continue;
      // Study history, scores, dates and the learner's selected answers stay local.
      if(parent.closest("#stats,#simulacro-history,#result,#simulacro-result,[data-i18n-private]"))continue;
      const original=node.__academiaOriginal||node.nodeValue;
      if(shouldTranslate(original)){nodes.push({node,original});if(!missing.includes(original))missing.push(original)}
    }
    if(!missing.length)return Promise.resolve();
    setLoading(true);
    translationRun=translationRun.then(async()=>{
      for(const batch of makeBatches(missing.filter(item=>!translationCache[item])))await translateBatch(batch);
      if(language()==="en")nodes.forEach(({node,original})=>{if(node.isConnected&&translationCache[original])node.nodeValue=translationCache[original]});
    }).catch(err=>{console.warn("Academia bilingual translation unavailable:",err.message)}).finally(()=>setLoading(false));
    return translationRun;
  }
  function translate(root,lang){
    const scope=root&&root.nodeType===1?root:document.body;if(!scope)return;
    const walker=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT),nodes=[];
    while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      const parent=node.parentElement;if(!parent||/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/.test(parent.tagName)||!clean(node.nodeValue))return;
      if(!node.__academiaOriginal)node.__academiaOriginal=node.nodeValue;
      node.nodeValue=lang==="es"?node.__academiaOriginal:t(node.__academiaOriginal,lang);
    });
    scope.querySelectorAll("[aria-label],[title],[placeholder]").forEach(el=>{
      ["aria-label","title","placeholder"].forEach(attr=>{
        if(!el.hasAttribute(attr))return;const prop="__academiaOriginal_"+attr;
        if(el[prop]===undefined)el[prop]=el.getAttribute(attr)||"";
        el.setAttribute(attr,lang==="es"?el[prop]:t(el[prop],lang));
      });
    });
  }
  function refresh(lang){document.querySelectorAll("[data-academia-language]").forEach(b=>{const on=b.dataset.academiaLanguage===lang;b.classList.toggle("is-active",on);b.setAttribute("aria-pressed",String(on))})}
  function setLanguage(lang){lang=lang==="en"?"en":"es";localStorage.setItem(KEY,lang);document.documentElement.lang=lang;document.documentElement.dataset.language=lang;translate(document.body,lang);refresh(lang);if(lang==="en")translateMissing(document.body);document.dispatchEvent(new CustomEvent("academia:languagechange",{detail:{language:lang}}))}
  function mount(){
    if(document.querySelector(".academia-language-switcher"))return;
    const host=document.querySelector("header .nav,header,body");if(!host)return;
    const box=document.createElement("div");box.className="academia-language-switcher"+(host===document.body?" is-floating":"");box.setAttribute("role","group");box.setAttribute("aria-label","Idioma / Language");box.innerHTML='<button type="button" data-academia-language="es">ES</button><button type="button" data-academia-language="en">EN</button>';
    box.addEventListener("click",e=>{const b=e.target.closest("[data-academia-language]");if(b)setLanguage(b.dataset.academiaLanguage)});host.appendChild(box);
  }
  function boot(){
    mount();setLanguage(language());let pending=false;
    new MutationObserver(ms=>{if(pending||!ms.some(m=>m.type==="childList"&&m.addedNodes.length))return;pending=true;requestAnimationFrame(()=>{pending=false;translate(document.body,language());refresh(language());if(language()==="en")translateMissing(document.body)})}).observe(document.body,{childList:true,subtree:true});
  }
  global.ACADEMIA_I18N={getLanguage:language,setLanguage:setLanguage,t:text=>t(text,language()),dictionaries:{en:EN}};
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();
})(window);
