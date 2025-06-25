/*
  Warnings:

  - The `tiempo` column on the `Categoria` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ubicacion_empleado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ubicacion_empleado` table. All the data in the column will be lost.
  - Added the required column `createdBy` to the `Categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Empleado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Empleado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Inventario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Inventario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Mensaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Mensaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Obra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Obra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Permiso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Permiso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Persona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Persona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Posicion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Posicion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Proforma` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Proforma` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Punto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Punto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Tarea` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Tarea` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Transaccion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Transaccion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Ubicacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Ubicacion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "CategoriasPermiso" ADD VALUE 'Cliente';
ALTER TYPE "CategoriasPermiso" ADD VALUE 'Empleado';
ALTER TYPE "CategoriasPermiso" ADD VALUE 'Mensaje';
ALTER TYPE "CategoriasPermiso" ADD VALUE 'Posicion';
ALTER TYPE "CategoriasPermiso" ADD VALUE 'proveedor';
ALTER TYPE "CategoriasPermiso" ADD VALUE 'Tarea';
ALTER TYPE "CategoriasPermiso" ADD VALUE 'Ubicacion';

-- AlterTable
ALTER TABLE "Categoria" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL,
DROP COLUMN "tiempo",
ADD COLUMN     "tiempo" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Empleado" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Inventario" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Mensaje" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Obra" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Pedido" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Permiso" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Persona" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Posicion" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Proforma" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Punto" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Tarea" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Transaccion" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Ubicacion" ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedBy" INTEGER,
ADD COLUMN     "deletedDate" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ubicacion_empleado" DROP CONSTRAINT "ubicacion_empleado_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "ubicacion_empleado_pkey" PRIMARY KEY ("id_punto", "id_empleado");
