import { updateUser } from "@reuc/domain/user/updateUser.js";
import { NotFoundError } from "@reuc/domain/errors/NotFoundError.js";
import { ValidationError } from "../errors/ValidationError.js";

export async function update({ uuidUser, body }) {
  try {
    const updatedUser = await updateUser({ uuidUser, body });

    return { user: updatedUser };
  } catch (err) {
    if (err instanceof NotFoundError)
      throw new ValidationError("La tabla no existe");
    throw err;
  }
}
