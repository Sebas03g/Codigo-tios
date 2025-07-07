/*
  Warnings:

  - You are about to drop the column `estado` on the `DiaTrabajo` table. All the data in the column will be lost.
  - You are about to drop the column `month` on the `Pago` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Pago` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DiaTrabajo" DROP COLUMN "estado";

-- AlterTable
ALTER TABLE "Pago" DROP COLUMN "month",
DROP COLUMN "year";

-- AlterTable
ALTER TABLE "TransaccionesEspeciales" ADD COLUMN     "estado" "EstadoObra" NOT NULL DEFAULT 'ACTIVO';
