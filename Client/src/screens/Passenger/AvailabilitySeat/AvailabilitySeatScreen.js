import React from "react";
import { View, Text, StyleSheet } from "react-native";

//Components
import { GenericContainer } from "../../../components/GenericContainer";
import { SelectSeat } from "./components/SelectSeat";
import { InformativeTitle } from "../../../components/InformativeTitle";

export default function AvailabilitySeatScreen() {
  return (
    <GenericContainer >
        <InformativeTitle
          title="El Dorado"
            cifra="Bs. 2"
          description="17:00 - 18:00"
        />
      <SelectSeat />
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  
});
