import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { GenericContainer } from "../../../components/GenericContainer";
import { InformativeTitle } from "../../../components/InformativeTitle";
import Ionicons from "@expo/vector-icons/Ionicons";
import DriverList from "./components/DriverList";
import { getDrivers } from "../../../api/driver.api";

export default function ManageDriversScreen({ navigation }) {
  const [drivers, setDrivers] = useState([]);
  const isFocused = useIsFocused();

  const loadDrivers = async () => {
    try {
      console.log("[ManageDrivers] Loading drivers...");
      const res = await getDrivers();
      console.log("[ManageDrivers] Drivers loaded:", res.data.length);
      setDrivers(res.data);
    } catch (error) {
      console.error("[ManageDrivers] Error loading drivers:", error);
    }
  };

  useEffect(() => {
    if (isFocused) loadDrivers();
  }, [isFocused]);

  const handleAddClick = () => {
    navigation.navigate("DriverForm", { mode: "register" });
  };

  const handleEditClick = (driver) => {
    navigation.navigate("DriverForm", {
      mode: "edit",
      initialData: driver,
    });
  };

  const handleBackToBuses = () => {
    navigation.navigate("Buses");
  };

  return (
    <GenericContainer>
      <InformativeTitle
        title="Gestionar Choferes"
        description={`Total drivers: ${drivers.length}`}
        btnText="+ Agregar"
        onClick={handleAddClick}
      />
      <ScrollView style={{ width: "100%" }}>
        <DriverList
          drivers={drivers}
          onEdit={handleEditClick}
          onDeleteFinished={loadDrivers}
        />
      </ScrollView>
      <TouchableOpacity style={styles.fab} onPress={handleBackToBuses}>
        <Ionicons name="chevron-back" size={28} color="#fff" />
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