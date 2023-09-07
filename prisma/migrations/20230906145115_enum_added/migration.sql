/*
  Warnings:

  - Added the required column `status` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('VERIFIED', 'NOTVERIFIED');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "status" "Status" NOT NULL;
