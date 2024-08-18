/*
  Warnings:

  - You are about to drop the column `product_id` on the `Purchase` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Purchase` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_product_id_fkey";

-- AlterTable
ALTER TABLE "Purchase" DROP COLUMN "product_id",
DROP COLUMN "quantity";

-- CreateTable
CREATE TABLE "PurchaseProduct" (
    "id" TEXT NOT NULL,
    "purchaseId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "PurchaseProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PurchaseProduct" ADD CONSTRAINT "PurchaseProduct_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseProduct" ADD CONSTRAINT "PurchaseProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
