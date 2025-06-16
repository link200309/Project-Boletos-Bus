import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Controller, useFormContext } from "react-hook-form";

export const SeatCounter = ({ name }) => {
  const { control } = useFormContext();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cantidad de asientos</Text>
      <Controller
        control={control}
        name={name}
        defaultValue={1}
        render={({ field: { onChange, value } }) => (
          <View style={styles.seatContainer}>
            <Pressable
              style={styles.pressable}
              onPress={() => value > 1 && onChange(value - 1)}
            >
              <Text style={styles.textPressable}>-</Text>
            </Pressable>
            <Text style={styles.text}>{value}</Text>
            <Pressable
              style={styles.pressable}
              onPress={() => value < 20 && onChange(value + 1)}
            >
              <Text style={styles.textPressable}>+</Text>
            </Pressable>
          </View>
        )}
      />
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
