// screens/Agency/Busses/BusFormScreen.js
import React from "react";
import { GenericContainer } from "../../../components/GenericContainer";
import BusFormWrapper from "./components/BusFormWrapper";
import { ScrollView } from "react-native-gesture-handler";

export default function BusFormScreen({ route, navigation }) {
  const { mode = "register", initialData = {} } = route.params || {};

  const handleSave = (busData) => {
    console.log("Guardado:", busData);
    navigation.goBack(); // volver a la lista
  };

  return (
    <GenericContainer>
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
