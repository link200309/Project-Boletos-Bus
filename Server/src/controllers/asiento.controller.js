import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const getBusSeats = async (req, res) => {
  const busId = parseInt(req.params.id);
  try {
    const bus = await prisma.bus.findUnique({
      where: { id_bus: busId },
      include: {
        asientos: {
          orderBy: [
            { ubicacion: "asc" },
            { numero: "asc" },
          ],
        },
        agencia: true,
      },
    });
    if (!bus) {
      return res.status(404).json({ mensaje: "Bus no encontrado" });
    }
    res.json({ 
      bus: bus,
      asientos: bus.asientos,
      total_asientos: bus.asientos.length,
      asientos_disponibles: bus.asientos.filter(
        (a) => a.estado === "Disponible"
      ).length,
      asientos_ocupados: bus.asientos.filter((a) => a.estado === "Ocupado")
        .length,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Error al obtener asientos", error: error.message });
  }
};

// export const getAsientosPorBus = async (req, res) => {
//   const id_bus = parseInt(req.params.id);
//   try {
//     const asientos = await prisma.asiento.findMany({ where: { id_bus } });
//     res.json(asientos);
//   } catch (err) {
//     res.status(400).json({ mensaje: "Error al obtener asientos", error: err.message });
//   }
// };

export const createAsiento = async (req, res) => {
  const data = req.body;
  try {
    const nuevo = await prisma.asiento.create({ data });
    res.status(201).json(nuevo);
  } catch (err) {
    res
      .status(400)
      .json({ mensaje: "Error al crear asiento", error: err.message });
  }
};

export const updateAsiento = async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const actualizado = await prisma.asiento.update({
      where: { id_asiento: id },
      data,
    });
    res.json(actualizado);
  } catch (err) {
    res
      .status(400)
      .json({ mensaje: "Error al actualizar asiento", error: err.message });
  }
};

export const deleteAsiento = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.asiento.delete({ where: { id_asiento: id } });
    res.json({ mensaje: "Asiento eliminado correctamente" });
  } catch (err) {
    res
      .status(400)
      .json({ mensaje: "Error al eliminar asiento", error: err.message });
  }
};
