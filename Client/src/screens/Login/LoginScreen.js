import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Keyboard } from "react-native";
import { GenericContainer } from "../../components/GenericContainer";
import { FormLogin } from "./components/FormLogin";

export default function LoginScreen({ navigation }) {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", (e) => {
      setKeyboardVisible(true);
      setKeyboardHeight(e.endCoordinates.height);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <GenericContainer
      style={{
        ...styles.container,
        paddingBottom: keyboardVisible ? keyboardHeight + 150 : 50,
      }}
    >
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
        <FormLogin navigation={navigation} />
      </View>
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2B0B94",
    padding: 0,
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
