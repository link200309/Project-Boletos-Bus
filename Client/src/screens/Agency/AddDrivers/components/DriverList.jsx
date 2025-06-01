import React from "react";
import DriverCard from "./DriverCard";
import { deleteDriver } from "../../../../api/driver.api";

const DriverList = ({ drivers, onEdit, onDeleteFinished }) => {
  const handleDelete = async (id) => {
    try {
      console.log("[DriverList] Eliminando chofer ID:", id);
      await deleteDriver(id);
      console.log("[DriverList] Chofer eliminado, actualizando lista...");
      onDeleteFinished();
    } catch (error) {
      console.error("[DriverList] Error al eliminar chofer:", error);
    }
  };

  return (
    <>
      {drivers.map((driver) => (
        <DriverCard 
          key={driver.id_chofer} 
          driver={driver} 
          onEdit={onEdit} 
          onDelete={handleDelete} 
        />
      ))}
    </>
  );
};

export default DriverList;