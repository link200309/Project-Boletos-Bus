import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../../../components/Style/GlobalStyles";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";
import { SeatGrid } from "./SeatGrid";
import { formatTime } from "../../AvailabilitySchedules/utils"; 


export const SeatSelection = ({ navigation }) => {
  const onSubmit = (data) => {
    navigation.navigate("AvailabilitySeat", { formData: data });
  };
  const [selectedFloor, setSelectedFloor] = useState("superior");
  const [selectedSeats, setSelectedSeats] = useState([]);

  const getAsientosByFloor = (floor) => {
    if (!asientos || asientos.length === 0) return [];

    return asientos.filter((asiento) => {
      return asiento.ubicacion === floor || asiento.piso === floor;
    });
  };

  const handleSeatSelection = (seatId) => {
    const asiento = asientos.find((a) => a.id_asiento === seatId);
    if (!asiento || asiento.estado !== "Disponible") {
      return;
    }

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const onSubmit = () => {
    if (selectedSeats.length === 0) {
      alert("Por favor selecciona al menos un asiento");
      return;
    }
    const selectedSeatsData = asientos.filter((asiento) =>
      selectedSeats.includes(asiento.id_asiento)
    );

    const formData = {
      selectedSeats: selectedSeatsData,
      busData: busData,
      totalSeats: selectedSeats.length,
    };

    navigation.navigate("AvailabilitySeat", { formData });
  };

  const hasTwoFloors =
    busData &&
    (busData.tipo_bus === "dos_pisos" ||
      busData.pisos === 2 ||
      asientos.some((asiento) => asiento.ubicacion === "Inferior"));

  return (
    <View style={GlobalStyles.formCard}>
      <Text style={styles.title}>Selección de asientos</Text>

      {busData && (
        <Text style={styles.busInfo}>
          {busData.modelo || "Bus"} - {busData.capacidad || asientos.length}{" "}
          asientos
        </Text>
      )}

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

      {hasTwoFloors && (
        <View style={styles.rowButton}>
          <ButtonStyle
            text={"Piso Superior"}
            onClick={() => setSelectedFloor("Superior")}
            variant={selectedFloor === "Superior" ? 1 : 2}
            height={40}
            sizeText={14}
          />
          <ButtonStyle
            text={"Piso Inferior"}
            onClick={() => setSelectedFloor("Inferior")}
            variant={selectedFloor === "Inferior" ? 1 : 2}
            height={40}
            sizeText={14}
          />
        </View>
      )}

      <SeatGrid
        selectedFloor={selectedFloor}
        selectedSeats={selectedSeats}
        onSeatSelect={handleSeatSelection}
      />

      <View style={styles.footer}>
        <View>
          <Text style={styles.selectedCount}>Asientos seleccionados</Text>
          <Text style={styles.selectedNumber}>
            {selectedSeats.length} asiento(s)
          </Text>
          {selectedSeats.length > 0 && (
            <Text style={styles.seatNumbers}>
              Asientos:{" "}
              {selectedSeats
                .map((id) => {
                  const asiento = asientos.find((a) => a.id_asiento === id);
                  return asiento
                    ? asiento.numero_asiento || asiento.numero
                    : id;
                })
                .join(", ")}
            </Text>
          )}
        </View>
       <ButtonStyle
          text={"Continuar"}
          onClick={() =>
            navigation.navigate("PassengerData", {
              selectedSeats,
              travelDetails: {
                route: `${travel.ruta.origen} → ${travel.ruta.destino}`,
                date: new Date(travel.fecha_salida).toLocaleDateString("es-ES"),
                time: `${travel.hora_salida_programada.slice(0, 5)} → ${
                  formatTime(travel.hora_salida_programada, parseFloat(travel.ruta.tiempo_estimado))
                }`,
                price: parseFloat(travel.costo),
                tipoBus: travel.bus.tipo_bus,
                agencia: travel.bus.agencia.nombre_agencia,
              },
            })
          }
        />

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
    width: 145,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 16,
    gap: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingTop: 16,
    width: 150,
    gap: 20,
  },
  selectedCount: {
    fontSize: 14,
    color: "#6F767E",
    marginBottom: 4,
  },
  selectedNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4318D1",
    marginBottom: 16,
  },
});
