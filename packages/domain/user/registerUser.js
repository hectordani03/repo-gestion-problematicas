import { hashPassword } from "../libs/auth/hashPassword.js";
import { User } from "./User.js";
import { generateAccessToken, generateRefreshToken } from "../libs/auth/jwt.js";
import { userRepo } from "@reuc/infrastructure/userRepo.js";
import { createOutsider } from "../outsider/createOursider.js";
import { createStudent } from "../student/createStudent.js";
import { createProfessor } from "../professor/createProfessor.js";

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

  let uuidRole;

  if (!body.universityId) {
    const outsiderSaved = await createOutsider(saved.uuid_user);
    uuidRole = `outsider:${outsiderSaved.uuid_outsider}`;
  } else if (body.universityId.length === 8) {
    const studentSaved = await createStudent(
      saved.uuid_user,
      body.universityId
    );
    uuidRole = `student:${studentSaved.uuid_student}`;
  } else if (body.universityId.length === 4) {
    const professorSaved = await createProfessor(
      saved.uuid_user,
      body.universityId
    );
    uuidRole = `professor:${professorSaved.uuid_professor}`;
  } else {
    throw new Error(
      "Unable to assign a role. Please ensure the provided information is correct and complete."
    );
  }

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
