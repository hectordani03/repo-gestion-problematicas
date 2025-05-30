
const programmingCharsRegex = /[<>&"'/]/g;

/**
 * Limpia una cadena de texto eliminando caracteres que podrían ser utilizados
 * para inyección de código o XSS.
 *
 * @param {string} text La cadena de texto a limpiar.
 * @returns {string} La cadena de texto limpia.
 */
export const sanitizeInput = (text) => {
  if (typeof text !== 'string') {
    return text; 
  }
  return text.replace(programmingCharsRegex, '');
};