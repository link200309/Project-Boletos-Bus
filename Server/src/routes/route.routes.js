import express from "express";
import RouteController from "../controllers/route.controller.js";

const router = express.Router();

router.get("/agency/:id_agencia", RouteController.getRoutesAgency);
router.post("/add", RouteController.addRoute);

export default router;
