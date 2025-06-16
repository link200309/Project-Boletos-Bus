import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { commonHeaderOptions } from "../../../components/Style/HeaderLogoTitle";
import ManageBussesScreen from "../../../screens/Agency/AddBusses/ManageBussesScreen";
import BusFormScreen from "../../../screens/Agency/AddBusses/BusFormScreen";
import ManageDriversScreen from "../../../screens/Agency/AddDrivers/ManageDriversScreen"; 
import DriverFormScreen from "../../../screens/Agency/AddDrivers/DriverFormScreen"; // ✅

const Stack = createStackNavigator();

export default function BusesStack() {
  return (
    <Stack.Navigator screenOptions={commonHeaderOptions}>
      <Stack.Screen
        name="Buses"
        component={ManageBussesScreen}
        options={{ title: "Buses" }}
      />
      <Stack.Screen
        name="BusForm"
        component={BusFormScreen}
        options={{ title: "Formulario de Bus" }}
      />
      <Stack.Screen
        name="Choferes"
        component={ManageDriversScreen}
        options={{ title: "Choferes" }}
      />
      <Stack.Screen
        name="DriverForm"
        component={DriverFormScreen}
        options={{ title: "Formulario de Chofer" }}
      />
    </Stack.Navigator>
  );
}
