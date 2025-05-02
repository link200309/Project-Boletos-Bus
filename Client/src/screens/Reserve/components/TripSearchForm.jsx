import React from "react";
import { View, StyleSheet } from "react-native";
import { CitySelector } from "./CitySelector";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";
import { SeatCounter } from "./SeatCounter";

export const TripSearchForm = ({ navigation }) => {
  return (
    <View style={Style.container}>
      <CitySelector label="origen" />
      <CitySelector label="destino" />
      <SeatCounter />
      <ButtonStyle
        text={"Buscar viajes disponibles"}
        variant={1}
        height={50}
        onClick={() => navigation.navigate("AvailabilityDates")}
      />
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 370,
    marginVertical: 20,
    padding: 20,
  },
});
