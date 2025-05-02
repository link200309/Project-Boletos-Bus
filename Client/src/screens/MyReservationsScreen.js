import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
} from "react-native";

import TripCard from "../components/TripCard";
import { GenericContainer } from "../components/GenericContainer";
import { BlobBg } from "../components/BlobBg";

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
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TripCard
            trip={item}
            onEdit={handleEdit}
            onCancel={confirmCancel}
          />
        )}
      />

      {/* Modal de Confirmación */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              ¿Seguro que desea cancelar su reservación?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleConfirmCancel}
              >
                <Text style={styles.confirmText}>Sí, cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelText}>No</Text>
              </TouchableOpacity>
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
  },
  listContent: {
    paddingVertical: 16,
    paddingBottom: 40,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  modalText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  confirmButton: {
    flex: 1,
    backgroundColor: "#4B2EC2",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 8,
  },
  confirmText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cancelButton: {
    flex: 1,
    borderColor: "#4B2EC2",
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginLeft: 8,
  },
  cancelText: {
    color: "#4B2EC2",
    fontWeight: "bold",
  },
});
