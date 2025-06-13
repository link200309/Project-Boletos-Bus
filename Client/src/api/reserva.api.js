const BASE_URL = "http://192.168.0.2:4000"; // Reemplaza si cambia tu IP o dominio

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

    // Asegura que el cuerpo de la respuesta sea JSON
    const data = await response.json().catch(() => {
      throw new Error("Respuesta no válida del servidor");
    });

    if (!response.ok) {
      throw new Error(data.mensaje || "Error al obtener historial");
    }

    return data; // Se espera que sea un array de reservas
  } catch (error) {
    console.error("Error al obtener historial de reservas:", error);
    throw error;
  }
};
