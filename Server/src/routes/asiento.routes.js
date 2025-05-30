import { Router } from "express";
import {
  getBusSeats,
  createAsiento,
  updateAsiento,
  deleteAsiento,
} from "../controllers/asiento.controller.js";

const router = Router();
// Obtener asientos de un bus específico
router.get("/:id/seats", getBusSeats);
// router.get("/bus/:id", getAsientosPorBus); // GET asientos por ID de bus
router.post("/", createAsiento);
router.put("/:id", updateAsiento);
router.delete("/:id", deleteAsiento);

export default router;
