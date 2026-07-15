// Serverless endpoint for Pearson Killer migration production.
// Requires OPENAI_API_KEY. Optional: OPENAI_MODEL (default gpt-5.5).
// Processes a logical batch of up to 50 jobs in internal chunks of 10, then returns one array.

const OPENAI_URL = 'https://api.openai.com/v1/responses';
const CHUNK_SIZE = 10;

function json(res, status, body){
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

function candidateSchema(){
  return {
    type: 'object',
    additionalProperties: false,
    properties: {
      id: { type: 'string' },
      area: { type: 'string' },
      subtema_blueprint: { type: 'string' },
      concepto: { type: 'string' },
      category: { type: 'string', enum: ['killer_ready'] },
      human_review_status: { type: 'string', enum: ['pending'] },
      variantes: {
        type: 'array', minItems: 1, maxItems: 1,
        items: {
          type: 'object', additionalProperties: false,
          properties: {
            nivel: { type: 'integer', enum: [5] },
            tipo_trampa: { type: 'string' },
            q: { type: 'string' },
            o: { type: 'array', minItems: 4, maxItems: 4, items: { type: 'string' } },
            a: { type: 'integer', minimum: 0, maximum: 3 },
            trampa: { type: 'string' },
            correcto: { type: 'string' },
            incorrectos: { type: 'array', minItems: 3, maxItems: 3, items: { type: 'string' } },
            distractor_condicional: { type: 'string' }
          },
          required: ['nivel','tipo_trampa','q','o','a','trampa','correcto','incorrectos','distractor_condicional']
        }
      }
    },
    required: ['id','area','subtema_blueprint','concepto','category','human_review_status','variantes']
  };
}

function outputSchema(count){
  return {
    type: 'object', additionalProperties: false,
    properties: {
      candidates: {
        type: 'array', minItems: count, maxItems: count,
        items: candidateSchema()
      }
    },
    required: ['candidates']
  };
}

function systemPrompt(){
  return [
    'Eres el productor de preguntas de alta dificultad para el examen Florida 2-15 en español estilo Pearson VUE.',
    'Transforma cada fuente en un escenario profesional realista con el principio oculto.',
    'Debe existir una sola mejor respuesta y al menos dos distractores técnicamente plausibles.',
    'Evita preguntas definicionales disfrazadas, pistas por longitud, absolutos descartables y respuestas correctas más pulidas que las demás.',
    'Incluye detalles relevantes y secundarios sin ambigüedad.',
    'Explica por qué cada distractor falla en ESTE escenario y describe una condición real bajo la cual un distractor podría ser correcto.',
    'Nunca apruebes. human_review_status debe ser pending y category killer_ready.',
    'Respeta exactamente el orden de los trabajos recibidos.'
  ].join('\n');
}

function userPrompt(payload, jobs){
  return JSON.stringify({
    contract_version: payload.contract_version,
    global_rules: payload.global_rules,
    jobs: jobs.map(j => ({
      migration_id: j.migration_id,
      source_fingerprint: j.source_fingerprint,
      source: j.source,
      target_contract: j.target_contract,
      rewrite_rules: j.rewrite_rules
    }))
  });
}

function extractOutputText(data){
  if(typeof data.output_text === 'string' && data.output_text.trim()) return data.output_text;
  const out = Array.isArray(data.output) ? data.output : [];
  for(const item of out){
    const content = Array.isArray(item.content) ? item.content : [];
    for(const part of content){
      if((part.type === 'output_text' || part.type === 'text') && typeof part.text === 'string') return part.text;
    }
  }
  throw new Error('OpenAI no devolvió output_text utilizable');
}

async function produceChunk(apiKey, model, payload, jobs){
  const body = {
    model,
    input: [
      { role: 'system', content: systemPrompt() },
      { role: 'user', content: userPrompt(payload, jobs) }
    ],
    reasoning: { effort: 'medium' },
    text: {
      format: {
        type: 'json_schema',
        name: 'pearson_killer_candidates',
        strict: true,
        schema: outputSchema(jobs.length)
      }
    }
  };

  const r = await fetch(OPENAI_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const data = await r.json();
  if(!r.ok){
    const msg = data && data.error && data.error.message ? data.error.message : `OpenAI HTTP ${r.status}`;
    throw new Error(msg);
  }
  const parsed = JSON.parse(extractOutputText(data));
  if(!parsed || !Array.isArray(parsed.candidates) || parsed.candidates.length !== jobs.length){
    throw new Error(`Salida estructurada inválida: esperadas ${jobs.length} candidatas`);
  }
  return parsed.candidates;
}

module.exports = async function handler(req, res){
  if(req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
  const apiKey = process.env.OPENAI_API_KEY;
  if(!apiKey) return json(res, 500, { error: 'OPENAI_API_KEY no configurada' });

  try{
    const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if(!payload || !Array.isArray(payload.jobs) || payload.jobs.length < 1 || payload.jobs.length > 50){
      return json(res, 400, { error: 'payload.jobs debe contener entre 1 y 50 trabajos' });
    }
    const model = process.env.OPENAI_MODEL || 'gpt-5.5';
    const all = [];
    for(let i = 0; i < payload.jobs.length; i += CHUNK_SIZE){
      const chunk = payload.jobs.slice(i, i + CHUNK_SIZE);
      const produced = await produceChunk(apiKey, model, payload, chunk);
      all.push(...produced);
    }
    if(all.length !== payload.jobs.length) throw new Error('La producción agregada no coincide con el lote solicitado');
    return json(res, 200, all);
  }catch(err){
    return json(res, 500, { error: err.message || 'Error de producción' });
  }
};
