/*
  Warnings:

  - Added the required column `createdBy` to the `Proceso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Proceso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Proceso" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO',
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;
