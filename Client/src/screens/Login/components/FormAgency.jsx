import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { InputLabel } from "../../../components/Input/InputLabel";
import { Selector } from "../../../components/Input/Selector";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";

export const FormAgency = () => {
  const items = [
    { label: "Opción 1", value: "opcion1" },
    { label: "Opción 2", value: "opcion2" },
    { label: "Opción 3", value: "opcion3" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Registro de Agencia</Text>
      <View>
        <View>
          <Text style={styles.text1}>Datos de la agencia de viajes</Text>
          <Text style={styles.text2}> ninini</Text>
        </View>
        <View>
          <InputLabel label="Nombre agecia de viajes" placeholder="No" />
          <Selector label="Tipo de sociedad" placeholder="No" items={items} />
          <InputLabel label="Número de NIT" placeholder="No" />
          <Selector label="Departamento" placeholder="No" items={items} />
          <InputLabel label="Ciudad (Domicilio legal)" placeholder="No" />
          <InputLabel label="Dirección (Domicilio legal)" placeholder="No" />
          <InputLabel label="E-mail (Agencia)" placeholder="No" />
          <InputLabel label="Número de celular" placeholder="No" />
        </View>
      </View>

      <View>
        <View>
          <Text style={styles.text1}>Datos del representante legal</Text>
          <Text style={styles.text2}></Text>
        </View>
        <View>
          <InputLabel label="Nombre(s)" placeholder="No" />
          <InputLabel label="Apellido(s)" placeholder="No" />
          <InputLabel label="Número de C.I." placeholder="No" />
          <InputLabel label="Teléfono/Celular" placeholder="No" />
        </View>
      </View>

      <View>
        <View>
          <Text style={styles.text1}>
            Datos del administrador de la cuenta BUSRAT
          </Text>
          <Text style={styles.text2}></Text>
        </View>
        <View>
          <InputLabel label="E-mail" placeholder="No" />
          <InputLabel label="Nombre" placeholder="No" />
          <InputLabel label="Apellido(s)" placeholder="No" />
          <InputLabel label="C.I." placeholder="No" />
          <InputLabel label="Teléfono/celular" placeholder="No" />
          <InputLabel label="Fecha de nacimiento" placeholder="No" />
        </View>
      </View>
      <ButtonStyle text="Solicitar servicio" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    width: "100%",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
  text1: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 3,
  },
  textTitle: {
    color: "#000",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text2: {
    fontSize: 14,
    marginBottom: 10,
    color: "#000",
  },
});
