//Reeact
import { View, StyleSheet } from "react-native";

//Components
import { AvailableSchedules } from "./AvailableSchedules";

export const ListAvailableSchedules = ({ travels, navigation }) => {
  return (
    <View style={styles.containerSchedules}>
      {travels.map((travel, index) => {
        return <AvailableSchedules travel={travel} key={index} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  containerSchedules: {
    marginTop: 25,
  },
});
