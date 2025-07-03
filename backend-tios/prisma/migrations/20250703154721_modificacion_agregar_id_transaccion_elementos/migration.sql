/*
  Warnings:

  - The primary key for the `transaccion_elementos` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "transaccion_elementos" DROP CONSTRAINT "transaccion_elementos_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "transaccion_elementos_pkey" PRIMARY KEY ("id");
