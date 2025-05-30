// TripSummaryScreen.js
import React from "react";
import { ScrollView, View } from "react-native";
import { GenericContainer } from "../../../components/GenericContainer";
import { BlobBg } from "../../../components/Background/BlobBg";
import { InformativeTitle } from "../../../components/InformativeTitle";
import TabsContainer from "./components/TabsContainer";
import PriceSummaryContainer from "./components/PriceSummaryContainer";

export default function TripSummaryScreen({ navigation, route }) {
  const { passengers = [], contact = {} } = route.params || {};

  const handleConfirm = () => {
    alert("Reserva confirmada");
  };

  return (
    <GenericContainer>
      <BlobBg />
      <InformativeTitle
        title="Detalles de viaje y pasajeros"
        description="Una vez realice la confirmacion, debera realizar el pago y subir el comprobante de pago para finalizar."
      />
      <ScrollView>
        <View>
          <TabsContainer passengers={passengers} contact={contact} />
          <PriceSummaryContainer ticketPrice={90} passengerCount={passengers.length} onConfirm={handleConfirm} />
        </View>
      </ScrollView>
    </GenericContainer>
  );
}
