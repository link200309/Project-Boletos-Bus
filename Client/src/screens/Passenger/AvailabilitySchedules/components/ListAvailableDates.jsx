//react
import { View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

//components
import { AvailableDates } from "./AvailableDates";

//utils
import { formatDate } from "../utils";

export const ListAvailableDates = ({ travels, navigation }) => {
  const [travelsFiltered, setTravelsFiltered] = useState([]);

  useEffect(() => {
    const res = Array.from(
      new Map(travels.map((travel) => [travel.fecha_salida, travel])).values()
    );
    setTravelsFiltered(res);
  }, [travels]);

  const filterTravels = (fecha_salida) => {
    return travels.filter((travel) => {
      if (travel.fecha_salida == fecha_salida) {
        return travel;
      }
    });
  };

  return (
    <View style={styles.containerDates}>
      {travelsFiltered.map((travel) => {
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
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  containerDates: {
    marginTop: 15,
  },
});
