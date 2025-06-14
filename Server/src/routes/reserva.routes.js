import express from "express";
import { createReserva, obtenerMisReservas } from "../controllers/reserva.controller.js";
import { verificarToken } from "../middlewares/verificarToken.js";

const router = express.Router();

router.post("/",  createReserva);
router.get("/mis-reservas",  obtenerMisReservas);

export default router;
