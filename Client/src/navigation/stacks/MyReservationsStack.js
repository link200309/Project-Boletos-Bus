import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyReservationsScreen from "../../screens/Passenger/MyReservations/MyReservationsScreen";
<<<<<<< HEAD
import { commonHeaderOptions } from "../../components/Style/HeaderLogoTitle";
=======
import { commonHeaderOptions } from "../../components/HeaderLogoTitle";
>>>>>>> 9958d9e461fc235e9cf746c19b517722464bb592

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
