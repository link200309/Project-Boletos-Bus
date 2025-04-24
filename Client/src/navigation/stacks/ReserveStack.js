import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReserveScreen from "../../screens/ReserveScreen";
import AvailabilitySchedulesScreen from "../../screens/AvailabilitySchedulesScreen";
import { LogoIcon } from "../../components/Icons";

const Stack = createStackNavigator();

export default function ReserveStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#7B5DDF" },
        headerTitle: "RataBus",
      }}
    >
      <Stack.Screen
        name="Home"
        component={ReserveScreen}
        options={{ title: "Inicio" }}
      />
      <Stack.Screen
        name="AvailabilitySchedules"
        component={AvailabilitySchedulesScreen}
        options={{ title: "Disponibilidad" }}
      />
    </Stack.Navigator>
  );
}
