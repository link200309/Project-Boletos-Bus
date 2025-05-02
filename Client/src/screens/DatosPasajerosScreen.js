import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const DatosPasajerosScreen = ({ navigation, route }) => {
  const { selectedSeats = ['A01', 'A02'], travelDetails = { route: 'Cochabamba → La Paz', date: 'Viernes 18 de Abril', time: '07:30 a 13:00' } } = route.params || {};

  const [passengers, setPassengers] = useState([
    {
      seat: selectedSeats[0],
      firstName: '',
      lastName: '',
      identityNumber: '',
      birthDate: '',
    },
    {
      seat: selectedSeats[1],
      firstName: '',
      lastName: '',
      identityNumber: '',
      birthDate: '',
    }
  ]);

  const [contact, setContact] = useState({
    email: '',
    phone: '',
  });

  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][field] = value;
    setPassengers(updatedPassengers);
  };

  const handleContinue = () => {
    navigation.navigate('ResumenReserva', {
      passengers,
      contact,
      travelDetails
    });
  };

  const allFieldsFilled = () => {
    return passengers.every(p => p.firstName && p.lastName && p.identityNumber && p.birthDate) && contact.phone;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>RESERVAR ASIENTO - DATOS PASAJEROS</Text>

      <View style={styles.travelInfo}>
        <Text style={styles.travelText}>{travelDetails.route}</Text>
        <Text style={styles.travelText}>{travelDetails.date} - {travelDetails.time}</Text>
      </View>

      <Text style={styles.sectionTitle}>Datos de pasajero(s)</Text>
      <Text style={styles.passengerCount}>{passengers.length} pasajeros seleccionados</Text>

      {passengers.map((passenger, index) => (
        <View key={index} style={styles.passengerSection}>
          <Text style={styles.passengerTitle}>Pasajero {index + 1} - Asiento: {passenger.seat}</Text>

          <Text style={styles.label}>Nombre *</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa nombre(s)"
            value={passenger.firstName}
            onChangeText={(text) => handlePassengerChange(index, 'firstName', text)}
          />

          <Text style={styles.label}>Apellido *</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa apellido(s)"
            value={passenger.lastName}
            onChangeText={(text) => handlePassengerChange(index, 'lastName', text)}
          />

          <View style={styles.row}>
            <View style={styles.halfInputContainer}>
              <Text style={styles.label}>Número de Identidad *</Text>
              <TextInput
                style={styles.halfInput}
                placeholder="N° de Identidad"
                value={passenger.identityNumber}
                onChangeText={(text) => handlePassengerChange(index, 'identityNumber', text)}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.halfInputContainer}>
              <Text style={styles.label}>Fecha de Nacimiento *</Text>
              <TextInput
                style={styles.halfInput}
                placeholder="DD/MM/AAAA"
                value={passenger.birthDate}
                onChangeText={(text) => handlePassengerChange(index, 'birthDate', text)}
              />
            </View>
          </View>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Datos de contacto</Text>

      <Text style={styles.label}>Correo Electrónico</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa un correo electrónico"
        value={contact.email}
        onChangeText={(text) => setContact({ ...contact, email: text })}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Nro de celular *</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa un Nro de celular"
        value={contact.phone}
        onChangeText={(text) => setContact({ ...contact, phone: text })}
        keyboardType="phone-pad"
      />

      <TouchableOpacity
        style={[styles.button, !allFieldsFilled() && styles.disabledButton]}
        onPress={handleContinue}
        disabled={!allFieldsFilled()}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DatosPasajerosScreen;
