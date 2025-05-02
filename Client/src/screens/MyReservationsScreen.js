//React
import React from "react";
import { View, Text, StyleSheet } from "react-native";

//Components
import { GenericContainer } from "../components/GenericContainer";

export default function MyReservationsScreen() {
  return (
    <GenericContainer style={styles.container}>
      <Text style={styles.title}>Mis Reservas</Text>
      <Text style={styles.description}>Historial de reservas</Text>
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});
