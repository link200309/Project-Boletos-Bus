import React from "react";
import { View, StyleSheet } from "react-native";
import { Seat } from "./Seat";

export const SeatGrid = ({
  selectedFloor,
  selectedSeats,
  onSeatSelect,
  asientos,
  busData,
}) => {
  const getStatusFromAPI = (estado) => {
    switch (estado) {
      case "Disponible":
        return "available";
      case "Ocupado":
        return "occupied";
      case "No disponible":
      case "Mantenimiento":
        return "unavailable";
      default:
        return "available";
    }
  };

  const convertedSeats = asientos.map((asiento) => ({
    id: asiento.id_asiento,
    status: getStatusFromAPI(asiento.estado),
    numero: asiento.numero_asiento || asiento.numero,
    fila: asiento.fila,
    columna: asiento.columna,
    ubicacion: asiento.ubicacion || asiento.piso,
  }));

  const organizeSeats = (seats) => {
    if (!seats || seats.length === 0) return [];

    const maxRow = Math.max(...seats.map((s) => s.fila || 1));
    const maxCol = Math.max(...seats.map((s) => s.columna || 1));

    const rows = [];

    for (let row = 1; row <= maxRow; row++) {
      const seatRow = [];
      for (let col = 1; col <= maxCol; col++) {
        const seat = seats.find(
          (s) => (s.fila || 1) === row && (s.columna || 1) === col
        );
        seatRow.push(seat || null);
      }
      rows.push(seatRow);
    }

    return rows;
  };

  const getDefaultLayout = () => {
    const defaultSeats = [];
    const seatsPerRow = 4;
    const numRows = Math.ceil(convertedSeats.length / seatsPerRow);

    for (let row = 0; row < numRows; row++) {
      const seatRow = [];
      for (let col = 0; col < seatsPerRow; col++) {
        const seatIndex = row * seatsPerRow + col;
        if (seatIndex < convertedSeats.length) {
          seatRow.push(convertedSeats[seatIndex]);
        } else {
          seatRow.push(null);
        }
      }
      defaultSeats.push(seatRow);
    }

    return defaultSeats;
  };

  const seatLayout =
    convertedSeats.length > 0 && convertedSeats[0].fila
      ? organizeSeats(convertedSeats)
      : getDefaultLayout();

  if (!asientos || asientos.length === 0) {
    return (
      <View style={styles.seatMap}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No hay asientos disponibles</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.seatMap}>
      {seatLayout.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((seat, colIndex) =>
            seat ? (
              <View key={seat.id} style={styles.seatWrapper}>
                <Seat
                  id={seat.id}
                  numero={seat.numero}
                  status={seat.status}
                  isSelected={selectedSeats.includes(seat.id)}
                  onPress={onSeatSelect}
                />
              </View>
            ) : (
              <View
                key={`empty-${rowIndex}-${colIndex}`}
                style={styles.seatWrapper}
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
  },
  seatWrapper: {
    flex: 1,
    alignItems: "center",
  },
  tvColumn: {
    flex: 1.5,
  },
});
