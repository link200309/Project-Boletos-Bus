// PaymentDetailsScreen.js
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { GenericContainer } from "../../../components/GenericContainer";
import { BlobBg } from "../../../components/Background/BlobBg";
import { InformativeTitle } from "../../../components/InformativeTitle";
import PaymentSummaryCard from "./components/PaymentSummaryCard";
import PaymentActionButtons from "./components/PaymentActionButtons";
import { formatTime } from "../../../utils/dateTime.util";


export default function PaymentDetailsScreen({ navigation, route }) {
  const {
    travels = [],
    travelDetails = {},
    passengers = [],
    contact = {},
  } = route?.params || {};

  console.log("contact: ", {
    contact,
  });
  console.log("pasajeros: ", {
    passengers,
  });
  console.log("travels details: ", {
    travelDetails,
  });
  console.log("travels: ", {
    travels,
  });

  const seatNumbers = Array.isArray(passengers)
    ? passengers.map((p) => p.seat)
    : [];
  const price = parseFloat(travelDetails.costo || 0).toFixed(2);
  const total = (price * seatNumbers.length).toFixed(2);
  const horario = `${travelDetails.hora_salida_programada.slice(
    0,
    5
  )} - ${formatTime(
    travelDetails.hora_salida_programada,
    travelDetails.ruta.tiempo_estimado
  )}`;

  const summaryData = {
    horario: horario || "N/D",
    count: seatNumbers.length,
    seatNumbers,
    price,
    total,
    busId: travelDetails.bus?.id_bus || "N/D",
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
    paddingBottom: 40,
    alignItems: "center",
  },
});
