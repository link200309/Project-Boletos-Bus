import axios from "axios";
const baseURL = process.env.BASE_URL || "http://192.168.1.6:4000";

const travelApi = axios.create({
  baseURL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTravels = async (origen, destino, asientos) => {
  const minDate = new Date();
  minDate.setHours(minDate.getHours() + 1);

  const res = await travelApi.get("/travel/get", {
    params: {
      origen,
      destino,
      asientos,
      minDate: minDate.toISOString(),
    },
  });
  return res.data;
};

export const getTravelsByAgency = async (id) => {
  const res = await travelApi.get(`/travel/${id}/get`);
  return res.data;
};
