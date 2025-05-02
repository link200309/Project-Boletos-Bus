import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
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

  // Validación de campos
  const handleNameChange = (index, value) => {
    const upperCaseValue = value.replace(/[^a-zA-Z\s]/g, '').toUpperCase(); // Solo letras y espacios, convertido a mayúsculas
    if (upperCaseValue.length <= 20) {
      handlePassengerChange(index, 'firstName', upperCaseValue);
    }
  };

  const handleLastNameChange = (index, value) => {
    const upperCaseValue = value.replace(/[^a-zA-Z\s]/g, '').toUpperCase(); // Solo letras y espacios, convertido a mayúsculas
    if (upperCaseValue.length <= 20) {
      handlePassengerChange(index, 'lastName', upperCaseValue);
    }
  };

  const handleIdentityNumberChange = (index, value) => {
    const numericValue = value.replace(/[^0-9]/g, ''); // Solo números
    if (numericValue.length <= 8) {
      handlePassengerChange(index, 'identityNumber', numericValue);
    }
  };

  const handleBirthDateChange = (index, value) => {
    // Formatear fecha automáticamente mientras se escribe
    let formattedValue = value.replace(/[^0-9]/g, '');
    
    if (formattedValue.length > 2 && formattedValue.length <= 4) {
      formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2);
    } else if (formattedValue.length > 4) {
      formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2, 4) + '/' + formattedValue.slice(4, 8);
    }
    
    if (formattedValue.length <= 10) { // DD/MM/YYYY = 10 caracteres
      handlePassengerChange(index, 'birthDate', formattedValue);
    }
  };

  const handleEmailChange = (text) => {
    // Validar que solo haya un '@' en el correo
    const atCount = (text.match(/@/g) || []).length;
    if (atCount <= 1) {
      setContact({ ...contact, email: text });
    }
  };

  const handlePhoneChange = (text) => {
    const numericPhone = text.replace(/[^0-9]/g, ''); // Solo números
    if (numericPhone.length <= 10) { // Asumiendo 10 dígitos para número de teléfono
      setContact({ ...contact, phone: numericPhone });
    }
  };

  return (
    <ScrollView style={styles.container}>
      
      {/* Contenedor de los detalles del viaje y los pasajeros */}
      <View style={styles.travelInfoContainer}>
        <View style={styles.travelInfo}>
          <Text style={styles.Default}>{passengers.length} pasajeros seleccionados</Text>
          <Text style={styles.travelText}>{travelDetails.route}</Text>
          <Text style={styles.travelText}>{travelDetails.date} - {travelDetails.time}</Text>
        </View>
      </View>

      {/* Aquí se muestra la información de los pasajeros */}
      {passengers.map((passenger, index) => (
        <View key={index} style={styles.passengerSection}>
          <Text style={styles.passengerTitle}>Pasajero {index + 1} - Asiento: {passenger.seat}</Text>

          <Text style={styles.label}>Nombre <Text style={styles.asterisks}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa nombre(s)"
            value={passenger.firstName}
            onChangeText={(text) => handleNameChange(index, text)}
            maxLength={40}
          />

          <Text style={styles.label}>Apellido <Text style={styles.asterisks}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa apellido(s)"
            value={passenger.lastName}
            onChangeText={(text) => handleLastNameChange(index, text)}
            maxLength={40}
          />

          <View style={styles.row}>
            <View style={styles.halfInputContainer}>
              <Text style={styles.label}>Número de Identidad <Text style={styles.asterisks}>*</Text></Text>
              <TextInput
                style={styles.halfInput}
                placeholder="N° de Identidad"
                value={passenger.identityNumber}
                onChangeText={(text) => handleIdentityNumberChange(index, text)}
                keyboardType="numeric"
                maxLength={8}
              />
            </View>

            <View style={styles.halfInputContainer}>
              <Text style={styles.label}>Fecha de Nacimiento <Text style={styles.asterisks}>*</Text></Text>
              <TextInput
                style={styles.halfInput}
                value={passenger.birthDate}
                onChangeText={(text) => handleBirthDateChange(index, text)}
                placeholder="DD/MM/AAAA"
                keyboardType="numeric"
                maxLength={10}
              />
            </View>
          </View>
        </View>
      ))}

      {/* Datos de contacto */}
      <Text style={styles.sectionTitle}>Datos de contacto</Text>

      <Text style={styles.label}>Correo Electrónico <Text style={styles.asterisks}>*</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa un correo electrónico"
        value={contact.email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Nro de celular <Text style={styles.asterisks}>*</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa un Nro de celular"
        value={contact.phone}
        onChangeText={handlePhoneChange}
        keyboardType="phone-pad"
        maxLength={10}
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