/*
  Warnings:

  - You are about to drop the `ProjectTypes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Applications" DROP CONSTRAINT "Applications_project_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Projects" DROP CONSTRAINT "Projects_project_type_id_fkey";

-- DropTable
DROP TABLE "ProjectTypes";

-- CreateTable
CREATE TABLE "Project_Types" (
    "project_type_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "estimated_time" TEXT NOT NULL,
    "min_team_members_size" INTEGER NOT NULL,
    "max_team_members_size" INTEGER NOT NULL,
    "min_team_advisors_size" INTEGER NOT NULL,
    "max_team_advisors_size" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_Types_pkey" PRIMARY KEY ("project_type_id")
);

-- AddForeignKey
ALTER TABLE "Applications" ADD CONSTRAINT "Applications_project_type_id_fkey" FOREIGN KEY ("project_type_id") REFERENCES "Project_Types"("project_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_project_type_id_fkey" FOREIGN KEY ("project_type_id") REFERENCES "Project_Types"("project_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;
