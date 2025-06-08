import express from "express";
import { crearReserva, obtenerMisReservas } from "../controllers/reserva.controller.js";
import { verificarToken } from "../middlewares/verificarToken.js";

const router = express.Router();

router.post("/", verificarToken, crearReserva);
router.get("/mis-reservas", verificarToken, obtenerMisReservas);

export default router;
