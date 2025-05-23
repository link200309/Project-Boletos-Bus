import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export const Seat = ({ id, status, isSelected, onPress }) => {
  const handleSeatPress = () => {
    if (status === "available") {
      onPress(id);
    }
  };

  const getSeatStyle = () => {
    if (status === "tv") {
      return styles.tvSeat;
    }
    if (isSelected) {
      return styles.selectedSeat;
    }
    switch (status) {
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

  const getSeatTextStyle = () => {
    if (status === "tv") {
      return styles.tvText;
    }
    if (isSelected) {
      return styles.selectedText;
    }
    if (status === "occupied") {
      return styles.occupiedText;
    }
    if (status === "unavailable") {
      return styles.unavailableText;
    }
    return styles.availableText;
  };

  return (
    <TouchableOpacity
      style={[styles.seat, getSeatStyle()]}
      onPress={handleSeatPress}
      disabled={
        status === "occupied" || status === "unavailable" || status === "tv"
      }
    >
      <Text style={getSeatTextStyle()}>{status === "tv" ? "TV" : id}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    color: "#4318D1",
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
    color: "#FFF",
    fontWeight: "600",
    fontSize: 12,
  },
  tvText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 10,
  },
});
