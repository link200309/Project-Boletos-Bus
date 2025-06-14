import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { InputLabel } from "../../../../components/Input/InputLabel";
import { Controller, useFormContext } from "react-hook-form";
import { accountValidationRules } from "../../../Login/components/validation";
import { MaterialIcons } from "@expo/vector-icons";

export default function ContactCard({
  contactAccountData,
  setContact,
  handlePassengerChange,
  containerStyle,
}) {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const [isContactDataUsed, setIsContactDataUsed] = useState(false);
  const handleUseContactData = () => {
    if (!isContactDataUsed && contactAccountData) {
      setValue("email", contactAccountData.correo || "");
      setValue("cellphone", contactAccountData.celular || "");
      handlePassengerChange("email", contactAccountData.correo || "");
      handlePassengerChange("cellphone", contactAccountData.celular || "");

      setIsContactDataUsed(true);
    }
  };
  const handleReset = () => {
    setIsContactDataUsed(false);

    setValue(`email`, "");
    setValue(`cellphone`, "");

    handlePassengerChange("email", "");
    handlePassengerChange("cellphone", "");
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.headerText}>Datos de contacto</Text>
      <TouchableOpacity
        style={[
          styles.accountDataGroup,
          isContactDataUsed && styles.accountDataGroupActive,
        ]}
        onPress={handleUseContactData}
        disabled={isContactDataUsed || !contactAccountData}
      >
        <MaterialIcons
          name="account-circle"
          size={20}
          color={isContactDataUsed ? "#007AFF" : "#666666"}
        />
        <Text
          style={[
            styles.labelAccountData,
            isContactDataUsed && styles.labelAccountDataActive,
          ]}
        >
          {isContactDataUsed
            ? "Datos de cuenta aplicados ✓"
            : "Recuperar datos de cuenta"}
        </Text>
      </TouchableOpacity>
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
      {isContactDataUsed && (
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <MaterialIcons name="refresh" size={20} color="#007AFF" />
          <Text style={styles.resetButtonText}>Ingresar datos manualmente</Text>
        </TouchableOpacity>
      )}
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
  accountDataGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#F8F9FA",
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E9ECEF",
  },
  accountDataGroupActive: {
    backgroundColor: "#E3F2FD",
    borderColor: "#007AFF",
  },
  labelAccountData: {
    marginLeft: 12,
    fontSize: 14,
    color: "#666666",
    fontWeight: "500",
  },
  labelAccountDataActive: {
    color: "#007AFF",
  },
  resetButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#F0F8FF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  resetButtonText: {
    marginLeft: 8,
    color: "#007AFF",
    fontSize: 14,
    fontWeight: "500",
  },
});
