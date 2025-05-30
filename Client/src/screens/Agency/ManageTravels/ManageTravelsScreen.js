//React
import { useEffect, useState, useContext } from "react";

//Components
import { GenericContainer } from "../../../components/GenericContainer";
import { InformativeTitle } from "../../../components/InformativeTitle";
import { ListTravels } from "./components/ListTravels";
import { AuthContext } from "../../../context/AuthContext";

export default function ManageTravelsScreen({ navigation }) {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log(user);
  }, []);

  const travels = [
    {
      id: "001",
      origin: "Cochabamba",
      destination: "La Paz",
      date: "2024-01-15",
      time: "08:00",
      busNumber: "Bus-001",
      driver: "Juan Carlos Pérez",
      available: 32,
      total: 45,
      price: 35.0,
      duration: "4h 30min",
      company: "Trans Illimani",
    },
    {
      id: "002",
      origin: "La Paz",
      destination: "Santa Cruz",
      date: "2024-01-15",
      time: "14:30",
      busNumber: "Bus-003",
      driver: "María Elena Vargas",
      available: 18,
      total: 40,
      price: 85.0,
      duration: "12h 15min",
      company: "Expreso Oriental",
    },
    {
      id: "003",
      origin: "Cochabamba",
      destination: "Sucre",
      date: "2024-01-16",
      time: "06:45",
      busNumber: "Bus-012",
      driver: "Roberto Mamani",
      available: 5,
      total: 35,
      price: 45.0,
      duration: "6h 20min",
      company: "Villa Imperial Express",
    },
    {
      id: "004",
      origin: "Santa Cruz",
      destination: "Tarija",
      date: "2024-01-16",
      time: "10:15",
      busNumber: "Bus-007",
      driver: "Ana Lucia Rojas",
      available: 28,
      total: 42,
      price: 65.0,
      duration: "8h 45min",
      company: "Sur Andino",
    },
    {
      id: "005",
      origin: "La Paz",
      destination: "Oruro",
      date: "2024-01-16",
      time: "16:00",
      busNumber: "Bus-015",
      driver: "Carlos Mendoza",
      available: 0,
      total: 38,
      price: 25.0,
      duration: "2h 45min",
      company: "Altiplano Tours",
    },
    {
      id: "006",
      origin: "Cochabamba",
      destination: "Potosí",
      date: "2024-01-17",
      time: "07:30",
      busNumber: "Bus-009",
      driver: "Silvia Condori",
      available: 15,
      total: 36,
      price: 55.0,
      duration: "7h 30min",
      company: "Villa Imperial",
    },
    {
      id: "007",
      origin: "Santa Cruz",
      destination: "Trinidad",
      date: "2024-01-17",
      time: "11:45",
      busNumber: "Bus-020",
      driver: "Fernando Gutierrez",
      available: 22,
      total: 30,
      price: 75.0,
      duration: "9h 15min",
      company: "Beni Express",
    },
    {
      id: "008",
      origin: "La Paz",
      destination: "Cochabamba",
      date: "2024-01-17",
      time: "19:30",
      busNumber: "Bus-005",
      driver: "Patricia Quispe",
      available: 12,
      total: 45,
      price: 35.0,
      duration: "4h 45min",
      company: "Trans Illimani",
    },
    {
      id: "009",
      origin: "Sucre",
      destination: "Santa Cruz",
      date: "2024-01-18",
      time: "05:15",
      busNumber: "Bus-018",
      driver: "Miguel Angel Torres",
      available: 8,
      total: 40,
      price: 70.0,
      duration: "10h 30min",
      company: "Chuquisaca Express",
    },
    {
      id: "010",
      origin: "Tarija",
      destination: "La Paz",
      date: "2024-01-18",
      time: "13:20",
      busNumber: "Bus-011",
      driver: "Rosario Mamani",
      available: 35,
      total: 44,
      price: 95.0,
      duration: "14h 20min",
      company: "Chapaco Tours",
    },
    {
      id: "011",
      origin: "Oruro",
      destination: "Cochabamba",
      date: "2024-01-18",
      time: "20:45",
      busNumber: "Bus-013",
      driver: "Eduardo Flores",
      available: 25,
      total: 38,
      price: 30.0,
      duration: "3h 15min",
      company: "Altiplano Tours",
    },
    {
      id: "012",
      origin: "Potosí",
      destination: "Sucre",
      date: "2024-01-19",
      time: "08:10",
      busNumber: "Bus-016",
      driver: "Juana Apaza",
      available: 17,
      total: 32,
      price: 40.0,
      duration: "3h 45min",
      company: "Villa Imperial",
    },
  ];

  const addTravel = () => {
    console.log("Viaje agregado");
  };

  return (
    <GenericContainer>
      <InformativeTitle
        title={"Gestionar viajes"}
        description={"Viajes totales: 4"}
        btnText={"+ Viaje"}
        onClick={addTravel}
      />

      <ListTravels travels={travels} navigation={navigation} />
    </GenericContainer>
  );
}
