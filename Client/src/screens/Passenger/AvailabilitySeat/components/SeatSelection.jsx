import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../../../components/Style/GlobalStyles";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";
import { SeatGrid } from "./SeatGrid";

export const SeatSelection = () => {
  const [selectedFloor, setSelectedFloor] = useState("superior"); // 'superior' o 'inferior'
  const [selectedSeats, setSelectedSeats] = useState([]);

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

      <View style={styles.rowButton}>
        <ButtonStyle
          text={"Piso Superior"}
          onClick={() => setSelectedFloor("superior")}
          variant={[selectedFloor === "superior" ? 1 : 2]}
          height={40}
          sizeText={14}
        />
        <ButtonStyle
          text={"Piso Inferior"}
          onClick={() => setSelectedFloor("inferior")}
          variant={[selectedFloor === "inferior" ? 1 : 2]}
          height={40}
          sizeText={14}
        />
      </View>

      <SeatGrid />

      <View style={styles.footer}>
        <View>
          <Text style={styles.selectedCount}>Asientos seleccionados</Text>
          <Text style={styles.selectedNumber}>
            {selectedSeats.length} asiento(s)
          </Text>
        </View>
        <ButtonStyle text={"Continuar"} />
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
