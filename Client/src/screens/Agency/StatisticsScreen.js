import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { GenericContainer } from "../../components/GenericContainer";
import { BlobBg } from "../../components/Background/BlobBg";
import { obtenerEstadisticasAgencia } from "../../api/estadisticas.api";
import { AuthContext } from "../../context/AuthContext";

const screenWidth = Dimensions.get("window").width;

export default function StatisticsScreen() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fechaInicio, setFechaInicio] = useState(new Date());
  const [fechaFin, setFechaFin] = useState(new Date());
  const [mostrarInicio, setMostrarInicio] = useState(false);
  const [mostrarFin, setMostrarFin] = useState(false);
  const { user } = useContext(AuthContext);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const data = await obtenerEstadisticasAgencia(user.token, fechaInicio, fechaFin);
      setStats(data);
    } catch (err) {
      console.error("Error al cargar estadísticas:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const onChangeInicio = (event, selectedDate) => {
    const currentDate = selectedDate || fechaInicio;
    setMostrarInicio(false);
    setFechaInicio(currentDate);
  };

  const onChangeFin = (event, selectedDate) => {
    const currentDate = selectedDate || fechaFin;
    setMostrarFin(false);
    setFechaFin(currentDate);
  };

  if (loading || !stats) {
    return (
      <GenericContainer style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4318D1" />
      </GenericContainer>
    );
  }

  return (
    <GenericContainer>
      <BlobBg />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>
          <Icon name="bar-chart-outline" size={24} color="#4318D1" /> Estadísticas de la Agencia
        </Text>

        <View style={styles.dateFilters}>
          <View style={styles.dateBox}>
            <Text style={styles.label}>Fecha de inicio</Text>
            <Pressable style={styles.inputBox} onPress={() => setMostrarInicio(true)}>
              <Text style={styles.dateText}>{fechaInicio.toLocaleDateString()}</Text>
            </Pressable>
            {mostrarInicio && (
              <DateTimePicker
                value={fechaInicio}
                mode="date"
                display="default"
                onChange={onChangeInicio}
              />
            )}
          </View>

          <View style={styles.dateBox}>
            <Text style={styles.label}>Fecha de fin</Text>
            <Pressable style={styles.inputBox} onPress={() => setMostrarFin(true)}>
              <Text style={styles.dateText}>{fechaFin.toLocaleDateString()}</Text>
            </Pressable>
            {mostrarFin && (
              <DateTimePicker
                value={fechaFin}
                mode="date"
                display="default"
                onChange={onChangeFin}
              />
            )}
          </View>

          <Pressable style={styles.button} onPress={fetchStats}>
            <Text style={styles.buttonText}>Filtrar</Text>
          </Pressable>
        </View>

        <View style={styles.cardGrid}>
          <StatCard icon="bus" label="Buses registrados" value={stats.totalBuses} />
          <StatCard icon="people" label="Choferes registrados" value={stats.totalChoferes} />
          <StatCard icon="map" label="Rutas activas" value={stats.totalRutas} />
          <StatCard icon="calendar" label="Viajes registrados" value={stats.totalViajes} />
          <StatCard icon="ticket" label="Reservas totales" value={stats.totalReservas} />
          <StatCard icon="cash" label="Ingresos (Bs.)" value={stats.ingresosTotales} />
        </View>
      </ScrollView>
    </GenericContainer>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <View style={styles.card}>
      <Icon name={icon} size={26} color="#4318D1" style={styles.cardIcon} />
      <View style={styles.cardContent}>
        <Text style={styles.cardLabel}>{label}</Text>
        <Text style={styles.cardValue}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    padding: 10,
    paddingBottom: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#441AD1",
    marginBottom: 20,
    textAlign: "center",
  },
  dateFilters: {
    marginBottom: 16,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  dateBox: {
    width: "100%",
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
    fontWeight: "600",
  },
  inputBox: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#4318D1",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  cardGrid: {
    flexDirection: "column",
    gap: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F6FA",
    padding: 14,
    borderRadius: 12,
    marginVertical: 6,
    elevation: 2,
  },
  cardIcon: {
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardLabel: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  cardValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4318D1",
  },
});
