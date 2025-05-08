import { db } from "./db/client.js";

export const studentRepo = {
  // Student Read
  async findByUuidUser(uuidUser) {
    return await db.student.findUnique({
      where: { uuidUser },
    });
  },
  async findByUuid(uuid) {
    return await db.student.findUnique({
      where: { uuid_student: uuid },
    });
  },
  async findByUniversityId(universityId) {
    return await db.student.findUnique({
      where: { universityId },
    });
  },

  // Students Read
  async filterByAverageGradeGreaterEqual(averageGrade) {
    return await db.student.findMany({
      where: { averageGrade: { gte: averageGrade } },
    });
  },
  async filterByAverageGradeLeserEqual(averageGrade) {
    return await db.student.findMany({
      where: { averageGrade: { lte: averageGrade } },
    });
  },
  async filterByAverageGrade(averageGrade) {
    return await db.student.findMany({
      where: { averageGrade: averageGrade },
    });
  },
  async filterByEnrollmentYear(enrollmentYear) {
    return await db.student.findMany({
      where: { enrollmentYear },
    });
  },

  // Student Update
  async update(uuid, updates) {
    return await db.student.update({
      where: { uuid_student: uuid },
      data: updates,
    });
  },

  // Student Create
  async save(data) {
    return await db.student.create({ data });
  },
};
