import React from "react";
import { FlatList } from "react-native";
//Components
import { AvailableSchedules } from "./AvailableSchedules";

export const ListAvailableSchedules = ({ travels, navigation }) => {
  return (
    <FlatList
      data={travels}
      keyExtractor={(travel) => travel.id_viaje}
      renderItem={({ item }) => {
        return (
          <AvailableSchedules
            travel={item}
            key={item.id_viaje}
            navigation={navigation}
          />
        );
      }}
    />
  );
};
