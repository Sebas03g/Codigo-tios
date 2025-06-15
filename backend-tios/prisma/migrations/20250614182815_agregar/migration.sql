/*
  Warnings:

  - Added the required column `categoria` to the `Permiso` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CategoriasPermiso" AS ENUM ('Transaccion', 'Inventario', 'Pedido', 'Obra');

-- AlterTable
ALTER TABLE "Permiso" ADD COLUMN     "categoria" "CategoriasPermiso" NOT NULL;
