// routes/estadisticas.routes.js
import express from "express";
import { obtenerEstadisticasAgencia } from "../controllers/estadisticas.controller.js";
import { verificarToken } from "../middlewares/verificarToken.js"; // middleware JWT

const router = express.Router();

router.get("/estadisticas-agencia", verificarToken, obtenerEstadisticasAgencia);

export default router;
