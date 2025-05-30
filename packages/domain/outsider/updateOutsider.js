import { outsiderRepo } from "@reuc/infrastructure/outsiderRepo.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { Outsider } from "./Outsider.js";

export async function updateOutsider({ uuidOutsider, body }) {
  const outsider = await outsiderRepo.findByUuid(uuidOutsider);
  if (!outsider) throw new NotFoundError("Externo no existe");

  const normalizedOutsider = new Outsider({
    ...outsider,
    ...body,
  });

  const safeOutsider = normalizedOutsider.toPrimitives();
  delete safeOutsider.uuidUser;

  const updatedOutsider = await outsiderRepo.update(
    safeOutsider.uuid_outsider,
    safeOutsider
  );

  return updatedOutsider;
}
