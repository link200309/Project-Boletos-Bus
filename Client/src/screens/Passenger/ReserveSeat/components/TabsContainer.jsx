// TabsContainer.jsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TabsContainer = ({ passengers = [], contact = {} }) => {
  const [activeTab, setActiveTab] = useState('detalles');

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
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

      {activeTab === 'detalles' ? (
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <View style={styles.iconWrapper}>
              <Icon name="location-outline" style={styles.icon} />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.detailTitle}>Origen y destino</Text>
              <Text style={styles.detailContent}>Cochabamba → La Paz</Text>
            </View>
          </View>

          <View style={styles.detailItem}>
            <View style={styles.iconWrapper}>
              <Icon name="calendar-outline" style={styles.icon} />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.detailTitle}>Horario de viaje</Text>
              <Text style={styles.detailContent}>18 de Abril - 07:30 → 13:00</Text>
            </View>
          </View>

          <View style={styles.detailItem}>
            <View style={styles.iconWrapper}>
              <Icon name="business-outline" style={styles.icon} />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.detailTitle}>Agencia</Text>
              <Text style={styles.detailContent}>EL DORADO</Text>
            </View>
          </View>

          <View style={styles.detailItem}>
            <View style={styles.iconWrapper}>
              <Icon name="bus-outline" style={styles.icon} />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.detailTitle}>Asientos</Text>
              <Text style={styles.detailContent}>SEMI-CAMA</Text>
            </View>
          </View>

          <View style={styles.detailItem}>
            <View style={styles.iconWrapper}>
              <Icon name="pricetag-outline" style={styles.icon} />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.detailTitle}>Precio por pasaje</Text>
              <Text style={styles.detailContent}>Bs. 90</Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.passengersContainer}>
          <Text style={styles.sectionHeader}>Pasajeros</Text>
          {passengers.map((passenger, index) => (
            <View key={index} style={styles.passengerCard}>
              <View style={styles.passengerHeader}>
                <Text style={styles.passengerName}>{passenger.firstName} {passenger.lastName}</Text>
                <Text style={styles.seatLabel}>Asiento {passenger.seat}</Text>
              </View>
              <Text style={styles.passengerDetail}>CI: {passenger.identityNumber}</Text>
              <Text style={styles.passengerDetail}>Fecha Nacimiento: {passenger.birthDate}</Text>
            </View>
          ))}
        </View>
      )}
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
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4B2EC2',
    marginBottom: -1,
  },
  tabText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#4B2EC2',
    fontWeight: 'bold',
  },
  detailsContainer: {
    padding: 5,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconWrapper: {
    backgroundColor: '#F0F3FF',
    borderRadius: 12,
    padding: 10,
    marginRight: 15,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#4B2EC2',
    fontSize: 24,
  },
  textWrapper: {
    flex: 1,
  },
  detailTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  detailContent: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  passengersContainer: {
    padding: 5,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  passengerCard: {
    backgroundColor: '#F7F8FF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E6E8FF',
  },
  passengerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  passengerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  seatLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  passengerDetail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
});

export default TabsContainer;