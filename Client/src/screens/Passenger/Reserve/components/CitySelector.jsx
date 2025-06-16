import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useFormContext, Controller } from "react-hook-form";
import { Location } from "../../../../components/Icons";

export const CitySelector = ({ label, name }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const placeholder = {
    label: `Selecciona ${label}`,
    value: null,
    color: "#9EA0A4",
  };

  const items = [
    { label: "Beni", value: "Beni" },
    { label: "Buenos Aires", value: "Buenos Aires" },
    { label: "Cobija", value: "Cobija" },
    { label: "Cochabamba", value: "Cochabamba" },
    { label: "Cordoba - Ar", value: "Cordoba - Ar" },
    { label: "Cuiaba", value: "Cuiaba" },
    { label: "Desaguadero", value: "Desaguadero" },
    { label: "Ivirgarzama", value: "Ivirgarzama" },
    { label: "La Paz", value: "La Paz" },
    { label: "Llallagua", value: "Llallagua" },
    { label: "Mendoza - Ar", value: "Mendoza - Ar" },
    { label: "Oruro", value: "Oruro" },
    { label: "Pando", value: "Pando" },
    { label: "Potosi", value: "Potosi" },
    { label: "Puerto Quijarro", value: "Puerto Quijarro" },
    { label: "Punata", value: "Punata" },
    { label: "Riberalta", value: "Riberalta" },
    { label: "Robore", value: "Robore" },
    { label: "San Ignacio De Velasco", value: "San Ignacio De Velasco" },
    { label: "San Miguel De Velasco", value: "San Miguel De Velasco" },
    { label: "Santa Cruz", value: "Santa Cruz" },
    { label: "Sucre", value: "Sucre" },
    { label: "Tarija", value: "Tarija" },
    { label: "Trinidad", value: "Trinidad" },
    { label: "Uyuni", value: "Uyuni" },
    { label: "Villazon", value: "Villazon" },
    { label: "Yacuiba", value: "Yacuiba" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{`Ciudad de ${label}`}</Text>
      <View style={styles.dropdownContainer}>
        <Location style={styles.icon} />
        <Controller
          control={control}
          name={name}
          rules={{ required: true }}
          defaultValue={null}
          render={({ field: { onChange, value } }) => (
            <RNPickerSelect
              placeholder={placeholder}
              items={items}
              value={value}
              onValueChange={onChange}
              style={{
                inputIOS: styles.dropdown,
                inputAndroid: styles.dropdown,
              }}
            />
          )}
        />
      </View>
      {errors[name] && (
        <Text style={styles.errorText}>Este campo es obligatorio</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: "#4318D1",
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 14,
  },
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#E6E8FF",
    borderRadius: 15,
    backgroundColor: "#F3F4F9",
  },
  icon: {
    marginVertical: 10,
    marginLeft: 15,
    zIndex: 10,
  },
  dropdown: {
    color: "#000",
    fontSize: 16,
    width: 280,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 10,
  },
});
