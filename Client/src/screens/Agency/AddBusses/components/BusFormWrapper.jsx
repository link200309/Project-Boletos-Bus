// BusFormWrapper.jsx (fixed)
import React, { useState, useContext } from "react";
import BusForm from "./BusForm";
import { createBus, updateBus } from "../../../../api/bus.api";
import { AuthContext } from "../../../../context/AuthContext";

const BusFormWrapper = ({
  mode = "register",
  initialData = {},
  onSave = () => {},
}) => {
  const [formData, setFormData] = useState({
    placa: "",
    marca: "",
    tipo_bus: "",
    estado: "",
    modelo: "",
    año_modelo: "",
    ...initialData,
  });
  const { user } = useContext(AuthContext);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    console.log(formData);
    const dataToSend = {
      placa: formData.placa,
      marca: formData.marca,
      modelo: formData.modelo,
      año_modelo: parseInt(formData.año_modelo),
      tipo_bus: formData.tipo_bus,
      estado: formData.estado,
      agencia: {
        connect: {
          id_agencia: user.datos_agencia.id_agencia,
        },
      },
      asientos: formData.asientos_configurados,
    };

    try {
      if (mode === "edit") {
        await updateBus(formData.id_bus, dataToSend);
      } else {
        await createBus(dataToSend);
      }
      onSave();
    } catch (err) {
      console.error("Error al guardar:", err.response?.data || err.message);
    }
  };

  return (
    <BusForm
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      buttonText={mode === "register" ? "Registrar Bus" : "Guardar cambios"}
    />
  );
};

export default BusFormWrapper;
