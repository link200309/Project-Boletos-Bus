import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export const GenericContainer = ({ children, style }) => {
  return (
    <ScrollView contentContainerStyle={[styles.container, style]}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F3FF",
    flexGrow: 1,
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
});
