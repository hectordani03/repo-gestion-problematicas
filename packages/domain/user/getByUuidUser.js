import { userRepo } from "@reuc/infrastructure/userRepo.js";
import { NotFoundError } from "../errors/NotFoundError.js";

export async function getByUuidUser({ uuidUser }) {
  const user = await userRepo.findByUuid(uuidUser);
  if (!user) throw new NotFoundError("Usuario no existe");

  const { password, ...safeUser } = user;

  return safeUser;
}
