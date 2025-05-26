import React, { useContext } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { useForm, FormProvider } from "react-hook-form";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";
import { GlobalStyles } from "../../../components/Style/GlobalStyles";
import { AgencyDataForm } from "./AgencyDataForm";
import { LegalRepresentativeForm } from "./LegalRepresentativeForm";
import { AuthContext } from "../../../context/AuthContext";

export const FormAgency = () => {
  const { registerAgency, isLoading } = useContext(AuthContext);
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      agencyName: "",
      companyType: "",
      department: "",
      businessName: "",
      nit: "",
      address: "",
      city: "",
      cellphone: "",
      agencyEmail: "",
      website: "",
      foundationYear: "",

      representativeName: "",
      representativeLastName: "",
      representativeCI: "",
      representativecellPhone: "",
      representativeEmail: "",
      representativeAddress: "",

      adminName: "",
      adminLastName: "",
      adminCI: "",
      admincellPhone: "",
      adminEmail: "",
      adminPassword: "",
      confirmAdminPassword: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors, isValid },
  } = methods;

  const onSubmit = (data) => {
    const formattedData = {
      agency: {
        name: data.agencyName,
        type: data.companyType,
        nit: data.nit,
        department: data.department,
        city: data.city,
        address: data.address,
        cellphone: data.cellphone,
        email: data.agencyEmail,
      },
      legalRepresentative: {
        name: data.representativeName,
        lastName: data.representativeLastName,
        ci: data.representativeCI,
        phone: data.representativePhone,
      },
      adminAccount: {
        name: data.name,
        lastName: data.lastName,
        ci: data.ci,
        cellphone: data.cellphone,
        birthdate: data.birthdate,
        email: data.adminEmail,
      },
    };

    registerAgency(formattedData);
  };

  return (
    <View style={GlobalStyles.formCard}>
      <Text style={styles.textTitle}>Registro de Agencia</Text>
      <Text style={styles.subtitle}>
        Tus datos se mantendrán confidenciales y serán utilizados únicamente
        para el contrato de servicio entre BusRat y tu Agencia de Viajes.
      </Text>
      <FormProvider {...methods}>
        <AgencyDataForm errors={errors} />
        <LegalRepresentativeForm errors={errors} />
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#4318D1"
            style={styles.loader}
          />
        ) : (
          <ButtonStyle
            text="Solicitar Servicio"
            onClick={handleSubmit(onSubmit)}
            disabled={!isValid || isLoading}
          />
        )}
      </FormProvider>
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
