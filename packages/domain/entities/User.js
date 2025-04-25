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
    this.studentId = studentId;

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

  toPrimitives() {
    return Object.fromEntries(
      Object.entries(this).filter(([_, v]) => v !== undefined)
    );
  }
}
