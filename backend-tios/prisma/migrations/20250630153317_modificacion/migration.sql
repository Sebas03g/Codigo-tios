/*
  Warnings:

  - You are about to drop the column `descripcion` on the `Inventario` table. All the data in the column will be lost.
  - The primary key for the `ubicacion_empleado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `tiempo_esperado` on the `Obra` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tiempo_esperado` on the `Proforma` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "CategoriaMensajes" AS ENUM ('Sistema', 'Personal');

-- AlterTable
ALTER TABLE "Devolucion" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "Empleado" ADD COLUMN     "latActual" DECIMAL(65,30),
ADD COLUMN     "lngActual" DECIMAL(65,30);

-- AlterTable
ALTER TABLE "Inventario" DROP COLUMN "descripcion";

-- AlterTable
ALTER TABLE "Mensaje" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO',
ADD COLUMN     "tipo" "CategoriaMensajes" NOT NULL DEFAULT 'Sistema',
ALTER COLUMN "id_remitente" SET DEFAULT 1,
ALTER COLUMN "id_destinario" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "Obra" DROP COLUMN "tiempo_esperado",
ADD COLUMN     "tiempo_esperado" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Proforma" DROP COLUMN "tiempo_esperado",
ADD COLUMN     "tiempo_esperado" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Tarea" ADD COLUMN     "id_obra" INTEGER,
ADD COLUMN     "id_ubicacion" INTEGER;

-- AlterTable
ALTER TABLE "ubicacion_empleado" DROP CONSTRAINT "ubicacion_empleado_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ubicacion_empleado_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_id_ubicacion_fkey" FOREIGN KEY ("id_ubicacion") REFERENCES "Ubicacion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_id_obra_fkey" FOREIGN KEY ("id_obra") REFERENCES "Obra"("id") ON DELETE SET NULL ON UPDATE CASCADE;
