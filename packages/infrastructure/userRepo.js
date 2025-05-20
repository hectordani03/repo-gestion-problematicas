import { db } from "./db/client.js";

export const userRepo = {
  // User Read
  async findByEmail(email) {
    const user = await db.user.findUnique({
      where: { email: email },
      include: {
        admins: true,
        students: true,
        professors: true,
        outsiders: true,
      },
    });

    if (!user) return null;

    let roleInfo = null;
    if (user.admins.length > 0) {
      roleInfo = { role: "admin", uuid_role: user.admins[0].uuid_admin };
    } else if (user.students.length > 0) {
      roleInfo = { role: "student", uuid_role: user.students[0].uuid_student };
    } else if (user.professors.length > 0) {
      roleInfo = {
        role: "professor",
        uuid_role: user.professors[0].uuid_professor,
      };
    } else if (user.outsiders.length > 0) {
      roleInfo = {
        role: "outsider",
        uuid_role: user.outsiders[0].uuid_outsider,
      };
    }

    return {
      ...user,
      role: roleInfo?.role ?? null,
      uuid_role: roleInfo?.uuid_role ?? null,
    };
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
