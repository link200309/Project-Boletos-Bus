import React from "react";
import BusCard from "./BusCard";

const sampleBuses = [
  {
    id: 1,
    placa: "123 XYZ",
    marca: "Volvo",
    tipo: "semi cama",
    asientos: 30,
    modelo: "9800",
    anio: "2025",
  },
  {
    id: 2,
    placa: "123 XYZ",
    marca: "Volvo",
    tipo: "semi cama",
    asientos: 30,
    modelo: "9800",
    anio: "2025",
  },
];

const BusList = ({ onEdit }) => {
  const handleEdit = (bus) => {
    onEdit(bus); // delega a la pantalla padre
  };

  const handleDelete = (id) => {
    console.log("Eliminar bus:", id);
  };

  return (
    <>
      {sampleBuses.map((bus) => (
        <BusCard key={bus.id} bus={bus} onEdit={handleEdit} onDelete={handleDelete} />
      ))}
    </>
  );
};

export default BusList;
