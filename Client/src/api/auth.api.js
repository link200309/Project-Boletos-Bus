import axios from "axios";

const BASE_URL = "http://192.168.1.6:4000";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const registerUser = async (datos) => {
  try {
    const payload = { ...datos };

    if (payload.fecha_nacimiento instanceof Date) {
      const yyyy = payload.fecha_nacimiento.getFullYear();
      const mm = String(payload.fecha_nacimiento.getMonth() + 1).padStart(
        2,
        "0"
      );
      const dd = String(payload.fecha_nacimiento.getDate()).padStart(2, "0");
      payload.fecha_nacimiento = `${yyyy}-${mm}-${dd}`;
    }

    const response = await api.post("/register", payload);
    return response.data;
  } catch (error) {
    console.error("Error al registrar usuario:", error.message);
    throw error;
  }
};

export const loginUser = async (data) => {
  const res = await api.post("/login", {
    data,
  });
  return res;
};
