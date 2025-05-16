/*
  Warnings:

  - The primary key for the `Agencia` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id_usuario]` on the table `Agencia` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[correo_electronico]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tipo_usuario` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bus" DROP CONSTRAINT "Bus_id_agencia_fkey";

-- DropForeignKey
ALTER TABLE "Chofer" DROP CONSTRAINT "Chofer_id_agencia_fkey";

-- DropForeignKey
ALTER TABLE "Configuracion_Pago" DROP CONSTRAINT "Configuracion_Pago_id_agencia_fkey";

-- AlterTable
ALTER TABLE "Agencia" DROP CONSTRAINT "Agencia_pkey",
ADD COLUMN     "id_agencia" SERIAL NOT NULL,
ADD CONSTRAINT "Agencia_pkey" PRIMARY KEY ("id_agencia");

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "tipo_usuario" VARCHAR(20) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Agencia_id_usuario_key" ON "Agencia"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_electronico_key" ON "Usuario"("correo_electronico");

-- AddForeignKey
ALTER TABLE "Bus" ADD CONSTRAINT "Bus_id_agencia_fkey" FOREIGN KEY ("id_agencia") REFERENCES "Agencia"("id_agencia") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Configuracion_Pago" ADD CONSTRAINT "Configuracion_Pago_id_agencia_fkey" FOREIGN KEY ("id_agencia") REFERENCES "Agencia"("id_agencia") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chofer" ADD CONSTRAINT "Chofer_id_agencia_fkey" FOREIGN KEY ("id_agencia") REFERENCES "Agencia"("id_agencia") ON DELETE CASCADE ON UPDATE CASCADE;
