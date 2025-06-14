//React
import { useEffect, useState, useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

//Components
import { GenericContainer } from "../../../components/GenericContainer";
import { InformativeTitle } from "../../../components/InformativeTitle";
import { ListTravels } from "./components/ListTravels";
import { AuthContext } from "../../../context/AuthContext";

//Api
import { getTravelsByAgency } from "../../../api/travel.api";

export default function ManageTravelsScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const [travels, setTravel] = useState({});
  const [loading, setLoading] = useState(false);

  async function fetchTravels() {
    setLoading(true);
    try {
      const res = await getTravelsByAgency(user.datos_agencia.id_agencia);
      setTravel(res);
    } catch (error) {
      console.error("Error fetching travels:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchTravels();
  }, []);

  const addTravel = () => {
    navigation.navigate("AddTravels", { travels, fetchTravels });
  };

  if (loading || !travels) {
    return (
      <GenericContainer style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4318D1" />
      </GenericContainer>
    );
  }

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

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
