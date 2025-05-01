import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
//components
import { GenericContainer } from "../../components/GenericContainer";
import { InformativeTitle } from "../../components/InformativeTitle";
import { BlobBg } from "../../components/BlobBg";
import { TripSearchForm } from "./components/TripSearchForm";

export default function ReserveScreen({ navigation }) {
  return (
    <GenericContainer style={styles.container}>
      <InformativeTitle
        title={"Seleccione un origen y destino"}
        description={"Encuentra los mejores viajes"}
      />
      <BlobBg />
      <View style={styles.form}>
        <TripSearchForm navigation={navigation} />
      </View>
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  form: {
    marginTop: 15,
  },
});
