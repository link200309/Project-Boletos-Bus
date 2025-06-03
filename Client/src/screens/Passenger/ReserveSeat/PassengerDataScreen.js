import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { GenericContainer } from "../../../components/GenericContainer";
import { BlobBg } from "../../../components/Background/BlobBg";
import { InformativeTitle } from "../../../components/InformativeTitle";
import PassengerCard from "./components/PassengerCard";
import ContactCard from "./components/ContactCard";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";
import { formatDate } from "../../../utils/dateTime.util";

export default function PassengerDataScreen({ navigation, route }) {
  const { selectedSeats, travelDetails, travels } = route.params || {};
  const [passengers, setPassengers] = useState(
    selectedSeats.map((seat) => ({
      seat,
      firstName: "",
      lastName: "",
      identityNumber: "",
      birthDate: "",
    }))
  );
  const [contact, setContact] = useState({ email: "", phone: "" });
  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][field] = value;
    setPassengers(updatedPassengers);
  };

  return (
    <GenericContainer>
      <BlobBg />
      <InformativeTitle
        title={`${passengers.length} asientos seleccionados`}
        description={`${travels[0].ruta.origen} - ${travels[0].ruta.destino}\n${
          formatDate(travels[0].fecha_salida).formatedDate
        }`}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {passengers.map((passenger, index) => (
          <PassengerCard
            key={index}
            index={index}
            passenger={passenger}
            handlePassengerChange={handlePassengerChange}
          />
        ))}

        <ContactCard contact={contact} setContact={setContact} />

        <ButtonStyle
          text="Continuar"
          onClick={() =>
            navigation.navigate("TripSummary", {
              passengers,
              contact,
              travelDetails,
              travels,
            })
          }
        />
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
