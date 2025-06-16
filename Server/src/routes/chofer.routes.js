import { Router } from "express";
import {
  getChoferes,
  createChofer,
  updateChofer,
  deleteChofer,
} from "../controllers/chofer.controller.js";

const router = Router();

router.get("/", getChoferes);
router.post("/", createChofer);
router.put("/:id", updateChofer);
router.delete("/:id", deleteChofer);

export default router;
