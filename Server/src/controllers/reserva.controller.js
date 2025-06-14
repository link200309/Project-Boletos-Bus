import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

/**
 * Crea una nueva reserva para el usuario autenticado
 * Espera en el body:
 * - id_viaje
 * - pasajeros: [ { nombre, apellido, ci, nacimiento, asiento } ]
 */
export const crearReserva = async (req, res) => {
  const id_usuario = req.usuario?.id_usuario;
  const { id_viaje, pasajeros } = req.body;

  if (
    !id_usuario ||
    !id_viaje ||
    !Array.isArray(pasajeros) ||
    pasajeros.length === 0
  ) {
    return res
      .status(400)
      .json({ mensaje: "Datos insuficientes para crear la reserva." });
  }

  try {
    const nuevaReserva = await prisma.reserva.create({
      data: {
        id_usuario,
        id_viaje,
        pasajeros: {
          create: pasajeros.map((p) => ({
            nombre: p.nombre,
            apellido: p.apellido,
            ci: p.ci,
            nacimiento: new Date(p.nacimiento),
            asiento: p.asiento,
          })),
        },
      },
      include: {
        pasajeros: true,
      },
    });

    res
      .status(201)
      .json({ mensaje: "Reserva creada con éxito", reserva: nuevaReserva });
  } catch (error) {
    console.error("Error al crear reserva:", error);
    res.status(500).json({ mensaje: "Error interno al crear la reserva" });
  }
};

/**
 * Obtiene todas las reservas del usuario autenticado
 */
export const obtenerMisReservas = async (req, res) => {
  const id_usuario = req.usuario?.id_usuario;

  if (!id_usuario) {
    return res.status(403).json({ mensaje: "Usuario no autenticado" });
  }

  try {
    const reservas = await prisma.reserva.findMany({
      where: { id_usuario },
      include: {
        viaje: {
          include: {
            bus: true,
            chofer: true,
            ruta: true,
          },
        },
        pasajeros: true,
      },
    });

    res.json(reservas);
  } catch (error) {
    console.error("Error al obtener reservas:", error);
    res.status(500).json({ mensaje: "Error interno al obtener reservas" });
  }
};

export const changeStateReserve = async (req, res) => {
  const { id_reserva, newState } = req.body;
  try {
    const reservaActualizada = await prisma.reserva.update({
      where: { id_reserva: Number(id_reserva) },
      data: { estado: newState }, // Estado dinámico
    });

    res.json(reservaActualizada);
  } catch (error) {
    console.error("Error al cambiar el estado de la reserva:", error);
    res
      .status(500)
      .json({ mensaje: "Error interno al cambiar el estado de la reserva" });
  }
};
