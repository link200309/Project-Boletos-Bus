import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../../../components/Style/GlobalStyles";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";
import { SeatGrid } from "./SeatGrid";
import { formatTime, formatDate } from "../../../../utils/dateTime.util";

export const SeatSelection = ({ navigation, asientos, busData, travels }) => {
  const [selectedFloor, setSelectedFloor] = useState("Superior");
  const [selectedSeats, setSelectedSeats] = useState([]);

  const [forceUpdate, setForceUpdate] = useState(0);

  const handleSeatSelection = (seatId) => {
    const asiento = asientos.find((a) => a.id_asiento === seatId);
    if (!asiento) {
      return;
    }

    if (asiento.estado === "Disponible") {
      asiento.estado = "No disponible";
    } else if (asiento.estado === "No disponible") {
      asiento.estado = "Disponible";
    }

    setForceUpdate((prev) => prev + 1);
  };

  const clearSelectedSeats = () => {
    asientos.forEach((asiento) => {
      if (asiento.estado === "No disponible") {
        asiento.estado = "Disponible";
      }
    });
    setForceUpdate((prev) => prev + 1);
  };

  const hasTwoFloors =
    busData &&
    (busData.tipo_bus === "CAMA" ||
      busData.tipo_bus === "dos_pisos" ||
      busData.pisos === 2 ||
      asientos.some((asiento) => asiento.ubicacion === "Inferior"));

  if (!busData || !asientos || asientos.length === 0) {
    return (
      <View style={GlobalStyles.formCard}>
        <Text style={styles.title}>Cargando información del bus...</Text>
        <Text style={styles.debugText}>
          Debug: busData={busData ? "existe" : "no existe"}, asientos=
          {asientos?.length || 0}
        </Text>
      </View>
    );
  }

  const viaje = travels[0];
  const departure = viaje.hora_salida_programada.slice(0, 5);
  const arrival = formatTime(
    viaje.hora_salida_programada,
    viaje.ruta.tiempo_estimado
  );

  const travelDetails = {
    busData,
    route: `${viaje.ruta.origen} - ${viaje.ruta.destino}`,
    price: viaje.costo,
    tipoBus: busData.tipo_bus,
    agencia: viaje.bus.agencia?.nombre_agencia,
    qr: viaje.pago?.ruta_codigo_qr,
    horario: `${departure} - ${arrival}`,
  };

  return (
    <View style={GlobalStyles.formCard}>
      <Text style={styles.title}>Gestión de asientos</Text>

      <View style={styles.legend}>
        <View>
          <View style={styles.legendItem}>
            <View style={[styles.legendBox, styles.availableLegend]} />
            <Text style={styles.legendText}>Disponible</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendBox, styles.unavailableLegend]} />
            <Text style={styles.legendText}>No disponible</Text>
          </View>
        </View>
        <View>
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
        key={forceUpdate} // Agregar key para forzar re-render
        selectedFloor={selectedFloor}
        selectedSeats={selectedSeats}
        onSeatSelect={handleSeatSelection}
        asientos={asientos}
      />

      <ButtonStyle
        text={"Eliminar asientos seleccionados"}
        width="100%"
        onClick={clearSelectedSeats}
        variant={3}
        marginBottom={10}
      />

      <ButtonStyle
        text={"Guardar cambios"}
        width="100%"
        onClick={() => {
          navigation.goBack();
        }}
      />
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
    width: 135,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 16,
    gap: 40,
    marginHorizontal: 10,
  },
});
