-- AlterTable
ALTER TABLE "Donation" ALTER COLUMN "payment" SET DEFAULT 'STRIPE';

-- AlterTable
ALTER TABLE "Pages" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "Pages" ADD CONSTRAINT "Pages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
