import user from "../user/index.js";
import outsider from "../outsider/index.js";
import { validatePhone } from "../outsider/validators.js";
import { ValidationError } from "../errors/ValidationError.js";

export async function update({ uuidUser, uuidOutsider, body }) {
  const phoneError = validatePhone(body.phoneNumber);
  if (phoneError) throw new ValidationError(phoneError);

  await user.update({ uuidUser, body });
  await outsider.update({ uuidOutsider, body });
}
