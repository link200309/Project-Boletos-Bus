import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ReserveScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Button
        title="Ver disponibilidad"
        onPress={() => navigation.navigate("AvailabilitySchedules")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
