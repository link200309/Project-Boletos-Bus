import React, { useState, useContext } from "react";
import { ScrollView, StyleSheet, Alert } from "react-native";
import { GenericContainer } from "../../../components/GenericContainer";
import { BlobBg } from "../../../components/Background/BlobBg";
import { InformativeTitle } from "../../../components/InformativeTitle";
import PaymentSummaryCard from "./components/PaymentSummaryCard";
import PaymentActionButtons from "./components/PaymentActionButtons";
import { formatTime } from "../../../utils/dateTime.util";
import { createReserva } from "../../../api/reserva.api";
import { AuthContext } from "../../../context/AuthContext";

export default function PaymentDetailsScreen({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const {
    travels = [],
    travelDetails = {},
    passengers = [],
    contact = {},
  } = route?.params || {};

  console.log("=== DEBUGGING PAYMENT DETAILS ===");
  console.log("user completo:", JSON.stringify(user, null, 2));
  console.log("contact:", contact);
  console.log("passengers:", passengers);
  console.log("travelDetails:", travelDetails);
  console.log("travels:", travels);

  const seatNumbers = Array.isArray(passengers)
    ? passengers.map((p) => p.seat)
    : [];
  const price = parseFloat(travelDetails.costo || 0).toFixed(2);
  const total = (price * seatNumbers.length).toFixed(2);
  const horario = `${travelDetails.hora_salida_programada.slice(
    0,
    5
  )} - ${formatTime(
    travelDetails.hora_salida_programada,
    travelDetails.ruta.tiempo_estimado
  )}`;

  const summaryData = {
    horario: horario || "N/D",
    count: seatNumbers.length,
    seatNumbers,
    price,
    total,
    busId: travelDetails.bus?.id_bus || "N/D",
    qrData: travelDetails.qr,
  };

  const handleConfirm = async () => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      let userId = null;

      if (user?.datos_pasajero?.id_pasajero) {
        userId = user.datos_pasajero.id_pasajero;
      } else if (user?.usuario?.id) {
        userId = user.usuario.id;
      }
      if (!userId) {
        Alert.alert(
          "Error",
          "No se pudo obtener la información del usuario. Por favor, inicia sesión nuevamente."
        );
        return;
      }

      if (!travelDetails.id_viaje) {
        Alert.alert("Error", "No se encontró información del viaje.");
        return;
      }

      if (!Array.isArray(passengers) || passengers.length === 0) {
        Alert.alert("Error", "No se encontraron asientos seleccionados.");
        return;
      }

      const asientos = passengers
        .map((p) => p.seat)
        .filter((seat) => seat !== undefined && seat !== null);

      if (asientos.length === 0) {
        Alert.alert("Error", "No hay asientos válidos seleccionados.");
        return;
      }

      const dataToSend = {
        id_viaje: travelDetails.id_viaje,
        estado: "pendiente",
        comprobante: "N/D",
        fecha_reserva: new Date().toISOString(),
        id_pasajero: userId,
        id_asiento: asientos,
      };
      if (!dataToSend.id_pasajero) {
        Alert.alert("Error", "ID de pasajero inválido");
        return;
      }
      if (!dataToSend.id_viaje) {
        Alert.alert("Error", "ID de viaje inválido");
        return;
      }
      if (!dataToSend.id_asiento || dataToSend.id_asiento.length === 0) {
        Alert.alert("Error", "Asientos inválidos");
        return;
      }

      const response = await createReserva(dataToSend);
      Alert.alert("¡Éxito!", "Su reserva ha sido creada correctamente.", [
        {
          text: "OK",
          onPress: () => {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: "MyReservationsTab",
                  params: { screen: "MyReservations" },
                },
              ],
            });
          },
        },
      ]);
    } catch (error) {
      console.error("Error completo al crear reserva:", error);
      console.error("Response del error:", error.response?.data);

      let errorMessage = "Ocurrió un error al crear la reserva.";

      if (error.response?.data?.mensaje) {
        errorMessage = error.response.data.mensaje;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      Alert.alert("Error", errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GenericContainer>
      <BlobBg />
      <InformativeTitle
        title="Detalles de pago"
        description="Una vez realice el pago, puede compartir o guardar el comprobante"
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <PaymentSummaryCard summary={summaryData} onConfirm={handleConfirm} />
        <PaymentActionButtons
          summaryRef={null}
          onConfirm={handleConfirm}
          isLoading={isLoading}
        />
      </ScrollView>
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
    alignItems: "center",
  },
});
