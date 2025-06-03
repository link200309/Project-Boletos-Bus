import React, { useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { GenericContainer } from "../../../components/GenericContainer";
import { BlobBg } from "../../../components/Background/BlobBg";
import { InformativeTitle } from "../../../components/InformativeTitle";
import PaymentSummaryCard from "./components/PaymentSummaryCard";
import PaymentActionButtons from "./components/PaymentActionButtons";

export default function PaymentDetailsScreen({ navigation }) {
  const summaryRef = useRef();

  const summaryData = {
    departureTime: "15:00",
    busNumber: "BUS-58",
    count: 2,
    seatNumbers: ["18A", "19A"],
    price: 90,
    total: 180,
    qrData: "https://ejemplo.com/pago?id=1234",
  };

  const handleConfirm = () => {
    navigation.navigate("ReservaExitosaScreen");
  };

  return (
    <GenericContainer>
      <BlobBg />
      <InformativeTitle
        title="Detalles de pago"
        description="Una vez realice el pago envíe su comprobante"
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <PaymentSummaryCard summary={summaryData} ref={summaryRef} />
        <PaymentActionButtons summaryRef={summaryRef} onConfirm={handleConfirm} />
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
