import { ValidationError } from "../errors/ValidationError.js";
import { validatePhone } from "../outsiders/validators.js";
import { validateDate } from "../shared/validators.js";
import { createApplication } from "@reuc/domain/application/createApplication.js";

export async function create({ uuidAuthor, body }) {
  const phoneError = validatePhone(body.phone);
  if (phoneError) throw new ValidationError(phoneError);

  const dateError = validateDate(body.deadline);
  if (dateError) throw new ValidationError(dateError);

  const newApplication = await createApplication({ uuidAuthor, data: body });

  return { application: newApplication };
}
