/*
  Warnings:

  - You are about to drop the column `hijoId` on the `PermisoDependencia` table. All the data in the column will be lost.
  - You are about to drop the column `padreId` on the `PermisoDependencia` table. All the data in the column will be lost.
  - Added the required column `id_hijo` to the `PermisoDependencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_padre` to the `PermisoDependencia` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PermisoDependencia" DROP CONSTRAINT "PermisoDependencia_hijoId_fkey";

-- DropForeignKey
ALTER TABLE "PermisoDependencia" DROP CONSTRAINT "PermisoDependencia_padreId_fkey";

-- AlterTable
ALTER TABLE "PermisoDependencia" DROP COLUMN "hijoId",
DROP COLUMN "padreId",
ADD COLUMN     "id_hijo" INTEGER NOT NULL,
ADD COLUMN     "id_padre" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PermisoDependencia" ADD CONSTRAINT "PermisoDependencia_id_padre_fkey" FOREIGN KEY ("id_padre") REFERENCES "Permiso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermisoDependencia" ADD CONSTRAINT "PermisoDependencia_id_hijo_fkey" FOREIGN KEY ("id_hijo") REFERENCES "Permiso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
