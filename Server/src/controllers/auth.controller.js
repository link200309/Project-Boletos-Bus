import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();
const CLAVE_SECRETA = process.env.JWT_SECRET;

// Registro de usuarios (cliente o agencia)
export const postRegister = async (req, res) => {
  const {
    tipo_usuario,
    nombre,
    apellido,
    ci,
    correo_electronico,
    contraseña,
    numero_celular,
    fecha_nacimiento,
    datos_agencia,
  } = req.body;

  try {
    // Validación básica
    if (
      !tipo_usuario || !nombre || !apellido || !correo_electronico ||
      !contraseña || !ci || !numero_celular
    ) {
      return res.status(400).json({ mensaje: "Faltan datos obligatorios" });
    }

    // Verificar duplicados
    const existente = await prisma.usuario.findUnique({
      where: { correo_electronico },
    });

    if (existente) {
      return res.status(400).json({ mensaje: "Este correo ya está registrado" });
    }

    // Hash de contraseña
    const contraseñaHasheada = await bcrypt.hash(contraseña, 10);

    // Parseo de fecha
    let parsedFecha = undefined;
    if (fecha_nacimiento) {
      parsedFecha = new Date(fecha_nacimiento); // espera formato "YYYY-MM-DD"
    }

    // Crear usuario base
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        tipo_usuario,
        nombre,
        apellido,
        ci,
        correo_electronico,
        contraseña: contraseñaHasheada,
        numero_celular,
        fecha_nacimiento: parsedFecha,
      },
    });

    // Si es agencia, crea la agencia asociada
    if (tipo_usuario === "agencia" && datos_agencia) {
      await prisma.agencia.create({
        data: {
          id_usuario: nuevoUsuario.id_usuario,
          nombre_agencia: datos_agencia.nombre_agencia,
          tipo_sociedad: datos_agencia.tipo_sociedad,
          NIT: datos_agencia.NIT,
          departamento: datos_agencia.departamento,
          ciudad: datos_agencia.ciudad,
          direccion: datos_agencia.direccion,
          estado: datos_agencia.estado || "activo",
          correo_electronico_agencia: datos_agencia.correo_electronico_agencia,
          numero_celular: datos_agencia.numero_celular,
          nombre_representante: datos_agencia.nombre_representante,
          apellido_representante: datos_agencia.apellido_representante,
          ci_representante: datos_agencia.ci_representante,
          telefono_representante: datos_agencia.telefono_representante,
        },
      });
    }

    res.status(201).json({
      mensaje: "Usuario registrado exitosamente",
      usuario: {
        id: nuevoUsuario.id_usuario,
        nombre: nuevoUsuario.nombre,
        apellido: nuevoUsuario.apellido,
        tipo: tipo_usuario,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al registrar el usuario",
      error: error.message,
    });
  }
};

// Inicio de sesión
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
        nombre: usuario.nombre,
        apellido: usuario.apellido,
      },
      CLAVE_SECRETA,
      { expiresIn: "1h" }
    );

    res.json({
      mensaje: "Inicio de sesión exitoso",
      token,
      tipo_usuario: usuario.tipo_usuario,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      datos_agencia: usuario.tipo_usuario === "agencia" ? usuario.agencia : null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al iniciar sesión",
      error: error.message,
    });
  }
};
