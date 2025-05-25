import { db, tableNames, tableSchemas } from "./db/client.js";

export const adminRepo = {
  // Admin Read Multiple
  getAllTableNames() {
    return Object.values(tableNames);
  },
  getTableSchema(tableName) {
    const models = Object.keys(tableNames);
    const tables = Object.values(tableNames);
    if (!tables.includes(tableName))
      throw new Error(`Model not found ${tableName}`);

    const index = tables.indexOf(tableName);
    const model = models[index];

    return tableSchemas[model];
  },
  async fetchTableStats({ tableName, query }) {
    const models = Object.keys(tableNames);
    const tables = Object.values(tableNames);
    if (!tables.includes(tableName))
      throw new Error(`Model not found ${tableName}`);

    const index = tables.indexOf(tableName);
    const model = models[index];
    const schema = tableSchemas[model];

    const aggregateConfig = {
      _count: { _all: true },
    };

    if (query) {
      aggregateConfig.where = query;
    }

    if (schema && "createdAt" in schema) {
      aggregateConfig._min = { createdAt: true };
      aggregateConfig._max = { createdAt: true };
    }

    const stats = await db[model].aggregate(aggregateConfig);

    const result = {
      totalItems: stats._count._all,
    };

    if (
      stats._min?.createdAt !== undefined &&
      stats._max?.createdAt !== undefined
    ) {
      result.dateRange = {
        min: stats._min.createdAt,
        max: stats._max.createdAt,
      };
    }

    return result;
  },
  async fetchLimitRecords({
    tableName,
    query = {},
    sort = { createdAt: "desc" },
    page = 1,
    perPage = 50,
  }) {
    const models = Object.keys(tableNames);
    const tables = Object.values(tableNames);
    if (!tables.includes(tableName))
      throw new Error(`Model not found ${tableName}`);

    const index = tables.indexOf(tableName);
    const skip = (page - 1) * perPage;
    const take = perPage;

    return await db[models[index]].findMany({
      where: query,
      orderBy: sort,
      skip,
      take,
    });
  },

  // Admin Read
  async findByUuidUser(uuidUser) {
    return await db.admin.findUnique({
      where: { uuidUser },
    });
  },
  async findByUuid(uuid) {
    return await db.admin.findUnique({
      where: { uuid_admin: uuid },
    });
  },

  // Admin Update
  async update(uuid, updates) {
    return await db.admin.update({
      where: { uuid_admin: uuid },
      data: { updates },
    });
  },

  // Admin Create
  async save(data) {
    return await db.admin.create({ data });
  },
};
