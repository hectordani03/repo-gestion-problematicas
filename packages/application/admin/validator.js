export function validateTable(table) {
  const isValidFormat = /^[a-z_]+$/.test(table.toLowerCase().trim());
  if (!isValidFormat) return "El nombre de la tabla no es válido.";
  return null;
}
