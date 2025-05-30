//React
import { useEffect, useState, useContext } from "react";

//Components
import { GenericContainer } from "../../../components/GenericContainer";
import { InformativeTitle } from "../../../components/InformativeTitle";
import { ListTravels } from "./components/ListTravels";
import { AuthContext } from "../../../context/AuthContext";

import { getTravelsByAgency } from "../../../api/travel.api";
import { travels } from "./data";

export default function ManageTravelsScreen({ navigation }) {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function fetchTravels() {
      try {
        const res = await getTravelsByAgency(3);
        // console.log(JSON.stringify(res, null, 2));
      } catch (error) {
        console.error("Error fetching travels:", error);
      }
    }
    fetchTravels();
  }, []);

  const addTravel = () => {
    console.log("Viaje agregado");
  };

  return (
    <GenericContainer>
      <InformativeTitle
        title={"Gestionar viajes"}
        description={"Viajes totales: " + travels.length}
        btnText={"+ Viaje"}
        onClick={addTravel}
      />

      <ListTravels travels={travels} navigation={navigation} />
    </GenericContainer>
  );
}
