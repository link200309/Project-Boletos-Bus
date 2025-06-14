import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export const ButtonText = ({ text, onClick }) => {
  return (
    <Pressable onPress={onClick}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4318D1",
    textAlign: "center",
  },
});
