/*
  Warnings:

  - Made the column `shortUrl` on table `shortUrl` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "shortUrl" ALTER COLUMN "shortUrl" SET NOT NULL;
