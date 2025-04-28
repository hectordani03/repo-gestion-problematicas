import { ValidationError } from "../entities/ValidationError.js";
import { registerUser } from "@reuc/domain/registerUser.js";

export async function register({ body, ip, userAgent }) {
  try {
    const emailError = validateEmail(body.email);
    if (emailError) throw new ValidationError(emailError);

    const passwordError = validatePassword(body.password);
    if (passwordError) throw new ValidationError(passwordError);

    const passConfirmError = validatePasswordConfirm(
      body.password,
      body.confirmPassword
    );
    if (passConfirmError) throw new ValidationError(passConfirmError);

    if (body.email.endsWith("@ucol.mx")) {
      const studentIdError = validateStudentId(body.studentId);
      if (studentIdError) throw new ValidationError(studentIdError);
    }

    const resObj = await registerUser({ body: body, ip, userAgent });

    const { password, ...safeUser } = resObj.user;
    const accessToken = resObj.accessToken;
    const refreshToken = resObj.refreshToken;

    return { user: safeUser, tokens: { accessToken, refreshToken } };
  } catch (error) {
    throw error;
  }
}

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email necesario para registro.";
  if (!emailRegex.test(email)) return "Email no válido.";
  return null;
}

export function validatePassword(password) {
  if (!password) return "Contraseña obligatoria.";
  if (password.length < 8) return "Mínimo 8 caracteres.";
  if (!/[A-Z]/.test(password))
    return "Debe incluir al menos una mayúscula.";
  if (!/[a-z]/.test(password))
    return "Debe incluir al menos una minúscula.";
  if (!/[0-9!@#$%^&*]/.test(password))
    return "Debe incluir un número o símbolo.";
  
  return null;
}

function validatePasswordConfirm(password, confirmPassword) {
  if (password !== confirmPassword) return "Las contraseñas no coinciden.";
  
  return null;
}

function validateStudentId(studentId) {
  if (studentId.length !== 8 && studentId.length !== 6)
    return "El número de cuenta debe tener 8 dígitos (alumno) o 6 (maestro).";
  if (!/^\d+$/.test(studentId))
    return "El número de cuenta solo debe contener números.";

  return null;
}
