/*
  Warnings:

  - Added the required column `fecha_final` to the `Tarea` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Categoria" ADD COLUMN     "tipo" TEXT NOT NULL DEFAULT 'inventario';

-- AlterTable
ALTER TABLE "Tarea" ADD COLUMN     "fecha_final" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fecha_inicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
