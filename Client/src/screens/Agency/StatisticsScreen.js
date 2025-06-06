import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { GenericContainer } from "../../components/GenericContainer";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { BlobBg } from "../../components/Background/BlobBg";
const screenWidth = Dimensions.get("window").width;

export default function StatisticsScreen() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      // ❌ Temporal: datos simulados
      const simulatedData = {
        totalBuses: 8,
        totalChoferes: 14,
        totalRutas: 5,
        totalViajes: 22,
        totalReservas: 115,
        ingresosTotales: 14800,
      };

      // ✅ Dejar lista la conexión real:
      // const res = await axios.get("http://TU_BACKEND/api/estadisticas-agencia");
      // setStats(res.data);

      setStats(simulatedData); // usar datos simulados
    } catch (err) {
      console.error("Error al cargar estadísticas:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

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
          <Icon name="bar-chart-outline" size={24} color="#4318D1" />{" "}
          Estadísticas de la Agencia
        </Text>

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
