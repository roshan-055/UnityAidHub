-- CreateEnum
CREATE TYPE "AdType" AS ENUM ('BANNER', 'CARD', 'HALFBANNER');

-- AlterTable
ALTER TABLE "Ads" ADD COLUMN     "type" "AdType" NOT NULL DEFAULT 'BANNER';
