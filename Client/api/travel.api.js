import axios from "axios";

const baseURL = process.env.BASE_URL || "http://127.0.0.1:4000";

const travelApi = axios.create({
  baseURL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTravels = (origen, destino, asientos) => {
  travelApi.get("/travel/get", {
    params: {
      origen: origen,
      destino: destino,
      asientos: asientos,
    },
  });
};
