import { Outsider } from "./Outsider.js";
import { outsiderRepo } from "@reuc/infrastructure/outsiderRepo.js";

export async function createOutsider(uuidUser) {
  const outsider = new Outsider({ uuidUser });
  return await outsiderRepo.save(outsider.toPrimitives());
}
