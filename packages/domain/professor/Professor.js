export class Professor {
  constructor({
    uuid_professor = undefined,
    uuidUser,
    universityId,
    role = undefined,
  }) {
    this.uuidUser = uuidUser;

    if (typeof universityId != "number" && universityId.lenght !== 8)
      throw new Error(
        "University ID must be exactly 8 characters long and consist of numbers."
      );

    this.universityId = universityId;

    if (role != undefined && typeof role != "number")
      throw new Error("Status must be a number");

    this.uuid_professor = uuid_professor;
    this.role = role;
  }

  static allowedFields = ["uuid_professor", "uuidUser", "universityId", "role"];

  toPrimitives() {
    const primitive = {};

    for (const key of Professor.allowedFields) {
      if (this[key] !== undefined) {
        primitive[key] = this[key];
      }
    }

    return primitive;
  }
}
