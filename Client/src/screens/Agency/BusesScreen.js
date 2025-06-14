import React from "react";
import { StyleSheet, Text } from "react-native";

//Components
import { GenericContainer } from "../../components/GenericContainer";

export default function BusesScreen() {
  return (
    <GenericContainer style={styles.container}>
      <Text>Soy la pantalla de Buses y choferes :D</Text>
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
});
