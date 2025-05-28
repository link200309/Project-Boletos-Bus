import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";

const BusCard = ({ bus, onEdit, onDelete }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.id}>Bus ID: {bus.id_bus}</Text>

      <View style={styles.row}>
        <Text>Placa: {bus.placa}</Text>
        <Text>Asientos: {bus.asientos?.length ?? 0}</Text>
      </View>

      <View style={styles.row}>
        <Text>Tipo: {bus.tipo_bus}</Text>
        <Text>Marca: {bus.marca}</Text>
      </View>

      <View style={styles.row}>
        <Text>Año: {bus.año_modelo}</Text>
        <Text>Modelo: {bus.modelo}</Text>
      </View>

      <View style={styles.row}>
        <Text>Estado: {bus.estado}</Text>
        <Text>ID Agencia: {bus.id_agencia}</Text>
      </View>

      <View style={styles.buttonRow}>
        <ButtonStyle text="Editar" onClick={() => onEdit(bus)} width={120} />
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
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
});

export default BusCard;
