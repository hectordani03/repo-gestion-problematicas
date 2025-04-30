/*
  Warnings:

  - You are about to drop the column `project_type_id` on the `Applications` table. All the data in the column will be lost.
  - Added the required column `outsider_name` to the `Applications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_type` to the `Applications` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `estimated_time` on the `Applications` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Applications" DROP CONSTRAINT "Applications_project_type_id_fkey";

-- DropIndex
DROP INDEX "Applications_project_type_id_idx";

-- AlterTable
ALTER TABLE "Applications" DROP COLUMN "project_type_id",
ADD COLUMN     "email" TEXT,
ADD COLUMN     "extended_description" TEXT,
ADD COLUMN     "outsider_name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "project_TypeProject_type_id" INTEGER,
ADD COLUMN     "project_type" TEXT NOT NULL,
DROP COLUMN "estimated_time",
ADD COLUMN     "estimated_time" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "visibility" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "Applications_topic_interest_idx" ON "Applications"("topic_interest");

-- AddForeignKey
ALTER TABLE "Applications" ADD CONSTRAINT "Applications_project_TypeProject_type_id_fkey" FOREIGN KEY ("project_TypeProject_type_id") REFERENCES "Project_Types"("project_type_id") ON DELETE SET NULL ON UPDATE CASCADE;
