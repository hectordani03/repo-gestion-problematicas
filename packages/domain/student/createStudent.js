import { Student } from "./Student.js";
import { studentRepo } from "@reuc/infrastructure/studentRepo.js";

export async function createStudent(uuidUser, universityId) {
  const student = new Student({ uuidUser, universityId });
  return await studentRepo.save(student.toPrimitives());
}
