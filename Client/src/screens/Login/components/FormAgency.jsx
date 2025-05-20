import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { InputLabel } from "../../../components/Input/InputLabel";
import { Selector } from "../../../components/Input/Selector";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";
import { GlobalStyles } from "../../../components/Style/GlobalStyles";
import { AgencyDataForm } from "./AgencyDataForm";
import { LegalRepresentativeForm } from "./LegalRepresentativeForm";
import { AdminAccountForm } from "./AccountForm";

export const FormAgency = () => {
  
  return (
    <View style={GlobalStyles.formCard}>
      <Text style={styles.textTitle}>Registro de Agencia</Text>
      <Text style={styles.subtitle}>
        Los datos se mantendran confidenciales, serán utilizados para el
        contrato de servicio. BusRat con la Agencia de Viajes.
      </Text>

      <AgencyDataForm/>
      <LegalRepresentativeForm />

      <AdminAccountForm />
      <ButtonStyle text="Solicitar servicio" />
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    color: "#000",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: "#4D4D4D",
  },
});
