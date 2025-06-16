import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const SectionHeader = ({ title }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 15,
  },
});
