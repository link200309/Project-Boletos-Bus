import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export const Selector = ({ label, items, placeholder }) => {
  const placeholderConst = {
    label: placeholder || "Seleccione una opción",
    value: null,
    color: "#9EA0A4",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{`Ciudad de ${label}`}</Text>
      <View style={styles.dropdownContainer}>
        <RNPickerSelect
          placeholder={placeholderConst}
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
    width: "100%",
    marginBottom: 15,
  },
  label: {
    color: "#4318D1",
    fontWeight: "bold",
    marginBottom: 3,
    fontSize: 14,
  },
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#E6E8FF",
    borderRadius: 15,
    backgroundColor: "#F3F4F9",
  },
  icon: {
    marginVertical: 10,
    marginLeft: 15,
    zIndex: 10,
  },
  dropdown: {
    height: 45,
    color: "#000",
    fontSize: 14,
    width: 310,
  },
});
