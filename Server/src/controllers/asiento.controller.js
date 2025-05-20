import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const getAsientosPorBus = async (req, res) => {
  const id_bus = parseInt(req.params.id);
  try {
    const asientos = await prisma.asiento.findMany({ where: { id_bus } });
    res.json(asientos);
  } catch (err) {
    res.status(400).json({ mensaje: "Error al obtener asientos", error: err.message });
  }
};

export const createAsiento = async (req, res) => {
  const data = req.body;
  try {
    const nuevo = await prisma.asiento.create({ data });
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ mensaje: "Error al crear asiento", error: err.message });
  }
};

export const updateAsiento = async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const actualizado = await prisma.asiento.update({ where: { id_asiento: id }, data });
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ mensaje: "Error al actualizar asiento", error: err.message });
  }
};

export const deleteAsiento = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.asiento.delete({ where: { id_asiento: id } });
    res.json({ mensaje: "Asiento eliminado correctamente" });
  } catch (err) {
    res.status(400).json({ mensaje: "Error al eliminar asiento", error: err.message });
  }
};
