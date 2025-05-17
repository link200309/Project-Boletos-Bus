import { Router } from "express";
import {
  getAsientosPorBus,
  createAsiento,
  updateAsiento,
  deleteAsiento,
} from "../controllers/asiento.controller.js";

const router = Router();

router.get("/bus/:id", getAsientosPorBus); // GET asientos por ID de bus
router.post("/", createAsiento);
router.put("/:id", updateAsiento);
router.delete("/:id", deleteAsiento);

export default router;
