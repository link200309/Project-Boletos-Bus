import React, { useState } from "react";
import BusForm from "./BusForm";

const BusFormWrapper = ({ mode = "register", initialData = {}, onSave }) => {
  const [formData, setFormData] = useState({
    placa: "",
    marca: "",
    tipo: "",
    asientos: "",
    modelo: "",
    anio: "",
    ...initialData,
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    onSave(formData);
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
