/*
  Warnings:

  - The primary key for the `proforma_empleados` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `proforma_herramientas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `proforma_inventario` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "proforma_empleados" DROP CONSTRAINT "proforma_empleados_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "proforma_empleados_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "proforma_herramientas" DROP CONSTRAINT "proforma_herramientas_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "proforma_herramientas_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "proforma_inventario" DROP CONSTRAINT "proforma_inventario_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "proforma_inventario_pkey" PRIMARY KEY ("id");
