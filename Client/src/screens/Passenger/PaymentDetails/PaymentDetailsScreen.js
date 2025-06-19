import React, { useState, useContext } from "react";
import { ScrollView, StyleSheet, Alert } from "react-native";
import { GenericContainer } from "../../../components/GenericContainer";
import { BlobBg } from "../../../components/Background/BlobBg";
import { InformativeTitle } from "../../../components/InformativeTitle";
import PaymentSummaryCard from "./components/PaymentSummaryCard";
import PaymentActionButtons from "./components/PaymentActionButtons";
import { formatTime, convertDateToISO } from "../../../utils/dateTime.util";
import { createReserva } from "../../../api/reserva.api";
import { AuthContext } from "../../../context/AuthContext";

export default function PaymentDetailsScreen({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const { travelDetails = {}, passengers = [] } = route?.params || {};
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

  // función para crear la reserva, recuperando los datos del usuario y validando los pasajeros
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
        Alert.alert("Error", "No se encontraron pasajeros seleccionados.");
        return;
      }
      const invalidPassengers = passengers.filter((p) => !p.seat);
      if (invalidPassengers.length > 0) {
        Alert.alert("Error", "Algunos pasajeros no tienen asientos asignados.");
        return;
      }
      const dataToSend = {
        id_viaje: travelDetails.id_viaje,
        id_pasajero: userId,
        estado: "pendiente",
        comprobante: "N/D",
        fecha_reserva: new Date().toISOString(),
        pasajeros_secundarios: passengers.map((p) => ({
          nombre: p.firstName?.trim() || "N/D",
          apellido: p.lastName?.trim() || "N/D",
          ci: p.identityNumber?.trim() || "N/D",
          fecha_nacimiento: convertDateToISO(p.birthDate),
          id_asiento: parseInt(p.seat.id),
        })),
      };
      console.log("Datos a enviar:", dataToSend);
      if (
        !dataToSend.pasajeros_secundarios.every(
          (p) => p.id_asiento && p.fecha_nacimiento
        )
      ) {
        Alert.alert(
          "Error",
          "Faltan datos obligatorios de los pasajeros (asiento o fecha de nacimiento)."
        );
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
