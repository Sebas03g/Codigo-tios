/*
  Warnings:

  - You are about to drop the column `venta` on the `Categoria` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Categoria" DROP COLUMN "venta";

-- AlterTable
ALTER TABLE "Devolucion" ADD COLUMN     "estado" "EstadoTarea";

-- AlterTable
ALTER TABLE "transaccion_elementos" ADD COLUMN     "estado" "EstadoTarea";
