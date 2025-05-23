import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";
import { GlobalStyles } from "../../../../components/Style/GlobalStyles";

export default function TripCard({ trip, onEdit, onCancel }) {
  return (
    <View style={GlobalStyles.formCard}>
      <Text style={styles.route}>
        {trip.from} → {trip.to}
      </Text>
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
        <ButtonStyle
          text="Editar"
          onClick={() => onEdit(trip.id)}
          width="47%"
          height={40}
          sizeText={16}
        />
        <ButtonStyle
          text="Cancelar"
          onClick={() => onCancel(trip.id)}
          variant={2}
          width="47%"
          height={40}
          sizeText={16}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  route: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4B2EC2",
    marginBottom: 2,
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
