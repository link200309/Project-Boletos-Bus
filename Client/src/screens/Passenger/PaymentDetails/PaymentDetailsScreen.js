// PaymentDetailsScreen.js
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { GenericContainer } from "../../../components/GenericContainer";
import { BlobBg } from "../../../components/Background/BlobBg";
import { InformativeTitle } from "../../../components/InformativeTitle";
import PaymentSummaryCard from "./components/PaymentSummaryCard";
import PaymentActionButtons from "./components/PaymentActionButtons";

export default function PaymentDetailsScreen({ navigation, route }) {
  const {
    travels = [],
    travelDetails = {},
    passengers = [],
    contact = {},
  } = route?.params || {};

  console.log("🧾 PaymentDetails received:", { travels, travelDetails, passengers, contact });

  // Validar antes de usar
  const seatNumbers = Array.isArray(passengers) ? passengers.map(p => p.seat) : [];
  const price = parseFloat(travelDetails.price || 0);
  const total = (price * seatNumbers.length).toFixed(2);

  const summaryData = {
    horario: travelDetails.horario || "N/D",
    count: seatNumbers.length,
    seatNumbers,
    price,
    total,
    busId: travelDetails.busData?.id_bus || "N/D",
    qrData: travelDetails.qr,
  };

  const handleConfirm = () => {
    navigation.navigate("ReservaExitosaScreen");
  };

  return (
    <GenericContainer>
      <BlobBg />
      <InformativeTitle
        title="Detalles de pago"
        description="Una vez realice el pago, puede compartir o guardar el comprobante"
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <PaymentSummaryCard summary={summaryData} onConfirm={handleConfirm} />
        <PaymentActionButtons summaryRef={null} onConfirm={handleConfirm} />
      </ScrollView>
    </GenericContainer>
  );
}


const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
    alignItems: "center",
  },
});
