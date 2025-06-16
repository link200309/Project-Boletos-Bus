import { Router } from "express";
import {
  getViajes,
  getViajeById,
  createViaje,
  updateViaje,
  deleteViaje,
  actualizarEstado,
  reportarAccidente,
  notificarClientes
} from "../controllers/viaje.controller.js";

import { verificarToken } from "../middlewares/verificarToken.js";

const router = Router();

// Todas las rutas requieren autenticación
router.use(verificarToken);

// Rutas públicas/protegidas por tipo
router.get("/", getViajes);
router.get("/:id", getViajeById);

// Solo agencias pueden hacer estas operaciones (validado en los controladores)
router.post("/", createViaje);
router.put("/:id", updateViaje);
router.delete("/:id", deleteViaje);

router.patch("/:id/estado", actualizarEstado);
router.post("/:id/accidente", reportarAccidente);
router.post("/:id/notificar", notificarClientes);

export default router;
