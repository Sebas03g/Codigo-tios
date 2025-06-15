/*
  Warnings:

  - You are about to drop the column `tipo` on the `Categoria` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "EstadoHerramientas" AS ENUM ('NUEVO', 'USADO', 'VIEJO', 'DAÑADO');

-- AlterTable
ALTER TABLE "Categoria" DROP COLUMN "tipo";

-- AlterTable
ALTER TABLE "Inventario" ADD COLUMN     "estado" "EstadoHerramientas";
