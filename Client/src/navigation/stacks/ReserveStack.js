import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReserveScreen from "../../screens/Passenger/Reserve/ReserveScreen";
import AvailabilityDatesScreen from "../../screens/Passenger/AvailabilitySchedules/AvailabilityDatesScreen";
import AvailabilitySchedulesScreen from "../../screens/Passenger/AvailabilitySchedules/AvailabilitySchedulesScreen";
<<<<<<< HEAD
import { commonHeaderOptions } from "../../components/Style/HeaderLogoTitle";
=======
import { commonHeaderOptions } from "../../components/HeaderLogoTitle";
>>>>>>> 9958d9e461fc235e9cf746c19b517722464bb592

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
    </Stack.Navigator>
  );
}
