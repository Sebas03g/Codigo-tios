/*
  Warnings:

  - The values [proveedor] on the enum `CategoriasPermiso` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CategoriasPermiso_new" AS ENUM ('Transaccion', 'Inventario', 'Pedido', 'Obra', 'Cliente', 'Empleado', 'Mensaje', 'Posicion', 'Proveedor', 'Tarea', 'Ubicacion');
ALTER TABLE "Permiso" ALTER COLUMN "categoria" TYPE "CategoriasPermiso_new" USING ("categoria"::text::"CategoriasPermiso_new");
ALTER TYPE "CategoriasPermiso" RENAME TO "CategoriasPermiso_old";
ALTER TYPE "CategoriasPermiso_new" RENAME TO "CategoriasPermiso";
DROP TYPE "CategoriasPermiso_old";
COMMIT;
