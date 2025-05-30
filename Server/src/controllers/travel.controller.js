import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

class TravelController {
  static async getTravels(req, res) {
    const { origen, destino, asientos } = req.query;

    if (!origen || !destino) {
      return res
        .status(400)
        .json({ message: "Debe proporcionar origen y destino." });
    }

    const cantidadMinima = parseInt(asientos) || 1;
    try {
      const viajes = await prisma.viaje.findMany({
        where: {
          ruta: {
            origen: { equals: origen, mode: "insensitive" },
            destino: { equals: destino, mode: "insensitive" },
          },
        },
        include: {
          ruta: true,
          bus: {
            include: {
              asientos: {
                where: {
                  estado: "Disponible",
                },
                select: {
                  id_asiento: true,
                  numero: true,
                  ubicacion: true,
                },
              },
              agencia: true,
            },
          },
          chofer: true,
          pago: true,
        },
      });

      const viajesFiltrados = viajes
        .filter((v) => v.bus.asientos.length >= cantidadMinima)
        .map((viaje) => ({
          id_viaje: viaje.id_viaje,
          fecha_salida: viaje.fecha_salida,
          hora_salida_programada: viaje.hora_salida_programada,
          hora_salida_real: viaje.hora_salida_real,
          costo: viaje.costo,
          ruta: viaje.ruta,
          chofer: viaje.chofer,
          pago: viaje.pago,
          bus: {
            ...viaje.bus,
            asientos_disponibles: viaje.bus.asientos,
          },
        }));
      res.status(200).json(viajesFiltrados);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  static async getTravelsByAgency(req, res) {
    const id = parseInt(req.params.id);
    try {
      let viajes = await prisma.viaje.findMany({
        where: {
          bus: {
            id_agencia: id,
          },
        },
        include: {
          bus: true,
          chofer: true,
          ruta: true,
          reserva: true,
          pago: true,
        },
      });
      res.json(viajes);
    } catch (err) {
      res
        .status(500)
        .json({ mensaje: "Error al obtener viajes", error: err.message });
    }
  }
}

export default TravelController;
