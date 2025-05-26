import { getAdminTableNames } from "./getAdminTableNames.js";
import { getAdminTableSchema } from "./getAdminTableSchema.js";
import { fetchAdminTableRecords } from "./fetchAdminTableRecords.js";

const admin = {
  getAdminTableNames,
  getAdminTableSchema,
  fetchAdminTableRecords,
};

export default admin;
