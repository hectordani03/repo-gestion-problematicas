export function formatValue(value) {
  if (value instanceof Date) return value.toLocaleString();
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Date(value).toLocaleString();
  }
  return value ?? "-";
}
