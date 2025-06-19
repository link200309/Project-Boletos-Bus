import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

//Components
import { ButtonStyle } from "../../../components/Button/ButtonStyle";
import { PassengerDetailsCard } from "./components/PassengerDetailsCard";

//Utils
import { formatearFechaHora, calcularEdad } from "../../../utils/dateTime.util";

const ReservationDetailsScreen = ({ navigation, route }) => {
  const [reserva, setReserva] = useState(route.params.reserva);
  const handleCambiarEstado = route.params.handleCambiarEstado;
  const viaje = route.params.travel;

  const getEstadoColor = (estado) => {
    switch (estado.toLowerCase()) {
      case "confirmado":
        return "#22C55E";
      case "pendiente":
        return "#F59E0B";
      case "cancelado":
        return "#EF4444";
      default:
        return "#6B7280";
    }
  };

  const getEstadoTexto = (estado) => {
    switch (estado.toLowerCase()) {
      case "confirmado":
        return "Confirmado";
      case "pendiente":
        return "Pendiente";
      case "cancelado":
        return "Cancelado";
      default:
        return estado;
    }
  };

  const openWhatsApp = () => {
    const message = `Hola, le hablamos de la agencia de buses`;
    const whatsappUrl = `https://wa.me/591${usuario.numero_celular
      .toString()
      .replace(/^0+/, "")}?text=${encodeURIComponent(message)}`;

    Alert.alert(
      "Contactar por WhatsApp",
      "Se abrirá WhatsApp para coordinar la reserva",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Abrir WhatsApp",
          onPress: () => {
            Linking.openURL(whatsappUrl).catch((err) =>
              Alert.alert("Error", "No se pudo abrir WhatsApp")
            );
          },
        },
      ]
    );
  };

  if (!reserva) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#7C3AED" barStyle="light-content" />
        <View style={styles.errorContainer}>
          <Icon name="error-outline" size={64} color="#EF4444" />
          <Text style={styles.errorText}>No se pudo cargar la reserva</Text>
          <TouchableOpacity style={styles.retryButton} onPress={cargarReserva}>
            <Text style={styles.retryButtonText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const { pasajero } = reserva;
  const usuario = pasajero.usuario;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#7C3AED" barStyle="light-content" />

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Comprobante y Estado */}
        <View style={styles.comprobanteCard}>
          <View style={styles.comprobanteHeader}>
            <Text style={styles.fechaReserva}>
              Reservado: {formatearFechaHora(reserva.fecha_reserva)}
            </Text>
            <View
              style={[
                styles.estadoBadge,
                { backgroundColor: getEstadoColor(reserva.estado) },
              ]}
            >
              <Text style={styles.estadoText}>
                {getEstadoTexto(reserva.estado)}
              </Text>
            </View>
          </View>
        </View>

        {/* Información de contacto */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="person" size={24} color="#7C3AED" />
            <Text style={styles.cardTitle}>Información de Contacto</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nombre completo:</Text>
            <Text style={styles.infoValue}>
              {usuario.nombre} {usuario.apellido}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Cédula de identidad:</Text>
            <Text style={styles.infoValue}>{usuario.ci}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Edad:</Text>
            <Text style={styles.infoValue}>
              {calcularEdad(pasajero.fecha_nacimiento)} años
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Teléfono:</Text>
            <Text style={styles.infoValue}>{usuario.numero_celular}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Correo electrónico:</Text>
            <Text style={styles.infoValue}>{usuario.correo_electronico}</Text>
          </View>

          <TouchableOpacity
            style={styles.whatsappButton}
            onPress={openWhatsApp}
          >
            <Text style={styles.whatsappButtonText}>
              Contactar por WhatsApp
            </Text>
          </TouchableOpacity>
        </View>

        {reserva.pasajerosSecundarios &&
          reserva.pasajerosSecundarios.map((pasajero, index) => {
            return (
              <PassengerDetailsCard
                pasajero={pasajero}
                index={index}
                key={index}
                calcularEdad={calcularEdad}
              />
            );
          })}

        {/* Información de Pago */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="payment" size={24} color="#7C3AED" />
            <Text style={styles.cardTitle}>Información de Pago</Text>
          </View>

          <View style={styles.precioContainer}>
            <Text style={styles.precioLabel}>Monto Total:</Text>
            <Text style={styles.precioValue}>
              Bs. {viaje.costo * reserva.pasajerosSecundarios.length}
            </Text>
          </View>
        </View>

        <View style={styles.actionsCard}>
          {(reserva.estado.toLowerCase() === "pendiente" ||
            reserva.estado.toLowerCase() === "cancelado") && (
            <ButtonStyle
              text={"Confirmar reserva"}
              onClick={() =>
                handleCambiarEstado(reserva, "confirmado", setReserva)
              }
            />
          )}

          {(reserva.estado.toLowerCase() === "confirmado" ||
            reserva.estado.toLowerCase() === "pendiente") && (
            <ButtonStyle
              text={"Cancelar reserva"}
              variant={2}
              onClick={() => {
                handleCambiarEstado(reserva, "cancelado", setReserva);
              }}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  errorText: {
    fontSize: 18,
    color: "#666",
    marginVertical: 16,
    textAlign: "center",
  },
  retryButton: {
    backgroundColor: "#7C3AED",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  comprobanteCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginVertical: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  comprobanteHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  comprobanteNumero: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  estadoBadge: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  estadoText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  fechaReserva: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
  },
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
  precioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: "#F0FDF4",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#BBF7D0",
  },
  precioLabel: {
    fontSize: 16,
    color: "#166534",
    fontWeight: "600",
  },
  precioValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#15803D",
  },
  actionsCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginBottom: 32,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  whatsappButton: {
    backgroundColor: "#25D366",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
  },
  whatsappButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
});

export default ReservationDetailsScreen;
