import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { GlobalStyles } from "../../../../components/Style/GlobalStyles";

const SeatSelection = () => {
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
    <View style={GlobalStyles.formCard}>
      <Text style={styles.title}>Selección de asientos</Text>
      <View style={styles.legend}>
        <View>
          <View style={styles.legendItem}>
            <View style={[styles.legendBox, styles.availableLegend]} />
            <Text style={styles.legendText}>Disponible</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendBox, styles.selectedLegend]} />
            <Text style={styles.legendText}>Seleccionado</Text>
          </View>
        </View>
        <View>
          <View style={styles.legendItem}>
            <View style={[styles.legendBox, styles.unavailableLegend]} />
            <Text style={styles.legendText}>No disponible</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendBox, styles.occupiedLegend]} />
            <Text style={styles.legendText}>Ocupado</Text>
          </View>
        </View>
      </View>

      {/* Botones de piso */}
      <View style={styles.rowButton}>
        <TouchableOpacity
          style={[
            styles.floorButton,
            selectedFloor === "superior"
              ? styles.activeFloorButton
              : styles.inactiveFloorButton,
          ]}
          onPress={() => setSelectedFloor("superior")}
        >
          <Text
            style={[
              styles.floorButtonText,
              selectedFloor === "superior"
                ? styles.activeFloorButtonText
                : styles.inactiveFloorButtonText,
            ]}
          >
            Piso Superior
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.floorButton,
            selectedFloor === "inferior"
              ? styles.activeFloorButton
              : styles.inactiveFloorButton,
          ]}
          onPress={() => setSelectedFloor("inferior")}
        >
          <Text
            style={[
              styles.floorButtonText,
              selectedFloor === "inferior"
                ? styles.activeFloorButtonText
                : styles.inactiveFloorButtonText,
            ]}
          >
            Piso Inferior
          </Text>
        </TouchableOpacity>
      </View>

      {/* Mapa de asientos */}
      <View style={styles.seatMap}>
        <ScrollView contentContainerStyle={styles.seatsContainer}>
          {currentSeats.map(renderSeat)}
        </ScrollView>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.selectedCount}>Asientos seleccionados</Text>
        <Text style={styles.selectedNumber}>
          {selectedSeats.length} asiento(s)
        </Text>

        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 16,
  },
  legend: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
    justifyContent: "space-between",
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
    marginBottom: 8,
  },
  legendBox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    marginRight: 6,
  },
  availableLegend: {
    borderWidth: 1,
    borderColor: "#6366F1",
  },
  selectedLegend: {
    backgroundColor: "#6366F1",
  },
  unavailableLegend: {
    backgroundColor: "#6B7280",
  },
  occupiedLegend: {
    backgroundColor: "#EF4444",
  },
  legendText: {
    fontSize: 14,
    color: "#1A1D1F",
  },
  rowButton: {
    flexDirection: "row",
    marginBottom: 16,
    gap: 12,
  },
  floorButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  activeFloorButton: {
    backgroundColor: "#6366F1",
  },
  inactiveFloorButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#6366F1",
  },
  floorButtonText: {
    fontSize: 14,
    fontWeight: "600",
  },
  activeFloorButtonText: {
    color: "#FFFFFF",
  },
  inactiveFloorButtonText: {
    color: "#6366F1",
  },
  seatMap: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 16,
    minHeight: 300,
    marginBottom: 16,
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
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingTop: 16,
  },
  selectedCount: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 4,
  },
  selectedNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6366F1",
    marginBottom: 16,
  },
  continueButton: {
    backgroundColor: "#6366F1",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default SeatSelection;
