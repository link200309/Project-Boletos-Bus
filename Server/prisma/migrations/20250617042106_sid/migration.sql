/*
  Warnings:

  - You are about to drop the column `id_asiento` on the `Reserva` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reserva" DROP CONSTRAINT "Reserva_id_asiento_fkey";

-- AlterTable
ALTER TABLE "Reserva" DROP COLUMN "id_asiento";

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

-- AddForeignKey
ALTER TABLE "PasajeroSecundario" ADD CONSTRAINT "PasajeroSecundario_id_reserva_fkey" FOREIGN KEY ("id_reserva") REFERENCES "Reserva"("id_reserva") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasajeroSecundario" ADD CONSTRAINT "PasajeroSecundario_id_asiento_fkey" FOREIGN KEY ("id_asiento") REFERENCES "Asiento"("id_asiento") ON DELETE CASCADE ON UPDATE CASCADE;
