import React from "react";
import { View } from "react-native";
import { BoliviaQRPayment } from "../../PaymentDetails/components/QrCodeDisplay";

export default function ViewDetails({ route }) {
  const { reserveDetails } = route.params || {};

  console.log("El qr payment en", reserveDetails);

  return (
    <BoliviaQRPayment
      amount={reserveDetails.amount}
      merchantName={reserveDetails.merchantName}
      merchantAccount={reserveDetails.merchantAccount}
      merchantPhone={reserveDetails.merchantPhone}
      qrImageSource={reserveDetails.qrImageSource}
      onPaymentInitiated={reserveDetails.onPaymentInitiated}
    />
  );
}
