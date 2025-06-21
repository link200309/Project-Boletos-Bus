import express from "express";
import TravelController from "../controllers/travel.controller.js";

const router = express.Router();

router.get("/get", TravelController.getTravels);
router.get("/:id/get", TravelController.getTravelsByAgency);
router.post("/add", TravelController.addTravel);
router.put("/:id", TravelController.updateTravel);

export default router;
