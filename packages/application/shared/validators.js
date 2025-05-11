export function validateDate(dateString) {
  if (typeof dateString !== "string") {
    return "La fecha debe ser una cadena de texto.";
  }

  // Check basic format: YYYY-MM-DD
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return "Formato de fecha inválido. Usa el formato AAAA-MM-DD.";
  }

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "Fecha inválida.";
  }

  const now = new Date();
  if (now >= date) {
    return "La fecha debe ser posterior a la fecha actual.";
  }

  return null;
}

export function validateStudentId(studentId) {
  if (studentId.length !== 8 && studentId.length !== 6)
    return "El número de cuenta debe tener 8 dígitos (alumno) o 6 (maestro).";
  if (!/^\d+$/.test(studentId))
    return "El número de cuenta solo debe contener números.";

  return null;
}
