import { db } from "./db/client.js";

export const outsiderRepo = {
  // Outsider Read
  async findByUuidUser(uuidUser) {
    return await db.outsider.findUnique({
      where: { uuidUser },
    });
  },
  async findByUuid(uuid) {
    return await db.outsider.findUnique({
      where: { uuid_outsider: uuid },
    });
  },

  // Outsider Update
  async update(uuid, updates) {
    return await db.outsider.update({
      where: { uuid_outsider: uuid },
      data: updates,
    });
  },

  // Outsider Create
  async save(data) {
    return await db.outsider.create({ data });
  },
};
