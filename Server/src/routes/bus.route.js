import { Router } from "express";
import {
  getBuses,
  createBus,
  updateBus,
  deleteBus,
} from "../controllers/bus.controller.js";

const router = Router();

router.get("/", getBuses);
router.post("/", createBus);
router.put("/:id", updateBus);
router.delete("/:id", deleteBus);

export default router;
