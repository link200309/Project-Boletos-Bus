import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { GenericContainer } from "../../../components/GenericContainer";
import { BlobBg } from "../../../components/Background/BlobBg";
import { InformativeTitle } from "../../../components/InformativeTitle";
import PaymentSummaryCard from "./components/PaymentSummaryCard";

export default function PaymentDetailsScreen({ navigation, route }) {
  // Datos simulados, reemplaza por route.params si vienen desde otra pantalla
  const summaryData = {
    count: 2,
    seatNumbers: ["18A", "19A"],
    price: 90,
    total: 180,
    qrData: "https://ejemplo.com/pago?id=1234", // puede ser ID de reserva u otro
  };

  const handleConfirm = () => {
    navigation.navigate("ReservaExitosaScreen"); // Asegúrate que exista este screen
  };

  return (
    <GenericContainer>
      <BlobBg />
      <InformativeTitle
        title="Detalles de pago"
        description="Una vez realice el pago envíe su comprobante"
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <PaymentSummaryCard summary={summaryData} onConfirm={handleConfirm} />
      </ScrollView>
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingTop: 10,
    paddingBottom: 30,
    alignItems: "center",
    width: "100%",
  },
});
