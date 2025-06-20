//react
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
//components
import { AvailableDates } from "./AvailableDates";
import { GenericContainer } from "../../../../components/GenericContainer";
//utils
import { formatDate } from "../../../../utils/dateTime.util";

export const ListAvailableDates = ({ travels, navigation }) => {
  const [travelsFiltered, setTravelsFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const res = Array.from(
      new Map(travels.map((travel) => [travel.fecha_salida, travel])).values()
    );
    setTravelsFiltered(res);
    setLoading(false);
  }, [travels]);

  const filterTravels = (fecha_salida) =>
    travels.filter((travel) => travel.fecha_salida === fecha_salida);

  return (
    <GenericContainer scroll={true}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        travelsFiltered.map((travel) => {
          const dateObject = formatDate(travel.fecha_salida);
          return (
            <AvailableDates
              day={dateObject.weekDay}
              date={dateObject.formatedDate}
              key={travel.id_viaje}
              onClick={() =>
                navigation.navigate("AvailabilitySchedules", {
                  travels: filterTravels(travel.fecha_salida),
                })
              }
            />
          );
        })
      )}
    </GenericContainer>
  );
};

const styles = StyleSheet.create({
  containerDates: {
    marginTop: 15,
  },
});
