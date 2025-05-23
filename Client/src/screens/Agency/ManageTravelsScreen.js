import React from "react";
import { StyleSheet } from "react-native";
import { ButtonStyle } from "../../components/Button/ButtonStyle";

//Components
import { GenericContainer } from "../../components/GenericContainer";

export default function ManageTravelsScreen() {
  return (
    <GenericContainer style={styles.container}>
      <ButtonStyle
        width="180"
        height={"50"}
        text={"Soy la pantalla de gestion de viajes :D"}
      />
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
