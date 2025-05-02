import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles'; // Asegúrate de que esta ruta sea correcta

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity 
        style={styles.footerButton}
        onPress={() => navigation.navigate('Reservar')} // Asegúrate de que la pantalla 'Reservar' esté registrada en tu navegación
      >
        <Text style={styles.footerButtonText}>Reservar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.footerButton}
        onPress={() => navigation.navigate('MisReservas')} // Asegúrate de que la pantalla 'MisReservas' esté registrada en tu navegación
      >
        <Text style={styles.footerButtonText}>Mis reservas</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.footerButton}
        onPress={() => navigation.navigate('Ajustes')} // Asegúrate de que la pantalla 'Ajustes' esté registrada en tu navegación
      >
        <Text style={styles.footerButtonText}>Ajustes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
