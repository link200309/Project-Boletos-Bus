import express from "express";
import TravelController from "../controllers/travel.controller.js";

const router = express.Router();

router.get("/get", TravelController.getTravels);
router.get("/:id/get", TravelController.getTravelsByAgency);

export default router;
