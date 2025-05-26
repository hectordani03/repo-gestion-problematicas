import { getAllTableNames } from "@reuc/domain/admin/getAllTableNames.js";

export function getAdminTableNames() {
  const tables = getAllTableNames();

  return { tables };
}
