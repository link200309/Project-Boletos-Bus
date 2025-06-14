//react
import { StyleSheet, FlatList } from "react-native";
//components
import { Travels } from "./Travels";

export const ListTravels = ({ travels, navigation, fetchTravels }) => {
  return (
    <FlatList
      data={travels}
      keyExtractor={(travel) => travel.id_viaje}
      style={styles.containerTravesl}
      renderItem={(travel) => {
        return <Travels travelInfo={travel} navigation={navigation} fetchTravels={fetchTravels}/>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  containerTravesl: {
    marginTop: 15,
  },
});
