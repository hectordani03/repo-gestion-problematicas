/*
  Warnings:

  - A unique constraint covering the columns `[uuid_user]` on the table `Admins` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uuid_user]` on the table `Outsiders` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uuid_user]` on the table `Professors` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uuid_user]` on the table `Students` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Admins_uuid_user_key" ON "Admins"("uuid_user");

-- CreateIndex
CREATE UNIQUE INDEX "Outsiders_uuid_user_key" ON "Outsiders"("uuid_user");

-- CreateIndex
CREATE UNIQUE INDEX "Professors_uuid_user_key" ON "Professors"("uuid_user");

-- CreateIndex
CREATE UNIQUE INDEX "Students_uuid_user_key" ON "Students"("uuid_user");
