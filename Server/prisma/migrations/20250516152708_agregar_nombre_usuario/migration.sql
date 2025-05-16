/*
  Warnings:

  - Added the required column `nombre_usuario` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "nombre_usuario" VARCHAR(50) NOT NULL;
