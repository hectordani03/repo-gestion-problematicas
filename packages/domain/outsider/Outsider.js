export class Outsider {
  constructor({
    uuid_outsider = undefined,
    uuidUser,
    organizationName = undefined,
    phoneNumber = undefined,
    location = undefined,
  }) {
    this.uuidUser = uuidUser;

    this.uuid_outsider = uuid_outsider;
    this.organizationName = organizationName;
    this.phoneNumber = phoneNumber;
    this.location = location;
  }

  static allowedFields = [
    "uuid_outsider",
    "uuidUser",
    "organizationName",
    "phoneNumber",
    "location",
  ];

  toPrimitives() {
    const primitive = {};

    for (const key of Outsider.allowedFields) {
      if (this[key] !== undefined) {
        primitive[key] = this[key];
      }
    }

    return primitive;
  }
}
