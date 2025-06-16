import axios from "axios";

// Configura tu base URL si usas un archivo .env o constante
const API_BASE_URL = "http://192.168.1.4:4000"; // ⚠️ cámbialo por la URL real en producción

// Función para obtener estadísticas de la agencia
export const obtenerEstadisticasAgencia = async (token) => {
  try {
    const res = await axios.get(
      `${API_BASE_URL}/estadistica/estadisticas-agencia`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error al obtener estadísticas:", error);
    throw error;
  }
};
