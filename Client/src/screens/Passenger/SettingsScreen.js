import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonStyle } from "../../components/Button/ButtonStyle";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

//Components
import { GenericContainer } from "../../components/GenericContainer";

export default function SettingsScreen() {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <GenericContainer style={styles.container}>
      <ButtonStyle
        width="180"
        height={"50"}
        text={"Cerrar Sesión"}
        onClick={handleLogout}
      />
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
