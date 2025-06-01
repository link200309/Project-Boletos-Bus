/*
  Warnings:

  - Added the required column `id_asiento` to the `Reserva` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reserva" ADD COLUMN     "id_asiento" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_id_asiento_fkey" FOREIGN KEY ("id_asiento") REFERENCES "Asiento"("id_asiento") ON DELETE RESTRICT ON UPDATE CASCADE;
