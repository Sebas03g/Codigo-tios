/*
  Warnings:

  - You are about to drop the `obra_empleados` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `obra_herramientas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `obra_inventario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `proforma_empleados` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `proforma_herramientas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `proforma_inventario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_horario_obra_empleado" DROP CONSTRAINT "_horario_obra_empleado_B_fkey";

-- DropForeignKey
ALTER TABLE "_horario_obra_herramienta" DROP CONSTRAINT "_horario_obra_herramienta_B_fkey";

-- DropForeignKey
ALTER TABLE "obra_empleados" DROP CONSTRAINT "obra_empleados_id_empleado_fkey";

-- DropForeignKey
ALTER TABLE "obra_empleados" DROP CONSTRAINT "obra_empleados_id_obra_fkey";

-- DropForeignKey
ALTER TABLE "obra_herramientas" DROP CONSTRAINT "obra_herramientas_id_herramienta_fkey";

-- DropForeignKey
ALTER TABLE "obra_herramientas" DROP CONSTRAINT "obra_herramientas_id_obra_fkey";

-- DropForeignKey
ALTER TABLE "obra_inventario" DROP CONSTRAINT "obra_inventario_id_inventario_fkey";

-- DropForeignKey
ALTER TABLE "obra_inventario" DROP CONSTRAINT "obra_inventario_id_obra_fkey";

-- DropForeignKey
ALTER TABLE "proforma_empleados" DROP CONSTRAINT "proforma_empleados_id_empleado_fkey";

-- DropForeignKey
ALTER TABLE "proforma_empleados" DROP CONSTRAINT "proforma_empleados_id_proforma_fkey";

-- DropForeignKey
ALTER TABLE "proforma_herramientas" DROP CONSTRAINT "proforma_herramientas_id_herramienta_fkey";

-- DropForeignKey
ALTER TABLE "proforma_herramientas" DROP CONSTRAINT "proforma_herramientas_id_proforma_fkey";

-- DropForeignKey
ALTER TABLE "proforma_inventario" DROP CONSTRAINT "proforma_inventario_id_elemento_fkey";

-- DropForeignKey
ALTER TABLE "proforma_inventario" DROP CONSTRAINT "proforma_inventario_id_proforma_fkey";

-- DropTable
DROP TABLE "obra_empleados";

-- DropTable
DROP TABLE "obra_herramientas";

-- DropTable
DROP TABLE "obra_inventario";

-- DropTable
DROP TABLE "proforma_empleados";

-- DropTable
DROP TABLE "proforma_herramientas";

-- DropTable
DROP TABLE "proforma_inventario";

-- CreateTable
CREATE TABLE "Proceso" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "id_proforma" INTEGER,
    "id_obra" INTEGER,

    CONSTRAINT "Proceso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proceso_empleados" (
    "id" SERIAL NOT NULL,
    "horas" INTEGER NOT NULL,
    "sueldo" DOUBLE PRECISION NOT NULL,
    "id_proceso" INTEGER NOT NULL,
    "id_empleado" INTEGER NOT NULL,
    "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO',

    CONSTRAINT "proceso_empleados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proceso_herramientas" (
    "id" SERIAL NOT NULL,
    "horas" INTEGER NOT NULL,
    "descuento" DOUBLE PRECISION NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "id_proceso" INTEGER NOT NULL,
    "id_herramienta" INTEGER NOT NULL,
    "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO',

    CONSTRAINT "proceso_herramientas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proceso_inventario" (
    "id" SERIAL NOT NULL,
    "cantidad" DOUBLE PRECISION NOT NULL,
    "descuento" DOUBLE PRECISION NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "id_proceso" INTEGER NOT NULL,
    "id_elemento" INTEGER NOT NULL,
    "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO',

    CONSTRAINT "proceso_inventario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Proceso" ADD CONSTRAINT "Proceso_id_proforma_fkey" FOREIGN KEY ("id_proforma") REFERENCES "Proforma"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proceso" ADD CONSTRAINT "Proceso_id_obra_fkey" FOREIGN KEY ("id_obra") REFERENCES "Obra"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proceso_empleados" ADD CONSTRAINT "proceso_empleados_id_proceso_fkey" FOREIGN KEY ("id_proceso") REFERENCES "Proceso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proceso_empleados" ADD CONSTRAINT "proceso_empleados_id_empleado_fkey" FOREIGN KEY ("id_empleado") REFERENCES "Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proceso_herramientas" ADD CONSTRAINT "proceso_herramientas_id_proceso_fkey" FOREIGN KEY ("id_proceso") REFERENCES "Proceso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proceso_herramientas" ADD CONSTRAINT "proceso_herramientas_id_herramienta_fkey" FOREIGN KEY ("id_herramienta") REFERENCES "Inventario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proceso_inventario" ADD CONSTRAINT "proceso_inventario_id_proceso_fkey" FOREIGN KEY ("id_proceso") REFERENCES "Proceso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proceso_inventario" ADD CONSTRAINT "proceso_inventario_id_elemento_fkey" FOREIGN KEY ("id_elemento") REFERENCES "Inventario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_horario_obra_empleado" ADD CONSTRAINT "_horario_obra_empleado_B_fkey" FOREIGN KEY ("B") REFERENCES "proceso_empleados"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_horario_obra_herramienta" ADD CONSTRAINT "_horario_obra_herramienta_B_fkey" FOREIGN KEY ("B") REFERENCES "proceso_herramientas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
