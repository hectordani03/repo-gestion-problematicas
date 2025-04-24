import { hashPassword } from "./auth/hashPassword.js";
import { User } from "./entities/User.js";
import { userRepo } from "@reuc/infrastructure/userRepo.js";

export async function registerUser(data) {
  const existing = await userRepo.findByEmail(data.email);
  if (existing) throw new Error("El correo ya ha sido usado.");

  const hashed = await hashPassword(data.password);

  const user = new User({ ...data, password: hashed });

  const saved = userRepo.save(user.toPrimitives);
  if (!saved.uuid_user) throw new Error("Hubo un error al crear el usuario");

  return saved;
}
