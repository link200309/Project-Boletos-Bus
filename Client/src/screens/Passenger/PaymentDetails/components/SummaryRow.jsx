import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SummaryRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },
  label: {
    fontWeight: "600",
    color: "#555",
    fontSize: 14,
  },
  value: {
    fontSize: 14,
    color: "#000",
  },
});
