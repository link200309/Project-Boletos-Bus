import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function PriceSummaryContainer({
  ticketPrice,
  passengerCount,
  onConfirm,
}) {
  const totalPrice = ticketPrice * passengerCount;

  return (
    <View style={styles.container}>
      <View style={styles.priceSection}>
        <View style={styles.priceRow}>
          <View>
            <Text style={styles.priceLabel}>Precio por pasaje</Text>
            <Text style={styles.priceDetails}>
              Bs. {ticketPrice} × {passengerCount}
            </Text>
          </View>
          <Text style={styles.totalPrice}>Bs. {totalPrice}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
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
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  priceSection: {
    marginBottom: 20,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceLabel: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 5,
  },
  priceDetails: {
    fontSize: 14,
    color: "#666666",
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  confirmButton: {
    backgroundColor: "#4B2EC2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
