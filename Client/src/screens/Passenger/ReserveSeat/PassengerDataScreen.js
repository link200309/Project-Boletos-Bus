import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { GenericContainer } from "../../../components/GenericContainer";
import { BlobBg } from "../../../components/Background/BlobBg";
import { InformativeTitle } from "../../../components/InformativeTitle";
import PassengerCard from "./components/PassengerCard";
import ContactCard from "./components/ContactCard";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";
import { formatDate } from "../../../utils/dateTime.util";
import { useForm, FormProvider } from "react-hook-form";

export default function PassengerDataScreen({ navigation, route }) {
  const methods = useForm();
  const onSubmit = async (data) => {
    const isValid = await methods.trigger();
    if (!isValid) return;
    console.log("FORM DATA:", data);
    navigation.navigate("TripSummary", { formData: data });
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
  }, []);

  const [contact, setContact] = useState({ email: "", phone: "" });
  const { setValue } = methods;
  const handlePassengerChange = (index, field, value) => {
    setValue(`passengers.${index}.${field}`, value);
  };
  const passengers = methods.watch("passengers") || [];

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
            />
          ))}

          <ContactCard contact={contact} setContact={setContact} />

          <ButtonStyle
            text="Continuar"
            onClick={methods.handleSubmit(onSubmit)}
          />
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
