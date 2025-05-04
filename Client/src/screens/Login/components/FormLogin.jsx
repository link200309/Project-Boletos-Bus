import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { InputLabel } from "../../../components/Input/InputLabel";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";
import { ButtonText } from "../../../components/Button/ButtonText";

export const FormLogin = () => {
  return (
    <View style={styles.container}>
      <InputLabel label="Email" placeholder="ejemplo@gmail.com" />
      <InputLabel label="Password" placeholder="" />

      <ButtonStyle text="Iniciar sesión" />
      <ButtonText text="¿Olvidaste tu contraseña?" />
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
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
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
