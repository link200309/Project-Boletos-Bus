import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Share,
  Clipboard,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";

export const BoliviaQRPayment = ({
  amount,
  merchantName = "Tu Negocio",
  merchantAccount = "1234567890",
  merchantPhone = "70000000",
  onPaymentInitiated,
}) => {
  const [qrData, setQrData] = useState(null);
  const [paymentReference, setPaymentReference] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    generatePaymentInfo();
  }, [Number(amount).toFixed(2)]);

  const generatePaymentInfo = () => {
    const reference = `REF${Date.now()}${Math.random()
      .toString(36)
      .substr(2, 4)
      .toUpperCase()}`;

    const paymentInfo = {
      tipo: "PAGO",
      beneficiario: merchantName,
      cuenta: merchantAccount,
      banco: "MERCANTIL SANTA CRUZ",
      monto: `Bs. ${amount.toFixed(2)}`,
      referencia: reference,
      contacto: merchantPhone,
      fecha: new Date().toLocaleDateString("es-BO"),
    };

    const qrText = `PAGO A: ${merchantName}
    BANCO: MERCANTIL SANTA CRUZ
    CUENTA: ${merchantAccount}
    MONTO: Bs. ${amount.toFixed(2)}
    REFERENCIA: ${reference}
    CONTACTO: ${merchantPhone}
    FECHA: ${paymentInfo.fecha}

Para confirmar el pago, envía el comprobante a WhatsApp: ${merchantPhone}`;

    setQrData(qrText);
    setPaymentReference(reference);
    onPaymentInitiated?.(reference);
  };

  const copyToClipboard = async () => {
    try {
      await Clipboard.setString(qrData);
      Alert.alert("Copiado", "Información de pago copiada al portapapeles");
    } catch (error) {
      console.error("Error al copiar:", error);
    }
  };

  const sharePaymentInfo = async () => {
    try {
      await Share.share({
        message: qrData,
        title: "Información de Pago",
      });
    } catch (error) {
      console.error("Error al compartir:", error);
    }
  };

  const openWhatsApp = () => {
    const message = `Hola, quiero hacer un pago con referencia: ${paymentReference}. Monto: Bs. ${amount.toFixed(
      2
    )}`;
    const whatsappUrl = `https://wa.me/591${merchantPhone.replace(
      /^0+/,
      ""
    )}?text=${encodeURIComponent(message)}`;

    // En React Native usarías Linking.openURL(whatsappUrl)
    Alert.alert(
      "Contactar por WhatsApp",
      "Se abrirá WhatsApp para coordinar el pago",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Abrir WhatsApp",
          onPress: () => console.log("Abrir:", whatsappUrl),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.bankName}>Pago con Transferencia</Text>
        <Text style={styles.subtitle}>Banco Mercantil Santa Cruz</Text>
      </View>

      <View style={styles.amountContainer}>
        <Text style={styles.amountLabel}>Monto a pagar:</Text>
        <Text style={styles.amountValue}>Bs. {amount.toFixed(2)}</Text>
        <Text style={styles.referenceText}>Ref: {paymentReference}</Text>
      </View>

      <View style={styles.qrContainer}>
        {qrData && (
          <QRCode
            value={qrData}
            size={200}
            backgroundColor="white"
            color="black"
          />
        )}
      </View>

      <View style={styles.accountInfoContainer}>
        <Text style={styles.accountInfoTitle}>Datos para transferencia:</Text>
        <Text style={styles.accountText}>Beneficiario: {merchantName}</Text>
        <Text style={styles.accountText}>Banco: Mercantil Santa Cruz</Text>
        <Text style={styles.accountText}>Cuenta: {merchantAccount}</Text>
        <Text style={styles.accountText}>Referencia: {paymentReference}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <ButtonStyle text="Copiar Datos" onClick={copyToClipboard} />
        <ButtonStyle text="Compartir" onClick={sharePaymentInfo} />
      </View>

      <TouchableOpacity style={styles.whatsappButton} onPress={openWhatsApp}>
        <Text style={styles.whatsappButtonText}>Coordinar por WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.instructionsButton}
        onPress={() => setShowInstructions(!showInstructions)}
      >
        <Text style={styles.instructionsButtonText}>
          {showInstructions ? "Ocultar" : "Ver"} Instrucciones
        </Text>
      </TouchableOpacity>

      {showInstructions && (
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsTitle}>Cómo pagar:</Text>
          <Text style={styles.instructionsText}>
            <Text style={styles.stepNumber}>1.</Text> Abre tu app bancaria{"\n"}
            <Text style={styles.stepNumber}>2.</Text> Selecciona "Transferir"
            {"\n"}
            <Text style={styles.stepNumber}>3.</Text> Usa los datos mostrados
            arriba{"\n"}
            <Text style={styles.stepNumber}>4.</Text> Incluye la referencia en
            el concepto{"\n"}
            <Text style={styles.stepNumber}>5.</Text> Toma captura del
            comprobante{"\n"}
            <Text style={styles.stepNumber}>6.</Text> Envía comprobante por
            WhatsApp{"\n"}
            <Text style={styles.stepNumber}>7.</Text> Confirma el pago aquí
            abajo
          </Text>

          <Text style={styles.warningText}>
            ⚠️ IMPORTANTE: Siempre incluye la referencia en el concepto de la
            transferencia
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  bankName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E3A8A",
  },
  subtitle: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },
  amountContainer: {
    alignItems: "center",
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#F8F9FA",
    borderRadius: 8,
    width: "100%",
  },
  amountLabel: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 5,
  },
  amountValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E3A8A",
  },
  referenceText: {
    fontSize: 12,
    color: "#999999",
    fontFamily: "monospace",
    marginTop: 5,
  },
  qrContainer: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  accountInfoContainer: {
    width: "100%",
    backgroundColor: "#F0F7FF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: "#1E3A8A",
  },
  accountInfoTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 10,
  },
  accountText: {
    fontSize: 13,
    color: "#666666",
    marginBottom: 4,
    fontFamily: "monospace",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  button: {
    flex: 1,
    backgroundColor: "#E3F2FD",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#1E3A8A",
    fontWeight: "600",
    fontSize: 14,
  },
  whatsappButton: {
    backgroundColor: "#25D366",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
  },
  whatsappButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  instructionsButton: {
    paddingVertical: 8,
    marginBottom: 10,
  },
  instructionsButtonText: {
    color: "#1E3A8A",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  instructionsContainer: {
    width: "100%",
    backgroundColor: "#FFF3E0",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: "#FF9800",
  },
  instructionsTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F57C00",
    marginBottom: 10,
  },
  instructionsText: {
    fontSize: 13,
    color: "#666666",
    lineHeight: 20,
  },
  stepNumber: {
    fontWeight: "bold",
    color: "#F57C00",
  },
  warningText: {
    fontSize: 12,
    color: "#D32F2F",
    marginTop: 10,
    fontWeight: "500",
    backgroundColor: "#FFEBEE",
    padding: 8,
    borderRadius: 4,
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  confirmButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
