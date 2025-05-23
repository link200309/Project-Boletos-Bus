import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export const InputLabel = ({
  label,
  placeholder,
  value,
<<<<<<< HEAD
  onChange,
=======
  onChange, // ✅ cambio aquí
>>>>>>> 4effc34c266764a35c0ea60373e82418fc3a13bb
  error,
  name,
  keyboardType = "default",
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
<<<<<<< HEAD
        onChangeText={onChange}
=======
        onChangeText={onChange} // ✅ cambio aquí
>>>>>>> 4effc34c266764a35c0ea60373e82418fc3a13bb
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
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
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#E6E8FF",
    borderRadius: 15,
    backgroundColor: "#F3F4F9",
    height: 45,
    padding: 10,
    fontSize: 14,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 10,
  },
});
