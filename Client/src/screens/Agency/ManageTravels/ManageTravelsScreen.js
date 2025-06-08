//React
import { useEffect, useState, useContext } from "react";

//Components
import { GenericContainer } from "../../../components/GenericContainer";
import { InformativeTitle } from "../../../components/InformativeTitle";
import { ListTravels } from "./components/ListTravels";
import { AuthContext } from "../../../context/AuthContext";

import { getTravelsByAgency } from "../../../api/travel.api";

export default function ManageTravelsScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const [travels, setTravel] = useState({});

  useEffect(() => {
    async function fetchTravels() {
      try {
        const res = await getTravelsByAgency(user.datos_agencia.id_agencia);
        setTravel(res);
      } catch (error) {
        console.error("Error fetching travels:", error);
      }
    }
    fetchTravels();
  }, []);

  const addTravel = () => {
    navigation.navigate("AddTravels", travels);
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
