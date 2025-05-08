import React from "react";
import { View, StyleSheet } from "react-native";
import { CitySelector } from "./CitySelector";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";
import { SeatCounter } from "./SeatCounter";
import { useForm, FormProvider } from "react-hook-form";

export const TripSearchForm = ({ navigation }) => {
  const methods = useForm();

  const onSubmit = (data) => {
    navigation.navigate("AvailabilityDates", { formData: data });
  };

  return (
    <FormProvider {...methods}>
      <View style={Style.container}>
        <CitySelector label="origen" name="origen" />
        <CitySelector label="destino" name="destino" />
        <SeatCounter name="asientos" />
        <ButtonStyle
          text={"Buscar viajes disponibles"}
          variant={1}
          height={50}
          onClick={methods.handleSubmit(onSubmit)}
        />
      </View>
    </FormProvider>
  );
};

const Style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 370,
    marginVertical: 20,
    padding: 20,
  },
});
