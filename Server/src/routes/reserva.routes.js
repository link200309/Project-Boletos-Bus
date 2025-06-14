import express from "express";
import {
  createReserva,
  obtenerMisReservas,
  changeStateReserve,
} from "../controllers/reserva.controller.js";

const router = express.Router();

router.post("/", createReserva);
router.get("/mis-reservas", obtenerMisReservas);
router.put("/cancel", changeStateReserve);

export default router;
