/*
  Warnings:

  - You are about to drop the column `fecha_pago` on the `Pago` table. All the data in the column will be lost.
  - You are about to drop the column `horas` on the `Pago` table. All the data in the column will be lost.
  - Added the required column `id_empleado` to the `DiaTrabajo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `month` to the `Pago` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Pago` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DiaTrabajo" ADD COLUMN     "id_empleado" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Pago" DROP COLUMN "fecha_pago",
DROP COLUMN "horas",
ADD COLUMN     "month" INTEGER NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "DiaTrabajo" ADD CONSTRAINT "DiaTrabajo_id_empleado_fkey" FOREIGN KEY ("id_empleado") REFERENCES "Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
