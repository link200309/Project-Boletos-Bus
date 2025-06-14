//React
import { View, Text, StyleSheet } from "react-native";

//Components
import { InformativeTitle } from "../../../components/InformativeTitle";
import { GenericContainer } from "../../../components/GenericContainer";
import {
  Location,
  GlobalInformationIcon,
  BusIcon,
  DriverIcon,
} from "../../../components/Icons";

//Utils
import { formatDate, formatTime } from "../../../utils/dateTime.util";

const DetailsTravelScreen = ({ navigation }) => {
  const tripData = navigation.getState().routes[1].params;

  const formatTimeSimple = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    return `${hours}:${minutes}`;
  };

  return (
    <GenericContainer>
      <InformativeTitle
        title={`Viaje #${String(tripData.id_viaje).padStart(3, "0")}`}
        description={`${tripData.ruta.origen} — ${tripData.ruta.destino}`}
      />
      <GenericContainer style={styles.container} scroll={true}>
        <View style={styles.content}>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Location />
              <Text style={styles.sectionTitle}>Información de la Ruta</Text>
            </View>

            <View style={styles.routeContainer}>
              <View style={styles.routeInfo}>
                <View style={styles.cityContainer}>
                  <View style={styles.dot} />
                  <Text style={styles.cityName}>{tripData.ruta.origen}</Text>
                  <Text style={styles.cityTime}>
                    {tripData.hora_salida_programada.slice(0, 5)}
                  </Text>
                </View>

                <View style={styles.routeLine} />

                <View style={styles.cityContainer}>
                  <View style={styles.dot} />
                  <Text style={styles.cityName}>{tripData.ruta.destino}</Text>
                  <Text style={styles.cityTime}>
                    {formatTime(
                      tripData.hora_salida_programada,
                      tripData.ruta.tiempo_estimado
                    )}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.infoCardRuta}>
              <Text style={styles.infoLabel}>PARADA INTERMEDIA</Text>
              <Text style={styles.infoValue}>
                {tripData.ruta.parada_intermedia}
              </Text>
            </View>
            <View style={styles.infoCardRuta}>
              <Text style={styles.infoLabel}>DESCRIPCIÓN DEL CAMINO</Text>
              <Text style={styles.infoValue}>{tripData.ruta.camino}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <GlobalInformationIcon />
              <Text style={styles.sectionTitle}>Información General</Text>
            </View>

            <View style={styles.infoGrid}>
              <View style={styles.infoCard}>
                <Text style={styles.infoLabel}>FECHA DE SALIDA</Text>
                <Text style={styles.infoValueLarge}>
                  {formatDate(tripData.fecha_salida).formatedDate}
                </Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoLabel}>HORA DE SALIDA</Text>
                <Text style={styles.infoValueLarge}>
                  {formatTimeSimple(tripData.hora_salida_programada)}
                </Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoLabel}>DURACIÓN ESTIMADA</Text>
                <Text style={styles.infoValue}>
                  {tripData.ruta.tiempo_estimado}h
                </Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoLabel}>DISTANCIA</Text>
                <Text style={styles.infoValue}>{tripData.ruta.distancia}</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <BusIcon />
              <Text style={styles.sectionTitle}>Bus</Text>
            </View>

            <View style={styles.infoGrid}>
              <View style={styles.infoCard}>
                <Text style={styles.infoLabel}>PLACA DEL BUS</Text>
                <Text style={styles.infoValue}>{tripData.bus.placa}</Text>
              </View>
              <View style={styles.infoCard}>
                <Text style={styles.infoLabel}>TIPO BUS</Text>
                <Text style={styles.infoValue}>{tripData.bus.tipo_bus}</Text>
              </View>
              <View style={styles.infoCard}>
                <Text style={styles.infoLabel}>MARCA</Text>
                <Text style={styles.infoValue}>{tripData.bus.marca}</Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoLabel}>MODELO</Text>
                <Text style={styles.infoValue}>
                  {tripData.bus.marca} {tripData.bus.modelo}
                </Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoLabel}>AÑO MODELO</Text>
                <Text style={styles.infoValue}>{tripData.bus.año_modelo}</Text>
              </View>
              <View style={styles.infoCard}>
                <Text style={styles.infoLabel}>CAPACIDAD TOTAL</Text>
                <Text style={styles.infoValue}>
                  {tripData.bus.asientos.length} asientos
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <DriverIcon />
              <Text style={styles.sectionTitle}>Conductor</Text>
            </View>

            <View style={styles.infoGrid}>
              <View style={styles.infoCard}>
                <Text style={styles.infoLabel}>NOMBRE</Text>
                <Text style={styles.infoValue}>
                  {tripData.chofer.nombre} {tripData.chofer.apellido}
                </Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoLabel}>CARNET IDENTIDAD</Text>
                <Text style={styles.infoValue}>
                  {tripData.chofer.carnet_identidad}
                </Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoLabel}>CELULAR</Text>
                <Text style={styles.infoValue}>
                  {tripData.chofer.numero_celular}
                </Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoLabel}>CATEGORIA LICENCIA</Text>
                <Text style={styles.infoValue}>
                  {tripData.chofer.categoria_licencia}
                </Text>
              </View>
              <View style={styles.infoCard}>
                <Text style={styles.infoLabel}>DIRECCION</Text>
                <Text style={styles.infoValue}>
                  {tripData.chofer.direccion_contacto}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </GenericContainer>
    </GenericContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f9fa",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    marginTop: 20,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },

  content: {
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginLeft: 8,
  },
  routeContainer: {
    backgroundColor: "#e5e7eb",
    borderRadius: 12,
    padding: 20,
  },
  routeInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cityContainer: {
    alignItems: "center",
    flex: 1,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#8B5CF6",
    marginBottom: 8,
  },
  cityName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 4,
  },
  cityTime: {
    fontSize: 14,
    color: "#6B7280",
  },
  routeLine: {
    flex: 2,
    height: 2,
    backgroundColor: "#8B5CF6",
    marginHorizontal: 16,
    marginTop: -16,
  },
  infoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  infoCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    flex: 1,
    minWidth: "45%",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  infoCardRuta: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    minWidth: "100%",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginTop: 15,
  },

  infoLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: "#8B5CF6",
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
  },
  infoValueLarge: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
  },
});

export default DetailsTravelScreen;
