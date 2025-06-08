import React, { useState } from "react";
import DriverForm from "./DriverForm";
import { createDriver, updateDriver } from "../../../../api/driver.api";

const DriverFormWrapper = ({ mode = "register", initialData = {}, onSave = () => {} }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    carnet_identidad: "",
    numero_celular: "",
    categoria_licencia: "",
    estado: "Activo",
    direccion_contacto: "",
    ...initialData,
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      // Basic validation
      if (!formData.nombre || !formData.apellido || !formData.carnet_identidad) {
        console.error("Validation failed: Missing required fields");
        return;
      }

      if (mode === "edit") {
        await updateDriver(formData.id_chofer, formData);
      } else {
        await createDriver({
          ...formData,
          id_agencia: 1,
        });
      }
      onSave();
    } catch (err) {
      console.error("Error saving driver:", {
        error: err.response?.data || err.message,
        requestData: formData
      });
    }
  };

  return (
    <DriverForm
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      buttonText={mode === "register" ? "Register Driver" : "Save Changes"}
    />
  );
};

export default DriverFormWrapper;