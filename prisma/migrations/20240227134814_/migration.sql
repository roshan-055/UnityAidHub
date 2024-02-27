/*
  Warnings:

  - Added the required column `darkImage` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lightImage` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primaryImage` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "darkImage" TEXT NOT NULL,
ADD COLUMN     "lightImage" TEXT NOT NULL,
ADD COLUMN     "primaryImage" TEXT NOT NULL;
