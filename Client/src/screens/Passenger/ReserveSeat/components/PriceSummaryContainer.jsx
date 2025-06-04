import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";
import { useNavigation } from "@react-navigation/native";

export default function PriceSummaryContainer({
  ticketPrice,
  passengerCount,
  onConfirm,
  travels,
  travelDetails,
  passengers,
}) {
  const navigation = useNavigation();
  const price = parseFloat(ticketPrice) || 0;
  const totalPrice = (price * passengerCount).toFixed(2);

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    navigation.navigate("PaymentDetails", { travels, travelDetails, passengers });
  };

  console.log("TravelDetails PriceSummaryContainer",travelDetails);

  return (
    <View style={styles.container}>
      <View style={styles.priceSection}>
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

      <ButtonStyle text="Confirmar reserva" onClick={handleConfirm} />
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
});
