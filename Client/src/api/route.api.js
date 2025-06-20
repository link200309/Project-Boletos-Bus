import axios from "axios";
const baseURL = process.env.BASE_URL || "http://192.168.100.123:4000";

const routeApi = axios.create({
  baseURL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export const addRoute = async (data) => {
  const res = await routeApi.post("/route/add", data);
  return res.data;
};
export const getRouteAgency = async (id) => {
  const res = await routeApi.get(`/route/agency/${id}`);
  return res.data;
};
