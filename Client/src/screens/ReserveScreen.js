import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
//components
import { GenericContainer } from "../components/GenericContainer";
import { InformativeTitle } from "../components/InformativeTitle";
import { BlobBg } from "../components/BlobBg";
import { TripSearchForm } from "../components/TripSearchForm";

export default function ReserveScreen({ navigation }) {
  return (
    <GenericContainer style={styles.container}>
      <InformativeTitle
        title={"Seleccione un origen y destino"}
        description={"Encuentra los mejores viajes"}
      />
      <BlobBg />
      <TripSearchForm />
      <Text style={styles.title}>mmmm</Text>
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
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
