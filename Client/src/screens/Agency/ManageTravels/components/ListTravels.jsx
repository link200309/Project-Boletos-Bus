//react
import { StyleSheet, FlatList } from "react-native";
//components
import { Travels } from "./Travels";

export const ListTravels = ({ travels, navigation }) => {
  return (
    <FlatList
      data={travels}
      keyExtractor={(travel) => travel.id}
      renderItem={(travel) => {
        return <Travels travelInfo={travel} navigation={navigation} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  containerDates: {
    marginTop: 15,
  },
});
