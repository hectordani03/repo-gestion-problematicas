import { Warning } from "../errors/Warning.js";
import { ValidationError } from "../errors/ValidationError.js";
import { validateEmail } from "./validators.js";
import { loginUser } from "@reuc/domain/user/loginUser.js";
import { ConflictError } from "@reuc/domain/errors/ConflictError.js";

export async function login({ data, ip, userAgent }) {
  try {
    const emailError = validateEmail(data.email);
    if (emailError) throw new ValidationError("Correo no valido");

    const resObj = await loginUser({
      email: data.email,
      password: data.password,
      ip,
      userAgent,
    });
    if (!resObj.updated)
      throw new Warning("No se ha podido actualizar ultimo login del usuario");

    const { password, ...safeUser } = resObj.user;
    const accessToken = resObj.accessToken;
    const refreshToken = resObj.refreshToken;

    return { user: safeUser, tokens: { accessToken, refreshToken } };
  } catch (error) {
    if (error instanceof ConflictError)
      throw new ValidationError(error.message);
    throw error;
  }
}
