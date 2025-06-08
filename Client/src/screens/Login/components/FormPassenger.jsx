import React, { useContext } from "react";
import { Text, View, StyleSheet, ActivityIndicator, Alert } from "react-native";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { GlobalStyles } from "../../../components/Style/GlobalStyles";
import { InputLabel } from "../../../components/Input/InputLabel";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { accountValidationRules } from "../../Login/components/validation";

export const FormPassenger = () => {
  const { register, isLoading } = useContext(AuthContext);
  const navigation = useNavigation();

  const methods = useForm({ mode: "onChange" });
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    watch,
  } = methods;

  const passwordValue = watch("password");

  const onSubmit = async (data) => {
    const formattedData = {
      tipo_usuario: "cliente",
      nombre: data.name,
      apellido: data.lastName,
      ci: data.ci,
      correo_electronico: data.email,
      contraseña: data.password,
      numero_celular: parseInt(data.cellphone),
      fecha_nacimiento: data.birthdate,
    };

    try {
      await register(formattedData);
      Alert.alert(
        "Registro exitoso",
        "Tu cuenta ha sido creada correctamente.",
        [
          {
            text: "OK",
            onPress: () => navigation.goBack(),
          },
        ]
      );
    } catch (error) {
      Alert.alert("Error", error.message || "No se pudo registrar tu cuenta.");
    }
  };

  return (
    <View style={GlobalStyles.formCard}>
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
              placeholder="Ej: 2001-06-20"
              value={value}
              onChange={onChange}
              error={errors}
              name="birthdate"
              keyboardType="default"
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
          rules={{
            required: "Confirma la contraseña",
            validate: (value) =>
              value === passwordValue || "Las contraseñas no coinciden",
          }}
          render={({ field: { onChange, value } }) => (
            <InputLabel
              label="Confirmar Contraseña *"
              placeholder="Repite la contraseña"
              value={value}
              onChange={onChange}
              error={errors}
              name="confirmPassword"
              secureTextEntry={true}
            />
          )}
        />
      </FormProvider>

      {isLoading ? (
        <ActivityIndicator size="large" color="#4318D1" style={styles.loader} />
      ) : (
        <ButtonStyle
          text="Crear Cuenta"
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid || isLoading}
        />
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
