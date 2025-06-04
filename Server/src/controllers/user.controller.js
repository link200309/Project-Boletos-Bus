import { PrismaClient } from "../generated/prisma/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

/**
 * Actualiza el perfil del usuario autenticado.
 */
export const actualizarPerfil = async (req, res) => {
  try {
    const userId = req.usuario.id_usuario;
    const { nombre, apellido, nacimiento } = req.body;

    if (!nombre || !apellido || !nacimiento) {
      return res.status(400).json({ mensaje: "Todos los campos son obligatorios." });
    }

    const usuarioActualizado = await prisma.usuario.update({
      where: { id_usuario: userId },
      data: { nombre, apellido },
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

/**
 * Cambia la contraseña del usuario autenticado.
 */
export const cambiarContraseña = async (req, res) => {
  const userId = req.usuario.id_usuario;
  const { actual, nueva } = req.body;

  if (!actual || !nueva) {
    return res.status(400).json({ mensaje: "Todos los campos son obligatorios." });
  }

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id_usuario: userId },
    });

    const coincide = await bcrypt.compare(actual, usuario.contraseña);
    if (!coincide) {
      return res.status(401).json({ mensaje: "La contraseña actual es incorrecta." });
    }

    const nuevaHasheada = await bcrypt.hash(nueva, 10);

    await prisma.usuario.update({
      where: { id_usuario: userId },
      data: { contraseña: nuevaHasheada },
    });

    return res.status(200).json({ mensaje: "Contraseña actualizada correctamente." });
  } catch (error) {
    console.error("Error al cambiar contraseña:", error);
    return res.status(500).json({ mensaje: "Error del servidor." });
  }
};

export default {
  actualizarPerfil,
  cambiarContraseña,
};
