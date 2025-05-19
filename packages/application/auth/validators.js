export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email necesario para registro.";
  if (!emailRegex.test(email)) return "Email no válido.";
  return null;
}

export function validatePassword(password) {
  if (!password) return "Contraseña obligatoria.";
  if (password.length < 8) return "Mínimo 8 caracteres.";
  if (!/[A-Z]/.test(password)) return "Debe incluir al menos una mayúscula.";
  if (!/[a-z]/.test(password)) return "Debe incluir al menos una minúscula.";
  if (!/[0-9!@#$%^&*]/.test(password))
    return "Debe incluir un número o símbolo.";

  return null;
}

export function validatePasswordConfirm(password, confirmPassword) {
  if (password !== confirmPassword) return "Las contraseñas no coinciden.";

  return null;
}
