-- This is an empty migration.
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT GENERATED ALWAYS AS ("firstName" || ' ' || "lastName") STORED;
ALTER TABLE "Creator" ADD COLUMN     "name" TEXT GENERATED ALWAYS AS ("firstName" || ' ' || "lastName") STORED;