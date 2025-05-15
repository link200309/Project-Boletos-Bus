// PassengerCard.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface PassengerCardProps {
  index: number;
  passenger: any;
  handlePassengerChange: (index: number, field: string, value: string) => void;
  containerStyle?: object;
}

export const PassengerCard: React.FC<PassengerCardProps> = ({ index, passenger, handlePassengerChange, containerStyle }) => {
  return (
    <View style={[styles.card, containerStyle]}>
      <Text style={styles.title}>Pasajero {index + 1} - Asiento: {passenger.seat}</Text>

      <TextInput
        placeholder="Nombre"
        value={passenger.firstName}
        onChangeText={(text) => handlePassengerChange(index, 'firstName', text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Apellido"
        value={passenger.lastName}
        onChangeText={(text) => handlePassengerChange(index, 'lastName', text)}
        style={styles.input}
      />

      <TextInput
        placeholder="N° de Identidad"
        value={passenger.identityNumber}
        onChangeText={(text) => handlePassengerChange(index, 'identityNumber', text)}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="DD/MM/AAAA"
        value={passenger.birthDate}
        onChangeText={(text) => handlePassengerChange(index, 'birthDate', text)}
        keyboardType="numeric"
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
    width: '90%',
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