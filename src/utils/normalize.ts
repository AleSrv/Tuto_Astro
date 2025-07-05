// src/utils/normalize.ts

export function normalizeTags(input: unknown[]): string[] {
  return [...new Set(
    input
      .filter(Boolean)
      .map((tag) => String(tag).trim().toLowerCase())
  )].sort();
}


