// ============================================================
// PEARSON KILLER — pk-loader.js
// Bootstrap ordenado del banco unificado.
// v3.1 — 15/07/2026
// ============================================================
(function(){
  'use strict';

  if(typeof document === 'undefined' || document.readyState !== 'loading'){
    console.error('PEARSON KILLER: pk-loader.js debe ejecutarse durante la carga del documento.');
    return;
  }

  // Orden obligatorio:
  // 1) manifiesto; el propio manifiesto inserta todas las fuentes aprobadas;
  // 2) registro de IDs activos;
  // 3) runtime que construye PK_CONCEPTOS_FULL.
  document.write('<script src="pk-approved-sources.js"><\/script>');
  document.write('<script src="pk-approved-registry.js"><\/script>');
  document.write('<script src="pk-loader-runtime.js"><\/script>');
})();
