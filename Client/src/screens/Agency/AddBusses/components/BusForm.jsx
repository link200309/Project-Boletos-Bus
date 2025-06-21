import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  Pressable,
} from "react-native";
import { InputLabel } from "../../../../components/Input/InputLabel";
import { Selector } from "../../../../components/Input/Selector";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";
import { SeatSelection } from "./SeatSelection";
import { ChairIcon } from "../../../../components/Icons";

const BusForm = ({ formData, onChange, onSubmit, buttonText }) => {
  const [seatModalVisible, setSeatModalVisible] = useState(false);

  const handleChange = (field) => (value) => onChange(field, value);

  const generateDefaultSeats = () => {
    const totalSeats = 40;
    const seats = [];

    for (let i = 1; i <= totalSeats; i++) {
      seats.push({
        id_asiento: i,
        numero: i.toString(),
        estado: "Disponible",
        ubicacion: i <= 20 ? "Superior" : "Inferior",
      });
    }

    return seats;
  };

  const [asientos, setAsientos] = useState(generateDefaultSeats());

  const busData = {
    tipo_bus: formData.tipo_bus || "Semi cama",
    pisos: 2,
  };

  const travels = [
    {
      hora_salida_programada: "08:00",
      costo: 0,
      ruta: {
        origen: "Origen",
        destino: "Destino",
        tiempo_estimado: "02:00",
      },
      bus: {
        agencia: {
          nombre_agencia: "Agencia",
        },
      },
      pago: {
        ruta_codigo_qr: "",
      },
    },
  ];

  const handleSeatModalClose = () => {
    setSeatModalVisible(false);
    onChange("asientos_configurados", asientos);
  };

  return (
    <View style={styles.formCard}>
      <InputLabel
        label="Placa *"
        placeholder="Ingresa la placa"
        value={formData.placa}
        onChange={handleChange("placa")}
      />

      <InputLabel
        label="Marca *"
        placeholder="Ingresa la marca"
        value={formData.marca}
        onChange={handleChange("marca")}
      />

      <Selector
        label="Tipo *"
        items={[
          { label: "Semi cama", value: "Semi cama" },
          { label: "Cama", value: "Cama" },
        ]}
        value={formData.tipo_bus}
        onChange={handleChange("tipo_bus")}
      />

      <InputLabel
        label="Modelo *"
        placeholder="Modelo"
        value={formData.modelo}
        onChange={handleChange("modelo")}
      />

      <InputLabel
        label="Año *"
        placeholder="yyyy"
        value={formData.año_modelo}
        onChange={handleChange("año_modelo")}
        keyboardType="numeric"
      />

      <InputLabel
        label="Estado *"
        placeholder="Ej: Operativo"
        value={formData.estado}
        onChange={handleChange("estado")}
      />

      <Pressable
        style={styles.button}
        onPress={() => setSeatModalVisible(true)}
      >
        <ChairIcon />
        <Text style={styles.buttonText}>Seleccionar Asientos</Text>
      </Pressable>

      <ButtonStyle text={buttonText} onClick={onSubmit} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={seatModalVisible}
        onRequestClose={() => setSeatModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                onPress={handleSeatModalClose}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            <SeatSelection
              navigation={{
                goBack: handleSeatModalClose,
              }}
              asientos={asientos}
              busData={busData}
              travels={travels}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  formCard: {
    backgroundColor: "#FAFAFA",
    padding: 20,
    borderRadius: 20,
    marginVertical: 20,
  },
  seatButton: {
    backgroundColor: "#F8F9FA",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
  },
  seatButtonLabel: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 4,
  },
  seatButtonText: {
    fontSize: 16,
    color: "#1F2937",
    fontWeight: "500",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    width: "95%",
    maxHeight: "90%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 24,
    color: "#6B7280",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "transparent",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "black",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default BusForm;
