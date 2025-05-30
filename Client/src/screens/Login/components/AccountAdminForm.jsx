import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { InputLabel } from "../../../components/Input/InputLabel";
import { Controller, useFormContext, useWatch } from "react-hook-form";

export const AccountAdminForm = ({ errors }) => {
  const { control } = useFormContext();
  const passwordValue = useWatch({ control, name: "adminPassword" });

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Administrador de la cuenta</Text>

      <Controller
        control={control}
        name="adminName"
        rules={{ required: "El nombre es obligatorio" }}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Nombre del administrador"
            placeholder="Ej. Juan"
            value={value}
            onChange={onChange}
            error={errors}
            name="adminName"
          />
        )}
      />

      <Controller
        control={control}
        name="adminLastName"
        rules={{ required: "El apellido es obligatorio" }}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Apellido del administrador"
            placeholder="Ej. Pérez"
            value={value}
            onChange={onChange}
            error={errors}
            name="adminLastName"
          />
        )}
      />

      <Controller
        control={control}
        name="adminCI"
        rules={{
          required: "El CI es obligatorio",
          pattern: {
            value: /^[0-9]+$/,
            message: "El CI debe ser numérico",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="CI del administrador"
            placeholder="Ej. 12345678"
            value={value}
            onChange={onChange}
            error={errors}
            name="adminCI"
            keyboardType="numeric"
          />
        )}
      />

      <Controller
        control={control}
        name="admincellPhone"
        rules={{
          required: "El celular es obligatorio",
          pattern: {
            value: /^[0-9]{8,}$/,
            message: "Número no válido, mínimo 8 dígitos",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Celular del administrador"
            placeholder="Ej. 76432109"
            value={value}
            onChange={onChange}
            error={errors}
            name="admincellPhone"
            keyboardType="phone-pad"
          />
        )}
      />

      <Controller
        control={control}
        name="adminEmail"
        rules={{
          required: "El correo es obligatorio",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Correo electrónico inválido",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Correo del administrador"
            placeholder="Ej. admin@correo.com"
            value={value}
            onChange={onChange}
            error={errors}
            name="adminEmail"
            keyboardType="email-address"
          />
        )}
      />

      <Controller
        control={control}
        name="adminPassword"
        rules={{
          required: "La contraseña es obligatoria",
          minLength: {
            value: 8,
            message: "Mínimo 8 caracteres",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Contraseña"
            placeholder="Mínimo 8 caracteres"
            value={value}
            onChange={onChange}
            error={errors}
            name="adminPassword"
            secureTextEntry={true}
          />
        )}
      />

      <Controller
        control={control}
        name="confirmAdminPassword"
        rules={{
          required: "Confirma la contraseña",
          validate: (value) =>
            value === passwordValue || "Las contraseñas no coinciden",
        }}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Confirmar contraseña"
            placeholder="Repite la contraseña"
            value={value}
            onChange={onChange}
            error={errors}
            name="confirmAdminPassword"
            secureTextEntry={true}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    gap: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
});
