import React, { forwardRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import SummaryRow from "./SummaryRow";
import QrCodeDisplay from "./QrCodeDisplay";
import { GlobalStyles } from "../../../../components/Style/GlobalStyles";

const PaymentSummaryCard = forwardRef(({ summary }, ref) => {
  return (
    <View style={GlobalStyles.formCard} ref={ref} collapsable={false}>
      <Text style={styles.title}>Resumen del Pago</Text>

      <SummaryRow
        label="Horario de viaje"
        value={summary.horario || "No disponible"}
      />
      <SummaryRow
        label="Precio de cada asiento"
        value={`Bs. ${summary.price}`}
      />
      <SummaryRow label="Total a pagar" value={`Bs. ${summary.total}`} />
      <SummaryRow
        label="Número de asientos"
        value={summary.seatNumbers.join(", ")}
      />
      <SummaryRow label="Cantidad de Asientos" value={summary.count} />
      <SummaryRow
        label="Número de bus"
        value={summary.busId || "No disponible"}
      />

      <QrCodeDisplay data={summary.qrData} />
    </View>
  );
});

export default PaymentSummaryCard;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
});
