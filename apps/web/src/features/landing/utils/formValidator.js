/**
 * Valida si un campo de texto está vacío después de eliminar los espacios en blanco.
 * @param {string} value El valor del campo a validar.
 * @param {string} fieldName El nombre del campo (ej. "nombre", "correo electrónico").
 * @returns {string | null} Un mensaje de error si el campo está vacío, o null si es válido.
 */

export const validateRequired = (value, fieldName) => {
  if (!value || value.trim() === '') {
    return `El ${fieldName} es obligatorio.`;
  }
  return null; // No hay error
};

/**
 * Valida un campo de correo electrónico.
 * @param {string} email El valor del campo de correo electrónico.cd
 * @returns {string | null} Un mensaje de error si el correo no es válido, o null si es válido.
 */
export const validateEmail = (email) => {
  // Expresión regular básica para validar formato de email
  if (!/\S+@\S+\.\S+/.test(email)) {
    return 'El correo electrónico no es válido.';
  }
  return null; // No hay error
};