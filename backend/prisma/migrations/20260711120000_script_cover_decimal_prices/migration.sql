-- AlterTable
ALTER TABLE "Script"
  ALTER COLUMN "priceRub" TYPE DECIMAL(12,2) USING "priceRub"::decimal,
  ALTER COLUMN "priceUsd" TYPE DECIMAL(12,2) USING "priceUsd"::decimal;

ALTER TABLE "Script" ADD COLUMN "coverKey" TEXT;
