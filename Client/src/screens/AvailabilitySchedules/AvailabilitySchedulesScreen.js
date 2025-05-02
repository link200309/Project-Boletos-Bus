//react
import React, { useEffect, useState } from "react";

//components
import { InformativeTitle } from "../../components/InformativeTitle";
import { GenericContainer } from "../../components/GenericContainer";
import { BlobBg } from "../../components/Background/BlobBg";
import { ListAvailableDates } from "./components/ListAvailableDates";

export default function AvailabilitySchedulesScreen({ navigation }) {
  const [travels, setTravels] = useState([]);
  const resTravels = [
    {
      id_viaje: 1,
      fecha_salida: "2025-04-24",
      hora_salida_programada: "08:00:00",
      hora_salida_real: "08:15:00",
      costo: 25.5,
      ruta: {
        id_ruta: 101,
        origen: "Cochabamba",
        parada_intermedia: "Quillacollo",
        destino: "La Paz",
        distancia: "480 km",
        tiempo_estimado: "6 horas",
        camino: "Carretera nueva",
      },
    },
    {
      id_viaje: 2,
      fecha_salida: "2025-04-25",
      hora_salida_programada: "14:00:00",
      hora_salida_real: "14:05:00",
      costo: 30.0,
      ruta: {
        id_ruta: 102,
        origen: "La Paz",
        parada_intermedia: "Oruro",
        destino: "Cochabamba",
        distancia: "370 km",
        tiempo_estimado: "5 horas",
        camino: "Ruta nacional 1",
      },
    },
  ];

  useEffect(() => {
    async function getTravels() {
      await setTravels(resTravels);
    }
    getTravels();
  }, []);

  return (
    <GenericContainer>
      <InformativeTitle
        title={"Cochabamba - La Paz"}
        description={"12 fechas disponibles"}
      />
      <BlobBg />
      <ListAvailableDates travels={travels} />
    </GenericContainer>
  );
}
