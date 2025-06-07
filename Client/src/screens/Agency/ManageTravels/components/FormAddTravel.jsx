//React
import React, { useState } from "react";
import { Text, TouchableOpacity, Alert, StyleSheet } from "react-native";

// Components
import { InputDate } from "../../../../components/Input/InputDate";
import { InputTime } from "../../../../components/Input/InputTime";
import { InputLabel } from "../../../../components/Input/InputLabel";
import { SelectField } from "./SelectField";
import { ModalGeneric } from "./ModalGeneric";
import { RutaModal } from "./RutaModal";
import { CreateRutaModal } from "./CreateRutaModal";
import { GenericContainer } from "../../../../components/GenericContainer";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";

export const FormAddTravel = ({
  choferes,
  buses,
  rutas,
  configuracionesPago,
  onSubmit,
}) => {
  const [viaje, setViaje] = useState({
    fecha_salida: new Date(),
    hora_salida_programada: new Date(),
    hora_salida_real: new Date(),
    costo: "",
    id_chofer: -1,
    id_bus: -1,
    id_ruta: -1,
    id_pago: -1, // Campo faltante
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState("");
  const [showChoferModal, setShowChoferModal] = useState(false);
  const [showBusModal, setShowBusModal] = useState(false);
  const [showRutaModal, setShowRutaModal] = useState(false);
  const [showPagoModal, setShowPagoModal] = useState(false);
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
      if (errors.fecha_salida) {
        setErrors({ ...errors, fecha_salida: null });
      }
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    const type = showTimePicker;
    setShowTimePicker("");
    if (selectedTime) {
      setViaje({ ...viaje, [type]: selectedTime });
      if (errors[type]) {
        setErrors({ ...errors, [type]: null });
      }
    }
  };

  const handleSelect = (type, item) => {
    const idField =
      type === "chofer"
        ? "id_chofer"
        : type === "bus"
        ? "id_bus"
        : type === "ruta"
        ? "id_ruta"
        : type === "pago";

    const itemId =
      type === "chofer"
        ? item.id_chofer
        : type === "bus"
        ? item.id_bus
        : type === "ruta"
        ? item.id_ruta
        : type === "pago";

    setViaje({ ...viaje, [idField]: itemId });

    if (errors[idField]) {
      setErrors({ ...errors, [idField]: null });
    }

    if (type === "chofer") setShowChoferModal(false);
    if (type === "bus") setShowBusModal(false);
    if (type === "ruta") setShowRutaModal(false);
    if (type === "pago") setShowPagoModal(false);
  };

  const getSelected = (type, list) => {
    const idField =
      type === "chofer"
        ? "id_chofer"
        : type === "bus"
        ? "id_bus"
        : type === "ruta"
        ? "id_ruta"
        : type === "pago"
        ? "id_pago"
        : `${type}_id`;

    const itemIdField =
      type === "chofer"
        ? "id_chofer"
        : type === "bus"
        ? "id_bus"
        : type === "ruta"
        ? "id_ruta"
        : type === "pago"
        ? "id_pago"
        : "id";

    return list?.find((item) => item[itemIdField] === viaje[idField]);
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
    const nuevaRutaConId = { ...nuevaRuta, id_ruta: Date.now() }; // ID temporal
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

  const validateForm = () => {
    const newErrors = {};

    // Validar fecha (no puede ser en el pasado)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (viaje.fecha_salida < today) {
      newErrors.fecha_salida = "La fecha no puede ser en el pasado";
    }

    if (!viaje.costo || viaje.costo.trim() === "") {
      newErrors.costo = "El costo es obligatorio";
    } else if (isNaN(parseFloat(viaje.costo)) || parseFloat(viaje.costo) <= 0) {
      newErrors.costo = "El costo debe ser un número positivo";
    }

    if (!viaje.id_chofer) {
      newErrors.id_chofer = "Debe seleccionar un chofer";
    }

    if (!viaje.id_bus) {
      newErrors.id_bus = "Debe seleccionar un bus";
    }

    if (!viaje.id_ruta) {
      newErrors.id_ruta = "Debe seleccionar una ruta";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatDataForBackend = () => {
    const formatTime = (date) => {
      return date.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    };

    const formatDate = (date) => {
      return date.toISOString().split("T")[0]; // YYYY-MM-DD
    };

    return {
      fecha_salida: formatDate(viaje.fecha_salida),
      hora_salida_programada: formatTime(viaje.hora_salida_programada),
      hora_salida_real: formatTime(viaje.hora_salida_real),
      costo: parseFloat(viaje.costo),
      id_chofer: parseInt(viaje.id_chofer),
      id_bus: parseInt(viaje.id_bus),
      id_ruta: parseInt(viaje.id_ruta),
      id_pago: parseInt(viaje.id_pago),
    };
  };

  const handleSubmit = async () => {
    // if (!validateForm()) {
    //   Alert.alert("Error", "Por favor corrige los errores en el formulario");
    //   return;
    // }

    setIsLoading(true);
    try {
      const dataToSend = formatDataForBackend();
      console.log("Datos a enviar:", dataToSend);

      if (onSubmit) {
        await onSubmit(dataToSend);

        setViaje({
          fecha_salida: new Date(),
          hora_salida_programada: new Date(),
          hora_salida_real: new Date(),
          costo: "",
          id_chofer: "",
          id_bus: "",
          id_ruta: "",
          id_pago: "",
        });

        Alert.alert("Éxito", "Viaje creado exitosamente");
      }
    } catch (error) {
      console.error("Error al crear viaje:", error);
      Alert.alert("Error", "No se pudo crear el viaje. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <GenericContainer scroll={true} style={styles.containerForm}>
        <InputDate
          label="Fecha de salida *"
          onClick={() => setShowDatePicker(true)}
          text={viaje.fecha_salida.toLocaleDateString("es-ES")}
          handleDateChange={handleDateChange}
          valueDateModal={viaje.fecha_salida}
          showDatePicker={showDatePicker}
        />

        <InputTime
          label="Hora Salida Programada *"
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
          onChange={(text) => {
            setViaje({ ...viaje, costo: text });
            if (errors.costo) {
              setErrors({ ...errors, costo: null });
            }
          }}
          placeholder="Ingrese el costo del viaje"
          keyboardType="numeric"
        />

        <SelectField
          label="Chofer"
          onPress={() => setShowChoferModal(true)}
          value={
            getSelected("chofer", choferes)
              ? `${getSelected("chofer", choferes).nombre} ${
                  getSelected("chofer", choferes).apellido
                }`
              : null
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

        {/* Modal para configuraciones de pago */}
        <ModalGeneric
          title="Seleccionar Configuración de Pago"
          visible={showPagoModal}
          data={configuracionesPago}
          handleSelect={(item) => handleSelect("pago", item)}
          setShowModal={() => setShowPagoModal(false)}
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

      <ButtonStyle
        text={isLoading ? "Creando..." : "Crear Viaje"}
        onClick={handleSubmit}
        disabled={isLoading}
      />
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
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  listItemSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});
