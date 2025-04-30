import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ButtonStyle = () => {
  return (
    <View style={Style.container}>
      <Text style={Style.text}>holiii john</Text>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
