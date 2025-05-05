import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { GenericContainer } from "../../components/GenericContainer";
import { FormPassenger } from "./components/FormPassenger";
import { FormAgency } from "./components/FormAgency";

export default function Register() {
  return (
    <GenericContainer style={styles.container}>
      <ScrollView>
        <View style={styles.containerLogo}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logo}
          />
          <Image
            source={require("../../../assets/logoName.png")}
            style={styles.logoName}
          />
        </View>

        {/* <FormPassenger /> */}
        <FormAgency />
      </ScrollView>
    </GenericContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B0B94",
  },
  containerLogo: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: 10,
    flexDirection: "row",
  },
  logo: {
    width: 50,
    height: 60,
    marginRight: 20,
  },
  logoName: {
    width: 120,
    height: 25,
    marginTop: 10,
  },
});
