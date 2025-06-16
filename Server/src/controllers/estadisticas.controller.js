import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

export const obtenerEstadisticasAgencia = async (req, res) => {
  try {
    const id_agencia = req.usuario.id_usuario;

    // Filtrado por fechas
    const { fechaInicio, fechaFin } = req.query;
    const fechaFilter = {};

    if (fechaInicio && fechaFin) {
      fechaFilter.fecha_salida = {
        gte: new Date(fechaInicio),
        lte: new Date(fechaFin),
      };
    } else if (fechaInicio) {
      fechaFilter.fecha_salida = {
        gte: new Date(fechaInicio),
      };
    } else if (fechaFin) {
      fechaFilter.fecha_salida = {
        lte: new Date(fechaFin),
      };
    }

    // Buses y Choferes (sin filtro de fecha)
    const totalBuses = await prisma.bus.count({ where: { id_agencia } });
    const totalChoferes = await prisma.chofer.count({ where: { id_agencia } });

    // Rutas distintas
    const rutas = await prisma.ruta.findMany({
      where: {
        viajes: {
          some: {
            bus: {
              id_agencia,
            },
            ...fechaFilter,
          },
        },
      },
      select: {
        id_ruta: true,
      },
      distinct: ["id_ruta"],
    });
    const totalRutas = rutas.length;

    // Viajes
    const totalViajes = await prisma.viaje.count({
      where: {
        bus: { id_agencia },
        ...fechaFilter,
      },
    });

    // Reservas
    const totalReservas = await prisma.reserva.count({
      where: {
        viaje: {
          bus: { id_agencia },
          ...fechaFilter,
        },
      },
    });

    // Ingresos
    const ingresosTotales = await prisma.viaje.aggregate({
      _sum: {
        costo: true,
      },
      where: {
        bus: { id_agencia },
        ...fechaFilter,
      },
    });

    res.json({
      totalBuses,
      totalChoferes,
      totalRutas,
      totalViajes,
      totalReservas,
      ingresosTotales: parseFloat(ingresosTotales._sum.costo || 0).toFixed(2),
    });
  } catch (error) {
    console.error("❌ Error en estadísticas:", error);
    res.status(500).json({ mensaje: "Error al obtener estadísticas" });
  }
};
