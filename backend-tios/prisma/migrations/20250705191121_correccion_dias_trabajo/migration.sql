/*
  Warnings:

  - You are about to drop the column `estado` on the `TransaccionesEspeciales` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DiaTrabajo" ADD COLUMN     "estado" "EstadoObra" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "TransaccionesEspeciales" DROP COLUMN "estado";
