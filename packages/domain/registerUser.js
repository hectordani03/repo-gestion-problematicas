import { hashPassword } from "./auth/hashPassword.js";
import { User } from "./entities/User.js";
import { generateAccessToken, generateRefreshToken } from "./auth/jwt.js";
import { userRepo } from "@reuc/infrastructure/userRepo.js";

export async function registerUser({ body, ip, userAgent }) {
  const existing = await userRepo.findByEmail(body.email);
  if (existing) throw new Error("El correo ya ha sido usado.");

  const hashed = await hashPassword(body.password);

  const user = new User({
    ...body,
    password: hashed,
    lastLoginIp: ip,
    lastLoginAt: new Date(),
  });

  const saved = await userRepo.save(user.toPrimitives());

  const payload = { uuid_user: saved.uuid_user, ip, ua: userAgent };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  return { user, accessToken, refreshToken };
}
