import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";

const BusCard = ({ bus, onEdit, onDelete }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.id}>Bus ID: {bus.id_bus}</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Placa:</Text>
        <Text>{bus.placa}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Asientos:</Text>
        <Text>{bus.asientos?.length ?? 0}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Tipo:</Text>
        <Text>{bus.tipo_bus}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Marca:</Text>
        <Text>{bus.marca}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Año:</Text>
        <Text>{bus.año_modelo}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Modelo:</Text>
        <Text>{bus.modelo}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Estado:</Text>
        <Text>{bus.estado}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>ID Agencia:</Text>
        <Text>{bus.id_agencia}</Text>
      </View>

      <View style={styles.buttonRow}>
        <ButtonStyle text="Editar" onClick={() => onEdit(bus)} width={120} backgroundColorcolor="#000" />
        <ButtonStyle text="Eliminar" variant={2} onClick={() => onDelete(bus.id_bus)} width={120} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
    width: "100%",
    maxWidth: 400,
    elevation: 3,
  },
  id: {
    color: "#4318D1",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  label: {
    fontWeight: "bold",
    color: "#555",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
});

export default BusCard;
