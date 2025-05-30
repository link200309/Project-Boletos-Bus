import { Router } from "express";
import {
  getBusSeats,
  createAsiento,
  updateAsiento,
  deleteAsiento,
} from "../controllers/asiento.controller.js";

const router = Router();
router.get("/:id/seats", getBusSeats);
router.post("/", createAsiento);
router.put("/:id", updateAsiento);
router.delete("/:id", deleteAsiento);

export default router;
