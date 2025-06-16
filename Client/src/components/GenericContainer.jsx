import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { BlobBg } from "./Background/BlobBg";

export const GenericContainer = ({ children, style, scroll = false }) => {
  if (scroll) {
    return (
      <ScrollView style={[styles.container, style]}>{children}</ScrollView>
    );
  }

  return (
    <View style={[styles.container, style]}>
      {children}
      <BlobBg />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    // paddingBottom: 45,
  },
});
