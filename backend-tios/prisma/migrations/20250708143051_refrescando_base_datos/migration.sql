/*
  Warnings:

  - You are about to drop the column `codigo` on the `Devolucion` table. All the data in the column will be lost.
  - You are about to drop the column `codigo` on the `Venta` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Devolucion" DROP COLUMN "codigo";

-- AlterTable
ALTER TABLE "Venta" DROP COLUMN "codigo";
