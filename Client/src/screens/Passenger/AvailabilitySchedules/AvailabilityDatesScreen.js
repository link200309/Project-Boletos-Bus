import { useEffect, useState } from "react";
//components
import { InformativeTitle } from "../../../components/InformativeTitle";
import { GenericContainer } from "../../../components/GenericContainer";
import { ListAvailableDates } from "./components/ListAvailableDates";
//api
import { getTravels } from "../../../api/travel.api";

export default function AvailabilityDatesScreen({ navigation }) {
  const [travels, setTravels] = useState([]);
  const { formData } = navigation.getState().routes[1].params;
  useEffect(() => {
    async function getTravelsApi() {
      try {
        const response = await getTravels(
          formData.origen,
          formData.destino,
          formData.asientos
        );
        setTravels(response);
      } catch (error) {
        console.error("Error fetching travels:", error);
      }
    }
    getTravelsApi();
  }, []);

  return (
    <GenericContainer>
      <InformativeTitle
        title={`${formData.origen} — ${formData.destino}`}
        description={
          Array.from(
            new Map(
              travels.map((travel) => [travel.fecha_salida, travel])
            ).values()
          ).length + " Fecha(s) disponible(s)"
        }
      />
      <ListAvailableDates travels={travels} navigation={navigation} />
    </GenericContainer>
  );
}
