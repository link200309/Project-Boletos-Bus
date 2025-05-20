import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export const LoginScreen = () => {
  const [activeTab, setActiveTab] = useState("Pasajero");
  const renderForm = () => {
    return (
      <>
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          placeholder="ejemplo@email.com"
          style={styles.input}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          placeholder="••••••••"
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
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
          style={[styles.tab, activeTab === "Empresa" && styles.activeTab]}
          onPress={() => setActiveTab("Empresa")}
        >
          <Text style={styles.tabText}>Empresa</Text>
        </TouchableOpacity>
      </View>

      {renderForm()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: "#5D2DFD",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "600",
  },
  label: {
    color: "#5D2DFD",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#f1f1ff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#5D2DFD",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#5D2DFD",
    textAlign: "center",
    marginTop: 10,
  },
});

export default LoginScreen;
