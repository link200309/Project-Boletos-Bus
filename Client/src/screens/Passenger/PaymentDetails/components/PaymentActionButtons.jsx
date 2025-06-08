import React from "react";
import { View, StyleSheet } from "react-native";
import { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";

export default function PaymentActionButtons({ summaryRef, onConfirm }) {
  const handleShare = async () => {
    try {
      const uri = await captureRef(summaryRef, {
        format: "png",
        quality: 1,
      });

      console.log("Imagen capturada:", uri);
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error("Error al compartir:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <ButtonStyle
          text="Compartir"
          variant={2}
          width={150}
          onClick={handleShare}
          style={{ marginRight: 10 }}
        />
        <ButtonStyle
          text="Confirmar reserva"
          width={150}
          onClick={onConfirm}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",         
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    width: "100%",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
