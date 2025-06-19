-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "tipo_usuario" VARCHAR(30) NOT NULL,
    "nombre" VARCHAR(50),
    "apellido" VARCHAR(50),
    "ci" VARCHAR(20),
    "correo_electronico" VARCHAR(80) NOT NULL,
    "contraseña" VARCHAR(100) NOT NULL,
    "numero_celular" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Agencia" (
    "id_agencia" INTEGER NOT NULL,
    "nombre_agencia" VARCHAR(80) NOT NULL,
    "tipo_sociedad" VARCHAR(60) NOT NULL,
    "NIT" VARCHAR(20) NOT NULL,
    "departamento" VARCHAR(50) NOT NULL,
    "ciudad" VARCHAR(40) NOT NULL,
    "direccion" VARCHAR(100) NOT NULL,
    "estado" VARCHAR(30) NOT NULL,
    "correo_electronico_agencia" VARCHAR(80) NOT NULL,
    "numero_celular_agencia" INTEGER NOT NULL,
    "nombre_representante" VARCHAR(50),
    "apellido_representante" VARCHAR(50),
    "ci_representante" VARCHAR(20),
    "celular_representante" VARCHAR(15),

    CONSTRAINT "Agencia_pkey" PRIMARY KEY ("id_agencia")
);

-- CreateTable
CREATE TABLE "Pasajero" (
    "id_pasajero" INTEGER NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pasajero_pkey" PRIMARY KEY ("id_pasajero")
);

-- CreateTable
CREATE TABLE "Bus" (
    "id_bus" SERIAL NOT NULL,
    "placa" VARCHAR(20) NOT NULL,
    "marca" VARCHAR(30) NOT NULL,
    "modelo" VARCHAR(30) NOT NULL,
    "año_modelo" INTEGER NOT NULL,
    "tipo_bus" VARCHAR(30) NOT NULL,
    "estado" VARCHAR(20) NOT NULL,
    "id_agencia" INTEGER NOT NULL,

    CONSTRAINT "Bus_pkey" PRIMARY KEY ("id_bus")
);

-- CreateTable
CREATE TABLE "Asiento" (
    "id_asiento" SERIAL NOT NULL,
    "numero" VARCHAR(20) NOT NULL,
    "ubicacion" VARCHAR(20) NOT NULL,
    "estado" VARCHAR(20) NOT NULL,
    "id_bus" INTEGER NOT NULL,

    CONSTRAINT "Asiento_pkey" PRIMARY KEY ("id_asiento")
);

-- CreateTable
CREATE TABLE "Viaje" (
    "id_viaje" SERIAL NOT NULL,
    "fecha_salida" TIMESTAMP(3) NOT NULL,
    "hora_salida_programada" VARCHAR(30) NOT NULL,
    "hora_salida_real" VARCHAR(30) NOT NULL,
    "costo" DECIMAL(5,2) NOT NULL,
    "id_bus" INTEGER NOT NULL,
    "id_ruta" INTEGER NOT NULL,
    "id_chofer" INTEGER NOT NULL,
    "id_pago" INTEGER NOT NULL,

    CONSTRAINT "Viaje_pkey" PRIMARY KEY ("id_viaje")
);

-- CreateTable
CREATE TABLE "Ruta" (
    "id_ruta" SERIAL NOT NULL,
    "origen" VARCHAR(30) NOT NULL,
    "parada_intermedia" VARCHAR(30) NOT NULL,
    "destino" VARCHAR(30) NOT NULL,
    "distancia" VARCHAR(20) NOT NULL,
    "tiempo_estimado" VARCHAR(20) NOT NULL,
    "camino" VARCHAR(50) NOT NULL,
    "id_agencia" INTEGER NOT NULL,

    CONSTRAINT "Ruta_pkey" PRIMARY KEY ("id_ruta")
);

-- CreateTable
CREATE TABLE "Configuracion_Pago" (
    "id_pago" SERIAL NOT NULL,
    "ruta_codigo_qr" VARCHAR(100) NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL,
    "estado" VARCHAR(20) NOT NULL,
    "id_agencia" INTEGER NOT NULL,

    CONSTRAINT "Configuracion_Pago_pkey" PRIMARY KEY ("id_pago")
);

-- CreateTable
CREATE TABLE "Chofer" (
    "id_chofer" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "apellido" VARCHAR(50) NOT NULL,
    "carnet_identidad" VARCHAR(15) NOT NULL,
    "numero_celular" VARCHAR(10) NOT NULL,
    "categoria_licencia" VARCHAR(10) NOT NULL,
    "direccion_contacto" VARCHAR(50) NOT NULL,
    "estado" VARCHAR(20) NOT NULL,
    "id_agencia" INTEGER NOT NULL,

    CONSTRAINT "Chofer_pkey" PRIMARY KEY ("id_chofer")
);

-- CreateTable
CREATE TABLE "Reserva" (
    "id_reserva" SERIAL NOT NULL,
    "id_pasajero" INTEGER NOT NULL,
    "id_viaje" INTEGER NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'pendiente',
    "comprobante" TEXT,
    "fecha_reserva" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id_reserva")
);

-- CreateTable
CREATE TABLE "PasajeroSecundario" (
    "id_pasec" SERIAL NOT NULL,
    "nombre" VARCHAR(50),
    "apellido" VARCHAR(50),
    "ci" VARCHAR(20),
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "id_reserva" INTEGER NOT NULL,
    "id_asiento" INTEGER NOT NULL,

    CONSTRAINT "PasajeroSecundario_pkey" PRIMARY KEY ("id_pasec")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_electronico_key" ON "Usuario"("correo_electronico");

-- AddForeignKey
ALTER TABLE "Agencia" ADD CONSTRAINT "Agencia_id_agencia_fkey" FOREIGN KEY ("id_agencia") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pasajero" ADD CONSTRAINT "Pasajero_id_pasajero_fkey" FOREIGN KEY ("id_pasajero") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bus" ADD CONSTRAINT "Bus_id_agencia_fkey" FOREIGN KEY ("id_agencia") REFERENCES "Agencia"("id_agencia") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asiento" ADD CONSTRAINT "Asiento_id_bus_fkey" FOREIGN KEY ("id_bus") REFERENCES "Bus"("id_bus") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viaje" ADD CONSTRAINT "Viaje_id_bus_fkey" FOREIGN KEY ("id_bus") REFERENCES "Bus"("id_bus") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viaje" ADD CONSTRAINT "Viaje_id_ruta_fkey" FOREIGN KEY ("id_ruta") REFERENCES "Ruta"("id_ruta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viaje" ADD CONSTRAINT "Viaje_id_chofer_fkey" FOREIGN KEY ("id_chofer") REFERENCES "Chofer"("id_chofer") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viaje" ADD CONSTRAINT "Viaje_id_pago_fkey" FOREIGN KEY ("id_pago") REFERENCES "Configuracion_Pago"("id_pago") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ruta" ADD CONSTRAINT "Ruta_id_agencia_fkey" FOREIGN KEY ("id_agencia") REFERENCES "Agencia"("id_agencia") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Configuracion_Pago" ADD CONSTRAINT "Configuracion_Pago_id_agencia_fkey" FOREIGN KEY ("id_agencia") REFERENCES "Agencia"("id_agencia") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chofer" ADD CONSTRAINT "Chofer_id_agencia_fkey" FOREIGN KEY ("id_agencia") REFERENCES "Agencia"("id_agencia") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_id_pasajero_fkey" FOREIGN KEY ("id_pasajero") REFERENCES "Pasajero"("id_pasajero") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_id_viaje_fkey" FOREIGN KEY ("id_viaje") REFERENCES "Viaje"("id_viaje") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasajeroSecundario" ADD CONSTRAINT "PasajeroSecundario_id_reserva_fkey" FOREIGN KEY ("id_reserva") REFERENCES "Reserva"("id_reserva") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasajeroSecundario" ADD CONSTRAINT "PasajeroSecundario_id_asiento_fkey" FOREIGN KEY ("id_asiento") REFERENCES "Asiento"("id_asiento") ON DELETE CASCADE ON UPDATE CASCADE;
