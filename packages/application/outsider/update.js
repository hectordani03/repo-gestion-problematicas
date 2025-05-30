import { updateOutsider } from "@reuc/domain/outsider/updateOutsider.js";
import { NotFoundError } from "@reuc/domain/errors/NotFoundError.js";
import { ValidationError } from "../errors/ValidationError.js";

export async function update({ uuidOutsider, body }) {
  try {
    const updatedOutsider = await updateOutsider({ uuidOutsider, body });

    return { outsider: updatedOutsider };
  } catch (err) {
    if (err instanceof NotFoundError)
      throw new ValidationError("La tabla no existe");
    throw err;
  }
}
