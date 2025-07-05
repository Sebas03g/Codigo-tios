-- AlterEnum
ALTER TYPE "CategoriasPermiso" ADD VALUE 'Pago';

-- CreateTable
CREATE TABLE "PermisoDependencia" (
    "id" SERIAL NOT NULL,
    "padreId" INTEGER NOT NULL,
    "hijoId" INTEGER NOT NULL,

    CONSTRAINT "PermisoDependencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransaccionesEspeciales" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "id_pago" INTEGER NOT NULL,

    CONSTRAINT "TransaccionesEspeciales_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PermisoDependencia" ADD CONSTRAINT "PermisoDependencia_padreId_fkey" FOREIGN KEY ("padreId") REFERENCES "Permiso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermisoDependencia" ADD CONSTRAINT "PermisoDependencia_hijoId_fkey" FOREIGN KEY ("hijoId") REFERENCES "Permiso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransaccionesEspeciales" ADD CONSTRAINT "TransaccionesEspeciales_id_pago_fkey" FOREIGN KEY ("id_pago") REFERENCES "Pago"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
