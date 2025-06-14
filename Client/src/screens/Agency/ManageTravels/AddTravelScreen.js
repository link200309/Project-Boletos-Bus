//React
import React, { useState, useEffect } from "react";

//Components
import { InformativeTitle } from "../../../components/InformativeTitle";
import { GenericContainer } from "../../../components/GenericContainer";
import { FormAddTravel } from "./components/FormAddTravel";

//Api
import { getAgencyInformation } from "../../../api/agency.api";

const AddTravelScreen = ({ navigation }) => {
  const [choferes, setChoferes] = useState([]);
  const [buses, setBuses] = useState([]);
  const [rutas, setRutas] = useState([]);
  const { travels } = navigation.getState().routes[1].params;

  useEffect(() => {
    const fetchAgencyData = async () => {
      try {
        const id_agencia = travels[0].bus.id_agencia;
        const agencyData = await getAgencyInformation(id_agencia);
        setChoferes(agencyData.choferes || []);
        setBuses(agencyData.buses || []);

        travels.forEach((travel) => {
          setRutas((prev) => {
            if (!prev.some((c) => c.id_ruta === travel.ruta.id_ruta)) {
              return [...prev, travel.ruta];
            }
            return prev;
          });
        });
      } catch (error) {
        console.error("Error fetching agency data:", error);
      }
    };
    fetchAgencyData();
  }, []);

  return (
    <GenericContainer>
      <InformativeTitle
        title={"Crear nuevo viaje"}
        description={"Puedes seleccionar un chofer, bus o ruta existente"}
      />

      <FormAddTravel
        choferes={choferes}
        buses={buses}
        navigation={navigation}
      />
    </GenericContainer>
  );
};

export default AddTravelScreen;
