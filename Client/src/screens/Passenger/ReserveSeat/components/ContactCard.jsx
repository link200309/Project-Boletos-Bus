import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function ContactCard({ contact, setContact, containerStyle }) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.headerText}>Datos de contacto</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput
          value={contact.email}
          onChangeText={(text) => setContact({ ...contact, email: text })}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.inputField}
          placeholder="ejemplo@correo.com"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Nro de Celular <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          placeholder="Ingresa un Nro de celular"
          value={contact.phone}
          onChangeText={(text) => setContact({ ...contact, phone: text })}
          keyboardType="phone-pad"
          style={styles.inputField}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: 370,
    padding: 25,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 13,
  },
  required: {
    color: '#FF0000',
  },
  inputField: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E8FF',
    color: '#000000',
  },
});

