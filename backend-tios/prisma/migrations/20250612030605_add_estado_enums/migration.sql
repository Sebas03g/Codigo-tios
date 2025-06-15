/*
  Warnings:

  - Changed the type of `nombre` on the `Dia` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "DiasSemana" AS ENUM ('LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO');

-- CreateEnum
CREATE TYPE "EstadoEliminado" AS ENUM ('ACTIVO', 'ELIMINADO');

-- AlterTable
ALTER TABLE "Categoria" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "Compra" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "Dia" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO',
DROP COLUMN "nombre",
ADD COLUMN     "nombre" "DiasSemana" NOT NULL;

-- AlterTable
ALTER TABLE "Empleado" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "Horario" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "Inventario" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "Obra" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "Pedido" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "Permiso" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "Persona" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "Posicion" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "Proforma" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "Punto" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "Transaccion" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "Ubicacion" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "Venta" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "obra_empleados" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "obra_herramientas" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "pedido_elementos" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "proforma_empleados" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "proforma_herramientas" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "proforma_inventario" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "transaccion_elementos" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "ubicacion_empleado" ADD COLUMN     "estadoEliminado" "EstadoEliminado" NOT NULL DEFAULT 'ACTIVO';
