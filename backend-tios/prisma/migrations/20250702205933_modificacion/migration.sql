/*
  Warnings:

  - Changed the type of `tipo` on the `Categoria` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `estado` to the `Empleado` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EstadoObra" AS ENUM ('ACTIVO', 'CERRADO');

-- CreateEnum
CREATE TYPE "EstadoTarea" AS ENUM ('ABIERTA', 'PROCESO', 'CERRADA');

-- CreateEnum
CREATE TYPE "CategoriasInventario" AS ENUM ('Inventario', 'Herramienta');

-- CreateEnum
CREATE TYPE "EstadoMensaje" AS ENUM ('RECIBIDO', 'ABIERTO');

-- AlterEnum
ALTER TYPE "CategoriaMensajes" ADD VALUE 'Credito';

-- AlterEnum
ALTER TYPE "CategoriasPermiso" ADD VALUE 'Proforma';

-- DropForeignKey
ALTER TABLE "Tarea" DROP CONSTRAINT "Tarea_id_asignado_fkey";

-- AlterTable
ALTER TABLE "Categoria" DROP COLUMN "tipo",
ADD COLUMN     "tipo" "CategoriasInventario" NOT NULL;

-- AlterTable
ALTER TABLE "Empleado" ADD COLUMN     "estado" "EstadoTrabajador" NOT NULL;

-- AlterTable
ALTER TABLE "Inventario" ALTER COLUMN "descuento" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Mensaje" ADD COLUMN     "estado" "EstadoMensaje" NOT NULL DEFAULT 'RECIBIDO';

-- AlterTable
ALTER TABLE "Obra" ADD COLUMN     "estado" "EstadoObra" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "Tarea" ADD COLUMN     "estado" "EstadoTarea" NOT NULL DEFAULT 'ABIERTA',
ALTER COLUMN "id_asignado" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_id_asignado_fkey" FOREIGN KEY ("id_asignado") REFERENCES "Empleado"("id") ON DELETE SET NULL ON UPDATE CASCADE;
