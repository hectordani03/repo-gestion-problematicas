export class User {
  constructor({
    uuid_user = undefined,
    email,
    password,
    firstName = undefined,
    middleName = undefined,
    lastName = undefined,
    status = undefined,
    lastLoginAt = undefined,
  }) {
    this.email = email;
    this.password = password;

    if (status != undefined && typeof status != "number")
      throw new Error("Status must be a number");

    this.uuid_user = uuid_user;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.status = status;
    this.lastLoginAt = lastLoginAt;
  }

  toPrimitives() {
    return Object.fromEntries(
      Object.entries(this).filter(([_, v]) => v !== undefined)
    );
  }
}
