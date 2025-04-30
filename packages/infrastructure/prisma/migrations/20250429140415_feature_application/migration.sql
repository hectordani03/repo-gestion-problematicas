-- CreateTable
CREATE TABLE "Applications" (
    "uuid_application" TEXT NOT NULL,
    "uuid_user" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "topic_interest" TEXT NOT NULL,
    "project_type_id" INTEGER NOT NULL,
    "estimated_time" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "visibility" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Applications_pkey" PRIMARY KEY ("uuid_application")
);

-- CreateTable
CREATE TABLE "Projects" (
    "uuid_project" TEXT NOT NULL,
    "uuid_application" TEXT NOT NULL,
    "topic_interest" TEXT NOT NULL,
    "project_type_id" INTEGER NOT NULL,
    "estimated_time" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("uuid_project")
);

-- CreateTable
CREATE TABLE "ProjectTypes" (
    "project_type_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "estimated_time" TEXT NOT NULL,
    "min_team_members_size" INTEGER NOT NULL,
    "max_team_members_size" INTEGER NOT NULL,
    "min_team_advisors_size" INTEGER NOT NULL,
    "max_team_advisors_size" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectTypes_pkey" PRIMARY KEY ("project_type_id")
);

-- CreateIndex
CREATE INDEX "Applications_uuid_user_idx" ON "Applications"("uuid_user");

-- CreateIndex
CREATE INDEX "Applications_project_type_id_idx" ON "Applications"("project_type_id");

-- CreateIndex
CREATE INDEX "Applications_created_at_idx" ON "Applications"("created_at");

-- CreateIndex
CREATE INDEX "Projects_uuid_application_idx" ON "Projects"("uuid_application");

-- CreateIndex
CREATE INDEX "Projects_project_type_id_idx" ON "Projects"("project_type_id");

-- CreateIndex
CREATE INDEX "Projects_created_at_idx" ON "Projects"("created_at");

-- CreateIndex
CREATE INDEX "Projects_status_idx" ON "Projects"("status");

-- AddForeignKey
ALTER TABLE "Applications" ADD CONSTRAINT "Applications_uuid_user_fkey" FOREIGN KEY ("uuid_user") REFERENCES "Users"("uuid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Applications" ADD CONSTRAINT "Applications_project_type_id_fkey" FOREIGN KEY ("project_type_id") REFERENCES "ProjectTypes"("project_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_uuid_application_fkey" FOREIGN KEY ("uuid_application") REFERENCES "Applications"("uuid_application") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_project_type_id_fkey" FOREIGN KEY ("project_type_id") REFERENCES "ProjectTypes"("project_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;
