/*
  Warnings:

  - A unique constraint covering the columns `[lat,lng]` on the table `Punto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `Empleado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Empleado" ADD COLUMN     "password" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Mensaje" (
    "id" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_remitente" INTEGER NOT NULL,
    "id_destinario" INTEGER NOT NULL,

    CONSTRAINT "Mensaje_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Punto_lat_lng_key" ON "Punto"("lat", "lng");

-- AddForeignKey
ALTER TABLE "Mensaje" ADD CONSTRAINT "Mensaje_id_remitente_fkey" FOREIGN KEY ("id_remitente") REFERENCES "Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensaje" ADD CONSTRAINT "Mensaje_id_destinario_fkey" FOREIGN KEY ("id_destinario") REFERENCES "Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
