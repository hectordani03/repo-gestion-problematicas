import { adminRepo } from "@reuc/infrastructure/adminRepo.js";

export function getAllTableNames() {
  return adminRepo.getAllTableNames();
}
