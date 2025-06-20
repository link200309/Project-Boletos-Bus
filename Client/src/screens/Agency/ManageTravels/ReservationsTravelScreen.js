//React
import React, { useState } from "react";
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
import {
  ScheduleIcon,
  PerfilIcon,
  TicketIcon,
  CalendarIcon,
  BusIcon,
} from "../../../components/Icons";
//Api
import { updateStateReserve } from "../../../api/travel.api";

//Components
import { ButtonStyle } from "../../../components/Button/ButtonStyle";

//Utils
import { formatearFechaHora } from "../../../utils/dateTime.util";

const ReservationsTravelScreen = ({ navigation, route }) => {
  const [reservas, setReservas] = useState(route.params.reserva || []);
  const [viajeInfo, setViajeInfo] = useState(route.params);
  const [refreshing, setRefreshing] = useState(false);
  const [actualizandoEstado, setActualizandoEstado] = useState({});

  const onRefresh = async () => {
    setRefreshing(true);
    await cargarReservasViaje();
    setRefreshing(false);
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

  const changeStateReserve = (setReserva, nuevoEstado) => {
    if (setReserva) setReserva((prev) => ({ ...prev, estado: nuevoEstado }));
  };

  const handleCambiarEstado = async (reserva, nuevoEstado, setReserva) => {
    Alert.alert(
      "Cambiar Estado",
      `¿Está seguro de cambiar el estado a ${getEstadoTexto(nuevoEstado)}?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: async () => {
            setActualizandoEstado((prev) => ({
              ...prev,
              [reserva.id_reserva]: true,
            }));
            try {
              const res = await updateStateReserve({
                id_reserva: reserva.id_reserva,
                newState: nuevoEstado,
              });
              reserva.estado = nuevoEstado;
              changeStateReserve(setReserva, nuevoEstado);
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

  const renderReservaCard = ({ item, index }) => {
    const usuario = item.pasajero.usuario;
    return (
      <View style={styles.reservaCard}>
        {/* Header con comprobante y estado */}
        <View style={styles.reservaHeader}>
          <Text style={styles.comprobanteText}>{index + 1}</Text>
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
            <PerfilIcon />
            <Text style={styles.pasajeroNombre}>
              {usuario.nombre} {usuario.apellido}
            </Text>
          </View>
        </View>

        <View style={styles.fechaSection}>
          <TicketIcon size={16} color="#666" />
          <Text style={styles.fechaReserva}>
            Pasajes Reservados: {item.pasajerosSecundarios.length}
          </Text>
        </View>
        <View style={styles.fechaSection}>
          <ScheduleIcon size={16} color="#666" />
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
              <CalendarIcon size={16} color="#666" />
              <Text style={styles.viajeDetalleText}>
                {viajeInfo.fecha_salida.slice(0, 10)}
              </Text>
            </View>
            <View style={styles.viajeDetalle}>
              <ScheduleIcon size={16} color="#666" />
              <Text style={styles.viajeDetalleText}>
                {viajeInfo.hora_salida_programada.slice(0, 5)}
              </Text>
            </View>
            <View style={styles.viajeDetalle}>
              <BusIcon size={16} color="#666" />
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
            <BusIcon size={64} color="#D1D5DB" />
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
    width: 30,
    height: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#7C3AED",
    padding: 4,
    borderRadius: 20,
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
