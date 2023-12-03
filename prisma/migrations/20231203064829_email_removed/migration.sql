/*
  Warnings:

  - You are about to drop the `EmailNotification` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EmailNotification" DROP CONSTRAINT "EmailNotification_fundraiserId_fkey";

-- DropTable
DROP TABLE "EmailNotification";
