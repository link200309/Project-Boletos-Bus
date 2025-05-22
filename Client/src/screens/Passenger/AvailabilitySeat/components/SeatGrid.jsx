import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { GlobalStyles } from "../../../../components/Style/GlobalStyles";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";

export const SeatGrid = () => {
  const [selectedFloor, setSelectedFloor] = useState("superior"); // 'superior' o 'inferior'
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Datos estáticos de asientos
  const upperFloorSeats = [
    { id: "01", status: "available" },
    { id: "02", status: "available" },
    { id: "TV1", status: "tv" },
    { id: "03", status: "available" },
    { id: "04", status: "available" },
    { id: "05", status: "available" },
    { id: "06", status: "available" },
    { id: "08", status: "available" },
    { id: "09", status: "available" },
    { id: "TV2", status: "tv" },
    { id: "10", status: "occupied" },
    { id: "11", status: "available" },
    { id: "12", status: "occupied" },
    { id: "13", status: "occupied" },
    { id: "14", status: "available" },
    { id: "15", status: "unavailable" },
    { id: "16", status: "occupied" },
    { id: "17", status: "available" },
    { id: "18", status: "available" },
    { id: "19", status: "unavailable" },
  ];

  const lowerFloorSeats = [
    { id: "01", status: "available" },
    { id: "02", status: "available" },
    { id: "03", status: "occupied" },
    { id: "04", status: "available" },
    { id: "05", status: "unavailable" },
    { id: "06", status: "available" },
    { id: "07", status: "available" },
    { id: "08", status: "occupied" },
  ];

  const handleSeatPress = (seatId, status) => {
    if (status === "available" || selectedSeats.includes(seatId)) {
      if (selectedSeats.includes(seatId)) {
        setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
      } else {
        setSelectedSeats([...selectedSeats, seatId]);
      }
    }
  };

  const getSeatStyle = (seat) => {
    if (seat.status === "tv") {
      return styles.tvSeat;
    }
    if (selectedSeats.includes(seat.id)) {
      return styles.selectedSeat;
    }
    switch (seat.status) {
      case "available":
        return styles.availableSeat;
      case "occupied":
        return styles.occupiedSeat;
      case "unavailable":
        return styles.unavailableSeat;
      default:
        return styles.availableSeat;
    }
  };

  const getSeatTextStyle = (seat) => {
    if (seat.status === "tv") {
      return styles.tvText;
    }
    if (selectedSeats.includes(seat.id)) {
      return styles.selectedText;
    }
    if (seat.status === "occupied") {
      return styles.occupiedText;
    }
    if (seat.status === "unavailable") {
      return styles.unavailableText;
    }
    return styles.availableText;
  };

  const renderSeat = (seat) => (
    <TouchableOpacity
      key={seat.id}
      style={[styles.seat, getSeatStyle(seat)]}
      onPress={() => handleSeatPress(seat.id, seat.status)}
      disabled={
        seat.status === "occupied" ||
        seat.status === "unavailable" ||
        seat.status === "tv"
      }
    >
      <Text style={getSeatTextStyle(seat)}>
        {seat.status === "tv" ? "TV" : seat.id}
      </Text>
    </TouchableOpacity>
  );

  const currentSeats =
    selectedFloor === "superior" ? upperFloorSeats : lowerFloorSeats;

  return (
    <View style={styles.seatMap}>
      <ScrollView contentContainerStyle={styles.seatsContainer}>
        {currentSeats.map(renderSeat)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  seatMap: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 16,
  },
  seatsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  seat: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  availableSeat: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#6366F1",
  },
  selectedSeat: {
    backgroundColor: "#6366F1",
  },
  occupiedSeat: {
    backgroundColor: "#EF4444",
  },
  unavailableSeat: {
    backgroundColor: "#6B7280",
  },
  tvSeat: {
    backgroundColor: "#6366F1",
    borderWidth: 2,
    borderColor: "#4F46E5",
  },
  availableText: {
    color: "#6366F1",
    fontWeight: "600",
    fontSize: 12,
  },
  selectedText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 12,
  },
  occupiedText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 12,
  },
  unavailableText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 12,
  },
  tvText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 10,
  },
});
