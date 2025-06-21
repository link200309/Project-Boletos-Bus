import React from "react";
import { ScrollView } from "react-native";
import { GenericContainer } from "../../../components/GenericContainer";
import DriverFormWrapper from "./components/DriverFormWrapper";
import { InformativeTitle } from "../../../components/InformativeTitle";

export default function DriverFormScreen({ route, navigation }) {
  const { mode = "register", initialData = {} } = route.params || {};

  console.log(
    "[DriverFormScreen] Modo:",
    mode,
    "Datos iniciales:",
    initialData
  );

  const handleSave = () => {
    console.log("[DriverFormScreen] Guardado completado, volviendo...");
    navigation.goBack();
  };

  return (
    <GenericContainer>
      <InformativeTitle
        title="Registro de nuevo chofer"
        description="Complete la información del chofer"
      />
      <ScrollView style={{ width: "100%" }}>
        <DriverFormWrapper
          mode={mode}
          initialData={initialData}
          onSave={handleSave}
        />
      </ScrollView>
    </GenericContainer>
  );
}
