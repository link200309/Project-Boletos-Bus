// src/screens/Passenger/ReserveSeat/PassengerDataScreen.js
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { GenericContainer } from "../../../components/GenericContainer";
import { BlobBg } from "../../../components/Background/BlobBg";
import { InformativeTitle } from "../../../components/InformativeTitle";
import { PassengerCard } from "./components/PassengerCard";
import { ContactCard } from "./components/ContactCard";

export default function PassengerDataScreen({ navigation, route }) {
  const {
    selectedSeats = ["A01", "A02"],
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
    <GenericContainer style={styles.container}>
      <BlobBg />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.informativeTitleContainer}>
            <InformativeTitle
              title={`${passengers.length} pasajeros seleccionados`}
              description={`${travelDetails.route}\n${travelDetails.date} ${travelDetails.time}`}
            />
          </View>

          {passengers.map((passenger, index) => (
            <PassengerCard
              key={index}
              index={index}
              passenger={passenger}
              handlePassengerChange={handlePassengerChange}
              containerStyle={styles.card}
            />
          ))}

          <ContactCard
            contact={contact}
            setContact={setContact}
            containerStyle={styles.card}
          />

          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => navigation.navigate("TripSummary")}
          >
            <Text style={styles.continueButtonText}>Continuar</Text>
          </TouchableOpacity>
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
    paddingLeft: 20,
  },
  scrollContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 40,
  },
  contentContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "95%",
  },
  informativeTitleContainer: {
    width: "100%",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    marginHorizontal: 10,
    marginVertical: 15,
  },
  continueButton: {
    backgroundColor: "#4B2EC2",
    padding: 15,
    borderRadius: 8,
    marginVertical: 20,
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  continueButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
