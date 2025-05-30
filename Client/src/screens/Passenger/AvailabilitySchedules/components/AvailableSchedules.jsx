//react
import { View, Text, StyleSheet } from "react-native";
import { BusIcon, Location, ChairIcon } from "../../../../components/Icons";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";
import { formatTime, formatDate } from "../utils";

export const AvailableSchedules = ({ travel, navigation, onClick }) => {
  console.log(travel.item);

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Text style={styles.text}>
          {formatDate(travel.item.fecha_salida).formatedDate}
        </Text>
        <Text style={styles.text}>
          {travel.item.bus.agencia.nombre_agencia}
        </Text>
      </View>
      <View style={{ ...styles.bodySchedule, ...styles.containerContent }}>
        <BusIcon />
        <Text>{travel.item.hora_salida_programada.slice(0, 5)}</Text>
        <View style={styles.lineContainer}>
          <View style={styles.circle} />
          <View style={styles.line} />
        </View>
        <Text>
          {formatTime(
            travel.item.hora_salida_programada,
            travel.item.ruta.tiempo_estimado
          )}
        </Text>
        <Location />
      </View>

      <View style={styles.containerContent}>
        <View>
          <Text style={[styles.text, { fontSize: 25 }]}>
            Bs.{travel.item.costo}
          </Text>

          <Text style={styles.text}>Por asiento</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <ChairIcon />
          <Text style={styles.text}>{travel.item.bus.tipo_bus}</Text>
        </View>
        <ButtonStyle
          width="115"
          text={"Reservar"}
          onClick={onClick}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: 370,
    padding: 25,
    marginTop: 20,
    backgroundColor: "white",
  },

  containerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bodySchedule: {
    backgroundColor: "#F7F8FF",
    borderColor: "#D5D9FF",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 18,
    borderRadius: 20,
  },

  lineContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  line: {
    height: 2,
    backgroundColor: "#5E2EFF",
    width: "100",
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#5E2EFF",
    position: "absolute",
    top: "-7",
    left: "50%",
    zIndex: 5,
    transform: [{ translateX: -5 }],
  },
  duration: {
    fontSize: 12,
    color: "#888",
    position: "absolute",
    top: 10,
  },

  text: {
    color: "#4318D1",
    fontWeight: 500,
  },
});
