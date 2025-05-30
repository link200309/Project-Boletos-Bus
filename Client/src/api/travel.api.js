import axios from "axios";

const baseURL = process.env.BASE_URL || "http://192.168.0.8:4000"; //Pongan la IP de su pc en la red de su wifichoza xd

const travelApi = axios.create({
  baseURL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTravels = async (origen, destino, asientos) => {
  const res = await travelApi.get("/travel/get", {
    params: {
      origen,
      destino,
      asientos,
    },
  });
  return res.data;
};

export const getTravelsByAgency = async (id) => {
  const res = await travelApi.get(`/travel/${id}/get`);
  return res.data;
};
