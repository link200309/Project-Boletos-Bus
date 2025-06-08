import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { commonHeaderOptions } from "../../../components/Style/HeaderLogoTitle";
import StatisticsScreen from "../../../screens/Agency/StatisticsScreen";

const Stack = createStackNavigator();

export default function StatisticsStack() {
  return (
    <Stack.Navigator screenOptions={commonHeaderOptions}>
      <Stack.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{ title: "Configuración" }}
      />
    </Stack.Navigator>
  );
}
