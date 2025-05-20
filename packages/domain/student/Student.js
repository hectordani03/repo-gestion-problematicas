export class Student {
  constructor({
    uuid_student = undefined,
    uuidUser,
    universityId,
    averageGrade = undefined,
    enrollmentYear = undefined,
    status = undefined,
  }) {
    this.uuidUser = uuidUser;

    if (universityId.length !== 8)
      throw new Error(
        "University ID must be exactly 8 characters long and consist of numbers."
      );

    this.universityId = universityId;

    if (status != undefined && typeof status != "number")
      throw new Error("Status must be a number");

    this.uuid_student = uuid_student;
    this.averageGrade = averageGrade;
    this.enrollmentYear = enrollmentYear;
    this.status = status;
  }

  static allowedFields = [
    "uuid_student",
    "uuidUser",
    "universityId",
    "averageGrade",
    "enrollmentYear",
    "status",
  ];

  toPrimitives() {
    const primitive = {};

    for (const key of Student.allowedFields) {
      if (this[key] !== undefined) {
        primitive[key] = this[key];
      }
    }

    return primitive;
  }
}
