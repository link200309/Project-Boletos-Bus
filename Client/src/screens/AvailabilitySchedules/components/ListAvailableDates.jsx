//react
import { View, StyleSheet } from "react-native";

//components
import { AvailableDates } from "./AvailableDates";

export const ListAvailableDates = ({ travels }) => {
  const formatDate = (departureDate) => {
    const date = new Date(departureDate);
    const day = date.getDate();
    const year = date.getFullYear();
    let weekDay = date.toLocaleDateString("es-ES", {
      weekday: "long",
    });
    weekDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
    const month = date.toLocaleDateString("es-ES", { month: "long" });
    return { weekDay, formatedDate: `${day} ${month} ${year}` };
  };

  return (
    <View style={styles.containerDates}>
      {travels.map((travel) => {
        const dateObject = formatDate(travel.fecha_salida);
        return (
          <AvailableDates
            day={dateObject.weekDay}
            date={dateObject.formatedDate}
            key={travel.id_viaje}
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
