export function validatePhone(phone) {
  if (typeof phone !== "string") {
    return "El número de teléfono debe ser una cadena de texto.";
  }

  const trimmed = phone.trim();

  // Allowed formats: +34 600123456, 600123456, 600-123-456, etc.
  const digits = trimmed.replace(/[\s\-().]/g, "");

  if (!/^\+?\d{9,15}$/.test(digits)) {
    return "Número de teléfono inválido. Debe tener entre 9 y 15 dígitos.";
  }

  return null;
}
