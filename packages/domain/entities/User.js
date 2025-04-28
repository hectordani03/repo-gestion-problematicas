export class User {
  constructor({
    uuid_user = undefined,
    email,
    password,
    studentId = undefined,
    firstName = undefined,
    middleName = undefined,
    lastName = undefined,
    status = undefined,
    lastLoginIp = undefined,
    lastLoginAt = undefined,
  }) {
    this.email = email.toLowerCase();
    this.password = password;

    if (status != undefined && typeof status != "number")
      throw new Error("Status must be a number");

    this.uuid_user = uuid_user;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.status = status;
    this.lastLoginIp = lastLoginIp;
    this.lastLoginAt = lastLoginAt;
  }

  static allowedFields = [
    "uuid_user",
    "email",
    "password",
    "firstName",
    "middleName",
    "lastName",
    "status",
    "lastLoginIp",
    "lastLoginAt",
  ];

  toPrimitives() {
    const userPrimitive = {};

    for (const key of User.allowedFields) {
      if (this[key] !== undefined) {
        userPrimitive[key] = this[key];
      }
    }

    return userPrimitive;
    return Object.fromEntries(
      Object.entries(this).filter(([_, v]) => v !== undefined)
    );
  }
}
