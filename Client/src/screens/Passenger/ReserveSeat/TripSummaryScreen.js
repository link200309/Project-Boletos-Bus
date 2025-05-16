// src/screens/Passenger/ReserveSeat/TripSummaryScreen.js
import React from 'react';
import { GenericContainer } from '../../../components/GenericContainer';
import { BlobBg } from '../../../components/Background/BlobBg';
import { InformativeTitle } from '../../../components/InformativeTitle';

export default function TripSummaryScreen() {
  return (
    <GenericContainer >
      <BlobBg />
        <InformativeTitle
          title={"Detalles de viaje y pasajeros"}
          description={"Una vez realice la confirmacion, debera realizar el pago y subir el comprobante de pago para finalizar."}
        />      
    </GenericContainer>
  );
}

