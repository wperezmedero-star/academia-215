/*
 * Academia 2-15 — motor compartido de rotación de preguntas.
 *
 * Conserva los historiales existentes, evita repetir un enunciado dentro de
 * una sesión, recorre cada banco elegible antes de abrir un ciclo nuevo y
 * reduce las repeticiones inmediatas entre modos distintos.
 */
(function (global) {
  "use strict";

  const GLOBAL_RECENT_KEY = "academy_recent_question_prompts_v1";
  const DEFAULT_RECENT_LIMIT = 300;

  function normalize(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/&[a-z]+;/g, " ")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function promptKey(question) {
    return normalize(question && (question.q || question.pregunta));
  }

  function optionsOf(question) {
    if (Array.isArray(question && question.o)) return question.o;
    if (Array.isArray(question && question.opciones)) return question.opciones;
    return [];
  }

  function correctIndexOf(question) {
    if (Number.isInteger(question && question.a)) return question.a;
    if (Number.isInteger(question && question.respuestaCorrecta)) return question.respuestaCorrecta;
    return -1;
  }

  // El enunciado por sí solo no identifica siempre una pregunta. Por ejemplo,
  // "¿Cuál comparación es correcta?" puede pertenecer a temas distintos.
  function itemKey(question) {
    const options = optionsOf(question);
    const correctIndex = correctIndexOf(question);
    const correct = correctIndex >= 0 && correctIndex < options.length
      ? normalize(options[correctIndex])
      : "";
    const optionSet = options.map(normalize).sort().join("|");
    return [promptKey(question), optionSet, correct].join("||");
  }

  function randomize(items) {
    const copy = items.slice();
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      const held = copy[index];
      copy[index] = copy[randomIndex];
      copy[randomIndex] = held;
    }
    return copy;
  }

  function readArray(key) {
    try {
      const value = JSON.parse(global.localStorage.getItem(key) || "[]");
      return Array.isArray(value) ? value : [];
    } catch (error) {
      return [];
    }
  }

  function write(key, value) {
    try {
      global.localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
    } catch (error) {}
  }

  function dedupeItems(items) {
    const seen = new Set();
    return (items || []).filter(function (question) {
      const key = itemKey(question);
      if (!promptKey(question) || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function dedupePrompts(items) {
    const seen = new Set();
    return dedupeItems(items).filter(function (question) {
      const key = promptKey(question);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function bucketsFor(items) {
    const buckets = new Map();
    dedupeItems(items).forEach(function (question) {
      const key = promptKey(question);
      if (!buckets.has(key)) buckets.set(key, { key: key, items: [] });
      buckets.get(key).items.push(question);
    });
    return Array.from(buckets.values());
  }

  function orderedCandidates(buckets, seenSet, lastSet, recentSet) {
    const unseen = buckets.filter(function (bucket) { return !seenSet.has(bucket.key); });
    return [
      unseen.filter(function (bucket) { return !lastSet.has(bucket.key) && !recentSet.has(bucket.key); }),
      unseen.filter(function (bucket) { return !lastSet.has(bucket.key) && recentSet.has(bucket.key); }),
      unseen.filter(function (bucket) { return lastSet.has(bucket.key) && !recentSet.has(bucket.key); }),
      unseen.filter(function (bucket) { return lastSet.has(bucket.key) && recentSet.has(bucket.key); }),
    ].flatMap(randomize);
  }

  function chooseItem(bucket, itemSeenSet) {
    let available = bucket.items.filter(function (question) {
      return !itemSeenSet.has(itemKey(question));
    });
    if (!available.length) {
      bucket.items.forEach(function (question) { itemSeenSet.delete(itemKey(question)); });
      available = bucket.items.slice();
    }
    const selected = randomize(available)[0];
    itemSeenSet.add(itemKey(selected));
    return selected;
  }

  function shuffleOptions(question) {
    const options = optionsOf(question);
    const correctIndex = correctIndexOf(question);
    if (!options.length || correctIndex < 0) return Object.assign({}, question);
    const entries = randomize(options.map(function (text, index) {
      return { text: text, index: index };
    }));
    const copy = Object.assign({}, question);
    copy.o = entries.map(function (entry) { return entry.text; });
    copy.a = entries.findIndex(function (entry) { return entry.index === correctIndex; });
    return copy;
  }

  function select(items, count, options) {
    options = options || {};
    const storageKey = options.storageKey || "academy_seen_default_v1";
    const lastStorageKey = options.lastStorageKey || storageKey + "_last";
    const itemStorageKey = options.itemStorageKey || storageKey + "_items";
    const cycleStorageKey = options.cycleStorageKey || storageKey + "_cycle";
    const buckets = bucketsFor(items);
    const target = Math.min(Math.max(0, count || 0), buckets.length);
    if (!target) return [];

    const validPromptKeys = new Set(buckets.map(function (bucket) { return bucket.key; }));
    const validItemKeys = new Set(buckets.flatMap(function (bucket) {
      return bucket.items.map(itemKey);
    }));
    const seenSet = new Set(readArray(storageKey).filter(function (key) {
      return validPromptKeys.has(key);
    }));
    const lastSet = new Set(readArray(lastStorageKey).filter(function (key) {
      return validPromptKeys.has(key);
    }));
    const itemSeenSet = new Set(readArray(itemStorageKey).filter(function (key) {
      return validItemKeys.has(key);
    }));
    const recentSet = options.useGlobalRecent === false
      ? new Set()
      : new Set(readArray(GLOBAL_RECENT_KEY));

    let selectedBuckets = orderedCandidates(buckets, seenSet, lastSet, recentSet).slice(0, target);
    let nextSeen = new Set(seenSet);
    selectedBuckets.forEach(function (bucket) { nextSeen.add(bucket.key); });
    let wrappedCycle = false;

    if (selectedBuckets.length < target) {
      wrappedCycle = true;
      const selectedKeys = new Set(selectedBuckets.map(function (bucket) { return bucket.key; }));
      const remaining = buckets.filter(function (bucket) { return !selectedKeys.has(bucket.key); });
      const freshOrder = [
        remaining.filter(function (bucket) { return !lastSet.has(bucket.key) && !recentSet.has(bucket.key); }),
        remaining.filter(function (bucket) { return !lastSet.has(bucket.key) && recentSet.has(bucket.key); }),
        remaining.filter(function (bucket) { return lastSet.has(bucket.key) && !recentSet.has(bucket.key); }),
        remaining.filter(function (bucket) { return lastSet.has(bucket.key) && recentSet.has(bucket.key); }),
      ].flatMap(randomize);
      const fill = freshOrder.slice(0, target - selectedBuckets.length);
      selectedBuckets = selectedBuckets.concat(fill);
      nextSeen = new Set(fill.map(function (bucket) { return bucket.key; }));
    } else if (nextSeen.size >= buckets.length) {
      nextSeen = new Set();
    }

    let selected = selectedBuckets.map(function (bucket) {
      return chooseItem(bucket, itemSeenSet);
    });
    if (options.shuffleQuestions !== false) selected = randomize(selected);
    if (options.shuffleOptions) selected = selected.map(shuffleOptions);

    const selectedPromptKeys = selected.map(promptKey);
    let previousCycle = 1;
    try {
      previousCycle = parseInt(global.localStorage.getItem(cycleStorageKey) || "1", 10) || 1;
    } catch (error) {}
    write(storageKey, Array.from(nextSeen));
    write(lastStorageKey, selectedPromptKeys);
    write(itemStorageKey, Array.from(itemSeenSet));
    write(cycleStorageKey, String(wrappedCycle ? previousCycle + 1 : previousCycle));
    write(storageKey + "_pool_size", String(buckets.length));
    write(storageKey + "_remaining", String(Math.max(0, buckets.length - nextSeen.size)));

    if (options.useGlobalRecent !== false) {
      const selectedSet = new Set(selectedPromptKeys);
      const recentLimit = options.recentLimit || DEFAULT_RECENT_LIMIT;
      const nextRecent = readArray(GLOBAL_RECENT_KEY)
        .filter(function (key) { return !selectedSet.has(key); })
        .concat(selectedPromptKeys)
        .slice(-recentLimit);
      write(GLOBAL_RECENT_KEY, nextRecent);
    }

    return selected;
  }

  global.QUESTION_ROTATION = {
    version: "2026-08-11.1",
    normalize: normalize,
    promptKey: promptKey,
    itemKey: itemKey,
    dedupeItems: dedupeItems,
    dedupePrompts: dedupePrompts,
    shuffleOptions: shuffleOptions,
    select: select,
  };
})(typeof window !== "undefined" ? window : globalThis);
