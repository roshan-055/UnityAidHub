/*
  Warnings:

  - You are about to drop the column `adCategoryId` on the `Ads` table. All the data in the column will be lost.
  - You are about to drop the `AdCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ads" DROP CONSTRAINT "Ads_adCategoryId_fkey";

-- AlterTable
ALTER TABLE "Ads" DROP COLUMN "adCategoryId";

-- DropTable
DROP TABLE "AdCategory";
