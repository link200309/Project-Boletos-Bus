// BusForm.jsx (corregido)
import React from "react";
import { View, StyleSheet } from "react-native";
import { InputLabel } from "../../../../components/Input/InputLabel";
import { Selector } from "../../../../components/Input/Selector";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";

const BusForm = ({ formData, onChange, onSubmit, buttonText }) => {
  const handleChange = (field) => (value) => onChange(field, value);

  return (
    <View style={styles.formCard}>
      <InputLabel
        label="Placa"
        placeholder="Ingresa la placa"
        value={formData.placa}
        onChange={handleChange("placa")}
      />

      <InputLabel
        label="Marca"
        placeholder="Ingresa la marca"
        value={formData.marca}
        onChange={handleChange("marca")}
      />

      <Selector
        label="Tipo"
        items={[
          { label: "Semi cama", value: "Semi cama" },
          { label: "Cama", value: "Cama" },
        ]}
        value={formData.tipo}
        onChange={handleChange("tipo")}
      />

      <InputLabel
        label="Asientos"
        placeholder="Cantidad"
        value={formData.asientos}
        onChange={handleChange("asientos")}
        keyboardType="numeric"
      />

      <InputLabel
        label="Modelo"
        placeholder="Modelo"
        value={formData.modelo}
        onChange={handleChange("modelo")}
      />

      <InputLabel
        label="Año"
        placeholder="yyyy"
        value={formData.año_modelo}
        onChange={handleChange("año_modelo")}
        keyboardType="numeric"
      />

      <InputLabel
        label="Estado"
        placeholder="Ej: Operativo"
        value={formData.estado}
        onChange={handleChange("estado")}
      />
      <ButtonStyle text={buttonText} onClick={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  formCard: {
    backgroundColor: "#FAFAFA",
    padding: 20,
    borderRadius: 20,
    marginVertical: 20,
  },
});

export default BusForm;