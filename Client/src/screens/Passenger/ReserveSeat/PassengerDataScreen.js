// PassengerDataScreen.jsx
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { GenericContainer } from "../../../components/GenericContainer";
import { BlobBg } from "../../../components/Background/BlobBg";
import { InformativeTitle } from "../../../components/InformativeTitle";
import PassengerCard from "./components/PassengerCard";
import ContactCard from "./components/ContactCard";

export default function PassengerDataScreen({ navigation, route }) {
  const {
    selectedSeats = ["A01"],
    travelDetails = {
      route: "Cochabamba → La Paz",
      date: "Viernes 20 de mayo",
      time: "07:30 → 13:00",
    },
  } = route.params || {};

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
            title={`${passengers.length} pasajeros seleccionados`}
            description={`${travelDetails.route}\n${travelDetails.date} ${travelDetails.time}`}
          />

      <ScrollView>
        <View>
          
          {passengers.map((passenger, index) => (
            <PassengerCard
              key={index}
              index={index}
              passenger={passenger}
              handlePassengerChange={handlePassengerChange}
            />
          ))}

          <ContactCard contact={contact} setContact={setContact} />

          <TouchableOpacity onPress={() => navigation.navigate("TripSummary")}>
            <Text>Continuar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </GenericContainer>
  );
}