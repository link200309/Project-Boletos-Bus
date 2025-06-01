import React, { useState } from "react";
import { View, FlatList, StyleSheet, Modal, Text } from "react-native";
import TripCard from "./components/TripCard";
import { BlobBg } from "../../../components/Background/BlobBg";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";
import { GlobalStyles } from "../../../components/Style/GlobalStyles";
import { GenericContainer } from "../../../components/GenericContainer";

const initialTrips = [
  {
    id: 1,
    from: "Cochabamba",
    to: "La Paz",
    date: "18 de Abril",
    time: "07:30",
    agency: "El Dorado",
    type: "CAMA",
    seats: 2,
    total: 190,
  },
  {
    id: 2,
    from: "Cochabamba",
    to: "La Paz",
    date: "18 de Abril",
    time: "07:30",
    agency: "El Dorado",
    type: "CAMA",
    seats: 2,
    total: 190,
  },
  {
    id: 3,
    from: "Santa Cruz",
    to: "Cochabamba",
    date: "20 de Abril",
    time: "11:00",
    agency: "El Dorado",
    type: "SEMI-CAMA",
    seats: 1,
    total: 95,
  },
  {
    id: 4,
    from: "Santa Cruz",
    to: "Cochabamba",
    date: "30 de Abril",
    time: "11:00",
    agency: "El Dorado",
    type: "SEMI-CAMA",
    seats: 1,
    total: 95,
  },
];

export default function MyReservationsScreen() {
  const [trips, setTrips] = useState(initialTrips);
  const [cancelId, setCancelId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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

  return (
    <GenericContainer style={styles.container}>
      <BlobBg />
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TripCard trip={item} onEdit={handleEdit} onCancel={confirmCancel} />
        )}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={GlobalStyles.formCard}>
            <Text style={styles.modalTitle}>Cancelar Reserva</Text>
            <Text style={styles.modalText}>
              ¿Estás seguro de que deseas cancelar tu reserva de asiento? Esta
              acción no se puede deshacer y el asiento volverá a estar
              disponible para otros usuarios.
            </Text>
            <View style={styles.modalButtons}>
              <ButtonStyle
                text="Confirmar"
                onClick={handleConfirmCancel}
                width="47%"
                height={40}
                sizeText={16}
              />
              <ButtonStyle
                text="Cancelar"
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
