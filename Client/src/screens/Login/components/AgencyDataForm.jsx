import { View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { InputLabel } from "../../../components/Input/InputLabel";
import { Selector } from "../../../components/Input/Selector";
import { SectionHeader } from "./SectionHeader";
import { accountValidationRules } from "./validation";

export const AgencyDataForm = ({ errors }) => {
  const { control } = useFormContext();
  const departamentos = [
    { label: "Beni", value: "Beni" },
    { label: "Chuquisaca", value: "Chuquisaca" },
    { label: "Cochabamba", value: "Cochabamba" },
    { label: "La Paz", value: "La Paz" },
    { label: "Oruro", value: "Oruro" },
    { label: "Pando", value: "Pando" },
    { label: "Potosí", value: "Potosí" },
    { label: "Santa Cruz", value: "Santa Cruz" },
    { label: "Tarija", value: "Tarija" },
  ];
  const tipoSociedad = [
    {
      label: "Sociedad de Responsabilidad Limitada (S.R.L)",
      value: "Sociedad de Responsabilidad Limitada",
    },
    { label: "Sociedad Anónima (S.A.)", value: "Sociedad Anonima" },
    { label: "Empresa Unipersonal", value: "Empresa Unipersonal" },
    { label: "Cooperativa", value: "Cooperativa" },
  ];

  return (
    <View>
      <SectionHeader title="Datos de la agencia de viajes" />
      <Controller
        control={control}
        name="agencyName"
        rules={accountValidationRules.nameAgency}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Nombre de la agencia de viajes *"
            placeholder="Ej: Viajes Andinos SRL"
            value={value}
            onChange={onChange}
            error={errors}
            name="agencyName"
          />
        )}
      />
      <Controller
        control={control}
        name="companyType"
        rules={{
          required: "El tipo de sociedad es obligatorio",
        }}
        render={({ field: { onChange, value } }) => (
          <Selector
            label="Tipo de sociedad *"
            placeholder="Seleccione una opción"
            items={tipoSociedad}
            value={value}
            onChange={onChange}
            error={errors}
            name="companyType"
          />
        )}
      />
      <Controller
        control={control}
        name="nit"
        rules={accountValidationRules.nit}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Número de NIT *"
            placeholder="Ej: 1234567015"
            value={value}
            onChange={onChange}
            error={errors}
            name="nit"
            keyboardType="numeric"
            maxLength={10}
          />
        )}
      />
      <Controller
        control={control}
        name="department"
        rules={{
          required: "El departamento es obligatorio",
        }}
        render={({ field: { onChange, value } }) => (
          <Selector
            label="Departamento *"
            placeholder="Seleccione el departamento"
            items={departamentos}
            value={value}
            onChange={onChange}
            error={errors}
            name="department"
          />
        )}
      />
      <Controller
        control={control}
        name="city"
        rules={accountValidationRules.city}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Ciudad (domicilio legal) *"
            placeholder="Ej: La Paz"
            value={value}
            onChange={onChange}
            error={errors}
            name="city"
          />
        )}
      />
      <Controller
        control={control}
        name="address"
        rules={accountValidationRules.address}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Dirección (domicilio legal) *"
            placeholder="Ej: Calle Bolívar N°123, Zona Central"
            value={value}
            onChange={onChange}
            error={errors}
            name="address"
          />
        )}
      />
      <Controller
        control={control}
        name="agencyEmail"
        rules={accountValidationRules.email}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Correo electrónico de la agencia *"
            placeholder="Ej: contacto@agencia.com"
            value={value}
            onChange={onChange}
            error={errors}
            name="agencyEmail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
      />
      <Controller
        control={control}
        name="cellphone"
        rules={accountValidationRules.cellphone}
        render={({ field: { onChange, value } }) => (
          <InputLabel
            label="Número de celular (+591) *"
            placeholder="Ej: 78965412"
            value={value}
            onChange={onChange}
            error={errors}
            name="cellphone"
            keyboardType="numeric"
            maxLength={8}
          />
        )}
      />
    </View>
  );
};
