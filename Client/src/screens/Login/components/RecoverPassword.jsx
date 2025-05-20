import React from "react";
import { View, StyleSheet, Image } from "react-native";

export const RecoverPassword = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/images/logo.png")}
        style={styles.logo}
      />
      <View style={styles.formContainer}>
        {/* Aquí puedes agregar el formulario de registro de agencia */}
      </View>
    </View>
  );
}