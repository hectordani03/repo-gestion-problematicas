import { Application } from "./Application.js";
import { applicationRepo } from "@reuc/infrastructure/applicationRepo.js";

export async function createApplication({ uuidAuthor, data }) {
  const application = new Application({
    ...data,
    uuidUser: uuidAuthor,
    outsiderName: data.name,
    email: data.contactEmail,
    description: data.shortDescription,
    extendedDescription: data.description,
    topicInterest: data.problemType,
    estimatedTime: data.deadline,
  });

  const saved = await applicationRepo.save(application.toPrimitives());

  return saved;
}
