import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

export const GenericContainer = ({ children, style, scroll = false }) => {
  const Container = scroll ? ScrollView : View;

  return (
    <Container
      contentContainerStyle={scroll ? [styles.container, style] : undefined}
      style={!scroll ? [styles.container, style] : undefined}
    >
      {children}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F3FF",
    flex: 1,
    position: "relative", // clave para absolute
    overflow: "hidden",   // asegura que el blob no sobresalga feo
  },
});


