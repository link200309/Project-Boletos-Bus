import React from "react";
import { ScrollView, View } from "react-native";
import { BoliviaQRPayment } from "../../PaymentDetails/components/QrCodeDisplay";
import qrImage from "../../assets/qr-BNB.jpeg";
import { GenericContainer } from "../../../../components/GenericContainer";
import { BlobBg } from "../../../../components/Background/BlobBg";
import { InformativeTitle } from "../../../../components/InformativeTitle";


export default function PayReservation({ route }) {
  const { payDetails } = route.params || {};
  const handlePaymentInitiated = (reference) => {
    console.log("Pago iniciado con referencia:", reference);
  };

  return (
    <GenericContainer>
      <BlobBg />
      <InformativeTitle
        title="Pagar Reservas"
        description="Realiza el pago de tu reserva escaneando el código QR o ingresando los detalles manualmente."
      />
      <ScrollView>
        <BoliviaQRPayment
          amount={payDetails.total}
          merchantName={payDetails.agency}
          merchantAccount="4008765432109"
          merchantPhone="71234567"
          qrImageSource={qrImage}
          onPaymentInitiated={handlePaymentInitiated}
        />
      </ScrollView>
    </GenericContainer>
  );
}
