import React, { useState, useEffect, useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { GenericContainer } from "../../../components/GenericContainer";
import { BlobBg } from "../../../components/Background/BlobBg";
import { InformativeTitle } from "../../../components/InformativeTitle";
import PassengerCard from "./components/PassengerCard";
import ContactCard from "./components/ContactCard";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";
import { formatDate, formatFechaParaVista } from "../../../utils/dateTime.util";
import { useForm, FormProvider } from "react-hook-form";
import { AuthContext } from "../../../context/AuthContext";

export default function PassengerDataScreen({ navigation, route }) {
  const methods = useForm();
  const onSubmit = async (data) => {
    const isValid = await methods.trigger();
    if (!isValid) return;

    const passengers = methods.getValues("passengers");

    navigation.navigate("TripSummary", {
      formData: { passengers, contact },
      travels,
    });
  };

  const { selectedSeats, travelDetails, travels } = route.params || {};
  useEffect(() => {
    const defaultValues = selectedSeats.map((seat) => ({
      seat,
      firstName: "",
      lastName: "",
      identityNumber: "",
      birthDate: "",
    }));
    methods.reset({ passengers: defaultValues });
  }, [selectedSeats]);

  const [contact, setContact] = useState({ email: "", phone: "" });
  const { setValue } = methods;
  const handlePassengerChange = (index, field, value) => {
    setValue(`passengers.${index}.${field}`, value);
  };
  const handleContactChange = (field, value) => {
    setValue(field, value);
  };
  const passengers = methods.watch("passengers") || [];
  const { user } = useContext(AuthContext);

  const userAccountData = {
    firstName: user?.usuario?.nombre || "",
    lastName: user?.usuario?.apellido || "",
    identityNumber: user?.usuario?.ci || "",
    birthDate:
      formatFechaParaVista(user?.datos_pasajero?.fecha_nacimiento) || "",
  };

  const contactAccountData = {
    correo: user?.usuario?.correo_electronico || "",
    celular: user?.usuario?.numero_celular || "",
  };

  return (
    <GenericContainer>
      <BlobBg />
      <InformativeTitle
        title={`${passengers.length} asientos seleccionados`}
        description={`${travels[0].ruta.origen} - ${travels[0].ruta.destino}\n${
          formatDate(travels[0].fecha_salida).formatedDate
        }`}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <FormProvider {...methods}>
          {passengers.map((passenger, index) => (
            <PassengerCard
              key={index}
              index={index}
              passenger={passenger}
              handlePassengerChange={handlePassengerChange}
              userAccountData={userAccountData}
            />
          ))}

          <ContactCard
            contactAccountData={contactAccountData}
            setContact={setContact}
            handlePassengerChange={handleContactChange}
          />

          <ButtonStyle text="Continuar" onClick={onSubmit} />
        </FormProvider>
      </ScrollView>
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 30,
    paddingTop: 10,
    alignItems: "center",
  },
});
