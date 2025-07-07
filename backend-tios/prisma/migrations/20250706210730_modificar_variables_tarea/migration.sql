/*
  Warnings:

  - Made the column `id_asignado` on table `Tarea` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Tarea" DROP CONSTRAINT "Tarea_id_asignado_fkey";

-- AlterTable
ALTER TABLE "Tarea" ALTER COLUMN "id_asignado" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_id_asignado_fkey" FOREIGN KEY ("id_asignado") REFERENCES "Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
