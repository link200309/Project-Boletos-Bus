/*
  Warnings:

  - Added the required column `id_agencia` to the `Ruta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ruta" ADD COLUMN     "id_agencia" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Viaje" ALTER COLUMN "hora_salida_programada" SET DATA TYPE VARCHAR(30),
ALTER COLUMN "hora_salida_real" SET DATA TYPE VARCHAR(30);

-- AddForeignKey
ALTER TABLE "Ruta" ADD CONSTRAINT "Ruta_id_agencia_fkey" FOREIGN KEY ("id_agencia") REFERENCES "Agencia"("id_agencia") ON DELETE CASCADE ON UPDATE CASCADE;
