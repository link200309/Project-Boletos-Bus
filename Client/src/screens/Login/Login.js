import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FormLogin } from "./components/FormLogin";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}></View>
      <View style={styles.formContainer}>
        <FormLogin />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#320D7D",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50%",

  },
});
