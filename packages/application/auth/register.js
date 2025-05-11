import {
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
} from "./validators.js";
import { validateStudentId } from "../shared/validators.js";
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
