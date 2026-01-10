/*
  Warnings:

  - You are about to drop the column `errorCount` on the `Otp` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Otp" RENAME COLUMN "errorCount" TO "error";
