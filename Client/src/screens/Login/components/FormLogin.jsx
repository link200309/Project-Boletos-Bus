import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { InputLabel } from "../../../components/Input/InputLabel";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";
import { ButtonText } from "../../../components/Button/ButtonText";
import { GlobalStyles } from "../../../components/Style/GlobalStyles";

export const FormLogin = () => {
  const [activeTab, setActiveTab] = useState("Pasajero");
  const renderForm = () => {
    return (
      <>
        <InputLabel
          label="Correo electrónico"
          placeholder="ejemplo@gmail.com"
        />
        <InputLabel label="Contraseña" placeholder="••••••••" />

        <ButtonStyle text="Iniciar sesión" />

        <ButtonText text="¿Olvidaste tu contraseña?" />

        <View style={styles.registerMessage}>
          <Text style={styles.textRegisterMessage}>¿No tienes cuenta?</Text>
          <ButtonText text="Regístrate" />
        </View>
      </>
    );
  };

  return (
    <View style={[GlobalStyles.formCard, styles.container]}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Pasajero" && styles.activeTab]}
          onPress={() => setActiveTab("Pasajero")}
        >
          <Text style={styles.tabText}>Pasajero</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "Agencia" && styles.activeTab]}
          onPress={() => setActiveTab("Agencia")}
        >
          <Text style={styles.tabText}>Agencia</Text>
        </TouchableOpacity>
      </View>

      {renderForm()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
  },
  registerMessage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textRegisterMessage: {
    color: "#999",
    fontSize: 14,
    marginRight: 5,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 30,
    borderBottomWidth: 1,
    borderColor: "#E6E8FF",
  },
  tab: {
    flex: 1,
    paddingBottom: 15,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: "#4318D1",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
