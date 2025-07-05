-- CreateTable
CREATE TABLE "DiaTrabajo" (
    "id" SERIAL NOT NULL,
    "id_pago" INTEGER NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_final" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiaTrabajo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DiaTrabajo" ADD CONSTRAINT "DiaTrabajo_id_pago_fkey" FOREIGN KEY ("id_pago") REFERENCES "Pago"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
