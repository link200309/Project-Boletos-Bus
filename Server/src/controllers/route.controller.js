import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

class RouteController {
  static async getRoutesAgency(req, res) {
    const { id_agencia } = req.params;
    try {
      const rutas = await prisma.ruta.findMany({
        where: { id_agencia: parseInt(id_agencia) },
      });

      return res.status(200).json(rutas);
    } catch (error) {
      console.error("Error al obtener rutas de la agencia:", error);
      return res
        .status(500)
        .json({ error: "Error al obtener rutas de la agencia" });
    }
  }

  static async addRoute(req, res) {
    const {
      origen,
      paradaIntermedia,
      destino,
      tiempoEstimado,
      distancia,
      camino,
      id_agencia,
    } = req.body;

    try {
      if (
        !origen ||
        !paradaIntermedia ||
        !destino ||
        !tiempoEstimado ||
        !distancia ||
        !camino ||
        !id_agencia
      ) {
        return res.status(400).json({ error: "Faltan datos obligatorios" });
      }

      const nuevaRuta = await prisma.ruta.create({
        data: {
          origen,
          parada_intermedia: paradaIntermedia,
          destino,
          tiempo_estimado: tiempoEstimado,
          distancia,
          camino,
          id_agencia,
        },
      });

      return res.status(201).json(nuevaRuta);
    } catch (error) {
      console.error("Error al agregar ruta:", error);
      return res.status(500).json({ error: "Error al agregar ruta" });
    }
  }
}

export default RouteController;
