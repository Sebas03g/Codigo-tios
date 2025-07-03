/*
  Warnings:

  - Added the required column `sueldo` to the `proforma_empleados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descuento` to the `proforma_herramientas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio` to the `proforma_herramientas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descuento` to the `proforma_inventario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio` to the `proforma_inventario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "proforma_empleados" ADD COLUMN     "sueldo" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "proforma_herramientas" ADD COLUMN     "descuento" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "precio" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "proforma_inventario" ADD COLUMN     "descuento" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "precio" DOUBLE PRECISION NOT NULL;
