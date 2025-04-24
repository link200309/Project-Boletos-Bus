import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MyReservationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Reservas</Text>
      <Text style={styles.description}>Historial de reservas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
