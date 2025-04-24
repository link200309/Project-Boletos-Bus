import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function AvailabilitySchedulesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Horarios Disponibles</Text>
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
});
