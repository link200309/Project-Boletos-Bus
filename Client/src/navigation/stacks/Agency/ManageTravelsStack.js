import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ManageTravelsScreen from "../../../screens/Agency/ManageTravels/ManageTravelsScreen";
import { commonHeaderOptions } from "../../../components/Style/HeaderLogoTitle";

const Stack = createStackNavigator();

export default function ManageTravelsStack() {
  return (
    <Stack.Navigator screenOptions={commonHeaderOptions}>
      <Stack.Screen
        name="ManageTravels"
        component={ManageTravelsScreen}
        options={{ title: "Gestion de viajes" }}
      />
    </Stack.Navigator>
  );
}
