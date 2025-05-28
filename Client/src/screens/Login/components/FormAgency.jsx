import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useForm, FormProvider } from "react-hook-form";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";
import { GlobalStyles } from "../../../components/Style/GlobalStyles";
import { AgencyDataForm } from "./AgencyDataForm";
import { AccountForm } from "./AccountForm";
import { LegalRepresentativeForm } from "./LegalRepresentativeForm";
import { AccountAdminForm } from "./AccountAdminForm";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigation } from "@react-navigation/native"; // ✅ Importar el hook

export const FormAgency = () => {
  const navigation = useNavigation(); // ✅ Usar el hook correctamente
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
      representativePhone: "",

      adminName: "",
      adminLastName: "",
      adminCI: "",
      admincellPhone: "",
      adminEmail: "",
      adminPassword: "",
      confirmAdminPassword: "",
      adminBirthdate: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors, isValid },
  } = methods;

  const onSubmit = async (data) => {
    const formattedData = {
      tipo_usuario: "agencia",
      nombre: data.adminName,
      apellido: data.adminLastName,
      ci: data.adminCI,
      correo_electronico: data.adminEmail,
      contraseña: data.adminPassword,
      numero_celular: parseInt(data.admincellPhone),
      fecha_nacimiento: data.adminBirthdate,
      datos_agencia: {
        nombre_agencia: data.agencyName,
        tipo_sociedad: data.companyType,
        NIT: data.nit,
        departamento: data.department,
        ciudad: data.city,
        direccion: data.address,
        estado: "activo",
        correo_electronico_agencia: data.agencyEmail,
        numero_celular: data.cellphone,
        nombre_representante: data.representativeName,
        apellido_representante: data.representativeLastName,
        ci_representante: data.representativeCI,
        telefono_representante: data.representativePhone,
      },
    };

    try {
      await registerAgency(formattedData);
      Alert.alert("Registro exitoso", "La agencia fue registrada correctamente.", [
        {
          text: "OK",
          onPress: () => navigation.goBack(), // ← ✅ Volver a la pantalla anterior
        },
      ]);
    } catch (error) {
      Alert.alert("Error", error.message || "No se pudo registrar la agencia.");
    }
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
        <AccountAdminForm errors={errors} />

        {isLoading ? (
          <ActivityIndicator size="large" color="#4318D1" style={styles.loader} />
        ) : (
          <ButtonStyle
            text="Crear Cuenta"
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
