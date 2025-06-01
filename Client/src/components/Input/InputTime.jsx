import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const InputTime = ({
  label,
  onClick,
  text,
  showTimePicker,
  handleTimeChange,
  valueTimeModal,
}) => {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.dateButton} onPress={onClick}>
        <Text style={styles.dateButtonText}>{text}</Text>
      </TouchableOpacity>
      {showTimePicker !== "" && (
        <DateTimePicker
          value={valueTimeModal}
          mode="time"
          display="default"
          onChange={handleTimeChange}
        />
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
});
