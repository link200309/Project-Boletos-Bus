import express from "express";
import {
  createReserva,
  obtenerMisReservasPasajero,
  changeStateReserve,
} from "../controllers/reserva.controller.js";

const router = express.Router();

router.post("/", createReserva);
router.get("/pasajero/:userId", obtenerMisReservasPasajero);
router.put("/updateState", changeStateReserve);

export default router;
