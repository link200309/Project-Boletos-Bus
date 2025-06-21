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
              pasajerosSecundarios: {
                include: {
                  asiento: true,
                },
              },
            },
          },
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
      console.log("Hola antes");

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

      console.log("Hola despues");

      await prisma.bus.update({
        where: { id_bus: parseInt(id_bus) },
        data: { estado: "programado" },
      });

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

  static async updateTravel(req, res) {
    try {
      const { id } = req.params;
      const {
        fecha_salida,
        hora_salida_programada,
        costo,
        id_bus,
        id_ruta,
        id_chofer,
      } = req.body;

      // Verificar que el viaje existe
      const viajeExistente = await prisma.viaje.findUnique({
        where: { id_viaje: parseInt(id) },
        include: {
          bus: true,
          chofer: true,
        },
      });

      if (!viajeExistente) {
        return res.status(404).json({
          error: "El viaje especificado no existe",
        });
      }

      // Validar campos obligatorios
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

      // Verificar que el chofer existe y está disponible
      const choferExistente = await prisma.chofer.findUnique({
        where: { id_chofer: parseInt(id_chofer) },
      });

      if (!choferExistente) {
        return res.status(404).json({
          error: "El chofer especificado no existe",
        });
      }

      // Si cambió el chofer, verificar disponibilidad del nuevo
      if (parseInt(id_chofer) !== viajeExistente.id_chofer) {
        if (
          choferExistente.estado !== "Activo" &&
          choferExistente.estado !== "ocupado"
        ) {
          return res.status(400).json({
            error: "El chofer no está disponible para viajes",
          });
        }
      }

      // Verificar que el bus existe y está disponible
      const busExistente = await prisma.bus.findUnique({
        where: { id_bus: parseInt(id_bus) },
        include: { agencia: true },
      });

      if (!busExistente) {
        return res.status(404).json({
          error: "El bus especificado no existe",
        });
      }

      // Si cambió el bus, verificar disponibilidad del nuevo
      if (parseInt(id_bus) !== viajeExistente.id_bus) {
        if (
          busExistente.estado !== "Operativo" &&
          busExistente.estado !== "programado"
        ) {
          return res.status(400).json({
            error: "El bus no está disponible para viajes",
          });
        }
      }

      // Verificar que la ruta existe
      const rutaExistente = await prisma.ruta.findUnique({
        where: { id_ruta: parseInt(id_ruta) },
      });

      if (!rutaExistente) {
        return res.status(404).json({
          error: "La ruta especificada no existe",
        });
      }

      // Verificar conflictos de bus solo si cambió la fecha o el bus
      const fechaViaje = new Date(fecha_salida);
      const fechaOriginal = new Date(viajeExistente.fecha_salida);

      if (
        parseInt(id_bus) !== viajeExistente.id_bus ||
        fechaViaje.toDateString() !== fechaOriginal.toDateString()
      ) {
        const inicioDelDia = new Date(fechaViaje);
        inicioDelDia.setHours(0, 0, 0, 0);
        const finDelDia = new Date(fechaViaje);
        finDelDia.setHours(23, 59, 59, 999);

        const viajesConflicto = await prisma.viaje.findMany({
          where: {
            id_bus: parseInt(id_bus),
            id_viaje: { not: parseInt(id) }, // Excluir el viaje actual
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
      }

      // Procesar la hora
      let horaFormateada;
      if (
        typeof hora_salida_programada === "string" &&
        hora_salida_programada.includes(":")
      ) {
        // Si ya viene en formato HH:MM:SS
        horaFormateada = hora_salida_programada;
      } else {
        // Si viene como Date
        const hora = new Date(hora_salida_programada);
        horaFormateada = hora.toTimeString().split(" ")[0];
      }

      // Actualizar el viaje
      const viajeActualizado = await prisma.viaje.update({
        where: { id_viaje: parseInt(id) },
        data: {
          fecha_salida: new Date(fecha_salida),
          hora_salida_programada: horaFormateada,
          costo: parseFloat(costo),
          id_bus: parseInt(id_bus),
          id_ruta: parseInt(id_ruta),
          id_chofer: parseInt(id_chofer),
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

      // Actualizar estados si cambiaron los recursos
      if (parseInt(id_bus) !== viajeExistente.id_bus) {
        // Liberar el bus anterior
        await prisma.bus.update({
          where: { id_bus: viajeExistente.id_bus },
          data: { estado: "Operativo" },
        });

        // Ocupar el nuevo bus
        await prisma.bus.update({
          where: { id_bus: parseInt(id_bus) },
          data: { estado: "programado" },
        });
      }

      if (parseInt(id_chofer) !== viajeExistente.id_chofer) {
        // Liberar el chofer anterior
        await prisma.chofer.update({
          where: { id_chofer: viajeExistente.id_chofer },
          data: { estado: "Activo" },
        });

        // Ocupar el nuevo chofer
        await prisma.chofer.update({
          where: { id_chofer: parseInt(id_chofer) },
          data: { estado: "ocupado" },
        });
      }

      return res.status(200).json({
        mensaje: "Viaje actualizado exitosamente",
        viaje: viajeActualizado,
        asientos_disponibles: viajeActualizado.bus.asientos.length,
      });
    } catch (error) {
      console.error("Error al actualizar viaje:", error);

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
