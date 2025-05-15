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

      <TextInput
        placeholder="Correo Electrónico"
        value={contact.email}
        onChangeText={(text) => setContact({ ...contact, email: text })}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Nro de celular"
        value={contact.phone}
        onChangeText={(text) => setContact({ ...contact, phone: text })}
        keyboardType="phone-pad"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    width: '95%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4B2EC2',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E8FF',
    marginBottom: 10,
    width: '100%',
  },
});
