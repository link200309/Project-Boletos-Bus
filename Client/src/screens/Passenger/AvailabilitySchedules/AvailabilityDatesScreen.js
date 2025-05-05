//react
import React, { useEffect, useState } from "react";

//components
import { InformativeTitle } from "../../../components/InformativeTitle";
import { GenericContainer } from "../../../components/GenericContainer";
import { BlobBg } from "../../../components/Background/BlobBg";
import { ListAvailableDates } from "./components/ListAvailableDates";

export default function AvailabilityDatesScreen({ navigation }) {
  const [travels, setTravels] = useState([]);
  const resTravels = [
    {
      id_viaje: 1,
      fecha_salida: "2025-04-24",
      hora_salida_programada: "08:00:00",
      costo: 95.0,
      agencia: "EL DORADO",
      ruta: {
        id_ruta: 101,
        origen: "Cochabamba",
        parada_intermedia: "Quillacollo",
        destino: "La Paz",
        distancia: "480 km",
        tiempo_estimado: 6,
        camino: "Carretera nueva",
      },
    },
    {
      id_viaje: 2,
      fecha_salida: "2025-04-24",
      hora_salida_programada: "10:00:00",
      costo: 95.0,
      agencia: "EL DORADO",
      ruta: {
        id_ruta: 101,
        origen: "Cochabamba",
        parada_intermedia: "Quillacollo",
        destino: "La Paz",
        distancia: "480 km",
        tiempo_estimado: 9.5,
        camino: "Carretera nueva",
      },
    },

    {
      id_viaje: 3,
      fecha_salida: "2025-04-24",
      hora_salida_programada: "08:00:00",
      costo: 95.0,
      agencia: "EL DORADO",
      ruta: {
        id_ruta: 101,
        origen: "Cochabamba",
        parada_intermedia: "Quillacollo",
        destino: "La Paz",
        distancia: "480 km",
        tiempo_estimado: 6,
        camino: "Carretera nueva",
      },
    },
    {
      id_viaje: 4,
      fecha_salida: "2025-04-24",
      hora_salida_programada: "10:00:00",
      costo: 95.0,
      agencia: "EL DORADO",
      ruta: {
        id_ruta: 101,
        origen: "Cochabamba",
        parada_intermedia: "Quillacollo",
        destino: "La Paz",
        distancia: "480 km",
        tiempo_estimado: 6,
        camino: "Carretera nueva",
      },
    },

    {
      id_viaje: 5,
      fecha_salida: "2025-04-25",
      hora_salida_programada: "14:00:00",
      costo: 100.0,
      agencia: "COPACABANA",
      ruta: {
        id_ruta: 102,
        origen: "Cochabamba",
        parada_intermedia: "Ironcollo",
        destino: "La Paz",
        distancia: "480 km",
        tiempo_estimado: 6.3,
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
      <ListAvailableDates travels={travels} navigation={navigation} />
    </GenericContainer>
  );
}
