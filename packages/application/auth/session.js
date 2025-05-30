import { ValidationError } from "../errors/ValidationError.js";
import {
  verifyRefreshToken,
  generateAccessToken,
  verifyAccessToken,
} from "@reuc/domain/libs/auth/jwt.js";

export function sessionAuth(token, ip, ua) {
  try {
    const decoded = verifyAccessToken(token);

    if (decoded.ip !== ip || decoded.ua !== ua) {
      throw new ValidationError("Token mismatch");
    }

    return decoded;
  } catch (error) {
    throw error;
  }
}

export function sessionRefresh(req) {
  const token = req.cookies.refreshToken;

  try {
    const decoded = verifyRefreshToken(token);

    const newAccessToken = generateAccessToken({
      uuid_user: decoded.uuid_user,
      ip: req.ip,
      ua: req.headers["user-agent"],
    });

    return newAccessToken;
  } catch (error) {
    throw error;
  }
}
