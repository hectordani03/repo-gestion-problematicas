import { comparePasswords } from "./auth/hashPassword.js";
import { userRepo } from "@reuc/infrastructure/userRepo.js";

export async function loginUser(data) {
  const user = await userRepo.findByEmail(data.email);
  if (!user) throw new Error("Correo o contraseña no valido");

  const credentialsIsValid = await comparePasswords(
    data.password,
    user.password
  );
  if (!credentialsIsValid) throw new Error("Correo o contraseña no valido");

  await updateLastLogin(user.lastLoginAt);

  return user;
}

async function updateLastLogin(uuid_user) {
  const now = new Date();

  const updated = await userRepo.update(uuid_user, { lastLoginAt: now });
  if (!updated)
    throw new Error("No se ha podido actualizar ultimo login del usuario");
}
