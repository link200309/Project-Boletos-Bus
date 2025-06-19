import React from "react";
import { GenericContainer } from "../../../components/GenericContainer";
import BusFormWrapper from "./components/BusFormWrapper";
import { ScrollView } from "react-native-gesture-handler";
import { InformativeTitle } from "../../../components/InformativeTitle";

export default function BusFormScreen({ route, navigation }) {
  const { mode = "register", initialData = {} } = route.params || {};

  const handleSave = () => {
    navigation.goBack(); // volver
  };

  return (
    <GenericContainer>
      <InformativeTitle
        title="Registro de nuevo bus"
        description="Complete la información del bus y configure la disponibilidad de sus asientos"
      />
      <ScrollView style={{ width: "100%" }}>
        <BusFormWrapper
          mode={mode}
          initialData={initialData}
          onSave={handleSave}
        />
      </ScrollView>
    </GenericContainer>
  );
}
