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

  useEffect(() => {
    const fetchAgencyData = async () => {
      try {
        const id_agencia =
          navigation.getState().routes[1].params[0].bus.id_agencia;
        const agencyData = await getAgencyInformation(id_agencia);
        setChoferes(agencyData.choferes || []);
        setBuses(agencyData.buses || []);

        const travels = navigation.getState().routes[1].params;
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

      <FormAddTravel choferes={choferes} buses={buses} />
    </GenericContainer>
  );
};

export default AddTravelScreen;
