//React
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";

export const PassengerDetailsCard = ({ pasajero, index, calcularEdad }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.headerContainer} onPress={toggleCollapse}>
        <View style={styles.cardHeader}>
          <Icon name="person" size={24} color="#7C3AED" />
          <Text style={styles.cardTitle}>
            Informacion de pasajero {index + 1}
          </Text>
        </View>

        <Icon
          name={isCollapsed ? "expand-more" : "expand-less"}
          size={26}
          color="#666666"
        />
      </TouchableOpacity>

      {!isCollapsed && (
        <>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nombre completo:</Text>
            <Text style={styles.infoValue}>
              {pasajero.nombre} {pasajero.apellido}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Cédula de identidad:</Text>
            <Text style={styles.infoValue}>{pasajero.ci}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Edad:</Text>
            <Text style={styles.infoValue}>
              {calcularEdad(pasajero.fecha_nacimiento)} años
            </Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Icon name="event-seat" size={24} color="#7C3AED" />
              <Text style={styles.cardTitle}>Asiento Asignado</Text>
            </View>

            <View style={styles.asientoInfo}>
              <View style={styles.asientoVisual}>
                <Text style={styles.asientoNumero}>
                  {pasajero.asiento.numero}
                </Text>
              </View>
              <View style={styles.asientoDetails}>
                <Text style={styles.asientoTipo}>
                  {pasajero.asiento.ubicacion}
                </Text>
                <Text style={styles.asientoId}>
                  ID: {pasajero.asiento.id_asiento}
                </Text>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  infoLabel: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    flex: 1,
    textAlign: "right",
  },
  asientoInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  asientoVisual: {
    width: 50,
    height: 50,
    backgroundColor: "#7C3AED",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  asientoNumero: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  asientoDetails: {
    flex: 1,
  },
  asientoTipo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  asientoId: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
});
