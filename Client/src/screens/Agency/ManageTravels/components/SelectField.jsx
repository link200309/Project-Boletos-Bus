import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const SelectField = ({ label, onPress, value, name, error }) => {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label} *</Text>
      <TouchableOpacity style={styles.selectButton} onPress={onPress}>
        <Text style={styles.selectButtonText}>
          {value ? value : `Seleccionar ${label}`}
        </Text>
      </TouchableOpacity>
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
  selectButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  selectButtonText: {
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
