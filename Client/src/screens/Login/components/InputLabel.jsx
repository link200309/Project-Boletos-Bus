import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const InputLabel = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <InputLabel></InputLabel>
    </View>
  );
};
