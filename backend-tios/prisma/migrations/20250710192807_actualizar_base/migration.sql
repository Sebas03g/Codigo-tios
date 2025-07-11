/*
  Warnings:

  - Added the required column `createdBy` to the `Compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Devolucion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Devolucion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Dia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Dia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Horario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Horario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Venta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Venta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Compra" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Devolucion" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Dia" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Horario" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Venta" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;
