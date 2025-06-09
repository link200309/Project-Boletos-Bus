import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const InputDate = ({
  label,
  onClick,
  error,
  text,
  showDatePicker,
  handleDateChange,
  valueDateModal,
  name,
}) => {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.dateButton} onPress={onClick}>
        <Text style={styles.dateButtonText}>{text}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={valueDateModal}
          mode="date"
          display="default"
          placeholderText="Seleccione una fecha"
          onChange={handleDateChange}
        />
      )}
      {error && error[name] && (
        <Text style={styles.errorText}>{error[name].message}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: "#4318D1",
    fontWeight: "bold",
    marginBottom: 3,
    fontSize: 14,
  },
  dateButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  dateButtonText: {
    fontSize: 16,
    color: "#333",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 10,
  },
});
