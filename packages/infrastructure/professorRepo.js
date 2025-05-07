import { db } from "./db/client.js";

export const professorRepo = {
  // Professor Read
  async findByUuidUser(uuidUser) {
    return await db.professor.findUnique({
      where: { uuidUser },
    });
  },
  async findByUuid(uuid) {
    return await db.professor.findUnique({
      where: { uuid_professor: uuid },
    });
  },
  async findByUniversityId(universityId) {
    return await db.professor.findUnique({
      where: { universityId },
    });
  },

  // Professor Update
  async update(uuid, updates) {
    return await db.professor.update({
      where: { uuid_professor: uuid },
      data: updates,
    });
  },

  // Professor Create
  async save(data) {
    return await db.professor.create({ data });
  },
};
