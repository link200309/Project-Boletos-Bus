import { useState, useEffect } from "react";
import { ScrollView, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { getBusSeats } from "../../../api/seat.api";
import { formatTime } from "../AvailabilitySchedules/utils";
//Components
import { GenericContainer } from "../../../components/GenericContainer";
import { InformativeTitle } from "../../../components/InformativeTitle";
import { BlobBg } from "../../../components/Background/BlobBg";
import { SeatSelection } from "./components/SeatSelection";

export default function AvailabilitySeatScreen({ navigation }) {
  const route = useRoute();
  const { travels, busId } = route.params || {};
  const [busData, setBusData] = useState(null);
  const [asientos, setAsientos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Bus ID asientos:", busId);
    console.log("Travels asientos:", travels);
    loadBusSeats();
  }, []);

  const loadBusSeats = async () => {
    try {
      setLoading(true);
      const response = await getBusSeats(busId);
      console.log("Response asientos:", response);
      setBusData(response.data.bus);
      setAsientos(response.data.asientos);
    } catch (error) {
      console.error("Error cargando asientos:", error);
      Alert.alert("Error", "No se pudieron cargar los asientos del bus");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <GenericContainer>
        <InformativeTitle title="Cargando asientos..." />
      </GenericContainer>
    );
  }

  return (
    <>
      <BlobBg />
      <ScrollView>
        <GenericContainer>
          <InformativeTitle
            title={`${travels[0].bus.agencia.nombre_agencia}`}
            cifra={`${travels[0].costo} Bs.`}
            description={`${travels[0].hora_salida_programada.slice(
              0,
              5
            )} — ${formatTime(
              travels[0].hora_salida_programada,
              travels[0].ruta.tiempo_estimado
            )}`}
          />
          <SeatSelection
            navigation={navigation}
            asientos={asientos}
            busData={busData}
            onSeatUpdate={loadBusSeats}
          />
        </GenericContainer>
      </ScrollView>
    </>
  );
}
