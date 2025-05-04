import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { FormLogin } from "./components/FormLogin";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Image
          source={require("../../../assets/logoName.png")}
          style={styles.logoName}
          resizeMode="contain"
        />
      </View>

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
    paddingTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
  logo: {
    width: 180,
    height: 180,
  },
  logoName: {
    width: 200,
    height: 50,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50%",
  },
});
