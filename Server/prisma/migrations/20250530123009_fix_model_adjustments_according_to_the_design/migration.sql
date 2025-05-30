/*
  Warnings:

  - You are about to drop the column `id_usuario` on the `Agencia` table. All the data in the column will be lost.
  - You are about to drop the column `numero_celular` on the `Agencia` table. All the data in the column will be lost.
  - You are about to drop the column `telefono_representante` on the `Agencia` table. All the data in the column will be lost.
  - You are about to drop the column `apellido` on the `Pasajero` table. All the data in the column will be lost.
  - You are about to drop the column `asiento` on the `Pasajero` table. All the data in the column will be lost.
  - You are about to drop the column `ci` on the `Pasajero` table. All the data in the column will be lost.
  - You are about to drop the column `id_reserva` on the `Pasajero` table. All the data in the column will be lost.
  - You are about to drop the column `nacimiento` on the `Pasajero` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Pasajero` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `Reserva` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_nacimiento` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `numero_celular_agencia` to the `Agencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_nacimiento` to the `Pasajero` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_pasajero` to the `Reserva` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Agencia" DROP CONSTRAINT "Agencia_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Pasajero" DROP CONSTRAINT "Pasajero_id_reserva_fkey";

-- DropForeignKey
ALTER TABLE "Reserva" DROP CONSTRAINT "Reserva_id_usuario_fkey";

-- DropIndex
DROP INDEX "Agencia_id_usuario_key";

-- AlterTable
ALTER TABLE "Agencia" DROP COLUMN "id_usuario",
DROP COLUMN "numero_celular",
DROP COLUMN "telefono_representante",
ADD COLUMN     "celular_representante" VARCHAR(15),
ADD COLUMN     "numero_celular_agencia" INTEGER NOT NULL,
ALTER COLUMN "id_agencia" DROP DEFAULT;
DROP SEQUENCE "Agencia_id_agencia_seq";

-- AlterTable
ALTER TABLE "Pasajero" DROP COLUMN "apellido",
DROP COLUMN "asiento",
DROP COLUMN "ci",
DROP COLUMN "id_reserva",
DROP COLUMN "nacimiento",
DROP COLUMN "nombre",
ADD COLUMN     "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id_pasajero" DROP DEFAULT;
DROP SEQUENCE "Pasajero_id_pasajero_seq";

-- AlterTable
ALTER TABLE "Reserva" DROP COLUMN "id_usuario",
ADD COLUMN     "id_pasajero" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "fecha_nacimiento";

-- AddForeignKey
ALTER TABLE "Agencia" ADD CONSTRAINT "Agencia_id_agencia_fkey" FOREIGN KEY ("id_agencia") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pasajero" ADD CONSTRAINT "Pasajero_id_pasajero_fkey" FOREIGN KEY ("id_pasajero") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_id_pasajero_fkey" FOREIGN KEY ("id_pasajero") REFERENCES "Pasajero"("id_pasajero") ON DELETE RESTRICT ON UPDATE CASCADE;
