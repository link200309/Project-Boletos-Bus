import axios from "axios";
const baseURL = process.env.BASE_URL || "http://192.168.1.4:4000";

const agencyApi = axios.create({
  baseURL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAgencyInformation = async (id) => {
  const res = await agencyApi.get(`/agency/${id}/information`);
  return res.data;
};
