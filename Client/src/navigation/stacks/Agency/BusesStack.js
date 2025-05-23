import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { commonHeaderOptions } from "../../../components/Style/HeaderLogoTitle";
import BusesScreen from "../../../screens/Agency/BusesScreen";

const Stack = createStackNavigator();

export default function BusesStack() {
  return (
    <Stack.Navigator screenOptions={commonHeaderOptions}>
      <Stack.Screen
        name="Buses"
        component={BusesScreen}
        options={{ title: "Buses y Choferes" }}
      />
    </Stack.Navigator>
  );
}
