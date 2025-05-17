// src/screens/Passenger/ReserveSeat/TripSummaryScreen.js
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { GenericContainer } from "../../../components/GenericContainer";
import { BlobBg } from "../../../components/Background/BlobBg";
import { InformativeTitle } from "../../../components/InformativeTitle";
import TabsContainer from "./components/TabsContainer";
import PriceSummaryContainer from "./components/PriceSummaryContainer";

export default function TripSummaryScreen({ navigation }) {
  const handleConfirm = () => {
    console.log("Reserva confirmada");
  };

  return (
    <GenericContainer style={styles.container}>
      <BlobBg />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.informativeTitleContainer}>
            <InformativeTitle
              title="Detalles de viaje y pasajeros"
              description="Una vez realice la confirmacion, debera realizar el pago y subir el comprobante de pago para finalizar."
            />
          </View>

          {/* Contenedor de pestañas */}
          <TabsContainer />

          {/* Contenedor de resumen de precios */}
          <PriceSummaryContainer
            ticketPrice={90}
            passengerCount={2}
            onConfirm={handleConfirm}
          />
        </View>
      </ScrollView>
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 40,
    paddingRight: 40,
  },
  contentContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  informativeTitleContainer: {
    width: "100%",
    marginBottom: 20,
    maxWidth: 340,
  },
});
