//React
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  RefreshControl,
  Alert,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

//Api
import { cancelReserve } from "../../../api/travel.api";

//Components
import { ButtonStyle } from "../../../components/Button/ButtonStyle";

const ReservationsTravelScreen = ({ navigation, route }) => {
  const [reservas, setReservas] = useState([]);
  const [viajeInfo, setViajeInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [actualizandoEstado, setActualizandoEstado] = useState({});

  useEffect(() => {
    cargarReservasViaje();
  }, []);

  const cargarReservasViaje = async () => {
    setLoading(true);
    try {
      setReservas(route.params.reserva);
      setViajeInfo(route.params);
      setLoading(false);
    } catch (error) {
      console.error("Error al cargar reservas del viaje:", error);
      setLoading(false);
      Alert.alert("Error", "No se pudieron cargar las reservas del viaje");
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await cargarReservasViaje();
    setRefreshing(false);
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

  const handleCambiarEstado = async (reserva, nuevoEstado) => {
    Alert.alert(
      "Cambiar Estado",
      `¿Está seguro de cambiar el estado a ${getEstadoTexto(nuevoEstado)}?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Confirmar",
          onPress: async () => {
            setActualizandoEstado((prev) => ({
              ...prev,
              [reserva.id_reserva]: true,
            }));
            try {
              const res = await cancelReserve({
                id_reserva: reserva.id_reserva,
                newState: nuevoEstado,
              });
              reserva.estado = nuevoEstado;
            } catch (error) {
              console.error("Error al actualizar estado:", error);
              setActualizandoEstado((prev) => ({
                ...prev,
                [reserva.id_reserva]: false,
              }));
              Alert.alert("Error", "No se pudo actualizar el estado");
            } finally {
              setActualizandoEstado((prev) => ({
                ...prev,
                [reserva.id_reserva]: false,
              }));
            }
          },
        },
      ]
    );
  };

  const handleVerDetalle = (reserva) => {
    navigation.navigate("ReservationDetails", {
      reserva,
      travel: route.params,
      handleCambiarEstado,
    });
  };

  const renderEstadoActions = (reserva) => {
    const { estado, id_reserva } = reserva;
    const cargando = actualizandoEstado[id_reserva];

    if (cargando) {
      return (
        <View style={styles.estadoActions}>
          <ActivityIndicator size="small" color="#7C3AED" />
        </View>
      );
    }
    return (
      <View style={styles.estadoActions}>
        {(estado.toLowerCase() === "pendiente" ||
          estado.toLowerCase() === "cancelado") && (
          <>
            <ButtonStyle
              text={"Confirmar"}
              onClick={() => handleCambiarEstado(reserva, "confirmado")}
              width=""
              styleText={styles.actionButtonText}
            />
          </>
        )}
        {(estado.toLowerCase() === "confirmado" ||
          estado.toLowerCase() === "pendiente") && (
          <ButtonStyle
            variant={2}
            text={"Cancelar"}
            onClick={() => handleCambiarEstado(reserva, "cancelado")}
            width=""
            styleText={styles.actionButtonText}
          />
        )}
      </View>
    );
  };

  const renderReservaCard = ({ item }) => {
    const usuario = item.pasajero.usuario;

    return (
      <View style={styles.reservaCard}>
        {/* Header con comprobante y estado */}
        <View style={styles.reservaHeader}>
          <Text style={styles.comprobanteText}>{item.comprobante}</Text>
          <View
            style={[
              styles.estadoBadge,
              { backgroundColor: getEstadoColor(item.estado) },
            ]}
          >
            <Text style={styles.estadoText}>{getEstadoTexto(item.estado)}</Text>
          </View>
        </View>

        {/* Información del pasajero */}
        <View style={styles.pasajeroSection}>
          <View style={styles.pasajeroInfo}>
            <Icon name="person" size={20} color="#7C3AED" />
            <Text style={styles.pasajeroNombre}>
              {usuario.nombre} {usuario.apellido}
            </Text>
          </View>
        </View>

        {/* Información del asiento */}
        <View style={styles.asientoSection}>
          <View style={styles.asientoInfo}>
            <View style={styles.asientoVisual}>
              <Text style={styles.asientoNumero}>{item.asiento.numero}</Text>
            </View>
            <View style={styles.asientoDetails}>
              <Text style={styles.asientoTipo}>{item.asiento.ubicacion}</Text>
              <Text style={styles.asientoId}>
                Asiento ID: {item.id_asiento}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.fechaSection}>
          <Icon name="schedule" size={16} color="#666" />
          <Text style={styles.fechaReserva}>
            Reservado: {formatearFechaHora(item.fecha_reserva)}
          </Text>
        </View>

        <View style={styles.actionsContainer}>
          {renderEstadoActions(item)}
          <ButtonStyle
            text={"Ver detalles"}
            onClick={() => handleVerDetalle(item)}
            styleText={styles.actionButtonText}
            width=""
          />
        </View>
      </View>
    );
  };

  const getEstadisticas = () => {
    const confirmadas = reservas?.filter(
      (r) => r.estado.toLowerCase() === "confirmado"
    ).length;
    const pendientes = reservas?.filter(
      (r) => r.estado.toLowerCase() === "pendiente"
    ).length;
    const canceladas = reservas?.filter(
      (r) => r.estado.toLowerCase() === "cancelado"
    ).length;

    return { confirmadas, pendientes, canceladas };
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#7C3AED" barStyle="light-content" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#7C3AED" />
          <Text style={styles.loadingText}>Cargando reservas...</Text>
        </View>
      </SafeAreaView>
    );
  }

  const estadisticas = getEstadisticas();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#7C3AED" barStyle="light-content" />

      {/* Información del Viaje */}
      {viajeInfo && (
        <View style={styles.viajeInfoCard}>
          <View style={styles.rutaContainer}>
            <Text style={styles.rutaText}>
              {viajeInfo.ruta.origen} → {viajeInfo.ruta.destino}
            </Text>
            <Text style={styles.precioText}>Bs. {viajeInfo.costo}</Text>
          </View>

          <View style={styles.viajeDetalles}>
            <View style={styles.viajeDetalle}>
              <Icon name="calendar-today" size={16} color="#666" />
              <Text style={styles.viajeDetalleText}>
                {viajeInfo.fecha_salida.slice(0, 10)}
              </Text>
            </View>
            <View style={styles.viajeDetalle}>
              <Icon name="access-time" size={16} color="#666" />
              <Text style={styles.viajeDetalleText}>
                {viajeInfo.hora_salida_programada.slice(0, 5)}
              </Text>
            </View>
            <View style={styles.viajeDetalle}>
              <Icon name="directions-bus" size={16} color="#666" />
              <Text style={styles.viajeDetalleText}>{viajeInfo.bus.placa}</Text>
            </View>
          </View>

          <Text style={styles.conductorText}>
            Conductor: {viajeInfo.chofer.nombre} {viajeInfo.chofer.apellido}
          </Text>
        </View>
      )}

      {/* Estadísticas */}
      <View style={styles.estadisticasContainer}>
        <View style={styles.estadisticaItem}>
          <Text style={styles.estadisticaNumero}>
            {estadisticas.confirmadas}
          </Text>
          <Text style={styles.estadisticaLabel}>Confirmadas</Text>
        </View>
        <View style={styles.estadisticaItem}>
          <Text style={styles.estadisticaNumero}>
            {estadisticas.pendientes}
          </Text>
          <Text style={styles.estadisticaLabel}>Pendientes</Text>
        </View>
        <View style={styles.estadisticaItem}>
          <Text style={styles.estadisticaNumero}>
            {estadisticas.canceladas}
          </Text>
          <Text style={styles.estadisticaLabel}>Canceladas</Text>
        </View>
        <View style={styles.estadisticaItem}>
          <Text style={styles.estadisticaNumero}>{reservas.length}</Text>
          <Text style={styles.estadisticaLabel}>Total</Text>
        </View>
      </View>

      {/* Lista de reservas */}
      <FlatList
        data={reservas}
        renderItem={renderReservaCard}
        keyExtractor={(item) => item.id_reserva.toString()}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Icon name="event-seat" size={64} color="#D1D5DB" />
            <Text style={styles.emptyText}>
              No hay reservas para este viaje
            </Text>
          </View>
        }
      />
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

  viajeInfoCard: {
    backgroundColor: "white",
    margin: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  rutaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  rutaText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7C3AED",
  },
  precioText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#22C55E",
  },
  viajeDetalles: {
    flexDirection: "row",
    marginBottom: 8,
  },
  viajeDetalle: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  viajeDetalleText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
  },
  conductorText: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
  },
  estadisticasContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  estadisticaItem: {
    flex: 1,
    alignItems: "center",
  },
  estadisticaNumero: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#7C3AED",
  },
  estadisticaLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  reservaCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  reservaHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  comprobanteText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  estadoBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  estadoText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  pasajeroSection: {
    marginBottom: 12,
  },
  pasajeroInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  pasajeroNombre: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginLeft: 8,
  },
  asientoSection: {
    marginBottom: 12,
  },
  asientoInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  asientoVisual: {
    width: 40,
    height: 40,
    backgroundColor: "#7C3AED",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  asientoNumero: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  asientoDetails: {
    flex: 1,
  },
  asientoTipo: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  asientoId: {
    fontSize: 12,
    color: "#666",
  },
  fechaSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  fechaReserva: {
    fontSize: 12,
    color: "#666",
    marginLeft: 4,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  estadoActions: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
  },
  actionButtonText: {
    fontSize: 12,
    fontWeight: "600",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 64,
  },
  emptyText: {
    fontSize: 16,
    color: "#9CA3AF",
    marginTop: 16,
    textAlign: "center",
  },
});

export default ReservationsTravelScreen;
