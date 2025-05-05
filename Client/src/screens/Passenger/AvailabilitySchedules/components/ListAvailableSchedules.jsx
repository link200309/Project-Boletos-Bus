//Reeact
import { View, StyleSheet, FlatList } from "react-native";

//Components
import { AvailableSchedules } from "./AvailableSchedules";

export const ListAvailableSchedules = ({ travels, navigation }) => {
  return (
    <FlatList
      data={travels}
      keyExtractor={(travel) => travel.id_viaje}
      renderItem={(travel, index) => {
        return <AvailableSchedules travel={travel} key={index} />;
      }}
    />
  );
};

