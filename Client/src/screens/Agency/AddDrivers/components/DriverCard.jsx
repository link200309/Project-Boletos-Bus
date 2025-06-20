import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";

const DriverCard = ({ driver, onEdit, onDelete }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.id}>Chofer ID: {driver.id_chofer}</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Nombre:</Text>
        <Text>
          {driver.nombre} {driver.apellido}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Carnet de identidad:</Text>
        <Text>{driver.carnet_identidad}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Celular:</Text>
        <Text>{driver.numero_celular}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Categoria licencia:</Text>
        <Text>{driver.categoria_licencia}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Estado:</Text>
        <Text
          style={driver.estado === "Activo" ? styles.active : styles.inactive}
        >
          {driver.estado}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Direccion:</Text>
        <Text>{driver.direccion_contacto}</Text>
      </View>

      <View style={styles.buttonRow}>
        <ButtonStyle text="Editar" onClick={() => onEdit(driver)} width={120} />
        <ButtonStyle
          text="Eliminar"
          variant={2}
          onClick={() => onDelete(driver.id_chofer)}
          width={120}
        />
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
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
    color: "#555",
  },
  active: {
    color: "green",
    fontWeight: "bold",
  },
  inactive: {
    color: "red",
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    gap: 10,
  },
});

export default DriverCard;
