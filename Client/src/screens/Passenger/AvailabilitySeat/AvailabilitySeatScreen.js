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
    loadBusSeats();
  }, []);

  const loadBusSeats = async () => {
    try {
      setLoading(true);
      const response = await getBusSeats(busId);
      setBusData(response.bus);
      setAsientos(response.asientos);
    } catch (error) {
      console.error("❌ Error completo:", error);
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

  if (!busData || !asientos.length) {
    return (
      <GenericContainer>
        <InformativeTitle title="No se encontraron asientos" />
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
            travels={travels}
          />
        </GenericContainer>
      </ScrollView>
    </>
  );
}
