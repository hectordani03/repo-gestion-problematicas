import {
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
} from "./validators.js";
import { validateUniversityId } from "../shared/validators.js";
import { ValidationError } from "../errors/ValidationError.js";
import { registerUser } from "@reuc/domain/user/registerUser.js";

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
      const universityIdError = validateUniversityId(body.universityId);
      if (universityIdError) throw new ValidationError(universityIdError);
    }

    const resUsrObj = await registerUser({ body: body, ip, userAgent });

    const { password, ...safeUser } = resUsrObj.user;
    const accessToken = resUsrObj.accessToken;
    const refreshToken = resUsrObj.refreshToken;

    return { user: safeUser, tokens: { accessToken, refreshToken } };
  } catch (error) {
    throw error;
  }
}
