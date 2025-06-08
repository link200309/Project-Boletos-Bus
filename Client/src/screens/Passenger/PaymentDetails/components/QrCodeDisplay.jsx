import React from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function QrCodeDisplay({ data }) {
  return (
    <View style={{ alignItems: "center", marginVertical: 20 }}>
      <QRCode value={data} size={160} />
    </View>
  );
}
