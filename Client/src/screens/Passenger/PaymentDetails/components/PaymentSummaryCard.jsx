import React, { forwardRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import SummaryRow from "./SummaryRow";
import { BoliviaQRPayment } from "./QrCodeDisplay";
import { GlobalStyles } from "../../../../components/Style/GlobalStyles";
import qrImage from "../../assets/qr-BNB.jpeg";

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

      <BoliviaQRPayment
        amount={150.5}
        merchantName="Mi Negocio"
        merchantAccount="1234567890"
        merchantPhone="70123456"
        qrImageSource={qrImage}
        onPaymentInitiated={(ref) => console.log("Pago iniciado:", ref)}
      />
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
