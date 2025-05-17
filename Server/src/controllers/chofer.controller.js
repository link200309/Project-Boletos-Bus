import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const getChoferes = async (req, res) => {
  const choferes = await prisma.chofer.findMany();
  res.json(choferes);
};

export const createChofer = async (req, res) => {
  const data = req.body;
  try {
    const nuevo = await prisma.chofer.create({ data });
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ mensaje: "Error al registrar chofer", error: err.message });
  }
};

export const updateChofer = async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const actualizado = await prisma.chofer.update({ where: { id_chofer: id }, data });
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ mensaje: "Error al actualizar chofer", error: err.message });
  }
};

export const deleteChofer = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.chofer.delete({ where: { id_chofer: id } });
    res.json({ mensaje: "Chofer eliminado correctamente" });
  } catch (err) {
    res.status(400).json({ mensaje: "Error al eliminar chofer", error: err.message });
  }
};
