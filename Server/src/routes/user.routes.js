import { Router } from "express";
import { actualizarPerfil } from "../controllers/user.controller.js";
import { verificarToken } from "../middlewares/verificarToken.js";

const router = Router();

// Ruta protegida para actualizar perfil del usuario autenticado
router.put("/perfil", verificarToken, actualizarPerfil);

// Resto de tus rutas antiguas (puedes mantenerlas si las necesitas)
router.get("/users", (req, res) => {
  res.send("User route john te amo");
});

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User route john te amo ${id}`);
});

router.post("/users", (req, res) => {
  res.send("creando user");
});

router.delete("/users/:id", (req, res) => {
  res.send("eliminando user");
});

router.put("/users/:id", (req, res) => {
  res.send("actualizando user");
});

export default router;
