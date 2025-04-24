import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../../screens/SettingsScreen";
import { LogoIcon } from "../../components/Icons";

const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#7B5DDF" },
        headerTitle: "RataBus",
      }}
    >
      <Stack.Screen
        name="MySettings"
        component={SettingsScreen}
        options={{ title: "Configuración" }}
      />
    </Stack.Navigator>
  );
}
