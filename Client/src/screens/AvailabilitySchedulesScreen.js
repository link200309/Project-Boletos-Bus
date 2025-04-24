//react
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

//components
import { InformativeTitle } from "../components/InformativeTitle";

export default function AvailabilitySchedulesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <InformativeTitle
        title={"Cochabamba - La Paz"}
        description={"12 fechas disponibles"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
});
