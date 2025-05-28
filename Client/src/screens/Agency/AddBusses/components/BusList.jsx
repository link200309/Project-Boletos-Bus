// components/BusList.jsx
import React from "react";
import BusCard from "./BusCard";
import { getBuses, deleteBus } from "../../../../api/bus.api";

const BusList = ({ buses, onEdit, onDeleteFinished }) => {
  const handleDelete = async (id) => {
    await deleteBus(id);
    onDeleteFinished(); // refresca desde pantalla padre
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
