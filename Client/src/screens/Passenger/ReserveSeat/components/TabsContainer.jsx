import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState('detalles');

  // Datos de ejemplo para pasajeros
  const passengers = [
    {
      name: 'Juan Pérez',
      ci: '1234567',
      birthDate: '10-09-2000',
      seat: 'A01'
    },
    {
      name: 'Maria Calle',
      ci: '7654321',
      birthDate: '05-03-1995',
      seat: 'A02'
    },
    {
      name: 'Carlos Gómez',
      ci: '9876543',
      birthDate: '15-11-1988',
      seat: 'A03'
    }
  ];

  return (
    <View style={styles.container}>
      {/* Pestañas */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'detalles' && styles.activeTab]}
          onPress={() => setActiveTab('detalles')}
        >
          <Text style={[styles.tabText, activeTab === 'detalles' && styles.activeTabText]}>Detalles</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'pasajeros' && styles.activeTab]}
          onPress={() => setActiveTab('pasajeros')}
        >
          <Text style={[styles.tabText, activeTab === 'pasajeros' && styles.activeTabText]}>Pasajeros</Text>
        </TouchableOpacity>
      </View>

      {/* Contenido */}
      {activeTab === 'detalles' ? (
         <View style={styles.detailsContent}>
          <View style={styles.detailRow}>
            <View style={styles.iconContainer}>
              <Icon name="location-outline" style={styles.icon} />
            </View>
            <Text style={styles.detailText}>Cochabamba → La Paz</Text>
          </View>
          <View style={styles.detailRow}>
            <View style={styles.iconContainer}>
              <Icon name="calendar-outline" style={styles.icon} />
            </View>
            <Text style={styles.detailText}>18 de Abril - 07:30 → 13:00</Text>
          </View>
          <View style={styles.detailRow}>
            <View style={styles.iconContainer}>
              <Icon name="business-outline" style={styles.icon} />
            </View>
            <Text style={styles.detailText}>EL DORADO</Text>
          </View>
          <View style={styles.detailRow}>
            <View style={styles.iconContainer}>
              <Icon name="bus-outline" style={styles.icon} />
            </View>
            <Text style={styles.detailText}>SEMI-CAMA</Text>
          </View>
          <View style={styles.detailRow}>
            <View style={styles.iconContainer}>
              <Icon name="pricetag-outline" style={styles.icon} />
            </View>
            <Text style={styles.detailText}>Bs. 90</Text>
          </View>
        </View>
      ) : (
        <View style={styles.passengerContent}>
          <Text style={styles.sectionTitle}>Pasajeros</Text>
          {passengers.map((passenger, index) => (
            <View key={index} style={styles.passengerCard}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.passengerName}>{passenger.name}</Text>
                <Text style={styles.seatText}>Asiento {passenger.seat}</Text>
              </View>
              <Text style={styles.passengerInfo}>CI: {passenger.ci}</Text>
              <Text style={styles.passengerInfo}>Fecha Nacimiento: {passenger.birthDate}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    width: '100%',
    alignSelf: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    marginBottom: -1,
  },
  tabText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  detailsContent: {
    padding: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    backgroundColor: '#F0F3FF',
    borderRadius: 12,
    padding: 8,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  icon: {
    color: '#4B2EC2',
    fontSize: 24,
  },
  detailText: {
    fontSize: 16,
    color: '#555',
  },
  passengerContent: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  passengerCard: {
    backgroundColor: '#F0F3FF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  passengerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
  },
  passengerInfo: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  seatText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
});

export default TabsContainer;