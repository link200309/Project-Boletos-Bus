import React, { useState, useContext, useEffect, useCallback } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Alert,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import TripCard from "./components/TripCard";
import { BlobBg } from "../../../components/Background/BlobBg";
import { GenericContainer } from "../../../components/GenericContainer";
import { AuthContext } from "../../../context/AuthContext";
import { obtenerMisReservasPasajero } from "../../../api/reserva.api";

export default function MyReservationsScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [reservasData, setReservasData] = useState([]);

  const transformReservaToTrip = useCallback((reserva) => {
    return {
      id: reserva.id_reserva,
      from: reserva.viaje.ruta.origen,
      to: reserva.viaje.ruta.destino,
      date: new Date(reserva.viaje.fecha_salida).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      time: reserva.viaje.hora_salida_programada.slice(0, 5),
      agency: reserva.viaje.bus.agencia.nombre_agencia,
      type: reserva.viaje.bus.tipo_bus,
      seats: reserva.resumen_asientos.total_asientos,
      total:
        parseFloat(reserva.viaje.costo) *
        reserva.resumen_asientos.total_asientos,
      numeroAsiento: reserva.resumen_asientos.numeros_asientos,
      fechaReserva: reserva.fecha_reserva,
      estado: reserva.estado,
      ubicaciones_asientos: reserva.resumen_asientos.ubicaciones,
    };
  }, []);

  const cargarReservas = useCallback(
    async (isRefreshing = false) => {
      try {
        if (isRefreshing) {
          setRefreshing(true);
        } else {
          setLoading(true);
        }

        const userId = user?.datos_pasajero?.id_pasajero;
        if (!userId) {
          Alert.alert(
            "Error",
            "No se pudo obtener la información del pasajero. Inicia sesión nuevamente."
          );
          return;
        }

        const response = await obtenerMisReservasPasajero(userId);
        const reservasData = response.data || response;

        const reservasDataRaw = response.data?.reservas || [];
        setReservasData(reservasDataRaw);
        const tripsTransformados = reservasDataRaw.map(transformReservaToTrip);
        setTrips(tripsTransformados);

        if (
          reservasData &&
          reservasData.reservas &&
          Array.isArray(reservasData.reservas)
        ) {
          const tripsTransformados = reservasData.reservas.map(
            transformReservaToTrip
          );
          setTrips(tripsTransformados);
        } else {
          setTrips([]);
        }
      } catch (error) {
        console.error("Error al cargar reservas:", error);
        Alert.alert(
          "Error",
          "No se pudieron cargar las reservas. Por favor, verifica tu conexión e inténtalo nuevamente."
        );
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [user?.datos_pasajero?.id_pasajero, transformReservaToTrip]
  );

  useEffect(() => {
    cargarReservas();
  }, [cargarReservas]);

  const onRefresh = useCallback(() => {
    cargarReservas(true);
  }, [cargarReservas]);

  const renderTripCard = useCallback(
    ({ item }) => {
      const reservaCompleta = reservasData.find(
        (r) => r.id_reserva === item.id
      );
      return (
        <TripCard
          trip={item}
          navigation={navigation}
          reservaCompleta={reservaCompleta}
        />
      );
    },
    [navigation, reservasData]
  );

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  if (loading) {
    return (
      <GenericContainer style={styles.container}>
        <BlobBg />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0066cc" />
          <Text style={styles.loadingText}>Cargando reservas...</Text>
        </View>
      </GenericContainer>
    );
  }

  return (
    <GenericContainer style={styles.container}>
      {trips.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No tienes reservas activas</Text>
          <Text style={styles.emptySubtext}>
            Cuando hagas una reserva, aparecerá aquí
          </Text>
        </View>
      ) : (
        <FlatList
          data={trips}
          keyExtractor={keyExtractor}
          renderItem={renderTripCard}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#0066cc"]}
              tintColor="#0066cc"
            />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  listContainer: {
    paddingVertical: 10,
  },
});
