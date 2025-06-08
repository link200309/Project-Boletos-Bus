import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ReserveStack from "./stacks/Passenger/ReserveStack";
import MyReservationsStack from "./stacks/Passenger/MyReservationsStack";
import SettingsStack from "./stacks/Passenger/SettingsStack";

const Tab = createBottomTabNavigator();

export default function TabPassengerNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "ReserveTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "MyReservationsTab") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "SettingsTab") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="ReserveTab"
        component={ReserveStack}
        options={{
          tabBarLabel: "Inicio",
        }}
      />

      <Tab.Screen
        name="MyReservationsTab"
        component={MyReservationsStack}
        options={{
          tabBarLabel: "Reservas",
        }}
      />

      <Tab.Screen
        name="SettingsTab"
        component={SettingsStack}
        options={{
          tabBarLabel: "Ajustes",
        }}
      />
    </Tab.Navigator>
  );
}
