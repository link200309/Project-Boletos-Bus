// screens/Agency/AddBusses/ManageBussesScreen.js
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { GenericContainer } from "../../../components/GenericContainer";
import { InformativeTitle } from "../../../components/InformativeTitle";
import BusList from "./components/BusList";
import { getBuses } from "../../../api/bus.api";

export default function ManageBussesScreen({ navigation }) {
  const [buses, setBuses] = useState([]);
  const isFocused = useIsFocused();

  const loadBuses = async () => {
    try {
      const res = await getBuses();
      setBuses(res.data);
    } catch (error) {
      console.error("Error al cargar buses:", error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      loadBuses();
    }
  }, [isFocused]);

  const handleAddClick = () => {
    navigation.navigate("BusForm", { mode: "register" });
  };

  const handleEditClick = (bus) => {
    navigation.navigate("BusForm", {
      mode: "edit",
      initialData: bus,
    });
  };

  return (
    <GenericContainer>
      <InformativeTitle
        title="Gestionar Buses"
        description={`Buses totales: ${buses.length}`}
        btnText="+ Agregar"
        onClick={handleAddClick}
      />
      <ScrollView style={{ width: "100%" }}>
        <BusList buses={buses} onEdit={handleEditClick} onDeleteFinished={loadBuses} />
      </ScrollView>
    </GenericContainer>
  );
}
