import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const SeatCounter = () => {
  return (
    <View style={Style.container}>
      <Text style={Style.text}>holiii john</Text>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9FF",
    borderWidth: 1,
    borderColor: "#E6E8FF",
    borderRadius: 15,
    width: "100%",
    height: 100,
    padding: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
