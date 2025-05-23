//React
import React from "react";
import { StyleSheet } from "react-native";

//Components
import { GenericContainer } from "../../../components/GenericContainer";
import { InformativeTitle } from "../../../components/InformativeTitle";

export default function ManageTravelsScreen() {
  const addTravel = () => {
    console.log("Viaje agregado");
  };

  return (
    <GenericContainer style={styles.container}>
      <InformativeTitle
        title={"Gestionar viajes"}
        description={"Viajes totales: 4"}
        btnText={"+ Viaje"}
        onClick={addTravel}
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
