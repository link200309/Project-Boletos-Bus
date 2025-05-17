import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

// GET: todos los viajes
export const getViajes = async (req, res) => {
  try {
    let viajes;

    if (req.usuario.tipo_usuario === "agencia") {
      viajes = await prisma.viaje.findMany({
        where: {
          bus: {
            id_agencia: req.usuario.id_agencia
          }
        },
        include: { bus: true, chofer: true, ruta: true }
      });
    } else {
      viajes = await prisma.viaje.findMany({
        include: { bus: true, chofer: true, ruta: true }
      });
    }

    res.json(viajes);
  } catch (err) {
    res.status(500).json({ mensaje: "Error al obtener viajes", error: err.message });
  }
};

// GET: viaje por ID
export const getViajeById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const viaje = await prisma.viaje.findUnique({ where: { id_viaje: id } });
    res.json(viaje);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// POST: crear viaje (solo agencia)
export const createViaje = async (req, res) => {
  const data = req.body;

  try {
    if (req.usuario.tipo_usuario !== "agencia") {
      return res.status(403).json({ mensaje: "Solo agencias pueden crear viajes" });
    }

    const bus = await prisma.bus.findUnique({ where: { id_bus: data.id_bus } });
    const chofer = await prisma.chofer.findUnique({ where: { id_chofer: data.id_chofer } });

    if (!bus || !chofer ||
        bus.id_agencia !== req.usuario.id_agencia ||
        chofer.id_agencia !== req.usuario.id_agencia) {
      return res.status(403).json({ mensaje: "No tienes permiso para usar este bus o chofer" });
    }

    const nuevoViaje = await prisma.viaje.create({ data });
    res.status(201).json(nuevoViaje);
  } catch (err) {
    res.status(400).json({ mensaje: "Error al crear viaje", error: err.message });
  }
};

// PUT: modificar viaje (solo agencia)
export const updateViaje = async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;

  try {
    if (req.usuario.tipo_usuario !== "agencia") {
      return res.status(403).json({ mensaje: "Solo agencias pueden modificar viajes" });
    }

    const viaje = await prisma.viaje.findUnique({
      where: { id_viaje: id },
      include: { bus: true }
    });

    if (!viaje || viaje.bus.id_agencia !== req.usuario.id_agencia) {
      return res.status(403).json({ mensaje: "No tienes permiso para modificar este viaje" });
    }

    const actualizado = await prisma.viaje.update({
      where: { id_viaje: id },
      data
    });

    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ mensaje: "Error al actualizar viaje", error: err.message });
  }
};

// DELETE: eliminar viaje (solo agencia)
export const deleteViaje = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    if (req.usuario.tipo_usuario !== "agencia") {
      return res.status(403).json({ mensaje: "Solo agencias pueden eliminar viajes" });
    }

    const viaje = await prisma.viaje.findUnique({
      where: { id_viaje: id },
      include: { bus: true }
    });

    if (!viaje || viaje.bus.id_agencia !== req.usuario.id_agencia) {
      return res.status(403).json({ mensaje: "No tienes permiso para eliminar este viaje" });
    }

    await prisma.viaje.delete({ where: { id_viaje: id } });
    res.json({ mensaje: "Viaje eliminado" });
  } catch (err) {
    res.status(400).json({ mensaje: "Error al eliminar viaje", error: err.message });
  }
};

// PATCH: actualizar estado
export const actualizarEstado = async (req, res) => {
  const id = parseInt(req.params.id);
  const { estado } = req.body;

  try {
    const actualizado = await prisma.viaje.update({
      where: { id_viaje: id },
      data: { estado }
    });
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// POST: reporte de accidente
export const reportarAccidente = async (req, res) => {
  const id = parseInt(req.params.id);
  const { descripcion } = req.body;

  console.log(`🚨 Accidente en viaje ${id}: ${descripcion}`);
  res.json({ mensaje: "Reporte de accidente registrado (simulado)" });
};

// POST: notificación a clientes
export const notificarClientes = async (req, res) => {
  const id = parseInt(req.params.id);

  console.log(`📢 Notificación a clientes del viaje ${id}`);
  res.json({ mensaje: "Notificación enviada (simulada)" });
};
