import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { InputLabel } from "../../../../components/Input/InputLabel";

export default function ContactCard({ contact, setContact, containerStyle }) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.headerText}>Datos de contacto</Text>

      <InputLabel
        label="Correo Electrónico"
        placeholder="ejemplo@correo.com"
        value={contact.email}
        onChange={(text) => setContact({ ...contact, email: text })}
        keyboardType="email-address"
      />

      <InputLabel
        label="Nro de Celular *"
        placeholder="Ingresa un Nro de celular"
        value={contact.phone}
        onChange={(text) => setContact({ ...contact, phone: text })}
        keyboardType="phone-pad"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: 370,
    padding: 25,
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
  },
});
