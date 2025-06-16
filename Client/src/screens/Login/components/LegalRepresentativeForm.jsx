import React from "react";
import { View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { InputLabel } from "../../../components/Input/InputLabel";
import { SectionHeader } from "./SectionHeader";
import { accountValidationRules } from "./validation";

export const LegalRepresentativeForm = ({ errors }) => {
  const { control } = useFormContext();
  const validateCI = (ci) => {
    if (!/^[0-9]{7,8}$/.test(ci)) {
      return "La cédula debe tener entre 7 y 8 dígitos";
    }
    return true;
  };

  return (
    <View>
      <SectionHeader title="Datos del representante legal" />

      <Controller
        control={control}
        name="representativeName"
        rules={accountValidationRules.name}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Nombre(s) *"
            placeholder="Ej: María Fernanda"
            value={value}
            onChange={onChange}
            error={errors}
            name="representativeName"
          />
        )}
      />
      <Controller
        control={control}
        name="representativeLastName"
        rules={accountValidationRules.lastName}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Apellido(s) *"
            placeholder="Ej: Gutiérrez López"
            value={value}
            onChange={onChange}
            error={errors}
            name="representativeLastName"
          />
        )}
      />
      <Controller
        control={control}
        name="representativeCI"
        rules={accountValidationRules.ci}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Número de Cédula de Identidad *"
            placeholder="Ej: 4567890"
            value={value}
            onChange={onChange}
            error={errors}
            name="representativeCI"
            keyboardType="numeric"
            maxLength={8}
          />
        )}
      />
      <Controller
        control={control}
        name="representativePhone"
        rules={accountValidationRules.cellphone}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Celular (+591) *"
            placeholder="Ej: 71234567"
            value={value}
            onChange={onChange}
            error={errors}
            name="representativePhone"
            keyboardType="numeric"
            maxLength={8}
          />
        )}
      />
    </View>
  );
};
