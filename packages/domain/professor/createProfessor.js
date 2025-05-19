import { Professor } from "./Professor.js";
import { professorRepo } from "@reuc/infrastructure/professorRepo.js";

export async function createProfessor(uuidUser, universityId) {
  const professor = new Professor({ uuidUser, universityId });
  return await professorRepo.save(professor.toPrimitives());
}
