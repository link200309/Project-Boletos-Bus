//React
import React, { useState, useEffect } from "react";

//Components
import { InformativeTitle } from "../../../components/InformativeTitle";
import { GenericContainer } from "../../../components/GenericContainer";
import { FormEditTravel } from "./components/FormEditTravel";

//Api
import { getAgencyInformation } from "../../../api/agency.api";

const EditTravelScreen = ({ navigation, route }) => {
  const [choferes, setChoferes] = useState([]);
  const [buses, setBuses] = useState([]);
  const [rutas, setRutas] = useState([]);

  const travelData = navigation.getState().routes[1].params.travel;

  useEffect(() => {
    const fetchAgencyData = async () => {
      try {
        const id_agencia = travelData.bus?.id_agencia || travelData.id_agencia;
        const agencyData = await getAgencyInformation(id_agencia);
        setChoferes(agencyData.choferes || []);
        setBuses(agencyData.buses || []);
        setRutas(agencyData.rutas || []);
      } catch (error) {
        console.error("Error fetching agency data:", error);
      }
    };
    fetchAgencyData();
  }, [travelData]);

  return (
    <GenericContainer>
      <InformativeTitle
        title={"Editar viaje"}
        description={"Puedes modificar los datos del viaje seleccionado"}
      />

      <FormEditTravel
        choferes={choferes}
        buses={buses}
        navigation={navigation}
        travelData={travelData}
      />
    </GenericContainer>
  );
};

export default EditTravelScreen;
