import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";

export default function PriceSummaryContainer({
  ticketPrice,
  passengerCount,
  onConfirm,
}) {
  const price = parseFloat(ticketPrice) || 0;
  const totalPrice = (price * passengerCount).toFixed(2);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.priceRow}>
          <View>
            <Text style={styles.priceLabel}>Precio por pasaje</Text>
            <Text style={styles.priceDetails}>
              Bs. {price.toFixed(2)} × {passengerCount}
            </Text>
          </View>
          <Text style={styles.totalPrice}>Bs. {totalPrice}</Text>
        </View>
      </View>

      <ButtonStyle text="Confirmar reserva" onClick={onConfirm} />
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
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceLabel: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  priceDetails: {
    fontSize: 14,
    color: "#666",
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
});
