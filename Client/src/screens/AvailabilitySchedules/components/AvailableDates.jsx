import { View, Text, StyleSheet } from "react-native";

//icons
import { CalendarIcon } from "../../../components/Icons";

export const AvailableDates = ({ day, date }) => {
  return (
    <View style={Style.container}>
      <View>
        <CalendarIcon />
      </View>
      <View>
        <Text style={Style.day}>{day}</Text>
        <Text style={Style.date}>{date}</Text>
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: 370,
    padding: 22,
    marginTop: 20,
    backgroundColor: "white",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
});
