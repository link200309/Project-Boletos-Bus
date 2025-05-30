import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export const GenericContainer = ({ children, style, scroll = false }) => {
  if (scroll) {
    return (
      <ScrollView style={[styles.container, style]}>{children}</ScrollView>
    );
  }

  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    padding: 20,
    paddingTop: 30,
  },
});
