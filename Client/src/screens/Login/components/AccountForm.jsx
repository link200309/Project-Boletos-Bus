import React from "react";
import { View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { InputLabel } from "../../../components/Input/InputLabel";
import { SectionHeader } from "./SectionHeader";
import { accountValidationRules } from "./validation";

export const AccountForm = ({ errors }) => {
  const { control } = useFormContext();

  return (
    <View>
      <SectionHeader title="Datos del administrador de la cuenta BUSRAT" />

      <Controller
        control={control}
        name="name"
        rules={accountValidationRules.name}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Nombre(s) *"
            placeholder="Ingrese su(s) nombre(s)"
            value={value}
            onChange={onChange}
            error={errors}
            name="name"
            keyboardType="default"
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        rules={accountValidationRules.lastName}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Apellido(s) *"
            placeholder="Ingrese su(s) apellido(s)"
            value={value}
            onChange={onChange}
            error={errors}
            name="lastName"
            keyboardType="default"
          />
        )}
      />

      <Controller
        control={control}
        name="ci"
        rules={accountValidationRules.ci}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Cédula de Identidad (C.I.) *"
            placeholder="Ej: 12345678"
            value={value}
            onChange={onChange}
            error={errors}
            name="ci"
            keyboardType="numeric"
            maxLength={8}
          />
        )}
      />

      <Controller
        control={control}
        name="birthdate"
        rules={accountValidationRules.birthdate}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Fecha de Nacimiento *"
            placeholder="DD/MM/AAAA"
            value={value}
            onChange={onChange}
            error={errors}
            name="birthdate"
            keyboardType="numeric"
            maxLength={10}
          />
        )}
      />

      <Controller
        control={control}
        name="cellphone"
        rules={accountValidationRules.cellphone}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Celular (+591) *"
            placeholder="Ej: 71234567"
            value={value}
            onChange={onChange}
            error={errors}
            name="cellphone"
            keyboardType="numeric"
            maxLength={8}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={accountValidationRules.email}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Correo Electrónico *"
            placeholder="ejemplo@correo.com"
            value={value}
            onChange={onChange}
            error={errors}
            name="email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
      />
    </View>
  );
};
