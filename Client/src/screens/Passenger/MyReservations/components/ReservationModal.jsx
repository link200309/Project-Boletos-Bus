import React from "react";
import { View, Modal, Text, StyleSheet } from "react-native";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";
import { GlobalStyles } from "../../../../components/Style/GlobalStyles";

export default function ReservationModal({
  visible,
  onClose,
  onSendReceipt,
  onConfirmCancel,
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={[GlobalStyles.formCard, styles.modalCard]}>
          <Text style={styles.modalTitle}>Reserva Pendiente</Text>
          <Text style={styles.modalText}>
            Tu reserva aún no ha sido confirmada. Asegúrate de enviar el
            comprobante de pago a la agencia para confirmar tu reserva.
          </Text>
          <Text style={styles.modalSubtext}>
            Si ya enviaste el comprobante, espera a que la agencia confirme tu
            reserva.
          </Text>
          <View style={styles.modalButtons}>
            <ButtonStyle
              text="Enviar Comprobante"
              onClick={onSendReceipt}
              width="48%"
              height={40}
              sizeText={14}
            />
            <ButtonStyle
              text="Cancelar Reserva"
              onClick={onConfirmCancel}
              variant={2}
              width="48%"
              height={40}
              sizeText={14}
            />
          </View>
          <ButtonStyle
            text="Cerrar"
            onClick={onClose}
            variant={3}
            width="100%"
            height={35}
            sizeText={14}
            style={styles.closeButton}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  modalCard: {
    width: "100%",
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
    lineHeight: 22,
  },
  modalSubtext: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 5,
  },
});
