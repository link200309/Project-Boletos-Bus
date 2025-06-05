import axios from "axios";

const API = "http://10.16.59.93:4000/bus"; // Cambia si usas IP local en dispositivo

export const getBuses = () => axios.get(API);

export const createBus = (data) => axios.post(API, data);
export const updateBus = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteBus = (id) => axios.delete(`${API}/${id}`);
