import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { GlobalStyles } from "../../../components/Style/GlobalStyles";
import { InputLabel } from "../../../components/Input/InputLabel";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import { accountValidationRules } from "./validation";

export const FormPassenger = () => {
  const { register, isLoading } = useContext(AuthContext);
  const methods = useForm();
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = methods;
  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      birthdate: data.birthdate.split("/").reverse().join("-"), // Convertir DD/MM/YYYY a YYYY-MM-DD
      cellphone: `+591${data.cellphone}`, // Agregar código de país
    };
    register(formattedData);
  };

  return (
    <View style={GlobalStyles.formCard}>
      <View>
        <Text style={styles.textTitle}>Registro de Pasajero</Text>
        <Text style={styles.subtitle}>
          Tus datos se mantendrán confidenciales y serán utilizados únicamente
          para la emisión de pasajes y gestión de tu cuenta.
        </Text>
        <FormProvider {...methods}>
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
                name={"ci"}
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
                name={"birthdate"}
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
                name={"cellphone"}
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
                name={"email"}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={accountValidationRules.password}
            render={({ field: { onChange, value } }) => (
              <InputLabel
                label="Contraseña *"
                placeholder="Mínimo 8 caracteres"
                value={value}
                onChange={onChange}
                error={errors}
                name="password"
                secureTextEntry={true}
              />
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            rules={accountValidationRules.confirmPassword(watch("password"))}
            render={({ field: { onChange, value } }) => (
              <InputLabel
                label="Confirmar Contraseña *"
                placeholder="Repita su contraseña"
                value={value}
                onChange={onChange}
                error={errors}
                name="confirmPassword"
                secureTextEntry={true}
              />
            )}
          />
        </FormProvider>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#4318D1" style={styles.loader} />
      ) : (
        <ButtonStyle text="Crear Cuenta" onClick={handleSubmit(onSubmit)} />
      )}
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
    lineHeight: 20,
  },
  loader: {
    marginVertical: 20,
  },
});
