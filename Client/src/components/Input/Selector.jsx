import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export const Selector = ({
  label,
  items,
  placeholder,
  value,
  onChange,
  error,
  name,
}) => {
  const placeholderConst = {
    label: placeholder || "Seleccione una opción",
    value: null,
    color: "#9EA0A4",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.dropdownContainer}>
        <RNPickerSelect
          placeholder={placeholderConst}
          items={items}
          onValueChange={onChange}
          style={{
            inputIOS: styles.dropdown,
            inputAndroid: styles.dropdown,
          }}
          value={value}
        />
      </View>
      {error && error[name] && (
        <Text style={styles.errorText}>{error[name].message}</Text>
      )}
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
    width: "100%",
    borderWidth: 1,
    borderColor: "#E6E8FF",
    borderRadius: 15,
    backgroundColor: "#F3F4F9",
    height: 45,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  dropdown: {
    fontSize: 14,
    color: "#000",
    paddingVertical: 10,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 10,
  },
});
