import React, { forwardRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import SummaryRow from "./SummaryRow";
import QrCodeDisplay from "./QrCodeDisplay";

const PaymentSummaryCard = forwardRef(({ summary }, ref) => {
  return (
    <View style={styles.card} ref={ref} collapsable={false}>
      <Text style={styles.title}>Resumen del Pago</Text>

      <SummaryRow label="Horario de viaje" value={summary.departureTime || "No disponible"} />
      <SummaryRow label="Número de Bus" value={summary.busNumber || "No disponible"} />
      <SummaryRow label="Cantidad de Asientos" value={summary.count} />
      <SummaryRow label="Número de asientos" value={summary.seatNumbers.join(", ")} />
      <SummaryRow label="Precio de cada asiento" value={`Bs. ${summary.price}`} />
      <SummaryRow label="Total a pagar" value={`Bs. ${summary.total}`} />

      <QrCodeDisplay data={summary.qrData} />
    </View>
  );
});

export default PaymentSummaryCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
});
