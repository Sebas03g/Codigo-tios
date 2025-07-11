/*
  Warnings:

  - Added the required column `createdBy` to the `transaccion_elementos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `transaccion_elementos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transaccion_elementos" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;
