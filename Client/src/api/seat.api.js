import axios from "axios";

const API = "http://192.168.1.5:4000/bus";

export const getBusSeats = (busId) => axios.get(`${API}/${busId}/seats`);
