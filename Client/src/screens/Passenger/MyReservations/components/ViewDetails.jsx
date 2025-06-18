import React from "react";
import { View } from "react-native";
import TabsContainer from "../../ReserveSeat/components/TabsContainer";
import { GenericContainer } from "../../../../components/GenericContainer";
import { BlobBg } from "../../../../components/Background/BlobBg";
import { InformativeTitle } from "../../../../components/InformativeTitle";

export default function ViewDetails({ route }) {
  const { reservaCompleta } = route.params || {};
  console.log("ViewDetails", reservaCompleta);
  const ejemploTravelDetails = [
    {
      fecha_salida: reservaCompleta.viaje.fecha_salida,
      hora_salida_programada: reservaCompleta.viaje.hora_salida_programada,
      costo: reservaCompleta.viaje.costo,
      ruta: {
        origen: reservaCompleta.viaje.ruta.origen,
        destino: reservaCompleta.viaje.ruta.destino,
        tiempo_estimado: reservaCompleta.viaje.ruta.tiempo_estimado,
      },
      bus: {
        tipo_bus: reservaCompleta.viaje.bus.tipo_bus,
        agencia: {
          nombre_agencia: reservaCompleta.viaje.bus.agencia.nombre_agencia,
        },
      },
    },
  ];

  const ejemploPassengers = {
    passengers: reservaCompleta.pasajeros_secundarios?.map((pasajero) => ({
      firstName: pasajero.nombre,
      lastName: pasajero.apellido,
      seat: pasajero.asiento?.numero,
      identityNumber: pasajero.ci, 
      birthDate: pasajero.fecha_nacimiento,
    })),
  };

  return (
    <GenericContainer>
      <BlobBg />
      <InformativeTitle
        title="Detalles de Reserva"
        description="Aquí puedes ver los detalles de tu reserva, incluyendo los pasajeros y el itinerario."
      />
      <TabsContainer
        passengers={ejemploPassengers}
        travelDetails={ejemploTravelDetails}
      />
    </GenericContainer>
  );
}
