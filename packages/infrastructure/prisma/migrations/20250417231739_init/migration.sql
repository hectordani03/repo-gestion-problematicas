-- CreateTable
CREATE TABLE "Users" (
    "uuid_user" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "first_name" TEXT,
    "middle_name" TEXT,
    "last_name" TEXT,
    "user_status_id" INTEGER,
    "last_login_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("uuid_user")
);

-- CreateTable
CREATE TABLE "User_Statuses" (
    "user_status_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_Statuses_pkey" PRIMARY KEY ("user_status_id")
);

-- CreateTable
CREATE TABLE "Admins" (
    "uuid_admin" TEXT NOT NULL,
    "uuid_user" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admins_pkey" PRIMARY KEY ("uuid_admin")
);

-- CreateTable
CREATE TABLE "Students" (
    "uuid_student" TEXT NOT NULL,
    "uuid_user" TEXT NOT NULL,
    "university_id" BIGINT NOT NULL,
    "average_grade" DOUBLE PRECISION,
    "enrollment_year" TIMESTAMP(3),
    "student_status_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("uuid_student")
);

-- CreateTable
CREATE TABLE "Student_Statuses" (
    "student_status_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_Statuses_pkey" PRIMARY KEY ("student_status_id")
);

-- CreateTable
CREATE TABLE "Professors" (
    "uuid_professor" TEXT NOT NULL,
    "uuid_user" TEXT NOT NULL,
    "university_id" BIGINT NOT NULL,
    "professor_role_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Professors_pkey" PRIMARY KEY ("uuid_professor")
);

-- CreateTable
CREATE TABLE "Professor_Roles" (
    "professor_role_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Professor_Roles_pkey" PRIMARY KEY ("professor_role_id")
);

-- CreateTable
CREATE TABLE "Outsiders" (
    "uuid_outsider" TEXT NOT NULL,
    "uuid_user" TEXT NOT NULL,
    "organization_name" TEXT,
    "phone_number" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Outsiders_pkey" PRIMARY KEY ("uuid_outsider")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE INDEX "Users_email_idx" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Students_university_id_key" ON "Students"("university_id");

-- CreateIndex
CREATE INDEX "Students_uuid_user_idx" ON "Students"("uuid_user");

-- CreateIndex
CREATE INDEX "Students_university_id_idx" ON "Students"("university_id");

-- CreateIndex
CREATE UNIQUE INDEX "Professors_university_id_key" ON "Professors"("university_id");

-- CreateIndex
CREATE INDEX "Professors_uuid_user_idx" ON "Professors"("uuid_user");

-- CreateIndex
CREATE INDEX "Professors_university_id_idx" ON "Professors"("university_id");

-- CreateIndex
CREATE INDEX "Outsiders_uuid_user_idx" ON "Outsiders"("uuid_user");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_user_status_id_fkey" FOREIGN KEY ("user_status_id") REFERENCES "User_Statuses"("user_status_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admins" ADD CONSTRAINT "Admins_uuid_user_fkey" FOREIGN KEY ("uuid_user") REFERENCES "Users"("uuid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_uuid_user_fkey" FOREIGN KEY ("uuid_user") REFERENCES "Users"("uuid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_student_status_id_fkey" FOREIGN KEY ("student_status_id") REFERENCES "Student_Statuses"("student_status_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professors" ADD CONSTRAINT "Professors_uuid_user_fkey" FOREIGN KEY ("uuid_user") REFERENCES "Users"("uuid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professors" ADD CONSTRAINT "Professors_professor_role_id_fkey" FOREIGN KEY ("professor_role_id") REFERENCES "Professor_Roles"("professor_role_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outsiders" ADD CONSTRAINT "Outsiders_uuid_user_fkey" FOREIGN KEY ("uuid_user") REFERENCES "Users"("uuid_user") ON DELETE RESTRICT ON UPDATE CASCADE;
