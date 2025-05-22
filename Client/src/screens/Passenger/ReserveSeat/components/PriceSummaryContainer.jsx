import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

<<<<<<< HEAD
interface PriceSummaryContainerProps {
  ticketPrice: number;
  passengerCount: number;
  onConfirm: () => void;
}

const PriceSummaryContainer: React.FC<PriceSummaryContainerProps> = ({ ticketPrice, passengerCount, onConfirm }) => {
=======
export default function PriceSummaryContainer({ ticketPrice, passengerCount, onConfirm }) {
>>>>>>> 4b4683e0ad5442a7e7133e197cf7b0bd0a1f9c02
  const totalPrice = ticketPrice * passengerCount;

  return (
    <View style={styles.container}>
<<<<<<< HEAD
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
};

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
=======
      <View style={styles.priceSection}>
        <View style={styles.priceRow}>
          <View>
            <Text style={styles.priceLabel}>Precio por pasaje</Text>
            <Text style={styles.priceDetails}>Bs. {ticketPrice} × {passengerCount}</Text>
          </View>
          <Text style={styles.totalPrice}>Bs. {totalPrice}</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.confirmButton} 
        onPress={onConfirm}
      >
        <Text style={styles.buttonText}>Confirmar reserva</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  priceSection: {
    marginBottom: 20,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
  },
  priceDetails: {
    fontSize: 14,
    color: '#666666',
>>>>>>> 4b4683e0ad5442a7e7133e197cf7b0bd0a1f9c02
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
<<<<<<< HEAD
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

export default PriceSummaryContainer;
=======
    color: '#000000',
  },
  confirmButton: {
    backgroundColor: '#4B2EC2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
>>>>>>> 4b4683e0ad5442a7e7133e197cf7b0bd0a1f9c02
