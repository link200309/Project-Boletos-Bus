import React from "react";
import { StyleSheet, Text } from "react-native";

//Components
import { GenericContainer } from "../../components/GenericContainer";

export default function SettingsScreen() {
  return (
    <GenericContainer style={styles.container}>
      <Text>Soy la pantalla de Settings :D</Text>
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
