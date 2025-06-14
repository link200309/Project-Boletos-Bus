import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Seat } from "./Seat";

export const SeatGrid = ({ selectedFloor, onSeatSelect, asientos }) => {
  const getStatusFromAPI = (estado) => {
    switch (estado) {
      case "Disponible":
        return "available";
      case "Reservado":
        return "occupied";
      case "No disponible":
      case "Mantenimiento":
        return "unavailable";
      default:
        return "available";
    }
  };

  const getSeatsForFloor = () => {
    if (!asientos || asientos.length === 0) return [];
    const hasMultipleFloors = asientos.some(
      (asiento) =>
        asiento.ubicacion === "Inferior" || asiento.piso === "Inferior"
    );
    if (!hasMultipleFloors) {
      return asientos;
    }
    return asientos.filter((asiento) => {
      const seatFloor = asiento.ubicacion || asiento.piso || "Superior";
      return seatFloor.toLowerCase() === selectedFloor.toLowerCase();
    });
  };

  const floorSeats = getSeatsForFloor();

  const convertedSeats = floorSeats.map((asiento) => ({
    id: asiento.id_asiento,
    status: getStatusFromAPI(asiento.estado),
    numero: parseInt(asiento.numero_asiento || asiento.numero || 0),
    ubicacion: asiento.ubicacion || asiento.piso,
    estado: asiento.estado, // Mantenemos el estado original para referencia
  }));

  const sortedSeats = convertedSeats.sort((a, b) => a.numero - b.numero);

  const getOrderedLayout = () => {
    if (sortedSeats.length === 0) return [];
    const rows = [];
    const seatsPerRow = 4; // 2 + 2 asientos por fila
    for (let i = 0; i < sortedSeats.length; i += seatsPerRow) {
      const rowSeats = sortedSeats.slice(i, i + seatsPerRow);
      const row = [null, null, null, null];
      rowSeats.forEach((seat, index) => {
        if (index < 4) {
          row[index] = seat;
        }
      });
      rows.push(row);
    }
    return rows;
  };

  const seatLayout = getOrderedLayout();

  if (!asientos || asientos.length === 0) {
    return (
      <View style={styles.seatMap}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No hay asientos disponibles</Text>
        </View>
      </View>
    );
  }

  if (floorSeats.length === 0) {
    return (
      <View style={styles.seatMap}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>
            No hay asientos en el {selectedFloor.toLowerCase()} piso
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.seatMap}>
      {seatLayout.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          <View style={styles.seatGroup}>
            {row.slice(0, 2).map((seat, colIndex) =>
              seat ? (
                <View key={seat.id} style={styles.seatWrapper}>
                  <Seat
                    id={seat.id}
                    numero={seat.numero}
                    status={seat.status}
                    isSelected={false} // Ya no hay selección, solo cambio de estado
                    onPress={onSeatSelect}
                    canModify={
                      seat.estado === "Disponible" ||
                      seat.estado === "No disponible"
                    }
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
          <View style={styles.aisle} />
          <View style={styles.seatGroup}>
            {row.slice(2, 4).map((seat, colIndex) =>
              seat ? (
                <View key={seat.id} style={styles.seatWrapper}>
                  <Seat
                    id={seat.id}
                    numero={seat.numero}
                    status={seat.status}
                    isSelected={false} // Ya no hay selección, solo cambio de estado
                    onPress={onSeatSelect}
                    canModify={
                      seat.estado === "Disponible" ||
                      seat.estado === "No disponible"
                    }
                  />
                </View>
              ) : (
                <View
                  key={`empty-${rowIndex}-${colIndex + 2}`}
                  style={styles.seatWrapper}
                />
              )
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  seatMap: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 16,
  },
  floorTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1A1A1A",
    textAlign: "center",
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  seatGroup: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
  },
  seatWrapper: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 40,
  },
  aisle: {
    width: 60,
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  emptyText: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
  },
});
