import { comparePasswords } from "../libs/auth/hashPassword.js";
import { generateAccessToken, generateRefreshToken } from "../libs/auth/jwt.js";
import { userRepo } from "@reuc/infrastructure/userRepo.js";

export async function loginUser({ email, password, ip, userAgent }) {
  const user = await userRepo.findByEmail(email);
  if (!user) throw new Error("Correo o contraseña no valido");

  const valid = await comparePasswords(password, user.password);
  if (!valid) throw new Error("Correo o contraseña no valido");

  const updated = await updateLastLogin(user.uuid_user, ip);

  const payload = {
    uuid_user: user.uuid_user,
    role: `${user.role}:${user.uuid_role}`,
    ip,
    ua: userAgent,
  };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  return {
    user,
    role: user.role,
    uuidRole: user.uuid_role,
    updated,
    accessToken,
    refreshToken,
  };
}

async function updateLastLogin(uuid_user, newIP) {
  try {
    const now = new Date();

    await userRepo.update(uuid_user, { lastLoginAt: now, lastLoginIp: newIP });

    return true;
  } catch (error) {
    return false;
  }
}
