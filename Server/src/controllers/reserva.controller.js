import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

// Controlador para crear una reserva y crear pasajeros secundarios con sus asientos
export const createReserva = async (req, res) => {
  const {
    id_viaje,
    estado = "pendiente",
    comprobante = "N/D",
    fecha_reserva,
    id_pasajero,
    pasajeros_secundarios = [],
  } = req.body;

  try {
    if (!id_viaje || !id_pasajero) {
      return res.status(400).json({
        mensaje:
          "Faltan datos obligatorios: id_viaje e id_pasajero son requeridos.",
      });
    }

    if (!pasajeros_secundarios || pasajeros_secundarios.length === 0) {
      return res.status(400).json({
        mensaje:
          "Debe proporcionar al menos un pasajero secundario con su asiento.",
      });
    }

    // Validar datos de pasajeros secundarios
    for (let i = 0; i < pasajeros_secundarios.length; i++) {
      const pasajero = pasajeros_secundarios[i];
      if (!pasajero.id_asiento || !pasajero.fecha_nacimiento) {
        return res.status(400).json({
          mensaje: `Pasajero ${
            i + 1
          }: id_asiento y fecha_nacimiento son obligatorios.`,
        });
      }
    }

    // Obtener información del viaje para conseguir el id_bus
    const viaje = await prisma.viaje.findUnique({
      where: { id_viaje },
      include: { bus: true },
    });

    if (!viaje) {
      return res.status(404).json({
        mensaje: "El viaje especificado no existe.",
      });
    }

    const id_bus = viaje.id_bus;
    const asientos = pasajeros_secundarios.map((p) => p.id_asiento);

    // Verificar disponibilidad de asientos con la clave compuesta
    const asientosDisponibles = await prisma.asiento.findMany({
      where: {
        id_bus: id_bus,
        id_asiento: { in: asientos },
        estado: "Disponible",
      },
    });

    if (asientosDisponibles.length !== asientos.length) {
      const asientosNoDisponibles = asientos.filter(
        (asiento) => !asientosDisponibles.some((a) => a.id_asiento === asiento)
      );
      return res.status(400).json({
        mensaje: "Algunos asientos no están disponibles",
        asientos_no_disponibles: asientosNoDisponibles,
      });
    }

    const resultado = await prisma.$transaction(async (tx) => {
      // 1. Crear la reserva principal
      const nuevaReserva = await tx.reserva.create({
        data: {
          id_viaje,
          estado,
          comprobante,
          fecha_reserva: fecha_reserva ? new Date(fecha_reserva) : new Date(),
          id_pasajero,
        },
      });

      // 2. Crear los pasajeros secundarios y actualizar asientos
      const pasajerosSecundariosCreados = [];
      for (const pasajeroData of pasajeros_secundarios) {
        const pasajeroSecundario = await tx.pasajeroSecundario.create({
          data: {
            nombre: pasajeroData.nombre || null,
            apellido: pasajeroData.apellido || null,
            ci: pasajeroData.ci || null,
            fecha_nacimiento: new Date(pasajeroData.fecha_nacimiento),
            id_bus: id_bus, // Agregado el id_bus requerido
            id_asiento: pasajeroData.id_asiento,
            id_reserva: nuevaReserva.id_reserva,
          },
        });

        // Actualizar el estado del asiento usando la clave compuesta
        await tx.asiento.update({
          where: {
            id_bus_id_asiento: {
              id_bus: id_bus,
              id_asiento: pasajeroData.id_asiento,
            },
          },
          data: { estado: "Reservado" },
        });

        pasajerosSecundariosCreados.push(pasajeroSecundario);
      }

      return {
        reserva: nuevaReserva,
        pasajeros_secundarios: pasajerosSecundariosCreados,
      };
    });

    // Obtener la reserva completa para la respuesta
    const reservaCompleta = await prisma.reserva.findUnique({
      where: { id_reserva: resultado.reserva.id_reserva },
      include: {
        pasajero: {
          include: {
            usuario: {
              select: {
                nombre: true,
                apellido: true,
                correo_electronico: true,
              },
            },
          },
        },
        viaje: {
          include: {
            ruta: true,
            bus: true,
          },
        },
        pasajerosSecundarios: {
          include: {
            asiento: true,
          },
        },
      },
    });

    res.status(201).json({
      mensaje: "Reserva creada con éxito",
      reserva: reservaCompleta,
      resumen: {
        total_pasajeros: resultado.pasajeros_secundarios.length,
        asientos_reservados: asientos,
        estado_reserva: estado,
        id_bus: id_bus,
      },
    });
  } catch (err) {
    console.error("Error al registrar reserva:", err);
    res.status(500).json({
      mensaje: "Error interno del servidor al registrar la reserva",
      error: err.message,
    });
  }
};

// Controlador para obtener las reservas de un pasajero específico
export const obtenerMisReservasPasajero = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(401).json({ mensaje: "Usuario no autenticado." });
    }
    const userIdNumber = parseInt(userId);
    const pasajero = await prisma.pasajero.findUnique({
      where: {
        id_pasajero: userIdNumber,
      },
      include: {
        usuario: {
          select: {
            nombre: true,
            apellido: true,
            correo_electronico: true,
          },
        },
      },
    });
    if (!pasajero) {
      return res.status(404).json({ mensaje: "Pasajero no encontrado." });
    }
    // Obtener las reservas con toda la información relacionada
    const reservas = await prisma.reserva.findMany({
      where: {
        id_pasajero: pasajero.id_pasajero,
      },
      include: {
        pasajerosSecundarios: {
          include: {
            asiento: {
              select: {
                id_asiento: true,
                numero: true,
                ubicacion: true,
                estado: true,
              },
            },
          },
        },
        viaje: {
          select: {
            id_viaje: true,
            fecha_salida: true,
            hora_salida_programada: true,
            hora_salida_real: true,
            costo: true,
            ruta: {
              select: {
                id_ruta: true,
                origen: true,
                parada_intermedia: true,
                destino: true,
                distancia: true,
                tiempo_estimado: true,
              },
            },
            bus: {
              select: {
                id_bus: true,
                placa: true,
                marca: true,
                modelo: true,
                tipo_bus: true,
                agencia: {
                  select: {
                    id_agencia: true,
                    nombre_agencia: true,
                    correo_electronico_agencia: true,
                    numero_celular_agencia: true,
                  },
                },
              },
            },
            chofer: {
              select: {
                nombre: true,
                apellido: true,
                numero_celular: true,
              },
            },
          },
        },
        pasajero: {
          select: {
            fecha_nacimiento: true,
            usuario: {
              select: {
                nombre: true,
                apellido: true,
                ci: true,
                correo_electronico: true,
              },
            },
          },
        },
      },
      orderBy: {
        fecha_reserva: "desc",
      },
    });
    const reservasFormateadas = reservas.map((reserva) => ({
      id_reserva: reserva.id_reserva,
      estado: reserva.estado,
      comprobante: reserva.comprobante,
      fecha_reserva: reserva.fecha_reserva,
      viaje: {
        id_viaje: reserva.viaje.id_viaje,
        fecha_salida: reserva.viaje.fecha_salida,
        hora_salida_programada: reserva.viaje.hora_salida_programada,
        hora_salida_real: reserva.viaje.hora_salida_real,
        costo: reserva.viaje.costo,
        ruta: reserva.viaje.ruta,
        bus: reserva.viaje.bus,
        chofer: reserva.viaje.chofer,
      },
      pasajero_principal: {
        fecha_nacimiento: reserva.pasajero.fecha_nacimiento,
        usuario: reserva.pasajero.usuario,
      },
      pasajeros_secundarios: reserva.pasajerosSecundarios.map((ps) => ({
        id_pasec: ps.id_pasec,
        nombre: ps.nombre,
        apellido: ps.apellido,
        ci: ps.ci,
        fecha_nacimiento: ps.fecha_nacimiento,
        asiento: ps.asiento,
      })),
      resumen_asientos: {
        total_asientos: reserva.pasajerosSecundarios.length,
        numeros_asientos: reserva.pasajerosSecundarios
          .filter((ps) => ps.asiento)
          .map((ps) => ps.asiento.numero),
        ubicaciones: reserva.pasajerosSecundarios
          .filter((ps) => ps.asiento)
          .map((ps) => ps.asiento.ubicacion),
      },
    }));
    res.json({
      mensaje: "Reservas obtenidas con éxito",
      total_reservas: reservasFormateadas.length,
      pasajero: {
        id_pasajero: pasajero.id_pasajero,
        usuario: pasajero.usuario,
      },
      reservas: reservasFormateadas,
    });
  } catch (error) {
    console.error("Error al obtener reservas:", error);
    res.status(500).json({
      mensaje: "Error interno al obtener las reservas",
      error: error.message,
    });
  }
};

export const changeStateReserve = async (req, res) => {
  const { id_reserva, newState } = req.body;
  try {
    const reservaActualizada = await prisma.reserva.update({
      where: { id_reserva: Number(id_reserva) },
      data: { estado: newState },
    });

    res.json(reservaActualizada);
  } catch (error) {
    console.error("Error al cambiar el estado de la reserva:", error);
    res
      .status(500)
      .json({ mensaje: "Error interno al cambiar el estado de la reserva" });
  }
};

// Controlador para cambiar el estado de una reserva a "cancelada"
export const cancelarReserva = async (req, res) => {
  const { id_reserva } = req.params;
  try {
    const reserva = await prisma.reserva.findUnique({
      where: { id_reserva: Number(id_reserva) },
    });
    if (!reserva) {
      return res.status(404).json({ mensaje: "Reserva no encontrada." });
    }
    if (reserva.estado === "cancelada") {
      return res.status(400).json({ mensaje: "La reserva ya está cancelada." });
    }
    const reservaActualizada = await prisma.reserva.update({
      where: { id_reserva: Number(id_reserva) },
      data: { estado: "cancelada" },
    });
    // Liberar los asientos reservados
    const paSec = await prisma.pasajeroSecundario.findMany({
      where: { id_reserva: Number(id_reserva) },
      include: { asiento: true },
    });
    await prisma.asiento.updateMany({
      where: {
        id_asiento: {
          in: paSec.map((ps) => ps.asiento.id_asiento),
        },
      },
      data: { estado: "Disponible" },
    });
    res.json({
      mensaje: "Reserva cancelada con éxito",
      reserva: reservaActualizada,
    });
  } catch (error) {
    console.error("Error al cancelar la reserva:", error);
    res.status(500).json({
      mensaje: "Error interno al cancelar la reserva",
      error: error.message,
    });
  }
};
