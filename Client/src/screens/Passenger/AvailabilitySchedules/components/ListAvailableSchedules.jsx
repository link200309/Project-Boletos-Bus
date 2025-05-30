import React from "react";
import { FlatList } from "react-native";
//Components
import { AvailableSchedules } from "./AvailableSchedules";

export const ListAvailableSchedules = ({ travels, navigation }) => {
  const handleBusPress = (selectedTravel) => {
    navigation.navigate("AvailabilitySeat", {
      travels: [selectedTravel], // El viaje seleccionado
      busId: selectedTravel.bus.id_bus, // ⭐ Pasar el ID del bus
      travelId: selectedTravel.id_viaje, // ⭐ También el ID del viaje por si acaso
    });
  };

  return (
    <FlatList
      data={travels}
      keyExtractor={(travel) => travel.id_viaje}
      renderItem={(travel, index) => {
        return (
          <AvailableSchedules
            travel={travel}
            key={index}
            navigation={navigation}
            onClick={() => handleBusPress(travel.item)}
          />
        );
      }}
    />
  );
};
