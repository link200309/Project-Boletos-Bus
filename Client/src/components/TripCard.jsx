import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TripCard({ trip, onEdit, onCancel }) {
  return (
    <View style={styles.card}>
      <Text style={styles.route}>{trip.from} → {trip.to}</Text>
      <Text style={styles.date}>{trip.date} - {trip.time}</Text>

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
        <TouchableOpacity style={styles.editButton} onPress={() => onEdit(trip.id)}>
          <Text style={styles.editText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => onCancel(trip.id)}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  route: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4B2EC2",
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: "#777",
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  infoColumn: {
    flex: 1,
  },
  label: {
    fontSize: 13,
    color: "#999",
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginVertical: 12,
  },
  buttons: {
    flexDirection: "row",
  },
  editButton: {
    flex: 1,
    backgroundColor: "#4B2EC2",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 6,
  },
  cancelButton: {
    flex: 1,
    borderColor: "#4B2EC2",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 6,
  },
  editText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cancelText: {
    color: "#4B2EC2",
    fontWeight: "bold",
  },
});
