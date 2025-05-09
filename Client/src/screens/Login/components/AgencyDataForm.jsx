import { View } from "react-native";
import { InputLabel } from "../../../components/Input/InputLabel";
import { Selector } from "../../../components/Input/Selector";
import { SectionHeader } from "./SectionHeader";

export const AgencyDataForm = ({ items }) => (
  <View>
    <SectionHeader title="Datos de la agencia de viajes" />

    <InputLabel
      label="Nombre de la agencia de viajes"
      placeholder="Ej: Viajes Andinos SRL"
    />

    <Selector
      label="Tipo de sociedad"
      placeholder="Seleccione una opción"
      items={items}
    />

    <InputLabel label="Número de NIT" placeholder="Ej: 1234567015" />

    <Selector
      label="Departamento"
      placeholder="Seleccione el departamento"
      items={items}
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
