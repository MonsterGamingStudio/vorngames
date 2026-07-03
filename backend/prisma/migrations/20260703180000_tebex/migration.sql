-- CreateEnum
CREATE TYPE "TebexStore" AS ENUM ('gmod', 'fivem');

-- CreateEnum
CREATE TYPE "TebexLicenseStatus" AS ENUM ('active', 'revoked');

-- CreateTable
CREATE TABLE "TebexLicense" (
    "id" TEXT NOT NULL,
    "tebexTransactionId" TEXT NOT NULL,
    "store" "TebexStore" NOT NULL,
    "packageId" INTEGER NOT NULL,
    "packageName" TEXT NOT NULL,
    "scriptId" TEXT NOT NULL,
    "customerEmail" TEXT NOT NULL,
    "customerUsername" TEXT,
    "customerSteamId" TEXT,
    "priceAmount" DECIMAL(12,2) NOT NULL,
    "priceCurrency" TEXT NOT NULL,
    "licenseKey" TEXT NOT NULL,
    "status" "TebexLicenseStatus" NOT NULL DEFAULT 'active',
    "userId" TEXT,
    "purchaseId" TEXT,
    "purchasedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TebexLicense_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TebexLicense_tebexTransactionId_key" ON "TebexLicense"("tebexTransactionId");

-- CreateIndex
CREATE UNIQUE INDEX "TebexLicense_licenseKey_key" ON "TebexLicense"("licenseKey");

-- CreateIndex
CREATE UNIQUE INDEX "TebexLicense_purchaseId_key" ON "TebexLicense"("purchaseId");

-- CreateIndex
CREATE INDEX "TebexLicense_userId_idx" ON "TebexLicense"("userId");

-- CreateIndex
CREATE INDEX "TebexLicense_customerEmail_idx" ON "TebexLicense"("customerEmail");

-- CreateIndex
CREATE INDEX "TebexLicense_customerSteamId_idx" ON "TebexLicense"("customerSteamId");

-- CreateIndex
CREATE INDEX "TebexLicense_status_idx" ON "TebexLicense"("status");

-- CreateIndex
CREATE INDEX "TebexLicense_store_idx" ON "TebexLicense"("store");

-- AddForeignKey
ALTER TABLE "TebexLicense" ADD CONSTRAINT "TebexLicense_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TebexLicense" ADD CONSTRAINT "TebexLicense_scriptId_fkey" FOREIGN KEY ("scriptId") REFERENCES "Script"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TebexLicense" ADD CONSTRAINT "TebexLicense_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchase"("id") ON DELETE SET NULL ON UPDATE CASCADE;
