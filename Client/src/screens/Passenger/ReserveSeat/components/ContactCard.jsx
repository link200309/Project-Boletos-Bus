import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { InputLabel } from "../../../../components/Input/InputLabel";
import { Controller, useFormContext  } from "react-hook-form";
import { accountValidationRules } from "../../../Login/components/validation";

export default function ContactCard({ contact, setContact, containerStyle }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.headerText}>Datos de contacto</Text>
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
      <Controller
        control={control}
        name="cellphone"
        rules={accountValidationRules.cellphone}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Nro de Celular *"
            placeholder="Ingresa un Nro de celular"
            value={value}
            onChange={onChange}
            error={errors}
            name={"cellphone"}
            keyboardType="phone-pad"
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: 370,
    padding: 25,
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
  },
});
