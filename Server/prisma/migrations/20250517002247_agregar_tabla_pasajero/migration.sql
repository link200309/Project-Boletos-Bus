-- CreateTable
CREATE TABLE "Reserva" (
    "id_reserva" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_viaje" INTEGER NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'pendiente',
    "comprobante" TEXT,
    "fecha_reserva" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id_reserva")
);

-- CreateTable
CREATE TABLE "Pasajero" (
    "id_pasajero" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "apellido" VARCHAR(50) NOT NULL,
    "ci" VARCHAR(20) NOT NULL,
    "nacimiento" TIMESTAMP(3) NOT NULL,
    "asiento" VARCHAR(10) NOT NULL,
    "id_reserva" INTEGER NOT NULL,

    CONSTRAINT "Pasajero_pkey" PRIMARY KEY ("id_pasajero")
);

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_id_viaje_fkey" FOREIGN KEY ("id_viaje") REFERENCES "Viaje"("id_viaje") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pasajero" ADD CONSTRAINT "Pasajero_id_reserva_fkey" FOREIGN KEY ("id_reserva") REFERENCES "Reserva"("id_reserva") ON DELETE RESTRICT ON UPDATE CASCADE;
