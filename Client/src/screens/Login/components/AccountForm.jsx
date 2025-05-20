import React from "react";
import { View } from "react-native";
import { InputLabel } from "../../../components/Input/InputLabel";
import { SectionHeader } from "./SectionHeader";

export const AdminAccountForm = () => (
  <View>
    <SectionHeader title="Datos del administrador de la cuenta BUSRAT" />

    <InputLabel label="Correo electrónico" placeholder="ejemplo@gmail.com" />
    <InputLabel label="Nombre(s)" placeholder="Ingrese su nombre" />
    <InputLabel label="Apellido(s)" placeholder="Ingrese sus apellidos" />
    <InputLabel label="Cédula de identidad (C.I.)" placeholder="Ej: 12345678" />
    <InputLabel label="Celular (+591)" placeholder="71234567" />
    <InputLabel label="Fecha de nacimiento" placeholder="DD/MM/AAAA" />

  </View>
);
