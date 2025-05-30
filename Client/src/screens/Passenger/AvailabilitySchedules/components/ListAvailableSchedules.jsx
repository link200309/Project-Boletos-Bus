import React from "react";
import { FlatList } from "react-native";
//Components
import { AvailableSchedules } from "./AvailableSchedules";

export const ListAvailableSchedules = ({ travels, navigation }) => {
  const handleBusPress = (selectedTravel) => {
    navigation.navigate("AvailabilitySeat", {
      travels: [selectedTravel],
      busId: selectedTravel.bus.id_bus,
      travelId: selectedTravel.id_viaje,
    });
  };

  return (
    <FlatList
      data={travels}
      keyExtractor={(travel) => travel.id_viaje}
      renderItem={(item, index) => {
        return (
          <AvailableSchedules
            travel={item}
            key={index}
            navigation={navigation}
            onClick={() => handleBusPress(item)}
          />
        );
      }}
    />
  );
};
