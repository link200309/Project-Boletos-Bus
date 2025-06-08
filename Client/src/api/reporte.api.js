import { Linking } from "react-native";

// Cargar viajes activos
export const obtenerViajesActivos = async (token) => {
  try {
    const res = await fetch("http://TU_API/agencia/mis-viajes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Error al cargar viajes activos");

    return await res.json();
  } catch (error) {
    console.error("❌ Error en obtenerViajesActivos:", error);
    return [];
  }
};

// Generar PDF del reporte de accidente
export const generarReporteAccidentePDF = ({ viajeId, motivo, consecuencias }) => {
  if (!viajeId || !motivo.trim()) {
    alert("Completa todos los campos obligatorios.");
    return;
  }

  const url = `http://TU_API/reporte-accidente-pdf?viajeId=${viajeId}&motivo=${encodeURIComponent(
    motivo
  )}&consecuencias=${encodeURIComponent(consecuencias || "")}`;

  Linking.openURL(url);
};
