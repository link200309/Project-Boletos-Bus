// screens/Agency/Busses/ManageBussesScreen.js
import React from "react";
import { ScrollView } from "react-native";
import { GenericContainer } from "../../../components/GenericContainer";
import { InformativeTitle } from "../../../components/InformativeTitle";
import BusList from "./components/BusList";

export default function ManageBussesScreen({ navigation }) {
  const handleAddClick = () => {
    navigation.navigate("BusForm", { mode: "register" });
  };

  const handleEditClick = (bus) => {
    navigation.navigate("BusForm", { mode: "edit", initialData: bus });
  };

  return (
    <GenericContainer>
      <InformativeTitle
        title="Gestionar Buses"
        description="Buses totales: 2"
        btnText="+ Agregar"
        onClick={handleAddClick}
      />
      <ScrollView style={{ width: "100%" }}>
        <BusList onEdit={handleEditClick} />
      </ScrollView>
    </GenericContainer>
  );
}
