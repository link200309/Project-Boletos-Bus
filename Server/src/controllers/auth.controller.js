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
    if (
      !tipo_usuario ||
      !nombre ||
      !apellido ||
      !correo_electronico ||
      !contraseña ||
      !ci ||
      !numero_celular
    ) {
      return res.status(400).json({ mensaje: "Faltan datos obligatorios" });
    }

    if (tipo_usuario === "agencia" && !datos_agencia) {
      return res
        .status(400)
        .json({ mensaje: "Los datos de agencia son requeridos" });
    }

    if (tipo_usuario === "cliente" && !fecha_nacimiento) {
      return res
        .status(400)
        .json({ mensaje: "La fecha de nacimiento es requerida para clientes" });
    }

    // Verificar duplicados
    const existente = await prisma.usuario.findUnique({
      where: { correo_electronico },
    });

    if (existente) {
      return res
        .status(400)
        .json({ mensaje: "Este correo ya está registrado" });
    }

    const contraseñaHasheada = await bcrypt.hash(contraseña, 10);

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
      },
    });

    if (tipo_usuario === "agencia" && datos_agencia) {
      const camposRequeridos = [
        "nombre_agencia",
        "tipo_sociedad",
        "NIT",
        "departamento",
        "ciudad",
        "direccion",
        "correo_electronico_agencia",
        "numero_celular_agencia",
      ];

      for (const campo of camposRequeridos) {
        if (!datos_agencia[campo]) {
          return res.status(400).json({
            mensaje: `El campo ${campo} es requerido para la agencia`,
          });
        }
      }

      await prisma.agencia.create({
        data: {
          id_agencia: nuevoUsuario.id_usuario,
          nombre_agencia: datos_agencia.nombre_agencia,
          tipo_sociedad: datos_agencia.tipo_sociedad,
          NIT: datos_agencia.NIT,
          departamento: datos_agencia.departamento,
          ciudad: datos_agencia.ciudad,
          direccion: datos_agencia.direccion,
          estado: datos_agencia.estado || "Activo",
          correo_electronico_agencia: datos_agencia.correo_electronico_agencia,
          numero_celular_agencia: datos_agencia.numero_celular_agencia,
          nombre_representante: datos_agencia.nombre_representante || null,
          apellido_representante: datos_agencia.apellido_representante || null,
          ci_representante: datos_agencia.ci_representante || null,
          celular_representante: datos_agencia.celular_representante || null,
        },
      });
    }

    if (tipo_usuario === "cliente") {
      const parsedFecha = new Date(fecha_nacimiento);

      if (isNaN(parsedFecha.getTime())) {
        return res.status(400).json({
          mensaje: "Formato de fecha inválido. Use YYYY-MM-DD",
        });
      }

      await prisma.pasajero.create({
        data: {
          id_pasajero: nuevoUsuario.id_usuario,
          fecha_nacimiento: parsedFecha,
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
    console.error("Error en registro:", error);

    if (error.code === "P2002") {
      return res.status(400).json({
        mensaje: "Ya existe un registro con estos datos únicos",
        error: "Datos duplicados",
      });
    }

    res.status(500).json({
      mensaje: "Error al registrar el usuario",
      error: error.message,
    });
  }
};

// Inicio de sesión
export const postLogin = async (req, res) => {
  const { correo_electronico, contraseña } = req.body.data;

  try {
    if (!correo_electronico || !contraseña) {
      return res.status(400).json({
        mensaje: "Correo electrónico y contraseña son requeridos",
      });
    }

    const usuario = await prisma.usuario.findUnique({
      where: { correo_electronico },
      include: {
        agencia: true,
        pasajero: true,
      },
    });

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    const contraseñaValida = await bcrypt.compare(
      contraseña,
      usuario.contraseña
    );
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
      { expiresIn: "24h" }
    );

    // Preparar respuesta según tipo de usuario
    const respuesta = {
      mensaje: "Inicio de sesión exitoso",
      token,
      usuario: {
        id: usuario.id_usuario,
        tipo_usuario: usuario.tipo_usuario,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        correo_electronico: usuario.correo_electronico,
      },
    };

    // Agregar datos específicos según el tipo de usuario
    if (usuario.tipo_usuario === "agencia" && usuario.agencia) {
      respuesta.datos_agencia = {
        id_agencia: usuario.agencia.id_agencia,
        nombre_agencia: usuario.agencia.nombre_agencia,
        tipo_sociedad: usuario.agencia.tipo_sociedad,
        NIT: usuario.agencia.NIT,
        departamento: usuario.agencia.departamento,
        ciudad: usuario.agencia.ciudad,
        direccion: usuario.agencia.direccion,
        estado: usuario.agencia.estado,
        correo_electronico_agencia: usuario.agencia.correo_electronico_agencia,
        numero_celular_agencia: usuario.agencia.numero_celular_agencia,
      };
    }

    if (usuario.tipo_usuario === "cliente" && usuario.pasajero) {
      respuesta.datos_pasajero = {
        id_pasajero: usuario.pasajero.id_pasajero,
        fecha_nacimiento: usuario.pasajero.fecha_nacimiento,
      };
    }

    res.json(respuesta);
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({
      mensaje: "Error al iniciar sesión",
      error: error.message,
    });
  }
};

// Función auxiliar para obtener información del usuario logueado
export const getProfile = async (req, res) => {
  try {
    const { id_usuario } = req.user; // Viene del middleware de autenticación

    const usuario = await prisma.usuario.findUnique({
      where: { id_usuario },
      include: {
        agencia: true,
        pasajero: true,
      },
      select: {
        id_usuario: true,
        tipo_usuario: true,
        nombre: true,
        apellido: true,
        ci: true,
        correo_electronico: true,
        numero_celular: true,
        agencia: true,
        pasajero: true,
      },
    });

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    res.json({
      mensaje: "Perfil obtenido exitosamente",
      usuario,
    });
  } catch (error) {
    console.error("Error al obtener perfil:", error);
    res.status(500).json({
      mensaje: "Error al obtener el perfil",
      error: error.message,
    });
  }
};
