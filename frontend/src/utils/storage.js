const STORAGE_KEY = "resultados_classificacao";

export function getResults() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveResult(entry) {
  const results = getResults();
  results.unshift(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
}

export function deleteResult(id) {
  const results = getResults().filter((r) => r.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
}

export function clearResults() {
  localStorage.removeItem(STORAGE_KEY);
}
