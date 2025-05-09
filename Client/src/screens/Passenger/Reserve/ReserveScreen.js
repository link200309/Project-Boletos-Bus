import React from "react";
import { View, StyleSheet } from "react-native";
//components
import { GenericContainer } from "../../../components/GenericContainer";
import { InformativeTitle } from "../../../components/InformativeTitle";
import { TripSearchForm } from "./components/TripSearchForm";

export default function ReserveScreen({ navigation }) {
  return (
    <GenericContainer>
      <InformativeTitle
        title={"Seleccione un origen y destino"}
        description={"Encuentra los mejores viajes"}
      />
<<<<<<< HEAD
=======
      <BlobBg />
    
>>>>>>> 9958d9e461fc235e9cf746c19b517722464bb592
      <View style={styles.form}>
        <TripSearchForm navigation={navigation} />
      </View>
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 15,
  },
});
