import { Router } from "express";
const router = Router();
import { postLogin, postRegister } from "../controllers/auth.controller.js";
router.post("/login", postLogin);
router.post("/register", postRegister);
//router.post('/logout',getBuses)
//router.get('/protected',getBuses)
export default router;
