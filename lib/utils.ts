/**
 * Format a price in SEK using Swedish currency conventions.
 */
export function formatPrice(price: number | null, currency = "SEK"): string {
  if (price === null) return "Pris ej angivet";
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Generate a random short ID for toast messages etc.
 */
export function generateId(): string {
  return Math.random().toString(36).slice(2, 10);
}

/**
 * Clamp a number between min and max (inclusive).
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
