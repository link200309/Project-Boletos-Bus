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
    padding: 10,
    flexGrow: 1,
  },
});
