import { db } from "./db/client.js";

export const applicationRepo = {
  async update(uuid, updates) {
    return await db.application.update({
      where: { uuid_application: uuid },
      data: { updates },
    });
  },

  async save(application) {
    return await db.application.create({ data: application });
  },

  async getAll() {
    return await db.application.findMany();
  },
};
