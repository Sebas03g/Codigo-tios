/*
  Warnings:

  - You are about to drop the column `codigo` on the `Compra` table. All the data in the column will be lost.
  - Made the column `id_persona` on table `Transaccion` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Transaccion" DROP CONSTRAINT "Transaccion_id_persona_fkey";

-- AlterTable
ALTER TABLE "Compra" DROP COLUMN "codigo",
ADD COLUMN     "fechaCredito" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Transaccion" ADD COLUMN     "id_compra" INTEGER,
ADD COLUMN     "id_devolucion" INTEGER,
ADD COLUMN     "id_venta" INTEGER,
ALTER COLUMN "id_persona" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Transaccion" ADD CONSTRAINT "Transaccion_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
