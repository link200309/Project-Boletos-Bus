import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";
import { GlobalStyles } from "../../../../components/Style/GlobalStyles";

export default function PaymentActionButtons({ summaryRef, onConfirm }) {
  const confirmPayment = () => {
    Alert.alert(
      "Confirmar Pago",
      "¿Has realizado la transferencia y enviado el comprobante?",
      [
        { text: "No", style: "cancel" },
        {
          text: "Sí, enviado",
          onPress: () => {
            
          },
        },
      ]
    );
  };

  return (
    <View style={GlobalStyles.formCard}>
      <View style={styles.buttonRow}>
        <ButtonStyle text="Ya Envié el Comprobante" onClick={confirmPayment} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
