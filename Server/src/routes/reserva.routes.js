import express from "express";
import {
  crearReserva,
  changeStateReserve,
} from "../controllers/reserva.controller.js";
import { verificarToken } from "../middlewares/verificarToken.js";

const router = express.Router();

router.post("/", verificarToken, crearReserva);
router.put("/cancel", changeStateReserve);

export default router;
