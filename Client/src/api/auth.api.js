const BASE_URL = "http://192.168.1.7:4000"; // Cambiar a IP local si estás en Android físico/emulador

export const registrarUsuario = async (datos) => {
  const payload = { ...datos };

  // Validación/ajuste opcional de fecha_nacimiento
  if (payload.fecha_nacimiento instanceof Date) {
    const dd = String(payload.fecha_nacimiento.getDate()).padStart(2, '0');
    const mm = String(payload.fecha_nacimiento.getMonth() + 1).padStart(2, '0'); // +1 porque enero = 0
    const yyyy = payload.fecha_nacimiento.getFullYear();
    payload.fecha_nacimiento = `${dd}/${mm}/${yyyy}`;
  }

  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const json = await res.json();
  if (!res.ok) throw new Error(json.mensaje || "Error al registrar usuario");
  return json;
};
