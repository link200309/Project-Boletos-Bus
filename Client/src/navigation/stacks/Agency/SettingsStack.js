import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../../../screens/Agency/SettingsScreen";
import { commonHeaderOptions } from "../../../components/Style/HeaderLogoTitle";

const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={commonHeaderOptions}>
      <Stack.Screen
        name="MySettings"
        component={SettingsScreen}
        options={{ title: "Configuración" }}
      />
    </Stack.Navigator>
  );
}
