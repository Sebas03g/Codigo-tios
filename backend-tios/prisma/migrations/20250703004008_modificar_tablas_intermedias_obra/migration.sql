/*
  Warnings:

  - Added the required column `sueldo` to the `obra_empleados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descuento` to the `obra_herramientas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio` to the `obra_herramientas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "obra_empleados" ADD COLUMN     "sueldo" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "obra_herramientas" ADD COLUMN     "descuento" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "precio" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "obra_inventario" (
    "id" SERIAL NOT NULL,
    "horas" INTEGER NOT NULL,
    "descuento" DOUBLE PRECISION NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "id_obra" INTEGER NOT NULL,
    "id_inventario" INTEGER NOT NULL,
    "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO',

    CONSTRAINT "obra_inventario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "obra_inventario" ADD CONSTRAINT "obra_inventario_id_obra_fkey" FOREIGN KEY ("id_obra") REFERENCES "Obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "obra_inventario" ADD CONSTRAINT "obra_inventario_id_inventario_fkey" FOREIGN KEY ("id_inventario") REFERENCES "Inventario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
