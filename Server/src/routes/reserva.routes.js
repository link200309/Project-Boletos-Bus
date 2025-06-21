import express from "express";
import {
  createReserva,
  obtenerMisReservasPasajero,
  cancelarReserva,
  changeStateReserve,
} from "../controllers/reserva.controller.js";

const router = express.Router();

router.post("/", createReserva);
router.get("/pasajero/:userId", obtenerMisReservasPasajero);
router.put("/updateState", changeStateReserve);
router.put("/cancel/:id_reserva", cancelarReserva);

export default router;
