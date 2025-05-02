import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TripCard({ trip, onEdit, onCancel }) {
  return (
    <View style={styles.card}>
      <Text style={styles.route}>{trip.from} → {trip.to}</Text>
      <Text style={styles.date}>{trip.date} - {trip.time}</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Agencia: <Text style={styles.value}>{trip.agency}</Text></Text>
        <Text style={styles.label}>Tipo: <Text style={styles.value}>{trip.type}</Text></Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Asientos: <Text style={styles.value}>{trip.seats}</Text></Text>
        <Text style={styles.label}>Total: <Text style={styles.value}>Bs. {trip.total}</Text></Text>
      </View>

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
    marginBottom: 20,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  route: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4B2EC2",
  },
  date: {
    color: "#444",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  label: {
    fontWeight: "600",
    color: "#444",
  },
  value: {
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  editButton: {
    flex: 1,
    backgroundColor: "#4B2EC2",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 5,
  },
  cancelButton: {
    flex: 1,
    borderColor: "#4B2EC2",
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginLeft: 5,
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
