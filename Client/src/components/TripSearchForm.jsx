import React from "react";
import { View, StyleSheet } from "react-native";
import { CitySelector } from "./CitySelector";
import { ButtonStyle } from "./ButtonStyle";
import { SeatCounter } from "./SeatCounter";

export const TripSearchForm = () => {
  return (
    <View style={Style.container}>
      <CitySelector label="origen" />
      <CitySelector label="destino" />
      <SeatCounter />
      <ButtonStyle text={"Buscar viajes disponibles"} variant={1} height={50}/>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 370,
    marginVertical: 25,
    padding: 20,
  },
});
