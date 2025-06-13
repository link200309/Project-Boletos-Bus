//React
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useForm, FormProvider, Controller } from "react-hook-form";

//Components
import { InputLabel } from "../../../../components/Input/InputLabel";

//Utils
import { validator } from "./validation";

export const CreateRutaModal = ({
  visible,
  nuevaRuta,
  setNuevaRuta,
  onCreate,
  onCancel,
}) => {
  const methods = useForm({ mode: "onChange" });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView>
            <Text style={styles.modalTitle}>Crear Nueva Ruta</Text>

            <Controller
              control={control}
              name="Origen"
              rules={validator.origen}
              render={({ field: { onChange, value } }) => (
                <InputLabel
                  label="Origen *"
                  name="Origen"
                  error={errors}
                  value={value}
                  onChange={onChange}
                  placeholder="Origen *"
                />
              )}
            />
            <Controller
              control={control}
              name="ParadaItermedia"
              rules={validator.paradaIntermedia}
              render={({ field: { onChange, value } }) => (
                <InputLabel
                  label={"Parada Intermedia"}
                  placeholder="Parada Intermedia"
                  name="ParadaItermedia"
                  error={errors}
                  value={value}
                  onChange={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="Destino"
              rules={validator.destino}
              render={({ field: { onChange, value } }) => (
                <InputLabel
                  label={"Destino *"}
                  placeholder="Destino *"
                  name="Destino"
                  error={errors}
                  value={value}
                  onChange={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="Distancia"
              rules={validator.distancia}
              render={({ field: { onChange, value } }) => (
                <InputLabel
                  label={"Distancia *"}
                  placeholder="Distancia (ej: 380 km) *"
                  name="Distancia"
                  error={errors}
                  value={value}
                  onChange={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="TiempoEstimado"
              rules={validator.tiempoEstimado}
              render={({ field: { onChange, value } }) => (
                <InputLabel
                  label={"Tiempo Estimado *"}
                  placeholder="Tiempo Estimado (ej: 6 horas) *"
                  name="TiempoEstimado"
                  error={errors}
                  value={value}
                  onChange={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="DescripcionCamino"
              rules={validator.descripcion}
              render={({ field: { onChange, value } }) => (
                <InputLabel
                  label={"Descripción del Camino *"}
                  placeholder="Descripción del Camino"
                  name="DescripcionCamino"
                  error={errors}
                  value={value}
                  onChange={onChange}
                />
              )}
            />

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSubmit(onCreate)}
              >
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
