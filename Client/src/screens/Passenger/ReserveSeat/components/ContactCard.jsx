<<<<<<< HEAD
// ContactCard.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface ContactCardProps {
  contact: any;
  setContact: (contact: any) => void;
  containerStyle?: object;
}

export const ContactCard: React.FC<ContactCardProps> = ({ contact, setContact, containerStyle }) => {
  return (
    <View style={[styles.card, containerStyle]}>
      <Text style={styles.title}>Datos de contacto</Text>

      <Text style={styles.label}>Correo Electrónico</Text>
      <TextInput
        value={contact.email}
        onChangeText={(text) => setContact({ ...contact, email: text })}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
    
      <Text style={styles.label}>
        Nro de Celular <Text style={styles.asterisk}> * </Text>
        </Text>
      <TextInput
        placeholder="Ingrea un Nro de celular"
        value={contact.phone}
        onChangeText={(text) => setContact({ ...contact, phone: text })}
        keyboardType="phone-pad"
        style={styles.input}
      />           
    </View>   
=======
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
>>>>>>> 4b4683e0ad5442a7e7133e197cf7b0bd0a1f9c02
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    margin: 10,
=======
  container: {
    borderRadius: 20,
    width: 370,
    padding: 25,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
>>>>>>> 4b4683e0ad5442a7e7133e197cf7b0bd0a1f9c02
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
<<<<<<< HEAD
    width: '95%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
  },
  label: {
    marginBottom: 5,
=======
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
>>>>>>> 4b4683e0ad5442a7e7133e197cf7b0bd0a1f9c02
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 13,
  },
<<<<<<< HEAD
  asterisk:{
    color: '#FF0000',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E8FF',
    marginBottom: 10,
    width: '100%',
=======
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
>>>>>>> 4b4683e0ad5442a7e7133e197cf7b0bd0a1f9c02
  },
});
