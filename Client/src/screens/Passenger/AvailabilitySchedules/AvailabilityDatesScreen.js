//react
import React, { useEffect, useState } from "react";

//components
import { InformativeTitle } from "../../../components/InformativeTitle";
import { GenericContainer } from "../../../components/GenericContainer";
import { BlobBg } from "../../../components/Background/BlobBg";
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
        setTravels(response.data);
        console.log("Travels:", response.data);
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
      <BlobBg />
      <ListAvailableDates travels={travels} navigation={navigation} />
    </GenericContainer>
  );
}
