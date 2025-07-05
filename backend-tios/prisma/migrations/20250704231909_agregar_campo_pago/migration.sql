-- CreateTable
CREATE TABLE "Pago" (
    "id" SERIAL NOT NULL,
    "id_empleado" INTEGER NOT NULL,
    "horas" DOUBLE PRECISION NOT NULL,
    "fecha_pago" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pago_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pago" ADD CONSTRAINT "Pago_id_empleado_fkey" FOREIGN KEY ("id_empleado") REFERENCES "Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
