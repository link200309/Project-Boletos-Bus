import React from "react";
import { View, Text, StyleSheet } from "react-native";

//Components
import { GenericContainer } from "../../components/GenericContainer";

export default function SettingsScreen() {
  return (
    <GenericContainer style={styles.container}>
      <Text style={styles.title}>Configuración</Text>
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
