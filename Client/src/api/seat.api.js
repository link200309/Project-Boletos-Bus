import axios from "axios";

const API = "http://192.168.1.5:4000";

export const getBusSeats = async (busId) => {
  try {
    const response = await axios.get(`${API}/asiento/${busId}/seats`);
    return response.data;
  } catch (error) {
    console.error(
      "Error en getBusSeats:",
      error.response?.data || error.message
    );
    throw error;
  }
};
