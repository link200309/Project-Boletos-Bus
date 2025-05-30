import React, { useState } from "react";
import { Text, TouchableOpacity, Alert, StyleSheet } from "react-native";

// Componentes reutilizables
import { InputDate } from "../../../../components/Input/InputDate";
import { InputTime } from "../../../../components/Input/InputTime";
import { InputLabel } from "../../../../components/Input/InputLabel";
import { SelectField } from "./SelectField";
import { ModalGeneric } from "./ModalGeneric";
import { RutaModal } from "./RutaModal";
import { CreateRutaModal } from "./CreateRutaModal";
import { GenericContainer } from "../../../../components/GenericContainer";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";

export const FormAddTravel = ({ choferes, buses, rutas, onSubmit }) => {
  const [viaje, setViaje] = useState({
    fecha_salida: new Date(),
    hora_salida_programada: new Date(),
    hora_salida_real: new Date(),
    costo: "",
    chofer_id: "",
    bus_id: "",
    ruta_id: "",
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState("");
  const [showChoferModal, setShowChoferModal] = useState(false);
  const [showBusModal, setShowBusModal] = useState(false);
  const [showRutaModal, setShowRutaModal] = useState(false);
  const [showCreateRuta, setShowCreateRuta] = useState(false);

  const [nuevaRuta, setNuevaRuta] = useState({
    origen: "",
    parada_intermedia: "",
    destino: "",
    distancia: "",
    tiempo_estimado: "",
    camino: "",
  });

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setViaje({ ...viaje, fecha_salida: selectedDate });
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    const type = showTimePicker;
    setShowTimePicker("");
    if (selectedTime) {
      setViaje({ ...viaje, [type]: selectedTime });
    }
  };

  const handleSelect = (type, item) => {
    setViaje({ ...viaje, [`${type}_id`]: item.id });
    if (type === "chofer") setShowChoferModal(false);
    if (type === "bus") setShowBusModal(false);
    if (type === "ruta") setShowRutaModal(false);
  };

  const getSelected = (type, list) => {
    return list.find((item) => item.id === viaje[`${type}_id`]);
  };

  const handleCreateRuta = () => {
    if (
      !nuevaRuta.origen ||
      !nuevaRuta.destino ||
      !nuevaRuta.distancia ||
      !nuevaRuta.tiempo_estimado
    ) {
      Alert.alert("Error", "Completa todos los campos obligatorios de la ruta");
      return;
    }
    const nuevaRutaConId = { ...nuevaRuta, id: rutas.length + 1 };
    handleSelect("ruta", nuevaRutaConId);
    setNuevaRuta({
      origen: "",
      parada_intermedia: "",
      destino: "",
      distancia: "",
      tiempo_estimado: "",
      camino: "",
    });
    setShowCreateRuta(false);
    setShowRutaModal(false);
    Alert.alert("Éxito", "Ruta creada exitosamente");
  };

  const handleSubmit = () => {
    if (!viaje.chofer_id || !viaje.bus_id || !viaje.ruta_id || !viaje.costo) {
      Alert.alert("Error", "Por favor completa todos los campos obligatorios");
      return;
    }
    onSubmit(viaje);
    setViaje({
      fecha_salida: new Date(),
      hora_salida_programada: new Date(),
      hora_salida_real: new Date(),
      costo: "",
      chofer_id: "",
      bus_id: "",
      ruta_id: "",
    });
  };

  return (
    <>
      <GenericContainer scroll={true} style={styles.containerForm}>
        <InputDate
          label="Fecha de salida"
          onClick={() => setShowDatePicker(true)}
          text={viaje.fecha_salida.toLocaleDateString("es-ES")}
          handleDateChange={handleDateChange}
          valueDateModal={viaje.fecha_salida}
          showDatePicker={showDatePicker}
        />

        <InputTime
          label="Hora Salida Programada"
          text={viaje.hora_salida_programada.toLocaleTimeString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
          })}
          handleTimeChange={handleTimeChange}
          onClick={() => setShowTimePicker("hora_salida_programada")}
          valueTimeModal={viaje[showTimePicker]}
          showTimePicker={showTimePicker}
        />

        <InputLabel
          label="Costo (Bs.) *"
          value={viaje.costo}
          onChange={(text) => setViaje({ ...viaje, costo: text })}
          placeholder="Ingrese el costo del viaje"
          keyboardType="numeric"
        />

        <SelectField
          label="Chofer"
          onPress={() => setShowChoferModal(true)}
          value={
            getSelected("chofer", choferes)?.nombre +
              " " +
              getSelected("chofer", choferes)?.apellido || null
          }
        />

        <SelectField
          label="Bus"
          onPress={() => setShowBusModal(true)}
          value={
            getSelected("bus", buses)
              ? `${getSelected("bus", buses).placa} - ${
                  getSelected("bus", buses).marca
                } ${getSelected("bus", buses).modelo}`
              : null
          }
        />

        <SelectField
          label="Ruta"
          onPress={() => setShowRutaModal(true)}
          value={
            getSelected("ruta", rutas)
              ? `${getSelected("ruta", rutas).origen} → ${
                  getSelected("ruta", rutas).destino
                }`
              : null
          }
        />

        <ModalGeneric
          title="Seleccionar Chofer"
          visible={showChoferModal}
          data={choferes}
          handleSelect={(item) => handleSelect("chofer", item)}
          setShowModal={() => setShowChoferModal(false)}
        />

        <ModalGeneric
          title="Seleccionar Bus"
          visible={showBusModal}
          data={buses}
          handleSelect={(item) => handleSelect("bus", item)}
          setShowModal={() => setShowBusModal(false)}
        />

        <RutaModal
          visible={showRutaModal}
          rutas={rutas}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => handleSelect("ruta", item)}
            >
              <Text style={styles.listItemTitle}>
                {item.origen} → {item.destino}
              </Text>
              <Text style={styles.listItemSubtitle}>
                {item.distancia} - {item.tiempo_estimado}
              </Text>
            </TouchableOpacity>
          )}
          onCreateRuta={() => setShowCreateRuta(true)}
          onCancel={() => setShowRutaModal(false)}
        />

        <CreateRutaModal
          visible={showCreateRuta}
          nuevaRuta={nuevaRuta}
          setNuevaRuta={setNuevaRuta}
          onCreate={handleCreateRuta}
          onCancel={() => setShowCreateRuta(false)}
        />
      </GenericContainer>
      <ButtonStyle text={"Crear Viaje"} onClick={handleSubmit} />
    </>
  );
};

const styles = StyleSheet.create({
  containerForm: {
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  submitButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
