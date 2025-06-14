import React from "react";
import { View, StyleSheet } from "react-native";
import { InputLabel } from "../../../../components/Input/InputLabel";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";

const DriverForm = ({ formData, onChange, onSubmit, buttonText }) => {
  const handleChange = (field) => (value) => onChange(field, value);

  return (
    <View style={styles.formCard}>
      <InputLabel
        label="Nombre *"
        placeholder="Ingrese el Nombre del chofer"
        value={formData.nombre}
        onChange={handleChange("nombre")}
        required
      />

      <InputLabel
        label="Apellido *"
        placeholder="Ingrese el Apellido del Chofer"
        value={formData.apellido}
        onChange={handleChange("apellido")}
        required
      />

      <InputLabel
        label="Carnet *"
        placeholder="Numero de carnet"
        value={formData.carnet_identidad}
        onChange={handleChange("carnet_identidad")}
        keyboardType="numeric"
        required
      />

      <InputLabel
        label="Celular *"
        placeholder="Numero de Celular"
        value={formData.numero_celular}
        onChange={handleChange("numero_celular")}
        keyboardType="phone-pad"
        required
      />

      <InputLabel
        label="Categoria Licencia *"
        placeholder="Seleccione categoria"
        value={formData.categoria_licencia}
        onChange={handleChange("categoria_licencia")}
        required
      />

      <InputLabel
        label="Direccion *"
        placeholder="Direccion"
        value={formData.direccion_contacto}
        onChange={handleChange("direccion_contacto")}
      />

      <InputLabel
        label="Estado *"
        placeholder="Seleccione estado"
        value={formData.estado}
        onChange={handleChange("estado")}
      />

      <ButtonStyle
        text={buttonText}
        onClick={onSubmit}
        style={{ marginTop: 20 }}
      />
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

export default DriverForm;
