const BASE_URL = "http://192.168.1.7:4000";
import axios from "axios";

export const createReserva = (data) => {
  return axios.post(`${BASE_URL}/reservas`, data);
};

export const obtenerMisReservasPasajero = async (userId) => {
  return await axios.get(`${BASE_URL}/reservas/pasajero/${userId}`);
};
/**
 * Obtiene el historial de reservas del usuario autenticado.
 * @param {string} token - JWT del usuario.
 * @returns {Promise<Array>} Lista de reservas.
 */
export const obtenerHistorialReservas = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/mis-reservas`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json().catch(() => {
      throw new Error("Respuesta no válida del servidor");
    });

    if (!response.ok) {
      throw new Error(data.mensaje || "Error al obtener historial");
    }

    return data;
  } catch (error) {
    console.error("Error al obtener historial de reservas:", error);
    throw error;
  }
};
