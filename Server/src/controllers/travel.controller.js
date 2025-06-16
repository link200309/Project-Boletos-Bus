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
          bus: {
            include: {
              asientos: true,
            },
          },
          chofer: true,
          ruta: true,
          reserva: {
            include: {
              pasajero: {
                include: {
                  usuario: true,
                },
              },
              asiento: true,
            },
          },
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

  static async addTravel(req, res) {
    try {
      const {
        fecha_salida,
        hora_salida_programada,
        costo,
        id_bus,
        id_ruta,
        id_chofer,
      } = req.body;

      if (
        !fecha_salida ||
        !hora_salida_programada ||
        !costo ||
        !id_bus ||
        !id_ruta ||
        !id_chofer
      ) {
        return res.status(400).json({
          error: "Faltan campos obligatorios",
          campos_requeridos: [
            "fecha_salida",
            "hora_salida_programada",
            "costo",
            "id_bus",
            "id_ruta",
            "id_chofer",
          ],
        });
      }

      const choferExistente = await prisma.chofer.findUnique({
        where: { id_chofer: parseInt(id_chofer) },
      });

      if (!choferExistente) {
        return res.status(404).json({
          error: "El chofer especificado no existe",
        });
      }

      if (choferExistente.estado !== "Activo") {
        return res.status(400).json({
          error: "El chofer no está disponible para viajes",
        });
      }

      const busExistente = await prisma.bus.findUnique({
        where: { id_bus: parseInt(id_bus) },
        include: { agencia: true },
      });

      if (!busExistente) {
        return res.status(404).json({
          error: "El bus especificado no existe",
        });
      }

      if (busExistente.estado !== "Operativo") {
        return res.status(400).json({
          error: "El bus no está disponible para viajes",
        });
      }

      const rutaExistente = await prisma.ruta.findUnique({
        where: { id_ruta: parseInt(id_ruta) },
      });

      if (!rutaExistente) {
        return res.status(404).json({
          error: "La ruta especificada no existe",
        });
      }

      // Verificar que la configuración de pago existe y está activa
      // const pagoExistente = await prisma.configuracion_Pago.findUnique({
      //   where: { id_pago: parseInt(id_pago) },
      // });

      // if (!pagoExistente) {
      //   return res.status(404).json({
      //     error: "La configuración de pago especificada no existe",
      //   });
      // }

      // if (pagoExistente.estado !== "activo") {
      //   return res.status(400).json({
      //     error: "La configuración de pago no está activa",
      //   });
      // }

      // Verificar que no haya conflictos de horario para el bus
      const fechaViaje = new Date(fecha_salida);
      const inicioDelDia = new Date(fechaViaje);
      inicioDelDia.setHours(0, 0, 0, 0);
      const finDelDia = new Date(fechaViaje);
      finDelDia.setHours(23, 59, 59, 999);

      const viajesConflicto = await prisma.viaje.findMany({
        where: {
          id_bus: parseInt(id_bus),
          fecha_salida: {
            gte: inicioDelDia,
            lte: finDelDia,
          },
        },
      });

      if (viajesConflicto.length > 0) {
        return res.status(400).json({
          error: "El bus ya tiene un viaje programado para esta fecha",
          viajes_existentes: viajesConflicto,
        });
      }

      const hora = new Date(hora_salida_programada);

      // Crear el nuevo viaje
      const nuevoViaje = await prisma.viaje.create({
        data: {
          fecha_salida: new Date(fecha_salida),
          hora_salida_programada: hora.toTimeString().split(" ")[0],
          hora_salida_real: hora.toTimeString().split(" ")[0],
          costo: parseFloat(costo),
          id_bus: parseInt(id_bus),
          id_ruta: parseInt(id_ruta),
          id_chofer: parseInt(id_chofer),
          id_pago: 1,
        },
        include: {
          bus: {
            include: {
              agencia: true,
              asientos: true,
            },
          },
          ruta: true,
          chofer: true,
          pago: true,
        },
      });

      // Actualizar estado del bus a 'programado'
      await prisma.bus.update({
        where: { id_bus: parseInt(id_bus) },
        data: { estado: "programado" },
      });

      // Actualizar estado del chofer a 'ocupado'
      await prisma.chofer.update({
        where: { id_chofer: parseInt(id_chofer) },
        data: { estado: "ocupado" },
      });

      return res.status(201).json({
        mensaje: "Viaje creado exitosamente",
        viaje: nuevoViaje,
        asientos_disponibles: nuevoViaje.bus.asientos.length,
      });
    } catch (error) {
      console.error("Error al crear viaje:", error);

      if (error.code === "P2002") {
        return res.status(400).json({
          error: "Violación de restricción única",
          detalle: error.meta,
        });
      }

      if (error.code === "P2003") {
        return res.status(400).json({
          error: "Violación de clave foránea",
          detalle: "Una de las referencias no existe",
        });
      }

      return res.status(500).json({
        error: "Error interno del servidor",
        detalle:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Contacte al administrador",
      });
    }
  }
}

export default TravelController;
