import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

class AgencyController {
  static async getAgencyInformation(req, res) {
    const id = parseInt(req.params.id);
    try {
      const agency = await prisma.agencia.findUnique({
        where: { id_agencia: id },
        include: {
          buses: true,
          choferes: true,
        },
      });
      res.json(agency);
    } catch (err) {
      res.status(500).json({
        mensaje: "Error al obtener la informacion de agencia",
        error: err.message,
      });
    }
  }
}

export default AgencyController;
