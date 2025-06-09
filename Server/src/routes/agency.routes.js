import express from "express";
import AgencyController from "../controllers/agency.controller.js";

const router = express.Router();

router.get("/:id/information", AgencyController.getAgencyInformation);

export default router;
