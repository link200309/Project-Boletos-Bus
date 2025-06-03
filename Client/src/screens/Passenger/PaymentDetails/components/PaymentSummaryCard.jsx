import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SummaryRow from "./SummaryRow";
import QrCodeDisplay from "./QrCodeDisplay";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";

export default function PaymentSummaryCard({ summary, onConfirm }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Resumen del Pago</Text>

      <SummaryRow label="Cantidad de Asientos" value={summary.count} />
      <SummaryRow label="Número de asientos" value={summary.seatNumbers.join(", ")} />
      <SummaryRow label="Precio de cada asiento" value={`Bs. ${summary.price}`} />
      <SummaryRow label="Total a pagar" value={`Bs. ${summary.total}`} />

      <QrCodeDisplay data={summary.qrData} />

      <View style={styles.buttonRow}>
        <ButtonStyle text="Compartir" variant={2} width={150} onClick={() => console.log("Compartir")} />
        <ButtonStyle text="Confirmar reserva" width={150} onClick={onConfirm} />
      </View>
    </View>
  );
}

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
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  label: {
    fontWeight: "bold",
    color: "#555",
  },
});
