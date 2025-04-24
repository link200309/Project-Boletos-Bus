import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyReservationsScreen from "../../screens/MyReservationsScreen";
import { LogoIcon } from "../../components/Icons";

const Stack = createStackNavigator();

export default function MyReservationsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#7B5DDF" },
        headerTitle: "RataBus",
      }}
    >
      <Stack.Screen
        name="MyReservations"
        component={MyReservationsScreen}
        options={{ title: "Mis Reservas" }}
      />
    </Stack.Navigator>
  );
}
