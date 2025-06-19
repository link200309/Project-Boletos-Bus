import React from "react";
import { ScrollView } from "react-native";
import TabsContainer from "../../ReserveSeat/components/TabsContainer";
import { GenericContainer } from "../../../../components/GenericContainer";
import { BlobBg } from "../../../../components/Background/BlobBg";
import { InformativeTitle } from "../../../../components/InformativeTitle";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";
import {
  formatDate,
  formatFechaParaVista,
} from "../../../../utils/dateTime.util";

export default function ViewDetails({ route }) {
  const { reservaCompleta } = route.params || {};

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
      seat: {
        id: pasajero.asiento?.id_asiento || "S/N",
        numero: pasajero.asiento?.numero || "S/N",
      },
      identityNumber: pasajero.ci,
      birthDate: formatFechaParaVista(pasajero.fecha_nacimiento),
    })),
  };

  const ejemploReserva = {
    ...formatDate(reservaCompleta.fecha_reserva),
    estado: reservaCompleta.estado,
  };

  return (
    <GenericContainer>
      <BlobBg />
      <InformativeTitle
        title="Detalles de Reserva"
        description="Aquí puedes ver los detalles de tu reserva, incluyendo los pasajeros y el itinerario."
      />
      <ScrollView>
        <TabsContainer
          passengers={ejemploPassengers}
          travelDetails={ejemploTravelDetails}
          reserve={true}
          Reserva={ejemploReserva}
        />
        {reservaCompleta.estado === "pendiente" && (
          <ButtonStyle text="Cancelar Reserva" onClick={() => {}} />
        )}
      </ScrollView>
    </GenericContainer>
  );
}
