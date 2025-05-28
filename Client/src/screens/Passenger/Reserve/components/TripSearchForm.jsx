import React from "react";
import { View } from "react-native";
import { CitySelector } from "./CitySelector";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";
import { SeatCounter } from "./SeatCounter";
import { useForm, FormProvider } from "react-hook-form";
import { GlobalStyles } from "../../../../components/Style/GlobalStyles";

export const TripSearchForm = ({ navigation }) => {
  const methods = useForm();
  const onSubmit = (data) => {
    navigation.navigate("AvailabilityDates", { formData: data });
  };

  return (
    <FormProvider {...methods}>
      <View style={GlobalStyles.formCard}>
        <CitySelector label="origen" name="origen" />
        <CitySelector label="destino" name="destino" />
        <SeatCounter name="asientos" />
        <ButtonStyle
          text={"Buscar viajes disponibles"}
          onClick={methods.handleSubmit(onSubmit)}
        />
      </View>
    </FormProvider>
  );
};
