import { adminRepo } from "@reuc/infrastructure/adminRepo.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { searchTableInArray } from "../libs/searchInArray.js";

export async function getTableSchema({ table }) {
  const tableNames = adminRepo.getAllTableNames();
  const index = searchTableInArray(tableNames, table);
  if (index < 0) throw new NotFoundError("No table found.");

  const tableName = tableNames[index];

  return adminRepo.getTableSchema(tableName);
}
