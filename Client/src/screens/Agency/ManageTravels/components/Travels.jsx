//React
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState, useEffect } from "react";

//Components
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";

//utils
import { formatDate, formatTime } from "../../../../utils/dateTime.util";

export const Travels = ({ travelInfo, navigation, onClick }) => {
  const [travel, setTravel] = useState({});
  useEffect(() => {
    setTravel(travelInfo.item);
  }, []);

  const countEnableSeats = (asientos) => {
    const disponibles = asientos.filter(
      (a) => a.estado === "Disponible"
    ).length;
    return disponibles;
  };

  const seeDetailTravel = () => {
    navigation.navigate("DetailsTravel", travel);
  };
  const seeReservationsTravel = () => {
    navigation.navigate("ReservationsTravel", travel);
  };

  return (
    <Pressable onPress={onClick} style={Style.pressable}>
      <View style={Style.container}>
        <View style={Style.leftLine} />

        <View style={Style.content}>
          <View style={Style.header}>
            <Text style={Style.route}>
              {travel?.ruta?.origen} → {travel?.ruta?.destino}
            </Text>
          </View>

          <View style={Style.infoRow}>
            <View style={Style.leftInfo}>
              <Text style={Style.label}>FECHA</Text>
              <Text style={Style.dateTime}>
                {formatDate(travel?.fecha_salida).formatedDate} -{" "}
                {travel?.hora_salida_programada?.slice(0, 5)}
              </Text>

              <View style={Style.availabilityRow}>
                <Text style={Style.availableLabel}>Disponibles:</Text>
                <View style={Style.availabilityBadge}>
                  <Text style={Style.availabilityText}>
                    {
                      travel?.bus?.asientos.filter(
                        (a) => a.estado === "Disponible"
                      ).length
                    }
                    /{travel?.bus?.asientos?.length}
                  </Text>
                </View>
              </View>
            </View>

            <View style={Style.rightInfo}>
              <Text style={Style.label}>BUS</Text>
              <Text style={Style.busInfo}>
                {travel?.bus?.placa} /{" "}
                {travel?.chofer?.nombre + " " + travel?.chofer?.apellido}
              </Text>
            </View>
          </View>

          <View style={Style.buttonRow}>
            <ButtonStyle
              text={"Reservas"}
              style={Style.reserveButton}
              styleText={Style.reserveButtonText}
              onClick={seeReservationsTravel}
            />
            <ButtonStyle
              text={"Detalles"}
              style={Style.detailsButton}
              styleText={Style.detailsButtonText}
              onClick={seeDetailTravel}
            />
            <ButtonStyle
              text={"Editar"}
              variant={2}
              style={Style.editButton}
              styleText={Style.editButtonText}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const Style = StyleSheet.create({
  pressable: {
    marginVertical: 10,
  },
  container: {
    width: "380",
    borderRadius: 20,
    backgroundColor: "white",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  leftLine: {
    width: 6,
    backgroundColor: "#7C3AED",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 16,
  },
  route: {
    fontSize: 20,
    fontWeight: "600",
    color: "#7C3AED",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  leftInfo: {
    flex: 1,
  },
  rightInfo: {
    flex: 1,
    alignItems: "flex-end",
  },
  label: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "500",
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  dateTime: {
    fontSize: 14,
    color: "#374151",
    fontWeight: "500",
    marginBottom: 12,
  },
  busInfo: {
    fontSize: 14,
    color: "#374151",
    fontWeight: "500",
    textAlign: "right",
  },
  availabilityRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  availableLabel: {
    fontSize: 14,
    color: "#6B7280",
    marginRight: 8,
  },
  availabilityBadge: {
    backgroundColor: "#10B981",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  availabilityText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
  },
  reserveButton: {
    backgroundColor: "#5B21B6",
    paddingHorizontal: 17,
    paddingVertical: 12,
    borderRadius: 12,
    flex: 1,
    justifyContent: "center",
  },
  reserveButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  detailsButton: {
    backgroundColor: "#7C3AED",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    flex: 1,
  },
  detailsButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  editButton: {
    borderRadius: 12,
    flex: 1,
    justifyContent: "center",
  },
  editButtonText: {
    color: "#374151",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});
