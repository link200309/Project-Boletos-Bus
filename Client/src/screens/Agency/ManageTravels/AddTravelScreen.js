//React
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

//Components
import { InformativeTitle } from "../../../components/InformativeTitle";
import { GenericContainer } from "../../../components/GenericContainer";
import { FormAddTravel } from "./components/FormAddTravel";

const AddTravelScreen = ({ navigation }) => {
  const [choferes, setChoferes] = useState([]);
  const [buses, setBuses] = useState([]);
  const [rutas, setRutas] = useState([]);

  useEffect(() => {
    setChoferes([
      {
        id: 1,
        nombre: "Juan Pérez",
        apellido: "González",
        carnet_identidad: "12345678",
      },
      {
        id: 2,
        nombre: "María",
        apellido: "López",
        carnet_identidad: "87654321",
      },
      {
        id: 3,
        nombre: "Carlos",
        apellido: "Rodríguez",
        carnet_identidad: "11223344",
      },
    ]);

    setBuses([
      {
        id: 1,
        placa: "ABC-123",
        marca: "Mercedes",
        modelo: "Sprinter",
        tipo_bus: "Minibús",
      },
      {
        id: 2,
        placa: "DEF-456",
        marca: "Volvo",
        modelo: "B7R",
        tipo_bus: "Bus",
      },
      {
        id: 3,
        placa: "GHI-789",
        marca: "Scania",
        modelo: "K320",
        tipo_bus: "Bus",
      },
    ]);

    setRutas([
      {
        id: 1,
        origen: "Cochabamba",
        destino: "La Paz",
        distancia: "380 km",
        tiempo_estimado: "6 horas",
      },
      {
        id: 2,
        origen: "Santa Cruz",
        destino: "Cochabamba",
        distancia: "470 km",
        tiempo_estimado: "7 horas",
      },
      {
        id: 3,
        origen: "Sucre",
        destino: "Potosí",
        distancia: "160 km",
        tiempo_estimado: "3 horas",
      },
    ]);
  }, []);

  return (
    <GenericContainer>
      <InformativeTitle
        title={"Crear nuevo viaje"}
        description={"Puedes seleccoinar un chofer, bus o ruta existente"}
      />

      <FormAddTravel
        choferes={choferes}
        buses={buses}
        rutas={rutas}
        onSubmit={(viaje) => console.log("Nuevo viaje:", viaje)}
      />
    </GenericContainer>
  );
};

const styles = StyleSheet.create({
  containerForm: {
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  submitButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AddTravelScreen;
