import React from "react";
import { View } from "react-native";
import { InputLabel } from "../../../components/Input/InputLabel";
import { SectionHeader } from "./SectionHeader";

export const LegalRepresentativeForm = () => (
  <View>
    <SectionHeader title="Datos del representante legal" />
    <InputLabel label="Nombre(s)" placeholder="Ej: María Fernanda" />
    <InputLabel label="Apellido(s)" placeholder="Ej: Gutiérrez López" />
    <InputLabel
      label="Número de Cédula de Identidad"
      placeholder="Ej: 4567890 LP"
    />
    <InputLabel label="Celular (+591)" placeholder="Ej: 71234567" />
  </View>
);
