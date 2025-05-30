import { getByUuidUser } from "@reuc/domain/user/getByUuidUser.js";
import { NotFoundError } from "@reuc/domain/errors/NotFoundError.js";
import { ValidationError } from "../errors/ValidationError.js";

export async function getByUuid({ uuidUser }) {
  try {
    const user = await getByUuidUser({ uuidUser });

    return { user };
  } catch (err) {
    if (err instanceof NotFoundError)
      throw new ValidationError("La tabla no existe");
    throw err;
  }
}
