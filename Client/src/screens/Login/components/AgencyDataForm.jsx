import { View } from "react-native";
import { InputLabel } from "../../../components/Input/InputLabel";
import { Selector } from "../../../components/Input/Selector";
import { SectionHeader } from "./SectionHeader";

export const AgencyDataForm = ({ items }) => {
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
    { label: "Sociedad Anonima", value: "Sociedad Anonima" },
  ];

  return (
    <View>
      <SectionHeader title="Datos de la agencia de viajes" />

      <InputLabel
        label="Nombre de la agencia de viajes"
        placeholder="Ej: Viajes Andinos SRL"
      />

      <Selector
        label="Tipo de sociedad"
        placeholder="Seleccione una opción"
        items={tipoSociedad}
      />

      <InputLabel label="Número de NIT" placeholder="Ej: 1234567015" />

      <Selector
        label="Departamento"
        placeholder="Seleccione el departamento"
        items={departamentos}
      />

      <InputLabel label="Ciudad (domicilio legal)" placeholder="Ej: La Paz" />

      <InputLabel
        label="Dirección (domicilio legal)"
        placeholder="Ej: Calle Bolívar N°123"
      />

      <InputLabel
        label="Correo electrónico de la agencia"
        placeholder="Ej: contacto@agencia.com"
      />

      <InputLabel label="Número de celular (+591)" placeholder="Ej: 78965412" />
    </View>
  );
};
