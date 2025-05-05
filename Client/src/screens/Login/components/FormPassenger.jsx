import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export const FormPassenger = () => {
  return (
    <View style={styles.container}>
      <Text>Register as a Passenger</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAFAFA",
        width: "100%",
        height: "100%",
        borderRadius: 20,
        padding: 30,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 10,
      },
});
