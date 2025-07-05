// src/utils/normalize.ts

// 🔤 Convierte cualquier cosa en string lowercase, sin errores
export function normalizeValue(value: unknown): string {
  return String(value ?? "").trim().toLowerCase();
}

// 🏷️ Convierte un array en tags únicos, limpios y ordenados
export function normalizeTags(input: unknown[]): string[] {
  return [...new Set(input.map(normalizeValue))].sort();
}
