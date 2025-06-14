import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const getBuses = async (req, res) => {
  const buses = await prisma.bus.findMany({ include: { asientos: true } });
  res.json(buses);
};

export const createBus = async (req, res) => {
  console.log("Datos recibidos:", req.body);
  const data = req.body;
  const asientos = data.asientos;
  delete data.asientos;

  

  try {
    const nuevoBus = await prisma.bus.create({ data });

    if (Array.isArray(asientos) && asientos.length > 0) {
      const asientosConIdBus = asientos.map((asiento) => ({
        ...asiento,
        id_bus: nuevoBus.id_bus,
      }));

      await prisma.asiento.createMany({
        data: asientosConIdBus,
        skipDuplicates: true,
      });
    }

    res
      .status(201)
      .json({ bus: nuevoBus, mensaje: "Bus y asientos creados correctamente" });
  } catch (err) {
    console.error("Error al registrar bus o asientos:", err);
    res.status(400).json({
      mensaje: "Error al registrar bus o asientos",
      error: err.message,
    });
  }
};

export const updateBus = async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const busActualizado = await prisma.bus.update({
      where: { id_bus: id },
      data,
    });
    res.json(busActualizado);
  } catch (err) {
    res
      .status(400)
      .json({ mensaje: "Error al actualizar bus", error: err.message });
  }
};

export const deleteBus = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.bus.delete({ where: { id_bus: id } });
    res.json({ mensaje: "Bus eliminado correctamente" });
  } catch (err) {
    res
      .status(400)
      .json({ mensaje: "Error al eliminar bus", error: err.message });
  }
};
