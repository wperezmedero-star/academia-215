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
    { nombre: "nivel5",       data: window.PK_NIVEL5 || null },
    { nombre: "refuerzo",     data: window.PK_REFUERZO || null },
    { nombre: "disposiciones",data: window.PK_DISPOSICIONES || null },
    { nombre: "campo",        data: window.PK_CAMPO || null },
    { nombre: "killer_hmoppo",data: window.PK_KILLER_HMOPPO || null }
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

  // El Killer Pilot permanece deliberadamente AISLADO del banco unificado.
  // pearson-killer.html lo consume solo cuando mode === 'killer_pilot'.
  // Esta validación evita que un archivo incompleto o mal formado pase
  // silenciosamente a producción.
  const killerPilot = Array.isArray(window.PK_KILLER_PILOT) ? window.PK_KILLER_PILOT : [];
  const erroresKillerPilot = [];
  let totalPreguntasKillerPilot = 0;

  killerPilot.forEach(function(concepto, conceptoIdx) {
    const conceptoId = concepto.id || ("concepto_" + (conceptoIdx + 1));
    const variantes = concepto.variantes || concepto.variants || [];

    if (!Array.isArray(variantes) || variantes.length === 0) {
      erroresKillerPilot.push(conceptoId + ": sin variantes válidas");
      return;
    }

    variantes.forEach(function(pregunta, varianteIdx) {
      totalPreguntasKillerPilot++;
      const etiqueta = conceptoId + "#" + (varianteIdx + 1);

      if (!pregunta || typeof pregunta.q !== "string" || pregunta.q.trim().length === 0) {
        erroresKillerPilot.push(etiqueta + ": falta texto de pregunta");
      }
      if (!Array.isArray(pregunta.o) || pregunta.o.length !== 4 || pregunta.o.some(function(opcion) {
        return typeof opcion !== "string" || opcion.trim().length === 0;
      })) {
        erroresKillerPilot.push(etiqueta + ": debe tener exactamente 4 opciones no vacías");
      }
      if (!Number.isInteger(pregunta.a) || pregunta.a < 0 || pregunta.a > 3) {
        erroresKillerPilot.push(etiqueta + ": índice de respuesta correcta inválido");
      }
      const explicacion = pregunta.e || pregunta.correcto || "";
      if (typeof explicacion !== "string" || explicacion.trim().length === 0) {
        erroresKillerPilot.push(etiqueta + ": falta explicación de la respuesta correcta");
      } else if (!pregunta.e) {
        // Compatibilidad con el motor antiguo: showResult() espera q.e.
        // Las preguntas Killer usan "correcto", así que normalizamos una sola vez al cargar.
        pregunta.e = explicacion;
      }
    });
  });

  const killerPilotOK = totalPreguntasKillerPilot === 15 && erroresKillerPilot.length === 0;

  window.PK_KILLER_PILOT_STATUS = {
    cargado: killerPilot.length > 0,
    totalConceptos: killerPilot.length,
    totalPreguntas: totalPreguntasKillerPilot,
    esperado: 15,
    errores: erroresKillerPilot,
    totalErrores: erroresKillerPilot.length,
    valido: killerPilotOK,
    aisladoDelBancoPrincipal: true
  };

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
    killerPilot: window.PK_KILLER_PILOT_STATUS,
    version: "1.4"
  };

  // Parche de seguridad de ejecución para pearson-killer.html.
  // Se instala al terminar de cargar la página, cuando las funciones del motor
  // ya existen. No intenta leer variables internas declaradas con "let".
  window.addEventListener('DOMContentLoaded', function() {
    window.PK_RUNTIME_MODE = '';
    window.PK_LAST_POOL_SIZE = null;

    // 1) Observar el tamaño real que devuelve buildPool().
    if (typeof window.buildPool === 'function') {
      const buildPoolOriginal = window.buildPool;
      window.buildPool = function(m, max) {
        const resultado = buildPoolOriginal(m, max);
        window.PK_LAST_POOL_SIZE = Array.isArray(resultado) ? resultado.length : 0;
        return resultado;
      };
    }

    // 2) Recordar el modo solicitado y bloquear un piloto estructuralmente inválido.
    if (typeof window.startMode === 'function') {
      const startModeOriginal = window.startMode;
      window.startMode = function(m, max) {
        if (m === 'killer_pilot' && (!window.PK_KILLER_PILOT_STATUS || !window.PK_KILLER_PILOT_STATUS.valido)) {
          alert('El Killer Pilot no está listo: deben cargarse exactamente 15 preguntas válidas.');
          return;
        }
        window.PK_RUNTIME_MODE = m;
        startModeOriginal(m, max);
      };
    }

    // 3) Evitar renderizar una pregunta inexistente y reemplazar la variante aleatoria
    // por una identificación real cuando se usa el Killer Pilot.
    if (typeof window.renderQ === 'function') {
      const renderQOriginal = window.renderQ;
      window.renderQ = function() {
        if (window.PK_LAST_POOL_SIZE === 0) {
          const quiz = document.getElementById('quiz');
          const home = document.getElementById('home');
          if (quiz) quiz.classList.add('hidden');
          if (home) home.classList.remove('hidden');
          alert('No se encontraron preguntas para este modo. Revisa que el banco correspondiente haya cargado correctamente.');
          return;
        }

        renderQOriginal();

        if (window.PK_RUNTIME_MODE === 'killer_pilot') {
          const label = document.getElementById('q-variant');
          const count = document.getElementById('q-count');
          if (label && count) {
            label.textContent = 'Killer Pilot · Pregunta ' + count.textContent;
          }
        }
      };
    }
  });

  // Log silencioso para debugging (no interfiere con la UI)
  if (typeof console !== 'undefined' && console.log) {
    console.log("Pearson Killer — pk-loader.js cargado");
    console.log("Módulos activos: " + modulosOK.length + "/" + MODULOS.length);
    console.log("Total conceptos: " + conceptosUnificados.length);
    console.log("Total variantes: " + totalVariantes);
    console.log("Killer Pilot: " + totalPreguntasKillerPilot + "/15 preguntas; errores=" + erroresKillerPilot.length + "; aislado=" + true);
    if (!killerPilotOK) {
      console.error("KILLER PILOT INVÁLIDO: revisar PK_KILLER_PILOT_STATUS.", window.PK_KILLER_PILOT_STATUS);
    }
    if (modulosFaltantes.length > 0) {
      console.warn("Módulos NO cargados (revisar orden de <script> tags): " + modulosFaltantes.join(", "));
    }
  }

})();
