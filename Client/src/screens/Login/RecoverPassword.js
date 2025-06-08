import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { GenericContainer } from "../../components/GenericContainer";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { BackIcon } from "../../components/Icons";
import { GlobalStyles } from "../../components/Style/GlobalStyles";
import { InputLabel } from "../../components/Input/InputLabel";
import { ButtonStyle } from "../../components/Button/ButtonStyle";
import { accountValidationRules } from "./components/validation";

export default function RecoverPassword({ navigation }) {
  const methods = useForm();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    // console.log(data);
  };

  return (
    <GenericContainer style={styles.container}>
      <BackIcon style={styles.btnBack} onPress={() => navigation.goBack()} />
      <View style={styles.containerLogo}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
        <Image
          source={require("../../../assets/logoName.png")}
          style={styles.logoName}
        />
      </View>
      <View style={GlobalStyles.formCard}>
        <Text style={styles.textTitle}>Restablece tu contraseña</Text>
        <Text style={styles.subtitle}>
          Introduce el correo electrónico asociado a tu cuenta de BusRat y te
          enviaremos un correo con un enlace para restaurar tu contraseña.
        </Text>
        <Controller
          control={control}
          name="email"
          rules={accountValidationRules.email}
          render={({ field: { onChange, value } }) => (
            <InputLabel
              label="Correo electrónico"
              placeholder="ejemplo@gmail.com"
              value={value}
              onChange={onChange}
              error={errors}
              name={"email"}
              keyboardType="email-address"
            />
          )}
        />
        <ButtonStyle text="Enviar correo" onClick={handleSubmit(onSubmit)} />
      </View>
    </GenericContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#2B0B94",
  },
  containerLogo: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "20%",
    marginTop: 60,
    marginBottom: 10,
    flexDirection: "row",
  },
  logo: {
    width: 110,
    height: 120,
    marginRight: 20,
  },
  logoName: {
    width: 130,
    height: 35,
    marginTop: 10,
  },
  btnBack: {
    position: "absolute",
    top: 60,
    left: 20,
    fontSize: 30,
    color: "#fff",
    zIndex: 1,
  },
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
