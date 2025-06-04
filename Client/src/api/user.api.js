const BASE_URL = "http://192.168.28.242:4000"; // tu IP local o dominio

/**
 * Actualiza el perfil del usuario autenticado.
 * @param {Object} datos - Objeto con nombre, apellido y nacimiento.
 * @param {string} token - JWT del usuario autenticado.
 * @returns {Promise<Object>} Respuesta del servidor.
 */
export const actualizarPerfilUsuario = async (datos, token) => {
  try {
    const response = await fetch(`${BASE_URL}/perfil`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Envías el JWT
      },
      body: JSON.stringify(datos), // { nombre, apellido, nacimiento }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.mensaje || "Error al actualizar perfil");
    }

    return data; // { mensaje: "...", usuario: { ... } }
  } catch (error) {
    console.error("Error en API actualizarPerfilUsuario:", error);
    throw error;
  }
};
