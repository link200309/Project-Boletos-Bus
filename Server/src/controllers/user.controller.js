// src/controllers/user.controller.js

import { PrismaClient } from "../generated/prisma/index.js";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const actualizarPerfil = async (req, res) => {
  try {
    const userId = req.usuario.id_usuario; // <- asegurarse que sea 'req.usuario.id_usuario' según tu middleware
    const { nombre, apellido, nacimiento } = req.body;

    if (!nombre || !apellido || !nacimiento) {
      return res.status(400).json({ mensaje: "Todos los campos son obligatorios." });
    }

    const usuarioActualizado = await prisma.usuario.update({
      where: { id_usuario: userId },
      data: {
        nombre,
        apellido,
      },
    });

    const pasajeroActualizado = await prisma.pasajero.update({
      where: { id_pasajero: userId },
      data: {
        fecha_nacimiento: new Date(nacimiento),
      },
    });

    return res.status(200).json({
      mensaje: "Perfil actualizado",
      usuario: {
        ...usuarioActualizado,
        datos_pasajero: pasajeroActualizado,
      },
    });
  } catch (error) {
    console.error("Error al actualizar perfil:", error);
    return res.status(500).json({ mensaje: "Error del servidor" });
  }
};

// ✅ Exporta como ES Module
export default {
  actualizarPerfil,
};
