import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles';

const ResumenReservaScreen = ({ route, navigation }) => {
  const { passengers = [], contact = {}, travelDetails = {} } = route.params || {};
  const [activeTab, setActiveTab] = useState('detalles');
  const pricePerTicket = 90;
  const totalPrice = pricePerTicket * passengers.length;

  const handleConfirm = () => {
    navigation.navigate('PagoScreen', {
      passengers,
      contact,
      travelDetails,
      totalPrice
    });
  };

  const renderDetailsTab = () => (
    <View style={styles.tabContent}>
      <Text style={styles.detailText}>Origen y destino</Text>
      <Text style={styles.detailValue}>{travelDetails.route || 'Cochabamba → La Paz'}</Text>
      
      <Text style={styles.detailText}>Horario de viaje</Text>
      <Text style={styles.detailValue}>{travelDetails.date || '18 de Abril'} · {travelDetails.time || '07:30 a 13:00'}</Text>
      
      <Text style={styles.detailText}>Agencia</Text>
      <Text style={styles.detailValue}>EL DORMIDO</Text>
      
      <Text style={styles.detailText}>Asientos</Text>
      <Text style={styles.detailValue}>SEMI-CAMA</Text>
      
      <Text style={styles.detailText}>Precio x pasaje</Text>
      <Text style={styles.detailValue}>Bs. 90</Text>
    </View>
  );

  const renderPassengersTab = () => (
    <View style={styles.tabContent}>
      {passengers.map((passenger, index) => (
        <View key={index} style={{marginBottom: 15}}>
          <Text style={styles.passengerName}>
            {passenger.firstName} {passenger.lastName}
          </Text>
          <Text>CI: {passenger.identityNumber}</Text>
          <Text>Fecha nacimiento: {passenger.birthDate}</Text>
          <Text style={{marginTop: 5}}>Asiento {passenger.seat}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      
      {/* Contenedor morado para el texto informativo */}
      <View style={styles.summaryContainer}>
      <Text style={styles.Default}>Detalles de viaje y pasajeros</Text>
        <Text style={styles.summaryText}>
          Una vez realice la confirmación, deberá realizar el pago y subir el comprobante para finalizar
        </Text>
      </View>

      {/* Tabs de navegación */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'detalles' && styles.activeTab
          ]}
          onPress={() => setActiveTab('detalles')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'detalles' && styles.activeTabText
          ]}>
            Detalles
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'pasajeros' && styles.activeTab
          ]}
          onPress={() => setActiveTab('pasajeros')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'pasajeros' && styles.activeTabText
          ]}>
            Pasajeros
          </Text>
        </TouchableOpacity>
      </View>

      {/* Contenido de las tabs */}
      {activeTab === 'detalles' ? renderDetailsTab() : renderPassengersTab()}

      {/* Resumen de precios */}
      <View style={styles.priceSummary}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.priceText}>Precio por pasaje</Text>
          <Text style={styles.priceText}>Bs. 90 × {passengers.length}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
          <Text style={[styles.priceText, {fontWeight: 'bold'}]}>Total</Text>
          <Text style={[styles.priceText, {fontWeight: 'bold'}]}>Bs. {totalPrice}</Text>
        </View>
      </View>

      {/* Botón de confirmación */}
      <TouchableOpacity 
        style={styles.confirmButton}
        onPress={handleConfirm}
      >
        <Text style={styles.confirmButtonText}>Confirmar reserva</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ResumenReservaScreen;