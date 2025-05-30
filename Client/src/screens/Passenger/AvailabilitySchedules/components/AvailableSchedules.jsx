import { View, Text, StyleSheet } from "react-native";
import { BusIcon, Location, ChairIcon } from "../../../../components/Icons";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";
import { formatTime, formatDate } from "../utils";

export const AvailableSchedules = ({ travel, navigation }) => {
  const travelData = travel.item || travel;
  const handleBusPress = (selectedTravel) => {
    navigation.navigate("AvailabilitySeat", {
      travels: [selectedTravel],
      busId: selectedTravel.bus.id_bus,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Text style={styles.text}>
          {formatDate(travelData.fecha_salida).formatedDate}
        </Text>
        <Text style={styles.text}>{travelData.bus.agencia.nombre_agencia}</Text>
      </View>
      <View style={{ ...styles.bodySchedule, ...styles.containerContent }}>
        <BusIcon />
        <Text>{travelData.hora_salida_programada.slice(0, 5)}</Text>
        <View style={styles.lineContainer}>
          <View style={styles.circle} />
          <View style={styles.line} />
        </View>
        <Text>
          {formatTime(
            travelData.hora_salida_programada,
            travelData.ruta.tiempo_estimado
          )}
        </Text>
        <Location />
      </View>

      <View style={styles.containerContent}>
        <View>
          <Text style={[styles.text, { fontSize: 25 }]}>
            Bs.{travelData.costo}
          </Text>
          <Text style={styles.text}>Por asiento</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <ChairIcon />
          <Text style={styles.text}>{travelData.bus.tipo_bus}</Text>
        </View>
        <ButtonStyle
          width="115"
          text={"Reservar"}
          onClick={() => handleBusPress(travelData)}
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
