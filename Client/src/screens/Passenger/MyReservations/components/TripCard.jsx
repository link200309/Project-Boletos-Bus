import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";
import { GlobalStyles } from "../../../../components/Style/GlobalStyles";

export default function TripCard({ trip, navigation, reservaCompleta }) {
  const getStatusStyle = (estado) => {
    switch (estado?.toLowerCase()) {
      case "confirmado":
        return { backgroundColor: "#4CAF50", color: "#fff" };
      case "pendiente":
        return { backgroundColor: "#FF9800", color: "#fff" };
      case "cancelada":
        return { backgroundColor: "#F44336", color: "#fff" };
      default:
        return { backgroundColor: "#9E9E9E", color: "#fff" };
    }
  };
  const getStatusText = (estado) => {
    switch (estado?.toLowerCase()) {
      case "confirmado":
        return "Confirmado";
      case "pendiente":
        return "Pendiente";
      case "cancelada":
        return "Cancelada";
      default:
        return "Desconocido";
    }
  };
  // función para ver detalles
  const handleViewDetails = () => {
    navigation.navigate("ViewDetails", {
      reservaCompleta: reservaCompleta,
    });
  };
  // función para pagar reserva
  const handlePayReservation = () => {
    navigation.navigate("PayReservation", {
      payDetails: trip,
    });
  };

  return (
    <View style={GlobalStyles.formCard}>
      <View style={styles.header}>
        <Text style={styles.route}>
          {trip.from} → {trip.to}
        </Text>
        <View style={[styles.statusBadge, getStatusStyle(trip.estado)]}>
          <Text
            style={[
              styles.statusText,
              { color: getStatusStyle(trip.estado).color },
            ]}
          >
            {getStatusText(trip.estado)}
          </Text>
        </View>
      </View>

      <Text style={styles.date}>
        {trip.date} - {trip.time}
      </Text>

      <View style={styles.infoRow}>
        <View style={styles.infoColumn}>
          <Text style={styles.label}>Agencia:</Text>
          <Text style={styles.value}>{trip.agency}</Text>
        </View>
        <View style={styles.infoColumn}>
          <Text style={styles.label}>Tipo:</Text>
          <Text style={styles.value}>{trip.type}</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.infoColumn}>
          <Text style={styles.label}>Asientos:</Text>
          <Text style={styles.value}>{trip.seats}</Text>
        </View>
        <View style={styles.infoColumn}>
          <Text style={styles.label}>Total:</Text>
          <Text style={styles.value}>Bs. {trip.total}</Text>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.buttons}>
        {trip.estado?.toLowerCase() === "pendiente" ? (
          <>
            <ButtonStyle
              text="Ver Detalles"
              onClick={handleViewDetails}
              variant={2}
              width="45%"
              height={40}
              sizeText={16}
            />
            <ButtonStyle
              text="Pagar Reserva"
              onClick={handlePayReservation}
              width="45%"
              height={40}
              sizeText={16}
            />
          </>
        ) : (
          <ButtonStyle
            text="Ver Detalles"
            onClick={handleViewDetails}
            variant={2}
            width="100%"
            height={40}
            sizeText={16}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  route: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4B2EC2",
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    marginLeft: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  date: {
    fontSize: 12,
    color: "#777",
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  infoColumn: {
    flexDirection: "row",
    gap: 8,
    width: "48%",
  },
  label: {
    fontSize: 13,
    color: "#999",
  },
  value: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#000",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginTop: 8,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
