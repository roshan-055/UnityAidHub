/*
  Warnings:

  - The `currentAmount` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `goalAmount` on the `Post` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "goalAmount",
ADD COLUMN     "goalAmount" INTEGER NOT NULL,
DROP COLUMN "currentAmount",
ADD COLUMN     "currentAmount" INTEGER;
