// ============================================================
// PEARSON KILLER — Runtime del cargador central
// Se ejecuta después del manifiesto, registro y fuentes aprobadas.
// v3.2 — integra el lote nuevo y elimina preguntas duplicadas
// ============================================================
(function(){
  'use strict';

  const MODULOS = [
    ['underwriting', window.PK_UNDERWRITING],
    ['life', window.PK_LIFE],
    ['annuities', window.PK_ANNUITIES],
    ['health', window.PK_HEALTH],
    ['retirement', window.PK_RETIREMENT],
    ['florida', window.PK_FLORIDA],
    ['medicare', window.PK_MEDICARE],
    ['ltc', window.PK_LTC],
    ['general', window.PK_GENERAL],
    ['nivel1', window.PK_NIVEL1],
    ['nivel2', window.PK_NIVEL2],
    ['nivel3', window.PK_NIVEL3],
    ['nivel4', window.PK_NIVEL4],
    ['nivel5', window.PK_NIVEL5],
    ['refuerzo', window.PK_REFUERZO],
    ['disposiciones', window.PK_DISPOSICIONES],
    ['campo', window.PK_CAMPO],
    ['killer_hmoppo', window.PK_KILLER_HMOPPO],
    ['killer_pilot', window.PK_KILLER_PILOT]
  ];

  let conceptosUnificados = [];
  const modulosOK = [];
  const modulosFaltantes = [];

  MODULOS.forEach(function(entry){
    const nombre = entry[0];
    const data = entry[1];
    if(Array.isArray(data)){
      conceptosUnificados = conceptosUnificados.concat(data);
      modulosOK.push(nombre + ' (' + data.length + ' conceptos)');
    }else{
      modulosFaltantes.push(nombre);
    }
  });

  const approvedRegistry = window.PK_APPROVED_REGISTRY || {approved_ids:[]};
  const approvedSet = approvedRegistry.approved_set instanceof Set
    ? approvedRegistry.approved_set
    : new Set(approvedRegistry.approved_ids || []);
  const sourceIndex = window.PK_APPROVED_SOURCE_INDEX || {sources:[]};

  const migrationSources = (sourceIndex.sources || []).map(function(source){
    return {
      name: source.name,
      global_name: source.global_name,
      data: window[source.global_name]
    };
  }).filter(function(source){ return Array.isArray(source.data); });

  const approvedById = new Map();
  migrationSources.forEach(function(source){
    source.data.forEach(function(item){
      if(!item || !approvedSet.has(item.id)) return;
      const rawVariants = item.variantes || item.variants || [];
      const variants = rawVariants.filter(function(v){
        return v && typeof v.q === 'string' && v.q.trim() &&
          Array.isArray(v.o) && v.o.length === 4 &&
          v.o.every(function(o){ return typeof o === 'string' && o.trim(); }) &&
          Number.isInteger(v.a) && v.a >= 0 && v.a <= 3;
      }).map(function(v){
        const copy = Object.assign({}, v);
        copy.category = 'killer_ready';
        copy.human_review_status = 'approved';
        if(!copy.e) copy.e = copy.correcto || '';
        return copy;
      });
      if(!variants.length) return;
      approvedById.set(item.id, {
        id: item.id,
        area: item.area,
        concepto: item.concepto || item.subtema_blueprint || item.id,
        category: 'killer_ready',
        human_review_status: 'approved',
        source: source.name,
        variantes: variants
      });
    });
  });

  const approvedMigrationConcepts = Array.from(approvedById.values());
  conceptosUnificados = conceptosUnificados.concat(approvedMigrationConcepts);

  // Elimina preguntas repetidas entre todos los bancos antes de crear simulacros.
  // Se compara el texto normalizado para detectar diferencias solo de mayúsculas,
  // espacios o signos. Se conserva la primera versión encontrada.
  function normalizarPregunta(texto){
    return String(texto || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  const preguntasVistas = new Set();
  let preguntasDuplicadasEliminadas = 0;

  conceptosUnificados = conceptosUnificados.map(function(concepto){
    const variantes = concepto.variantes || concepto.variants || [];
    const variantesUnicas = variantes.filter(function(v){
      if(!v || typeof v.q !== 'string' || !v.q.trim()) return false;
      const clave = normalizarPregunta(v.q);
      if(!clave) return false;
      if(preguntasVistas.has(clave)){
        preguntasDuplicadasEliminadas++;
        return false;
      }
      preguntasVistas.add(clave);
      return true;
    });

    const copia = Object.assign({}, concepto);
    copia.variantes = variantesUnicas;
    return copia;
  }).filter(function(concepto){
    return Array.isArray(concepto.variantes) && concepto.variantes.length > 0;
  });

  const AREAS_UNIFICADAS = {
    suscripcion:'Procedimientos de Suscripción en Campo',
    vida:'Tipos de Seguros de Vida',
    anualidades:'Anualidades',
    salud:'Tipos de Pólizas de Salud',
    medicare:'Medicare y Medicaid',
    medicaid:'Medicare y Medicaid',
    ltc:'Seguro de Cuidado a Largo Plazo',
    cobra:'COBRA, ERISA e HIPAA',
    cuentas:'HSA, HRA y FSA',
    ss:'Seguro Social',
    retiro:'Planes de Retiro',
    florida:'Leyes y Regulaciones de Florida',
    provisiones:'Provisiones, Cláusulas y Anexos',
    generales:'Conceptos Generales de Seguros'
  };

  let totalVariantes = 0;
  conceptosUnificados.forEach(function(c){
    totalVariantes += Array.isArray(c.variantes) ? c.variantes.length : 0;
  });

  const missingSources = (sourceIndex.sources || []).filter(function(s){
    return !Array.isArray(window[s.global_name]);
  }).map(function(s){ return s.name; });

  window.PK_CONCEPTOS_FULL = conceptosUnificados;
  window.PK_AREAS_FULL = AREAS_UNIFICADAS;
  window.PK_SINONIMOS_FULL = window.PK_SINONIMOS || {};
  window.PK_TRAMPAS_FULL = window.PK_TRAMPAS || {};
  window.PK_APPROVED_EXAM_CONCEPTS = approvedMigrationConcepts;
  window.PK_LOADER_STATUS = {
    modulosOK:modulosOK,
    modulosFaltantes:modulosFaltantes,
    totalConceptos:conceptosUnificados.length,
    totalVariantes:totalVariantes,
    preguntasDuplicadasEliminadas:preguntasDuplicadasEliminadas,
    killerPilotIntegrado:Array.isArray(window.PK_KILLER_PILOT) ? window.PK_KILLER_PILOT.length : 0,
    approvedMigrationConcepts:approvedMigrationConcepts.length,
    approvedMigrationQuestions:approvedMigrationConcepts.reduce(function(n,c){return n+(c.variantes||[]).length;},0),
    approvedRegistryTotal:approvedRegistry.total || (approvedRegistry.approved_ids||[]).length,
    approvedRegistryVersion:approvedRegistry.version || null,
    sourceManifestVersion:sourceIndex.version || null,
    registeredSources:(sourceIndex.sources||[]).length,
    loadedSources:migrationSources.length,
    missingSources:missingSources,
    autoIntegrationPolicy:approvedRegistry.policy || null,
    version:'3.2'
  };
})();