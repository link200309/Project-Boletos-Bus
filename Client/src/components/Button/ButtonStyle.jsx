import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export const ButtonStyle = ({
  text,
  variant = 1,
  onClick,
  width = "100%",
  height = 50,
  sizeText = 18,
  style,
  icon,
  styleText,
}) => {
  const buttonStyle = [
    styles.button,
    variant === 1 ? styles.buttonVariant1 : styles.buttonVariant2,
    { width, height },
    style,
  ];

  const textStyle = [
    styles.text,
    variant === 1 ? styles.textVariant1 : styles.textVariant2,
    { fontSize: sizeText },
    styleText,
  ];

  return (
    <Pressable style={buttonStyle} onPress={onClick}>
      <Text style={textStyle}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginTop: 20,
  },
  buttonVariant1: {
    backgroundColor: "#4318D1",
  },
  buttonVariant2: {
    backgroundColor: "#F8F9FF",
    borderWidth: 1,
    borderColor: "#4318D1",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textVariant1: {
    color: "#fff",
  },
  textVariant2: {
    color: "#4318D1",
  },
});
