// src/api/driver.api.js
import axios from "axios";

const API_URL = "http://192.168.84.144:4000/choferes"; // Ajusta si tu backend usa otra URL o puerto

export const getDrivers = () => axios.get(API_URL);

export const createDriver = (data) => axios.post(API_URL, data);

export const updateDriver = (id, data) => axios.put(`${API_URL}/${id}`, data);

export const deleteDriver = (id) => axios.delete(`${API_URL}/${id}`);
