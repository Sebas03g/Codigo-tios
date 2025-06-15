-- CreateEnum
CREATE TYPE "EstadoTrabajador" AS ENUM ('TRABAJANDO', 'FUERA', 'DESACTIVO');

-- CreateEnum
CREATE TYPE "EstadoPedido" AS ENUM ('ABIERTO', 'PROCESO', 'CERRADO');

-- CreateTable
CREATE TABLE "Punto" (
    "id" SERIAL NOT NULL,
    "lat" DECIMAL(65,30) NOT NULL,
    "lng" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Punto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ubicacion" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "id_punto" INTEGER NOT NULL,

    CONSTRAINT "Ubicacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "tipo_unidad" TEXT NOT NULL,
    "venta" BOOLEAN NOT NULL,
    "tiempo" TEXT,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Persona" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ruc" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "proveedor" BOOLEAN NOT NULL,

    CONSTRAINT "Persona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventario" (
    "id" SERIAL NOT NULL,
    "precio" DECIMAL(65,30) NOT NULL,
    "descuento" DECIMAL(65,30) NOT NULL,
    "cantidad" DOUBLE PRECISION,
    "descripcion" TEXT,
    "id_categoria" INTEGER NOT NULL,
    "id_ubicacion" INTEGER NOT NULL,
    "id_proveedor" INTEGER NOT NULL,

    CONSTRAINT "Inventario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permiso" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Permiso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Posicion" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Posicion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empleado" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "cedula" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "sueldo" DECIMAL(65,30) NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "id_posicion" INTEGER NOT NULL,

    CONSTRAINT "Empleado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proforma" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tiempo_esperado" INTEGER NOT NULL,
    "porcentaje_venta" DECIMAL(65,30) NOT NULL,
    "id_punto" INTEGER NOT NULL,
    "id_cliente" INTEGER NOT NULL,

    CONSTRAINT "Proforma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proforma_empleados" (
    "horas" INTEGER NOT NULL,
    "id_proforma" INTEGER NOT NULL,
    "id_empleado" INTEGER NOT NULL,

    CONSTRAINT "proforma_empleados_pkey" PRIMARY KEY ("id_proforma","id_empleado")
);

-- CreateTable
CREATE TABLE "proforma_herramientas" (
    "horas" INTEGER NOT NULL,
    "id_proforma" INTEGER NOT NULL,
    "id_herramienta" INTEGER NOT NULL,

    CONSTRAINT "proforma_herramientas_pkey" PRIMARY KEY ("id_proforma","id_herramienta")
);

-- CreateTable
CREATE TABLE "proforma_inventario" (
    "cantidad" DOUBLE PRECISION NOT NULL,
    "id_proforma" INTEGER NOT NULL,
    "id_elemento" INTEGER NOT NULL,

    CONSTRAINT "proforma_inventario_pkey" PRIMARY KEY ("id_proforma","id_elemento")
);

-- CreateTable
CREATE TABLE "Obra" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tiempo_esperado" INTEGER NOT NULL,
    "porcentaje_venta" DECIMAL(65,30) NOT NULL,
    "id_punto" INTEGER NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "id_proforma" INTEGER NOT NULL,

    CONSTRAINT "Obra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaccion" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_empleado" INTEGER NOT NULL,
    "id_persona" INTEGER,
    "id_obra" INTEGER,

    CONSTRAINT "Transaccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaccion_elementos" (
    "id_transaccion" INTEGER NOT NULL,
    "id_elementos" INTEGER NOT NULL,
    "cantidad" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "transaccion_elementos_pkey" PRIMARY KEY ("id_transaccion","id_elementos")
);

-- CreateTable
CREATE TABLE "Compra" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "id_transaccion" INTEGER NOT NULL,

    CONSTRAINT "Compra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Venta" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "porcentaje" DECIMAL(65,30) NOT NULL,
    "id_transaccion" INTEGER NOT NULL,

    CONSTRAINT "Venta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Devolucion" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "id_transaccion" INTEGER NOT NULL,

    CONSTRAINT "Devolucion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Horario" (
    "id" SERIAL NOT NULL,
    "hora_inicio" TIMESTAMP(3) NOT NULL,
    "hora_final" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Horario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Dia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "obra_empleados" (
    "id" SERIAL NOT NULL,
    "horas" INTEGER NOT NULL,
    "id_obra" INTEGER NOT NULL,
    "id_empleado" INTEGER NOT NULL,

    CONSTRAINT "obra_empleados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "obra_herramientas" (
    "id" SERIAL NOT NULL,
    "horas" INTEGER NOT NULL,
    "id_obra" INTEGER NOT NULL,
    "id_herramienta" INTEGER NOT NULL,

    CONSTRAINT "obra_herramientas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "id_obra" INTEGER NOT NULL,
    "id_transaccion" INTEGER NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedido_elementos" (
    "id_pedido" INTEGER NOT NULL,
    "id_elemento" INTEGER NOT NULL,
    "id_empleado" INTEGER NOT NULL,
    "estado" "EstadoPedido" NOT NULL,

    CONSTRAINT "pedido_elementos_pkey" PRIMARY KEY ("id_pedido","id_elemento")
);

-- CreateTable
CREATE TABLE "ubicacion_empleado" (
    "id" SERIAL NOT NULL,
    "id_punto" INTEGER NOT NULL,
    "id_empleado" INTEGER NOT NULL,
    "estado" "EstadoTrabajador" NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ubicacion_empleado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_posicion_permiso" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_posicion_permiso_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_horario_obra_empleado" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_horario_obra_empleado_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_horario_obra_herramienta" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_horario_obra_herramienta_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_horario_dia" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_horario_dia_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Obra_id_proforma_key" ON "Obra"("id_proforma");

-- CreateIndex
CREATE UNIQUE INDEX "Compra_id_transaccion_key" ON "Compra"("id_transaccion");

-- CreateIndex
CREATE UNIQUE INDEX "Venta_id_transaccion_key" ON "Venta"("id_transaccion");

-- CreateIndex
CREATE UNIQUE INDEX "Devolucion_id_transaccion_key" ON "Devolucion"("id_transaccion");

-- CreateIndex
CREATE INDEX "_posicion_permiso_B_index" ON "_posicion_permiso"("B");

-- CreateIndex
CREATE INDEX "_horario_obra_empleado_B_index" ON "_horario_obra_empleado"("B");

-- CreateIndex
CREATE INDEX "_horario_obra_herramienta_B_index" ON "_horario_obra_herramienta"("B");

-- CreateIndex
CREATE INDEX "_horario_dia_B_index" ON "_horario_dia"("B");

-- AddForeignKey
ALTER TABLE "Ubicacion" ADD CONSTRAINT "Ubicacion_id_punto_fkey" FOREIGN KEY ("id_punto") REFERENCES "Punto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_id_ubicacion_fkey" FOREIGN KEY ("id_ubicacion") REFERENCES "Ubicacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_id_proveedor_fkey" FOREIGN KEY ("id_proveedor") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Empleado" ADD CONSTRAINT "Empleado_id_posicion_fkey" FOREIGN KEY ("id_posicion") REFERENCES "Posicion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proforma" ADD CONSTRAINT "Proforma_id_punto_fkey" FOREIGN KEY ("id_punto") REFERENCES "Punto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proforma" ADD CONSTRAINT "Proforma_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proforma_empleados" ADD CONSTRAINT "proforma_empleados_id_proforma_fkey" FOREIGN KEY ("id_proforma") REFERENCES "Proforma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proforma_empleados" ADD CONSTRAINT "proforma_empleados_id_empleado_fkey" FOREIGN KEY ("id_empleado") REFERENCES "Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proforma_herramientas" ADD CONSTRAINT "proforma_herramientas_id_proforma_fkey" FOREIGN KEY ("id_proforma") REFERENCES "Proforma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proforma_herramientas" ADD CONSTRAINT "proforma_herramientas_id_herramienta_fkey" FOREIGN KEY ("id_herramienta") REFERENCES "Inventario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proforma_inventario" ADD CONSTRAINT "proforma_inventario_id_proforma_fkey" FOREIGN KEY ("id_proforma") REFERENCES "Proforma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proforma_inventario" ADD CONSTRAINT "proforma_inventario_id_elemento_fkey" FOREIGN KEY ("id_elemento") REFERENCES "Inventario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obra" ADD CONSTRAINT "Obra_id_punto_fkey" FOREIGN KEY ("id_punto") REFERENCES "Punto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obra" ADD CONSTRAINT "Obra_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obra" ADD CONSTRAINT "Obra_id_proforma_fkey" FOREIGN KEY ("id_proforma") REFERENCES "Proforma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaccion" ADD CONSTRAINT "Transaccion_id_empleado_fkey" FOREIGN KEY ("id_empleado") REFERENCES "Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaccion" ADD CONSTRAINT "Transaccion_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "Persona"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaccion" ADD CONSTRAINT "Transaccion_id_obra_fkey" FOREIGN KEY ("id_obra") REFERENCES "Obra"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaccion_elementos" ADD CONSTRAINT "transaccion_elementos_id_transaccion_fkey" FOREIGN KEY ("id_transaccion") REFERENCES "Transaccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaccion_elementos" ADD CONSTRAINT "transaccion_elementos_id_elementos_fkey" FOREIGN KEY ("id_elementos") REFERENCES "Inventario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_id_transaccion_fkey" FOREIGN KEY ("id_transaccion") REFERENCES "Transaccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_id_transaccion_fkey" FOREIGN KEY ("id_transaccion") REFERENCES "Transaccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devolucion" ADD CONSTRAINT "Devolucion_id_transaccion_fkey" FOREIGN KEY ("id_transaccion") REFERENCES "Transaccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "obra_empleados" ADD CONSTRAINT "obra_empleados_id_obra_fkey" FOREIGN KEY ("id_obra") REFERENCES "Obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "obra_empleados" ADD CONSTRAINT "obra_empleados_id_empleado_fkey" FOREIGN KEY ("id_empleado") REFERENCES "Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "obra_herramientas" ADD CONSTRAINT "obra_herramientas_id_obra_fkey" FOREIGN KEY ("id_obra") REFERENCES "Obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "obra_herramientas" ADD CONSTRAINT "obra_herramientas_id_herramienta_fkey" FOREIGN KEY ("id_herramienta") REFERENCES "Inventario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_id_obra_fkey" FOREIGN KEY ("id_obra") REFERENCES "Obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_id_transaccion_fkey" FOREIGN KEY ("id_transaccion") REFERENCES "Transaccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido_elementos" ADD CONSTRAINT "pedido_elementos_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido_elementos" ADD CONSTRAINT "pedido_elementos_id_elemento_fkey" FOREIGN KEY ("id_elemento") REFERENCES "Inventario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido_elementos" ADD CONSTRAINT "pedido_elementos_id_empleado_fkey" FOREIGN KEY ("id_empleado") REFERENCES "Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ubicacion_empleado" ADD CONSTRAINT "ubicacion_empleado_id_punto_fkey" FOREIGN KEY ("id_punto") REFERENCES "Punto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ubicacion_empleado" ADD CONSTRAINT "ubicacion_empleado_id_empleado_fkey" FOREIGN KEY ("id_empleado") REFERENCES "Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_posicion_permiso" ADD CONSTRAINT "_posicion_permiso_A_fkey" FOREIGN KEY ("A") REFERENCES "Permiso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_posicion_permiso" ADD CONSTRAINT "_posicion_permiso_B_fkey" FOREIGN KEY ("B") REFERENCES "Posicion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_horario_obra_empleado" ADD CONSTRAINT "_horario_obra_empleado_A_fkey" FOREIGN KEY ("A") REFERENCES "Horario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_horario_obra_empleado" ADD CONSTRAINT "_horario_obra_empleado_B_fkey" FOREIGN KEY ("B") REFERENCES "obra_empleados"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_horario_obra_herramienta" ADD CONSTRAINT "_horario_obra_herramienta_A_fkey" FOREIGN KEY ("A") REFERENCES "Horario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_horario_obra_herramienta" ADD CONSTRAINT "_horario_obra_herramienta_B_fkey" FOREIGN KEY ("B") REFERENCES "obra_herramientas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_horario_dia" ADD CONSTRAINT "_horario_dia_A_fkey" FOREIGN KEY ("A") REFERENCES "Dia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_horario_dia" ADD CONSTRAINT "_horario_dia_B_fkey" FOREIGN KEY ("B") REFERENCES "Horario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
