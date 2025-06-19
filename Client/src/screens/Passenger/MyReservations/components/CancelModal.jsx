import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { cancelarReserva } from "../../../../api/reserva.api";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";

export const CancelModal = ({ visible, id_reserva, onClose }) => {
  const onConfirm = async () => {
    try {
      const response = await cancelarReserva(id_reserva);
      if (response.status === 200) {
        alert("Reserva cancelada exitosamente.");
        onClose();
      } else {
        alert("Error al cancelar la reserva.");
      }
    } catch (error) {
      console.error("Error al cancelar la reserva:", error);
      alert("Ocurrió un error al intentar cancelar la reserva.");
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>x</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Cancelar Reserva</Text>
          <Text style={styles.message}>
            ¿Estás seguro de que deseas cancelar la reserva?
          </Text>

          <View style={styles.buttonContainer}>
            <ButtonStyle
              text="Cancelar"
              onClick={onClose}
              variant={2}
              width="48%"
              height={45}
            />
            <ButtonStyle
              text="Confirmar"
              onClick={onConfirm}
              width="48%"
              height={45}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxWidth: 400,
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 15,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#666",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    marginTop: 10,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
