import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReserveScreen from "../../../screens/Passenger/Reserve/ReserveScreen";
import AvailabilityDatesScreen from "../../../screens/Passenger/AvailabilitySchedules/AvailabilityDatesScreen";
import AvailabilitySchedulesScreen from "../../../screens/Passenger/AvailabilitySchedules/AvailabilitySchedulesScreen";
import AvailabilitySeatScreen from "../../../screens/Passenger/AvailabilitySeat/AvailabilitySeatScreen";
import PassengerDataScreen from "../../../screens/Passenger/ReserveSeat/PassengerDataScreen";
import TripSummaryScreen from "../../../screens/Passenger/ReserveSeat/TripSummaryScreen";
import { commonHeaderOptions } from "../../../components/Style/HeaderLogoTitle";
import PaymentDetailsScreen from "../../../screens/Passenger/PaymentDetails/PaymentDetailsScreen";
const Stack = createStackNavigator();

export default function ReserveStack() {
  return (
    <Stack.Navigator screenOptions={commonHeaderOptions}>
      <Stack.Screen
        name="Home"
        component={ReserveScreen}
        options={{ title: "Inicio" }}
      />
      <Stack.Screen
        name="AvailabilityDates"
        component={AvailabilityDatesScreen}
        options={{
          title: "Disponibilidad",
          headerTitle: "Fechas disponibles",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="AvailabilitySchedules"
        component={AvailabilitySchedulesScreen}
        options={{
          title: "Disponibilidad",
          headerTitle: "Horarios disponibles",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="AvailabilitySeat"
        component={AvailabilitySeatScreen}
        options={{
          title: "Seleccion de asiento(s)",
          headerTitle: "Seleccion de asiento(s)",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="PassengerData"
        component={PassengerDataScreen}
        options={{
          title: "Datos de pasajero",
          headerTitle: "Datos de pasajero",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="TripSummary"
        component={TripSummaryScreen}
        options={{
          title: "Resumen del viaje",
          headerTitle: "Resumen del viaje",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
      name="PaymentDetails"
      component={PaymentDetailsScreen}
      options={{
        title: "Detalles de pago",
        headerTitle: "Detalles de pago",
        headerTitleStyle: {
          fontSize: 20,
        },
      }}
      />
    </Stack.Navigator>
  );
}
