-- CreateTable
CREATE TABLE "TebexPackageMapping" (
    "id" TEXT NOT NULL,
    "store" "TebexStore" NOT NULL,
    "packageId" INTEGER NOT NULL,
    "packageName" TEXT NOT NULL DEFAULT '',
    "scriptId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TebexPackageMapping_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TebexPackageMapping_store_packageId_key" ON "TebexPackageMapping"("store", "packageId");

-- CreateIndex
CREATE INDEX "TebexPackageMapping_scriptId_idx" ON "TebexPackageMapping"("scriptId");

-- AddForeignKey
ALTER TABLE "TebexPackageMapping" ADD CONSTRAINT "TebexPackageMapping_scriptId_fkey" FOREIGN KEY ("scriptId") REFERENCES "Script"("id") ON DELETE CASCADE ON UPDATE CASCADE;
