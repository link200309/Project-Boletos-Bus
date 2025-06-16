// routes/reporte.routes.js
import express from "express";
import { generarReporteAccidente } from "../controllers/reporte.controller.js";
import { verificarToken } from "../middlewares/verificarToken.js"; // middleware JWT

const router = express.Router();

router.get("/reporte-accidente-pdf", verificarToken, generarReporteAccidente);

export default router;
