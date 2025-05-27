/*
  Warnings:

  - You are about to drop the column `nombre_usuario` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `correo_electronico_agencia` to the `Agencia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero_celular` to the `Agencia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agencia" ADD COLUMN     "correo_electronico_agencia" VARCHAR(80) NOT NULL,
ADD COLUMN     "numero_celular" VARCHAR(15) NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "nombre_usuario",
ADD COLUMN     "apellido" VARCHAR(50),
ADD COLUMN     "ci" VARCHAR(20),
ADD COLUMN     "nombre" VARCHAR(50);
