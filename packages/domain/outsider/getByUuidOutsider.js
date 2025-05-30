import { outsiderRepo } from "@reuc/infrastructure/outsiderRepo.js";
import { NotFoundError } from "../errors/NotFoundError.js";

export async function getByUuidOutsider({ uuidOutsider }) {
  const outsider = await outsiderRepo.findByUuid(uuidOutsider);
  if (!outsider) throw new NotFoundError("Externo no existe");

  return outsider;
}
