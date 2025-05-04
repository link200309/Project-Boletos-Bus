import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { InputLabel } from "../../../components/Input/InputLabel";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";
import { ButtonText } from "../../../components/Button/ButtonText";

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
    <View style={styles.container}>
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
  registerMessage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textRegisterMessage: {
    color: "#999",
    fontSize: 14,
    marginRight: 5,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 25,
    borderBottomWidth: 1,
    borderColor: "#E6E8FF",
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
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
