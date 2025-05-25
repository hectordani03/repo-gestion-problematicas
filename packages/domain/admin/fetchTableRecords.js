import { adminRepo } from "@reuc/infrastructure/adminRepo.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { searchTableInArray } from "../libs/searchInArray.js";

export async function fetchTableRecords({
  table,
  page = 1,
  perPage = 50,
  query = {},
  sort = {},
}) {
  const tableNames = adminRepo.getAllTableNames();
  const index = searchTableInArray(tableNames, table);
  if (index < 0) throw new NotFoundError("No table found.");

  const tableName = tableNames[index];

  const [tableRecords, stats] = await Promise.all([
    adminRepo.fetchLimitRecords({
      tableName,
      query,
      sort,
      page,
      perPage,
    }),
    adminRepo.fetchTableStats({
      tableName,
    }),
  ]);

  const totalItems = stats.totalItems;
  const totalPages = Math.ceil(tableRecords.length / perPage);

  return {
    records: tableRecords,
    meta: {
      pagination: {
        page,
        perPage,
        totalItems,
        totalPages,
      },
      query,
      sort,
    },
  };
}
