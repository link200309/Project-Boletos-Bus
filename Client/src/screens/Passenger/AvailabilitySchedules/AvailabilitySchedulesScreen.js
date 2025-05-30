//react
import { useRoute } from "@react-navigation/native";
//components
import { InformativeTitle } from "../../../components/InformativeTitle";
import { GenericContainer } from "../../../components/GenericContainer";
import { BlobBg } from "../../../components/Background/BlobBg";
import { ListAvailableSchedules } from "./components/ListAvailableSchedules";

export default AvailabilitySchedulesScreen = ({ navigation }) => {
  const route = useRoute();
  const { travels } = route.params;

  return (
    <GenericContainer>
      <InformativeTitle
        title={`${travels[0].ruta.origen} — ${travels[0].ruta.destino}`}
        description={travels.length + " Horarios disponibles"}
      />
      <BlobBg />
      <ListAvailableSchedules navigation={navigation} travels={travels} />
    </GenericContainer>
  );
};

