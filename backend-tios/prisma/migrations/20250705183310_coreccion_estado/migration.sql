/*
  Warnings:

  - You are about to drop the column `estadp` on the `Pago` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pago" DROP COLUMN "estadp",
ADD COLUMN     "estado" "EstadoObra" NOT NULL DEFAULT 'ACTIVO';
