import express from "express";
import TravelController from "../controllers/travelController.js";

const router = express.Router();

router.get("/get", TravelController.getTravels);

export default router;
