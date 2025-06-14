import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";

const ReservationDetailsScreen = ({ navigation, route }) => {
  const [reserva, setReserva] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleCambiarEstado = route.params.handleCambiarEstado;

  useEffect(() => {
    cargarReserva();
  }, []);

  const cargarReserva = async () => {
    setLoading(true);
    try {
      setReserva(route.params.reserva);
    } catch (error) {
      console.error("Error al cargar reserva:", error);
      setLoading(false);
      Alert.alert("Error", "No se pudo cargar la información de la reserva");
    } finally {
      setLoading(false);
    }
  };

  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatearFechaHora = (fechaISO) => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }

    return edad;
  };

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

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#7C3AED" barStyle="light-content" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#7C3AED" />
          <Text style={styles.loadingText}>Cargando reserva...</Text>
        </View>
      </SafeAreaView>
    );
  }

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

  const { pasajero, asiento } = reserva;
  const viaje = route.params.travel;
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
            <Text style={styles.comprobanteNumero}>{reserva.comprobante}</Text>
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
          <Text style={styles.fechaReserva}>
            Reservado: {formatearFechaHora(reserva.fecha_reserva)}
          </Text>
        </View>

        {/* Información del Pasajero */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="person" size={24} color="#7C3AED" />
            <Text style={styles.cardTitle}>Información del Pasajero</Text>
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
        </View>

        {/* Información del Asiento */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="event-seat" size={24} color="#7C3AED" />
            <Text style={styles.cardTitle}>Asiento Asignado</Text>
          </View>

          <View style={styles.asientoInfo}>
            <View style={styles.asientoVisual}>
              <Text style={styles.asientoNumero}>{asiento.numero}</Text>
            </View>
            <View style={styles.asientoDetails}>
              <Text style={styles.asientoTipo}>{asiento.ubicacion}</Text>
              <Text style={styles.asientoId}>ID: {reserva.id_asiento}</Text>
            </View>
          </View>
        </View>

        {/* Información de Pago */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="payment" size={24} color="#7C3AED" />
            <Text style={styles.cardTitle}>Información de Pago</Text>
          </View>

          <View style={styles.precioContainer}>
            <Text style={styles.precioLabel}>Monto Total:</Text>
            <Text style={styles.precioValue}>Bs. {viaje.costo}</Text>
          </View>
        </View>

        <View style={styles.actionsCard}>
          {(reserva.estado.toLowerCase() === "pendiente" ||
            reserva.estado.toLowerCase() === "cancelado") && (
            <ButtonStyle
              text={"Confirmar reserva"}
              onClick={() => handleCambiarEstado(reserva, "confirmado")}
            />
          )}

          {(reserva.estado.toLowerCase() === "confirmado" ||
            reserva.estado.toLowerCase() === "pendiente") && (
            <ButtonStyle
              text={"Cancelar reserva"}
              variant={2}
              onClick={() => {
                setReserva((prev) => ({ ...prev, estado: "cancelado" }));
                handleCambiarEstado(reserva, "cancelado");
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: "#666",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
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
  asientoInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  asientoVisual: {
    width: 60,
    height: 60,
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
});

export default ReservationDetailsScreen;
