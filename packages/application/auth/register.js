import { ValidationError } from "../entities/ValidationError.js";
import { registerUser } from "@reuc/domain/registerUser.js";

export async function register(data) {
  try {
    const emailError = validateEmail(data.email);
    if (emailError) throw new ValidationError(emailError);

    const passwordError = validatePassword(data.password);
    if (passwordError) throw new ValidationError(passwordError);

    if (!passwordError) {
      const passConfirmError = validatePasswordConfirm(
        data.password,
        data.confirmPassword
      );
      if (passConfirmError) throw new ValidationError(passConfirmError);
    }

    const user = await registerUser(data);

    const { password, ...safeUser } = user;

    return { user: safeUser };
  } catch (error) {
    throw error;
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email necesario para registro.";
  if (!emailRegex.test(email)) return "Email no valido.";
  return null;
}

function validatePassword(password) {
  if (!password) return "Contraseña necesaria para el registro.";
  if (password.length < 8) return "Contraseña de al menos 8 caracteres.";
  if (!/[A-Z]/.test(password))
    return "Contraseña debe tener al menos una letra mayuscula.";
  if (!/[a-z]/.test(password))
    return "Contraseña debe tener al menos una letra minuscula.";
  if (!/[0-9!@#$%^&*]/.test(password))
    return "Contraseña debe tener un numero o un simbolo.";
  return null;
}

function validatePasswordConfirm(password, passwordConfirm) {
  if (password !== passwordConfirm) return "Contraseñas no coinciden.";
  return null;
}
