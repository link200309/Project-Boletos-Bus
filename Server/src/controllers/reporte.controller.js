import PDFDocument from "pdfkit";
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

export const generarReporteAccidente = async (req, res) => {
  try {
    const { viajeId, motivo, consecuencias } = req.query;

    if (!viajeId || !motivo) {
      return res.status(400).json({ mensaje: "Parámetros incompletos" });
    }

    const viaje = await prisma.viaje.findUnique({
      where: { id_viaje: parseInt(viajeId) },
      include: {
        bus: true,
        ruta: true,
        reserva: {
          include: {
            pasajero: true,
            asiento: true,
          },
        },
      },
    });

    if (!viaje) {
      return res.status(404).json({ mensaje: "Viaje no encontrado" });
    }

    const doc = new PDFDocument({ margin: 50 });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename=reporte_accidente_viaje_${viajeId}.pdf`
    );
    doc.pipe(res);

    // Encabezado principal
    doc
      .fontSize(22)
      .fillColor("#1f2937")
      .text("📄 Reporte de Accidente", { align: "center" })
      .moveDown();

    // Información general
    doc
      .fontSize(14)
      .fillColor("#000")
      .text(`🕒 Fecha de generación: ${new Date().toLocaleString()}`)
      .moveDown(0.5)
      .text(`🚌 ID del viaje: ${viaje.id_viaje}`)
      .text(`🛣 Ruta: ${viaje.ruta.origen} → ${viaje.ruta.destino}`)
      .text(`📆 Fecha de salida: ${new Date(viaje.fecha_salida).toLocaleDateString()}`)
      .text(`⏰ Hora programada: ${viaje.hora_programada}`)
      .text(`🚍 Bus: ${viaje.bus.marca} (${viaje.bus.placa})`)
      .moveDown();

    // Detalles del accidente
    doc
      .fontSize(16)
      .fillColor("#1d4ed8")
      .text("🔴 Detalles del Accidente", { underline: true })
      .moveDown(0.5);

    doc
      .fontSize(13)
      .fillColor("#000")
      .text(`🔸 Motivo: ${motivo}`)
      .moveDown(0.3)
      .text(`🔸 Consecuencias: ${consecuencias || "No especificado"}`)
      .moveDown();

    // Tabla de pasajeros
    doc
      .fontSize(16)
      .fillColor("#1d4ed8")
      .text("👥 Lista de Pasajeros", { underline: true })
      .moveDown(0.5);

    const pasajeros = viaje.reserva;

    if (pasajeros.length === 0) {
      doc.fontSize(12).fillColor("#000").text("No hay pasajeros registrados.");
    } else {
      // Encabezado de la tabla
      doc
        .fontSize(12)
        .fillColor("#000")
        .text("N°", 50, doc.y, { continued: true })
        .text("Nombre completo", 90, doc.y, { continued: true })
        .text("CI", 270, doc.y, { continued: true })
        .text("Asiento", 340, doc.y)
        .moveDown(0.5);

      // Línea separadora
      doc.moveTo(50, doc.y).lineTo(500, doc.y).stroke();

      pasajeros.forEach((r, index) => {
        const nombreCompleto = `${r.pasajero.nombre} ${r.pasajero.apellido}`;
        doc
          .fontSize(11)
          .text(index + 1, 50, doc.y, { continued: true })
          .text(nombreCompleto, 90, doc.y, { continued: true })
          .text(r.pasajero.ci || "N/A", 270, doc.y, { continued: true })
          .text(r.asiento.numero_asiento || "-", 340, doc.y);
      });
    }

    doc.end();
  } catch (error) {
    console.error("❌ Error generando PDF:", error);
    res.status(500).json({ mensaje: "Error al generar reporte" });
  }
};
