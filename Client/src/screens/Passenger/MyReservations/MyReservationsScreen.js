import React, { useState, useContext, useEffect } from "react";
import { View, FlatList, StyleSheet, Modal, Text, Alert } from "react-native";
import TripCard from "./components/TripCard";
import { BlobBg } from "../../../components/Background/BlobBg";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";
import { GlobalStyles } from "../../../components/Style/GlobalStyles";
import { GenericContainer } from "../../../components/GenericContainer";
import { AuthContext } from "../../../context/AuthContext";
import { obtenerMisReservas } from "../../../api/reserva.api";

export default function MyReservationsScreen() {
  const { user } = useContext(AuthContext);
  const [trips, setTrips] = useState([]);
  const [cancelId, setCancelId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const transformReservaToTrip = (reserva) => {
    return {
      id: reserva.id_reserva,
      from: reserva.viaje.ruta.origen,
      to: reserva.viaje.ruta.destino,
      date: new Date(reserva.viaje.fecha_salida).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
      }),
      time: reserva.viaje.hora_salida_programada.slice(0, 5),
      agency: reserva.viaje.bus.agencia.nombre_agencia,
      type: reserva.viaje.bus.tipo_bus,
      seats: 1,
      total: reserva.viaje.costo,
      numeroAsiento: reserva.asiento?.numero_asiento,
      fechaReserva: reserva.fecha_reserva,
      estado: reserva.estado,
    };
  };

  const cargarReservas = async () => {
    try {
      setLoading(true);

      let userId = null;
      if (user?.datos_pasajero?.id_pasajero) {
        userId = user.datos_pasajero.id_pasajero;
      } else if (user?.usuario?.id) {
        userId = user.usuario.id;
      }

      if (!userId) {
        Alert.alert(
          "Error",
          "No se pudo obtener la información del usuario. Por favor, inicia sesión nuevamente."
        );
        return;
      }

      const response = await obtenerMisReservas(userId);

      if (response.data && response.data.reservas) {
        const tripsTransformados = response.data.reservas.map(
          transformReservaToTrip
        );
        setTrips(tripsTransformados);
      }
    } catch (error) {
      console.error("Error al cargar reservas:", error);
      Alert.alert(
        "Error",
        "No se pudieron cargar las reservas. Por favor, inténtalo nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarReservas();
  }, []);

  const handleEdit = (id) => {
    console.log("Editar reserva con ID:", id);
  };

  const confirmCancel = (id) => {
    setCancelId(id);
    setModalVisible(true);
  };

  const handleConfirmCancel = () => {
    const updatedTrips = trips.filter((trip) => trip.id !== cancelId);
    setTrips(updatedTrips);
    setModalVisible(false);
  };

  if (loading) {
    return (
      <GenericContainer style={styles.container}>
        <BlobBg />
        <View style={styles.loadingContainer}>
          <Text>Cargando reservas...</Text>
        </View>
      </GenericContainer>
    );
  }

  return (
    <GenericContainer style={styles.container}>
      <BlobBg />
      {trips.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No tienes reservas activas</Text>
        </View>
      ) : (
        <FlatList
          data={trips}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TripCard
              trip={item}
              onEdit={handleEdit}
              onCancel={confirmCancel}
            />
          )}
          refreshing={loading}
          onRefresh={cargarReservas}
        />
      )}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={GlobalStyles.formCard}>
            <Text style={styles.modalTitle}>Su reserva no se confirmó</Text>
            <Text style={styles.modalText}>
              Asegurese de enviar el comprobante de pago a la agencia para
              confirmar su reserva. Si ya lo hizo, por favor espere a que la
              agencia confirme su reserva.
            </Text>
            <View style={styles.modalButtons}>
              <ButtonStyle
                text="Mandar"
                onClick={handleConfirmCancel}
                width="47%"
                height={40}
                sizeText={16}
              />
              <ButtonStyle
                text="Aceptar"
                onClick={() => setModalVisible(false)}
                variant={2}
                width="47%"
                height={40}
                sizeText={16}
              />
            </View>
          </View>
        </View>
      </Modal>
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
