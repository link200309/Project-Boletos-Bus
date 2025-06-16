//React
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

// Components
import { TimeIcon } from "../Icons";

export const InputTime = ({
  label,
  onClick,
  text,
  showTimePicker,
  handleTimeChange,
  valueTimeModal,
  name,
  error,
}) => {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.dateButton} onPress={onClick}>
        <Text style={styles.dateButtonText}>{text}</Text>
        <TimeIcon />
      </TouchableOpacity>
      {showTimePicker !== "" && (
        <DateTimePicker
          value={valueTimeModal}
          mode="time"
          display="default"
          onChange={handleTimeChange}
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
    flexDirection: "row",
    justifyContent: "space-between",
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
