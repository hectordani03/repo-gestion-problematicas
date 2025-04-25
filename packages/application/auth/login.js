import { Warning } from "../entities/Warning.js";
import { ValidationError } from "../entities/ValidationError.js";
import { validateEmail } from "./register.js";
import { loginUser } from "@reuc/domain/loginUser.js";

export async function login({ data, ip, userAgent }) {
  try {
    const emailError = validateEmail(data.email);
    if (emailError) throw new ValidationError("Correo o contraseña no valido");

    const resObj = await loginUser({
      email: data.email,
      password: data.password,
      ip,
      userAgent,
    });
    if (!resObj.updated)
      throw new Warning("No se ha podido actualizar ultimo login del usuario");

    const { password, ...safeUser } = resObj.data;
    const accessToken = resObj.accessToken;
    const refreshToken = resObj.refreshToken;

    return { user: safeUser, tokens: { accessToken, refreshToken } };
  } catch (error) {
    throw error;
  }
}
