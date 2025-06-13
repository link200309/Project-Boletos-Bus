import React from "react";
import { View, StyleSheet } from "react-native";
import { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";
import { GlobalStyles} from "../../../../components/Style/GlobalStyles";

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
    <View style={GlobalStyles.formCard}>
      <View style={styles.buttonRow}>
        <ButtonStyle
          text="Pagar luego"
          variant={2}
          width={150}
          onClick={handleShare}
          style={{ marginRight: 10 }}
        />
        <ButtonStyle
          text="Confirmar"
          width={150}
          onClick={onConfirm}
        />
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
