// TripSummaryScreen.js
import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { GenericContainer } from "../../../components/GenericContainer";
import { BlobBg } from "../../../components/Background/BlobBg";
import { InformativeTitle } from "../../../components/InformativeTitle";
import TabsContainer from "./components/TabsContainer";
import PriceSummaryContainer from "./components/PriceSummaryContainer";

export default function TripSummaryScreen({ navigation, route }) {
  const { formData, travels } = route.params || {};

  return (
    <GenericContainer>
      <BlobBg />
      <InformativeTitle
        title="Detalles de viaje y pasajeros"
        description="Una vez realice la confirmacion, debera realizar el pago y subir el comprobante de pago para finalizar."
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View>
          <TabsContainer passengers={formData} travelDetails={travels} />
          <PriceSummaryContainer
            ticketPrice={travels[0].costo}
            passengerCount={formData.passengers.length}
            travels={travels}
            travelDetails={travels[0]}
            passengers={formData.passengers}
          />
        </View>
      </ScrollView>
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 30,
    paddingTop: 10,
    alignItems: "center",
  },
});
