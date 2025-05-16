import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../generated/prisma/index.js";


const prisma = new PrismaClient();
const CLAVE_SECRETA = process.env.JWT_SECRET || "clave_super_segura";

export const postRegister = async (req, res) => {
  const {
    tipo_usuario,
    nombre_usuario,
    correo_electronico,
    contraseña,
    numero_celular,
    datos_agencia, // solo si tipo_usuario === "agencia"
  } = req.body;

  try {
    // Validaciones básicas
    if (!tipo_usuario || !nombre_usuario || !correo_electronico || !contraseña || !numero_celular) {
      return res.status(400).json({ mensaje: "Faltan datos obligatorios" });
    }

    const existente = await prisma.usuario.findUnique({
      where: { correo_electronico },
    });

    if (existente) {
      return res.status(400).json({ mensaje: "Este correo ya está registrado" });
    }

    const contraseñaHasheada = await bcrypt.hash(contraseña, 10);

    // Crear el usuario general
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        tipo_usuario,
        nombre_usuario,
        correo_electronico,
        contraseña: contraseñaHasheada,
        numero_celular,
      },
    });

    // Si es una agencia, se crea la entrada asociada
    if (tipo_usuario === "agencia" && datos_agencia) {
      await prisma.agencia.create({
        data: {
          id_usuario: nuevoUsuario.id_usuario,
          ...datos_agencia,
        },
      });
    }

    res.status(201).json({
      mensaje: "Usuario registrado exitosamente",
      usuario: {
        id: nuevoUsuario.id_usuario,
        nombre: nuevoUsuario.nombre_usuario,
        correo: nuevoUsuario.correo_electronico,
        tipo: tipo_usuario,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al registrar el usuario", error: error.message });
  }
};

export const postLogin = async (req, res) => {
  const { correo_electronico, contraseña } = req.body;

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { correo_electronico },
      include: { agencia: true },
    });

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!contraseñaValida) {
      return res.status(401).json({ mensaje: "Credenciales inválidas" });
    }

    const token = jwt.sign(
      {
        id_usuario: usuario.id_usuario,
        correo: usuario.correo_electronico,
        tipo_usuario: usuario.tipo_usuario,
        nombre_usuario: usuario.nombre_usuario,
      },
      CLAVE_SECRETA,
      { expiresIn: "1h" }
    );

    res.json({
      mensaje: "Inicio de sesión exitoso",
      token,
      tipo_usuario: usuario.tipo_usuario,
      nombre_usuario: usuario.nombre_usuario,
      datos_agencia: usuario.tipo_usuario === "agencia" ? usuario.agencia : null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al iniciar sesión", error: error.message });
  }
};