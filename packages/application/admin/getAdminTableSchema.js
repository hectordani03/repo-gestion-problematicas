import { validateTable } from "./validator.js";
import { ValidationError } from "../errors/ValidationError.js";
import { NotFoundError } from "@reuc/domain/errors/NotFoundError.js";
import { getTableSchema } from "@reuc/domain/admin/getTableSchema.js";

export async function getAdminTableSchema({ table }) {
  try {
    const tableError = validateTable(table);
    if (tableError) throw new ValidationError(tableError);

    const schema = await getTableSchema({ table });

    return { schema };
  } catch (err) {
    if (err instanceof NotFoundError)
      throw new ValidationError("La tabla no existe");
    throw err;
  }
}
