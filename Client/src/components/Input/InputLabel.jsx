import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export const InputLabel = ({ label, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    color: "#4318D1",
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 14,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#E6E8FF",
    borderRadius: 15,
    backgroundColor: "#F3F4F9",
    height: 50,
    padding: 10,
    fontSize: 16,
  },
});
