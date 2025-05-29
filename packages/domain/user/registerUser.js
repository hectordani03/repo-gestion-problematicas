import { hashPassword } from "../libs/auth/hashPassword.js";
import { User } from "./User.js";
import { generateAccessToken, generateRefreshToken } from "../libs/auth/jwt.js";
import { userRepo } from "@reuc/infrastructure/userRepo.js";
import { createOutsider } from "../outsider/createOursider.js";
import { createStudent } from "../student/createStudent.js";
import { createProfessor } from "../professor/createProfessor.js";
import { ConflictError } from "../errors/ConflictError.js";

export async function registerUser({ body, ip, userAgent }) {
  const existing = await userRepo.findByEmail(body.email);
  if (existing) throw new ConflictError("El correo ya ha sido usado.");

  const hashed = await hashPassword(body.password);

  let roleCreator;
  let rolePrefix;

  if (!body.universityId) {
    roleCreator = createOutsider;
    rolePrefix = "outsider";
  } else if (body.universityId.length === 8) {
    roleCreator = (uuid) => createStudent(uuid, body.universityId);
    rolePrefix = "student";
  } else if (body.universityId.length === 4) {
    roleCreator = (uuid) => createProfessor(uuid, body.universityId);
    rolePrefix = "professor";
  } else {
    throw new ConflictError("Falta numeró de cuenta.");
  }

  const user = new User({
    ...body,
    password: hashed,
    lastLoginIp: ip,
    lastLoginAt: new Date(),
  });

  const saved = await userRepo.save(user.toPrimitives());

  const role = await roleCreator(saved.uuid_user);
  const uuidRole = `${rolePrefix}:${role[`uuid_${rolePrefix}`]}`;

  const payload = {
    uuid_user: saved.uuid_user,
    role: uuidRole,
    ip,
    ua: userAgent,
  };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  return { user: saved, accessToken, refreshToken };
}
