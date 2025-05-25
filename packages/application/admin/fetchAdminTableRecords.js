import { validateTable } from "./validator.js";
import { ValidationError } from "../errors/ValidationError.js";
import { NotFoundError } from "@reuc/domain/errors/NotFoundError.js";
import { fetchTableRecords } from "@reuc/domain/admin/fetchTableRecords.js";

export async function fetchAdminTableRecords({
  table,
  page,
  perPage,
  query,
  sort,
}) {
  try {
    const tableError = validateTable(table);
    if (tableError) throw new ValidationError(tableError);

    const data = await fetchTableRecords({ table, page, perPage, query, sort });

    return { data };
  } catch (err) {
    if (err instanceof NotFoundError)
      throw new ValidationError("La tabla no existe");
    throw err;
  }
}
