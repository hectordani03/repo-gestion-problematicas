import { userRepo } from "@reuc/infrastructure/userRepo.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { User } from "./User.js";

export async function updateUser({ uuidUser, body }) {
  const user = await userRepo.findByUuid(uuidUser);
  if (!user) throw new NotFoundError("Usuario no existe");

  const normalizedUser = new User({
    ...user,
    ...body,
  });

  const safeUser = normalizedUser.toPrimitives();
  delete safeUser.email;
  delete safeUser.password;
  delete safeUser.lastLoginIp;
  delete safeUser.lastLoginAt;

  const updatedUser = await userRepo.update(safeUser.uuid_user, safeUser);

  return updatedUser;
}
