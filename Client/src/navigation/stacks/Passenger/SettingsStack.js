import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../../../screens/Passenger/SettingsScreen/SettingsScreen";
import { commonHeaderOptions } from "../../../components/Style/HeaderLogoTitle";
import ReservationHistoryScreen from "../../../screens/Passenger/SettingsScreen/ReservationHistory";
import ViewDetails from "../../../screens/Passenger/MyReservations/components/ViewDetails";

const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={commonHeaderOptions}>
      <Stack.Screen
        name="MySettings"
        component={SettingsScreen}
        options={{ title: "Configuración" }}
      />
      <Stack.Screen
        name="ReservationHistory"
        component={ReservationHistoryScreen}
        options={{
          title: "Historial de Reservas",
          headerTitle: "Historial de Reservas",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="ViewDetails"
        component={ViewDetails}
        options={{
          title: "Resumen del Reserva Cancelada",
          headerTitle: "Resumen del Reserva Cancelada",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}
