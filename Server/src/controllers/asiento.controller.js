import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const getBusSeats = async (req, res) => {
  const busId = parseInt(req.params.id);
  console.log("Bus ID recibido:", busId);

  if (isNaN(busId) || busId <= 0) {
    return res.status(400).json({
      mensaje: "ID de bus inválido",
    });
  }

  try {
    const bus = await prisma.bus.findUnique({
      where: { id_bus: busId },
      include: {
        asientos: {
          orderBy: [{ ubicacion: "asc" }, { numero: "asc" }],
        },
        agencia: {
          select: {
            id_agencia: true,
            nombre_agencia: true,
          },
        },
      },
    });

    if (!bus) {
      return res.status(404).json({
        mensaje: "Bus no encontrado",
      });
    }

    const asientosDisponibles = bus.asientos.filter(
      (asiento) => asiento.estado?.toLowerCase() === "disponible"
    );

    const asientosOcupados = bus.asientos.filter(
      (asiento) => asiento.estado?.toLowerCase() === "ocupado"
    );

    const resultado = {
      bus: {
        id_bus: bus.id_bus,
        placa: bus.placa,
        marca: bus.marca,
        modelo: bus.modelo,
        año_modelo: bus.año_modelo,
        tipo_bus: bus.tipo_bus,
        estado: bus.estado,
        agencia: bus.agencia,
      },
      asientos: bus.asientos,
      estadisticas: {
        total_asientos: bus.asientos.length,
        asientos_disponibles: asientosDisponibles.length,
        asientos_ocupados: asientosOcupados.length,
        asientos_fuera_servicio:
          bus.asientos.length -
          asientosDisponibles.length -
          asientosOcupados.length,
      },
    };
    res.json(resultado);
  } catch (error) {
    console.error("Error en getBusSeats:", error);
    res.status(500).json({
      mensaje: "Error al obtener asientos del bus",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Error interno del servidor",
    });
  }
};

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
