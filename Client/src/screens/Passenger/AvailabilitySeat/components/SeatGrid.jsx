import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Seat } from "./Seat";

export const SeatGrid = () => {
  const [selectedFloor, setSelectedFloor] = useState("superior");

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

  const currentSeats =
    selectedFloor === "superior" ? upperFloorSeats : lowerFloorSeats;

  // Filtrar los TV
  const tvSeats = currentSeats.filter((seat) => seat.status === "tv");

  // Filtrar los asientos normales
  const normalSeats = currentSeats.filter((seat) => seat.status !== "tv");

  // Agrupar en filas de 3 normales + 1 TV (por fila)
  const groupedRows = [];
  let i = 0;
  let j = 0;
  while (i < normalSeats.length || j < tvSeats.length) {
    const row = [];
    for (let col = 0; col < 4; col++) {
      if (col === 2) {
        // Tercera columna solo TVs
        if (j < tvSeats.length) {
          row.push({ ...tvSeats[j], col });
          j++;
        } else {
          row.push(null); // Espacio vacío
        }
      } else {
        if (i < normalSeats.length) {
          row.push({ ...normalSeats[i], col });
          i++;
        } else {
          row.push(null);
        }
      }
    }
    groupedRows.push(row);
  }

  return (
    <View style={styles.seatMap}>
      {groupedRows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((seat, colIndex) =>
            seat ? (
              <View
                key={seat.id}
                style={[
                  styles.seatWrapper,
                  colIndex === 2 && styles.tvColumn,
                ]}
              >
                <Seat id={seat.id} status={seat.status} />
              </View>
            ) : (
              <View
                key={`empty-${rowIndex}-${colIndex}`}
                style={[
                  styles.seatWrapper,
                  colIndex === 2 && styles.tvColumn,
                ]}
              />
            )
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  seatMap: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  seatWrapper: {
    flex: 1,
    alignItems: "center",
  },
  tvColumn: {
    flex: 1.5,
  },
});
