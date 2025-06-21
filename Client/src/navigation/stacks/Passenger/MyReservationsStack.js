import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyReservationsScreen from "../../../screens/Passenger/MyReservations/MyReservationsScreen";
import { commonHeaderOptions } from "../../../components/Style/HeaderLogoTitle";
import PayReservation from "../../../screens/Passenger/MyReservations/components/PayReservation";
import ViewDetails from "../../../screens/Passenger/MyReservations/components/ViewDetails";

const Stack = createStackNavigator();

export default function MyReservationsStack() {
  return (
    <Stack.Navigator screenOptions={commonHeaderOptions}>
      <Stack.Screen
        name="MyReservations"
        component={MyReservationsScreen}
        options={{ title: "Mis Reservas" }}
      />
      <Stack.Screen
        name="ViewDetails"
        component={ViewDetails}
        options={{
          title: "Resumen del Reserva",
          headerTitle: "Resumen del Reserva",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="PayReservation"
        component={PayReservation}
        options={{
          title: "Detalles de Reserva",
          headerTitle: "Detalles de Reserva",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}
