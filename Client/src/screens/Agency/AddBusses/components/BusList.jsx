// components/BusList.jsx
import React from "react";
import BusCard from "./BusCard";
import { getBuses, deleteBus } from "../../../../api/bus.api";

const BusList = ({ buses, onEdit, onDeleteFinished }) => {
  const handleDelete = async (id) => {
    try {
      await deleteBus(id);
      onDeleteFinished(); // recarga desde pantalla padre
    } catch (error) {
      console.error("Error al eliminar bus:", error);
    }
  };

  return (
    <>
      {buses.map((bus) => (
        <BusCard key={bus.id_bus} bus={bus} onEdit={onEdit} onDelete={handleDelete} />
      ))}
    </>
  );
};

export default BusList;
