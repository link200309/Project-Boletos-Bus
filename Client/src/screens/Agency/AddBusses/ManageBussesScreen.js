// screens/Agency/AddBusses/ManageBussesScreen.js
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { GenericContainer } from "../../../components/GenericContainer";
import { InformativeTitle } from "../../../components/InformativeTitle";
import BusList from "./components/BusList";
import { getBuses } from "../../../api/bus.api";
import Ionicons from "@expo/vector-icons/Ionicons";

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

  const handleGoToDrivers = () => {
    navigation.navigate("Choferes"); 
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
        <BusList
          buses={buses}
          onEdit={handleEditClick}
          onDeleteFinished={loadBuses}
        />
      </ScrollView>
      <TouchableOpacity style={styles.fab} onPress={handleGoToDrivers}>
        <Ionicons name="person" size={28} color="#fff" />
      </TouchableOpacity>
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#4318D1",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
});
