import express from "express";
import TravelControllerController from "../controllers/travelController.js";

const router = express.Router();

router.get("/get", TravelControllerController.getTravels);

export default router;
