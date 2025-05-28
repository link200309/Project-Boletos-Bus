import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { commonHeaderOptions } from "../../../components/Style/HeaderLogoTitle";
import ManageBussesScreen from "../../../screens/Agency/AddBusses/ManageBussesScreen";
import BusFormScreen from "../../../screens/Agency/AddBusses/BusFormScreen"; // ✅

const Stack = createStackNavigator();

export default function BusesStack() {
  return (
    <Stack.Navigator screenOptions={commonHeaderOptions}>
      <Stack.Screen
        name="Buses"
        component={ManageBussesScreen}
        options={{ title: "Buses y Choferes" }}
      />
      <Stack.Screen
        name="BusForm"
        component={BusFormScreen}
        options={{ title: "Formulario de Bus" }}
      />
    </Stack.Navigator>
  );
}
