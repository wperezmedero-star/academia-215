// ============================================================
// PEARSON KILLER — pk-loader.js
// Cargador central que une todos los módulos de contenido
// en un solo banco unificado para que pearson-killer.html
// pueda leerlo como una única fuente de datos.
//
// ARQUITECTURA:
//   pearson-killer.html debe cargar los scripts en este orden
//   ANTES de cargar pk-loader.js:
//
//   <script src="pk-synonyms.js"></script>
//   <script src="pk-traps.js"></script>
//   <script src="pk-data-underwriting.js"></script>
//   <script src="pk-data-life.js"></script>
//   <script src="pk-data-annuities.js"></script>
//   <script src="pk-data-health.js"></script>
//   <script src="pk-data-retirement.js"></script>
//   <script src="pk-data-florida.js"></script>
//   <script src="pk-data-medicare.js"></script>
//   <script src="pk-data-ltc.js"></script>
//   <script src="pk-data-general.js"></script>
//   <script src="pk-loader.js"></script>
//
// Cada módulo pk-data-*.js define su propia variable global
// (PK_UNDERWRITING, PK_LIFE, PK_ANNUITIES, etc.). Este loader
// las combina todas en un único array PK_CONCEPTOS que el
// motor principal (pearson-killer.html) consume.
//
// ESCALABILIDAD: para agregar un módulo nuevo en el futuro
// (ej: pk-data-cyber.js con PK_CYBER):
//   1. Crear el archivo pk-data-cyber.js con el mismo patrón
//      de {id, area, concepto, variantes:[]}
//   2. Agregar su <script> tag en pearson-killer.html ANTES
//      de pk-loader.js
//   3. Agregar una línea abajo en MODULOS[] apuntando a PK_CYBER
//   NUNCA es necesario modificar el motor principal del quiz.
// ============================================================

(function() {

  // Lista de todos los módulos de contenido disponibles.
  // Cada entrada es una referencia a la variable global que
  // define ese módulo. Si un módulo no está cargado (undefined),
  // el loader lo omite silenciosamente sin romper la aplicación —
  // esto permite cargar pearson-killer.html incluso si todavía
  // no se han subido todos los archivos de contenido.
  const MODULOS = [
    { nombre: "underwriting", data: window.PK_UNDERWRITING || null },
    { nombre: "life",         data: window.PK_LIFE || null },
    { nombre: "annuities",    data: window.PK_ANNUITIES || null },
    { nombre: "health",       data: window.PK_HEALTH || null },
    { nombre: "retirement",   data: window.PK_RETIREMENT || null },
    { nombre: "florida",      data: window.PK_FLORIDA || null },
    { nombre: "medicare",     data: window.PK_MEDICARE || null },
    { nombre: "ltc",          data: window.PK_LTC || null },
    { nombre: "general",      data: window.PK_GENERAL || null },
    { nombre: "nivel1",       data: window.PK_NIVEL1 || null },
    { nombre: "nivel2",       data: window.PK_NIVEL2 || null },
    { nombre: "nivel3",       data: window.PK_NIVEL3 || null },
    { nombre: "nivel4",       data: window.PK_NIVEL4 || null },
    { nombre: "nivel5",       data: window.PK_NIVEL5 || null }
  ];

  // Combinar todos los módulos cargados en un único array
  let conceptosUnificados = [];
  let modulosOK = [];
  let modulosFaltantes = [];

  MODULOS.forEach(function(mod) {
    if (mod.data && Array.isArray(mod.data)) {
      conceptosUnificados = conceptosUnificados.concat(mod.data);
      modulosOK.push(mod.nombre + " (" + mod.data.length + " conceptos)");
    } else {
      modulosFaltantes.push(mod.nombre);
    }
  });

  // Combinar las áreas temáticas de todos los módulos que las definan
  // (todos comparten la misma estructura PK_AREAS, así que solo
  // necesitamos una — pero por seguridad las fusionamos si difieren)
  const AREAS_UNIFICADAS = {
    suscripcion: "Procedimientos de Suscripción en Campo",
    vida:        "Tipos de Seguros de Vida",
    anualidades: "Anualidades",
    salud:       "Tipos de Pólizas de Salud",
    medicare:    "Medicare y Medicaid",
    ltc:         "Seguro de Cuidado a Largo Plazo",
    cobra:       "COBRA, ERISA e HIPAA",
    cuentas:     "HSA, HRA y FSA",
    ss:          "Seguro Social",
    retiro:      "Planes de Retiro",
    florida:     "Leyes y Regulaciones de Florida",
    provisiones: "Provisiones, Cláusulas y Anexos",
    generales:   "Conceptos Generales de Seguros"
  };

  // Variables globales finales que pearson-killer.html debe usar
  window.PK_CONCEPTOS_FULL = conceptosUnificados;
  window.PK_AREAS_FULL = AREAS_UNIFICADAS;

  // Referencias a sinónimos y trampas si están cargadas
  window.PK_SINONIMOS_FULL = window.PK_SINONIMOS || {};
  window.PK_TRAMPAS_FULL = window.PK_TRAMPAS || {};

  // Estadísticas de carga — visibles en consola para debugging
  let totalVariantes = 0;
  conceptosUnificados.forEach(function(c) {
    if (c.variantes) totalVariantes += c.variantes.length;
  });

  window.PK_LOADER_STATUS = {
    modulosOK: modulosOK,
    modulosFaltantes: modulosFaltantes,
    totalConceptos: conceptosUnificados.length,
    totalVariantes: totalVariantes,
    version: "1.0"
  };

  // Log silencioso para debugging (no interfiere con la UI)
  if (typeof console !== 'undefined' && console.log) {
    console.log("Pearson Killer — pk-loader.js cargado");
    console.log("Módulos activos: " + modulosOK.length + "/" + MODULOS.length);
    console.log("Total conceptos: " + conceptosUnificados.length);
    console.log("Total variantes: " + totalVariantes);
    if (modulosFaltantes.length > 0) {
      console.warn("Módulos NO cargados (revisar orden de <script> tags): " + modulosFaltantes.join(", "));
    }
  }

})();
