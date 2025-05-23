import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ManageTravelsStack from "./stacks/Agency/ManageTravelsStack";
import BusesStack from "./stacks/Agency/BusesStack";
import StatisticsStack from "./stacks/Agency/StatisticsStack";
import SettingsStack from "./stacks/Agency/SettingsStack";

const Tab = createBottomTabNavigator();

export default function TabAgencyNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "TravelTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "BusTab") {
            iconName = focused ? "bus" : "bus-outline";
          } else if (route.name === "StatisticsTab") {
            iconName = focused ? "bar-chart" : "bar-chart-outline";
          } else if (route.name === "SettingsTab") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={28} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="TravelTab"
        component={ManageTravelsStack}
        options={{
          tabBarLabel: "Gestionar Viajes",
        }}
      />

      <Tab.Screen
        name="BusTab"
        component={BusesStack}
        options={{
          tabBarLabel: "Buses/Choferes",
        }}
      />

      <Tab.Screen
        name="StatisticsTab"
        component={StatisticsStack}
        options={{
          tabBarLabel: "Estadisticas",
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
