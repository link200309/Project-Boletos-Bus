import React from "react";
import { ScrollView } from "react-native";

//Components
import { GenericContainer } from "../../../components/GenericContainer";
import { InformativeTitle } from "../../../components/InformativeTitle";
import { BlobBg } from "../../../components/Background/BlobBg";
import { SeatSelection } from "./components/SeatSelection";

export default function AvailabilitySeatScreen({navigation}) {
  return (
    <>
      <BlobBg />
      <ScrollView>
        <GenericContainer>
          <InformativeTitle
            title="El Dorado"
            cifra="Bs. 2"
            description="17:00 - 18:00"
          />
          <SeatSelection navigation={navigation}/>
        </GenericContainer>
      </ScrollView>
    </>
  );
}
