import { ValidationError } from "../entities/ValidationError.js";
import { registerUser } from "@reuc/domain/registerUser.js";

export async function register(data) {
  try {
    const emailError = validateEmail(data.email);
    if (emailError) throw new ValidationError(emailError);

    const passwordError = validatePassword(data.password);
    if (passwordError) throw new ValidationError(passwordError);

    const passConfirmError = validatePasswordConfirm(
      data.password,
      data.confirmPassword
    );
    if (passConfirmError) throw new ValidationError(passConfirmError);
    
    if (data.email.endsWith("@ucol.mx")) {
      const studentIdError = validateStudentId(data.studentId);
      if (studentIdError) throw new ValidationError(studentIdError);
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
  if (!emailRegex.test(email)) return "Email no válido.";
  return null;
}

function validatePassword(password) {
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

  if (studentId.length !== 8 && studentId.length !== 6) return "El número de cuenta debe tener 8 dígitos (alumno) o 6 (maestro)."
  if (!/^\d+$/.test(studentId)) return "El número de cuenta solo debe contener números."
  return null;
}
