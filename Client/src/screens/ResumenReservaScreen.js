import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles';

const ResumenReservaScreen = ({ route, navigation }) => {
  const { passengers = [], contact = {}, travelDetails = {} } = route.params || {}; // Protegiendo contra undefined

  const pricePerTicket = 90;
  const totalPrice = pricePerTicket * passengers.length;

  const [activeTab, setActiveTab] = useState('detalles'); // Estado para manejar la pestaña activa

  // Función para confirmar la reserva y navegar a la pantalla de pago
  const handleConfirm = () => {
    navigation.navigate('PagoScreen', {
      passengers,
      contact,
      travelDetails,
      totalPrice
    });
  };

  // Renderizar el contenido según la pestaña activa
  const renderContent = () => {
    return activeTab === 'detalles' ? (
      <View style={styles.tabContent}>
        <Text style={styles.detailText}>Origen y destino:</Text>
        <Text style={styles.detailValue}>{travelDetails.route || 'No disponible'}</Text>
        
        <Text style={styles.detailText}>Horario de viaje:</Text>
        <Text style={styles.detailValue}>{travelDetails.date} - {travelDetails.time}</Text>
        
        <Text style={styles.detailText}>Agencia:</Text>
        <Text style={styles.detailValue}>{travelDetails.agency || 'No disponible'}</Text>
        
        <Text style={styles.detailText}>Asientos:</Text>
        <Text style={styles.detailValue}>SEMI-CAMA</Text>
        
        <Text style={styles.detailText}>Precio por pasaje:</Text>
        <Text style={styles.detailValue}>Bs. 90</Text>
      </View>
    ) : (
      <View style={styles.tabContent}>
        {passengers.map((passenger, index) => (
          <View key={index} style={styles.passengerInfo}>
            <Text style={styles.passengerName}>
              {passenger.firstName} {passenger.lastName}
            </Text>
            <Text>Asiento: {passenger.seat}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>RESERVAR ASIENTO - RESUMEN</Text>

      <Text style={styles.sectionTitle}>Resumen de viaje</Text>
      <Text style={styles.note}>Una vez realice la confirmación, deberá realizar el pago y salir al comprobante para finalizar</Text>

      {/* Contenedor de pestañas */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'detalles' && styles.activeTab]}
          onPress={() => setActiveTab('detalles')}
        >
          <Text style={[styles.tabText, activeTab === 'detalles' && styles.activeTabText]}>Detalles</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'pasajeros' && styles.activeTab]}
          onPress={() => setActiveTab('pasajeros')}
        >
          <Text style={[styles.tabText, activeTab === 'pasajeros' && styles.activeTabText]}>Pasajeros</Text>
        </TouchableOpacity>
      </View>

      {/* Renderizar el contenido de la pestaña seleccionada */}
      {renderContent()}

      {/* Resumen del precio */}
      <View style={styles.priceSummary}>
        <Text style={styles.priceText}>Precio por pasaje: Bs. 90 x {passengers.length}</Text>
        <Text style={styles.priceText}>Total: Bs. {totalPrice}</Text>
      </View>

      {/* Botón para confirmar la reserva */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirmar reserva</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ResumenReservaScreen;
