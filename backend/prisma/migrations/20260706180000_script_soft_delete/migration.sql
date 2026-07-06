-- AlterTable
ALTER TABLE "Script" ADD COLUMN "deletedAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "Script_deletedAt_idx" ON "Script"("deletedAt");
