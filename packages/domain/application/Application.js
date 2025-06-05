export class Application {
  constructor({
    // ===TEMP
    outsiderName,
    phone = undefined,
    email = undefined,
    // ===END TEMP
    uuid_application = undefined,
    uuidUser,
    name,
    // topicInterest,
    // projectType,
    estimatedTime,
    description = undefined,
    extendedDescription = undefined,
    visibility,
  }) {
    this.outsiderName = outsiderName;
    this.uuidUser = uuidUser;
    this.name = name;
    // this.topicInterest = topicInterest;
    // this.projectType = projectType;
    this.estimatedTime = new Date(estimatedTime);
    this.visibility = visibility;

    if (typeof phone == "undefined" && typeof email == "undefined")
      throw new Error(
        "At least one contact method (phone or email) must be provided."
      );

    if (
      typeof description == "undefined" &&
      typeof extendedDescription == "undefined"
    )
      throw new Error(
        "At least one description (description or extendedDescription) must be provided."
      );

    this.uuid_application = uuid_application;
    this.phone = phone;
    this.email = email;
    this.description = description;
    this.extendedDescription = extendedDescription;
  }

  static allowedFields = [
    "outsiderName",
    "uuidUser",
    "name",
    // "topicInterest",
    // "projectType",
    "estimatedTime",
    "visibility",
    "uuid_application",
    "phone",
    "email",
    "description",
    "extendedDescription",
  ];

  toPrimitives() {
    const primitive = {};

    for (const key of Application.allowedFields) {
      if (this[key] !== undefined) {
        primitive[key] = this[key];
      }
    }

    return primitive;
  }
}
