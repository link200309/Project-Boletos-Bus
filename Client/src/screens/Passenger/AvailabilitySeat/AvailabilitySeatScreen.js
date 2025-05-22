import React from "react";
import { StyleSheet, ScrollView } from "react-native";

//Components
import { GenericContainer } from "../../../components/GenericContainer";
import { InformativeTitle } from "../../../components/InformativeTitle";
import { BlobBg } from "../../../components/Background/BlobBg";
import { SeatSelection } from "./components/SeatSelection";

export default function AvailabilitySeatScreen() {
  return (
    <ScrollView>
      <GenericContainer>
        <BlobBg />
        <InformativeTitle
          title="El Dorado"
          cifra="Bs. 2"
          description="17:00 - 18:00"
        />
        <SeatSelection />
      </GenericContainer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
