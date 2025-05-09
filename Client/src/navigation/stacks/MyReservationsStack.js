import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyReservationsScreen from "../../screens/Passenger/MyReservations/MyReservationsScreen";
import { commonHeaderOptions } from "../../components/Style/HeaderLogoTitle";

const Stack = createStackNavigator();

export default function MyReservationsStack() {
  return (
    <Stack.Navigator screenOptions={commonHeaderOptions}>
      <Stack.Screen
        name="MyReservations"
        component={MyReservationsScreen}
        options={{ title: "Mis Reservas" }}
      />
    </Stack.Navigator>
  );
}
