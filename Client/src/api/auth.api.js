const BASE_URL = "http://192.168.1.5:4000"; // Cambiar a IP local si estás en Android físico/emulador

export const registrarUsuario = async (datos) => {
  const payload = { ...datos };

  // Asegurar que la fecha sea string tipo "YYYY-MM-DD"
  if (payload.fecha_nacimiento instanceof Date) {
    const yyyy = payload.fecha_nacimiento.getFullYear();
    const mm = String(payload.fecha_nacimiento.getMonth() + 1).padStart(2, "0");
    const dd = String(payload.fecha_nacimiento.getDate()).padStart(2, "0");
    payload.fecha_nacimiento = `${yyyy}-${mm}-${dd}`;
  }

  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.mensaje || "Error al registrar usuario");
  }

  return json;
};
