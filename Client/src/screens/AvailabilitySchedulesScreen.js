//react
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

//components
import { InformativeTitle } from "../components/InformativeTitle";
import { AvailableDates } from "../components/AvailableDates";
import { GenericContainer } from "../components/GenericContainer";

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
    <GenericContainer style={styles.container}>
      <InformativeTitle
        title={"Cochabamba - La Paz"}
        description={"12 fechas disponibles"}
      />

      <View style={styles.containerDates}>
        {travels.map((travel) => {
          const fecha = new Date(travel.fecha_salida);
          const dia = fecha.getDate();
          const año = fecha.getFullYear();
          let diaSemana = fecha.toLocaleDateString("es-ES", {
            weekday: "long",
          });
          diaSemana = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
          const mes = fecha.toLocaleDateString("es-ES", { month: "long" });
          return (
            <>
              <AvailableDates
                day={diaSemana}
                date={dia + " " + mes + " " + año}
                key={travel.id_viaje}
              />
            </>
          );
        })}
      </View>
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  containerDates: {
    marginTop: 20,
  },
});
