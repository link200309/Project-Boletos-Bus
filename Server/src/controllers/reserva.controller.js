import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const createReserva = async (req, res) => {
  console.log("Datos recibidos:", req.body);

  const {
    id_viaje,
    estado = "pendiente",
    comprobante = "N/D",
    fecha_reserva,
    id_pasajero,
    id_asiento, // puede ser un solo número o un array
  } = req.body;

  try {
    // Validar campos obligatorios
    if (!id_viaje || !id_pasajero || !id_asiento) {
      return res.status(400).json({ mensaje: "Faltan datos obligatorios." });
    }

    const asientos = Array.isArray(id_asiento) ? id_asiento : [id_asiento];
    const reservas = [];

    for (const asiento of asientos) {
      const nuevaReserva = await prisma.reserva.create({
        data: {
          id_viaje,
          estado,
          comprobante,
          fecha_reserva: fecha_reserva ? new Date(fecha_reserva) : new Date(),
          id_pasajero,
          id_asiento: asiento,
        },
      });

      reservas.push(nuevaReserva);
    }

    res.status(201).json({
      mensaje: "Reservas creadas con éxito",
      reservas,
    });
  } catch (err) {
    console.error("Error al registrar reserva:", err);
    res.status(400).json({
      mensaje: "Error al registrar reservas",
      error: err.message,
    });
  }
};

export const obtenerMisReservas = async (req, res) => {
  try {
    const id_usuario = req.usuario?.id_usuario;

    if (!id_usuario) {
      return res.status(401).json({ mensaje: "Usuario no autenticado." });
    }

    const reservas = await prisma.reserva.findMany({
      where: {
        id_usuario,
      },
      include: {
        viaje: {
          include: {
            ruta: true,
            bus: true,
          },
        },
      },
      orderBy: {
        fecha_reserva: "desc",
      },
    });

    res.json(reservas);
  } catch (error) {
    console.error("Error al obtener reservas:", error);
    res.status(500).json({
      mensaje: "Error interno al obtener las reservas",
    });
  }
};
