const BASE_URL = "http://192.168.0.8:4000"; // tu IP local o dominio

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
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(datos),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.mensaje || "Error al actualizar perfil");
    }

    return data;
  } catch (error) {
    console.error("Error en API actualizarPerfilUsuario:", error);
    throw error;
  }
};

/**
 * Cambia la contraseña del usuario autenticado.
 * @param {Object} datos - Objeto con las claves { actual, nueva }.
 * @param {string} token - JWT del usuario autenticado.
 * @returns {Promise<Object>} Respuesta del servidor.
 */
export const cambiarPasswordUsuario = async (datos, token) => {
  try {
    const response = await fetch(`${BASE_URL}/cambiar-password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(datos), // { actual, nueva }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.mensaje || "Error al cambiar la contraseña");
    }

    return data;
  } catch (error) {
    console.error("Error en API cambiarPasswordUsuario:", error);
    throw error;
  }
};
