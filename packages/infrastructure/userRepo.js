import { db } from "./db/client.js";

export const userRepo = {
  // User Read
  async findByEmail(email) {
    return await db.user.findUnique({
      where: { email: email },
    });
  },
  async findByUuid(uuid) {
    return await db.user.findUnique({
      where: { uuid_user: uuid },
    });
  },

  // Users Read
  async filterByStatus(userStatusId) {
    return await db.user.findMany({
      where: {
        AND: [{ status: userStatusId }, { status: { not: null } }],
      },
    });
  },
  async filterByLastLoginBetween(since, to) {
    return await db.user.findMany({
      where: {
        lastLoginAt: {
          gt: since,
          lt: to,
        },
      },
    });
  },

  // User Update
  async update(uuid, updates) {
    return await db.user.update({
      where: { uuid_user: uuid },
      data: updates,
    });
  },

  // User Create
  async save(user) {
    return await db.user.create({ data: user });
  },
};
