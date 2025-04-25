import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

//components
import { GenericContainer } from "../components/GenericContainer";

export default function ReserveScreen({ navigation }) {
  return (
    <GenericContainer style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Button
        title="Ver disponibilidad"
        onPress={() => navigation.navigate("AvailabilitySchedules")}
      />
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
