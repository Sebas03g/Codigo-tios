-- CreateTable
CREATE TABLE "Tarea" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "id_asignador" INTEGER NOT NULL,
    "id_asignado" INTEGER NOT NULL,

    CONSTRAINT "Tarea_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_id_asignador_fkey" FOREIGN KEY ("id_asignador") REFERENCES "Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_id_asignado_fkey" FOREIGN KEY ("id_asignado") REFERENCES "Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
