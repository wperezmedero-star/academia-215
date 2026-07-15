// Browser-side provider for the secure serverless producer endpoint.
(function(global){
  'use strict';

  async function provider(payload){
    const response = await fetch('/api/pk-produce', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    let data;
    try { data = await response.json(); }
    catch (_) { throw new Error(`Respuesta no JSON del productor (HTTP ${response.status})`); }

    if(!response.ok){
      throw new Error(data && data.error ? data.error : `Error del productor HTTP ${response.status}`);
    }
    if(!Array.isArray(data)) throw new Error('El productor no devolvió un arreglo de candidatas');
    return data;
  }

  global.PK_MODEL_PROVIDER = provider;
})(typeof window !== 'undefined' ? window : globalThis);
