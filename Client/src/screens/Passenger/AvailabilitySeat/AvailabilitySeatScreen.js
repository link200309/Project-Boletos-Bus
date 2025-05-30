import React from "react";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

// Components
import { GenericContainer } from "../../../components/GenericContainer";
import { InformativeTitle } from "../../../components/InformativeTitle";
import { BlobBg } from "../../../components/Background/BlobBg";
import { SeatSelection } from "./components/SeatSelection";

export default function AvailabilitySeatScreen({ navigation }) {
  const route = useRoute();
  const travel = route.params;

  return (
    <>
      <BlobBg />
      <ScrollView>
        <GenericContainer>
          <InformativeTitle
            title={travel.bus.agencia.nombre_agencia} 
            cifra={`Bs. ${travel.costo}`} 
            description={`${travel.hora_salida_programada.slice(0, 5)} - ${
              travel.ruta.tiempo_estimado
                ? `${(
                    parseInt(travel.hora_salida_programada.slice(0, 2)) +
                    parseInt(travel.ruta.tiempo_estimado)
                  )
                    .toString()
                    .padStart(2, "0")}:00`
                : "??:??"
            }`}
          />
          <SeatSelection navigation={navigation} travel={travel} />
        </GenericContainer>
      </ScrollView>
    </>
  );
}
