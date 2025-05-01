import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select"; // Asegúrate de importar RNPickerSelect
import { Location } from "../../../components/Icons"; // Asegúrate de que la ruta sea correcta

export const CitySelector = ({ label }) => {
  const placeholder = {
    label: `Selecciona ${label}`,
    value: null,
    color: "#9EA0A4",
  };

  const items = [
    { label: "Opción 1", value: "opcion1" },
    { label: "Opción 2", value: "opcion2" },
    { label: "Opción 3", value: "opcion3" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{`Ciudad de ${label}`}</Text>
      <View style={styles.dropdownContainer}>
        <Location style={styles.icon} />
        <RNPickerSelect
          placeholder={placeholder}
          items={items}
          onValueChange={(value) => console.log(value)}
          style={{
            inputIOS: styles.dropdown,
            inputAndroid: styles.dropdown,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: "#4318D1",
    fontWeight: "bold",
    marginBottom: 8,
  },
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#E6E8FF",
    borderRadius: 20,
    backgroundColor: "#F8F9FF",
  },
  icon: {
    marginVertical: 10,
    marginLeft: 15,
    zIndex: 10,
  },
  dropdown: {
    color: "#000",
    fontSize: 16,
    width: 280,
  },
});
