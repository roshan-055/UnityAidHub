/*
  Warnings:

  - The values [BANK,ESEWA,FONEPAY,PAYPAL] on the enum `Payment` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Payment_new" AS ENUM ('KHALTI', 'STRIPE', 'CARD');
ALTER TABLE "Donation" ALTER COLUMN "payment" DROP DEFAULT;
ALTER TABLE "Donation" ALTER COLUMN "payment" TYPE "Payment_new" USING ("payment"::text::"Payment_new");
ALTER TYPE "Payment" RENAME TO "Payment_old";
ALTER TYPE "Payment_new" RENAME TO "Payment";
DROP TYPE "Payment_old";
ALTER TABLE "Donation" ALTER COLUMN "payment" SET DEFAULT 'KHALTI';
COMMIT;
