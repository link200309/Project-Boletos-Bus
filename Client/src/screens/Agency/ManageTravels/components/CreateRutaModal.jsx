import React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

export const CreateRutaModal = ({
  visible,
  nuevaRuta,
  setNuevaRuta,
  onCreate,
  onCancel,
}) => {
  const handleChange = (field, value) => {
    setNuevaRuta({ ...nuevaRuta, [field]: value });
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView>
            <Text style={styles.modalTitle}>Crear Nueva Ruta</Text>

            <TextInput
              style={styles.input}
              value={nuevaRuta.origen}
              onChangeText={(text) => handleChange("origen", text)}
              placeholder="Origen *"
            />

            <TextInput
              style={styles.input}
              value={nuevaRuta.parada_intermedia}
              onChangeText={(text) => handleChange("parada_intermedia", text)}
              placeholder="Parada Intermedia"
            />

            <TextInput
              style={styles.input}
              value={nuevaRuta.destino}
              onChangeText={(text) => handleChange("destino", text)}
              placeholder="Destino *"
            />

            <TextInput
              style={styles.input}
              value={nuevaRuta.distancia}
              onChangeText={(text) => handleChange("distancia", text)}
              placeholder="Distancia (ej: 380 km) *"
            />

            <TextInput
              style={styles.input}
              value={nuevaRuta.tiempo_estimado}
              onChangeText={(text) => handleChange("tiempo_estimado", text)}
              placeholder="Tiempo Estimado (ej: 6 horas) *"
            />

            <TextInput
              style={styles.input}
              value={nuevaRuta.camino}
              onChangeText={(text) => handleChange("camino", text)}
              placeholder="Descripción del Camino"
              multiline
            />

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.saveButton} onPress={onCreate}>
                <Text style={styles.saveButtonText}>Crear Ruta</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#28a745",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    marginRight: 10,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#6c757d",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
