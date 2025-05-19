// PriceSummaryContainer.jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PriceSummaryContainer({ ticketPrice, passengerCount, onConfirm }) {
  const totalPrice = ticketPrice * passengerCount;

  return (
    <View style={styles.container}>
      <View style={styles.priceDetails}>
        <View>
          <Text style={styles.priceLabel}>Precio por pasaje</Text>
          <Text style={styles.priceDetailsText}>Bs. {ticketPrice} × {passengerCount}</Text>
        </View>
        <Text style={styles.totalPrice}>Bs. {totalPrice}</Text>
      </View>
      <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
        <Text style={styles.confirmButtonText}>Confirmar reserva</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
  },
  priceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  priceLabel: {
    fontSize: 16,
    color: '#333',
  },
  priceDetailsText: {
    fontSize: 14,
    color: '#666',
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#4B2EC2',
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});