-- AlterTable
ALTER TABLE "Script" ADD COLUMN "tebexPackageId" INTEGER;

-- CreateIndex
CREATE INDEX "Script_tebexPackageId_idx" ON "Script"("tebexPackageId");

