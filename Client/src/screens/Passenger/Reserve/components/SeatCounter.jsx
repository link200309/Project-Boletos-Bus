import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export const SeatCounter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Número de asientos</Text>
      <View style={styles.seatContainer}>
        <Pressable style={styles.pressable}>
          <Text style={styles.textPressable}>-</Text>
        </Pressable>
        <Text style={styles.text}>1</Text>
        <Pressable style={styles.pressable}>
          <Text style={styles.textPressable}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: "#4318D1",
    fontWeight: "bold",
    marginBottom: 8,
  },
  seatContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#E6E8FF",
    borderRadius: 20,
    backgroundColor: "#F3F4F9",
    height: 60,
  },
  pressable: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 25,
    borderWidth: 1,
    borderColor: "#E6E8FF",
    elevation: 1.5,
  },
  textPressable: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4318D1",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
