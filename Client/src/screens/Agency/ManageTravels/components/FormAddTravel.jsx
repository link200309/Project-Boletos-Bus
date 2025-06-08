//React
import React, { useState } from "react";
import { Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { Controller, useForm, FormProvider } from "react-hook-form";

// Components
import { InputDate } from "../../../../components/Input/InputDate";
import { InputTime } from "../../../../components/Input/InputTime";
import { InputLabel } from "../../../../components/Input/InputLabel";
import { SelectField } from "./SelectField";
import { DriverModal } from "./DriverModal";
import { RutaModal } from "./RutaModal";
import { BusModal } from "./BusModal";
import { CreateRutaModal } from "./CreateRutaModal";
import { GenericContainer } from "../../../../components/GenericContainer";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";
import { validator } from "./validation";

//Api
import { addTravel } from "../../../../api/travel.api";

export const FormAddTravel = ({ choferes, buses, rutas }) => {
  const [viaje, setViaje] = useState({
    fecha_salida: new Date(),
    hora_salida_programada: new Date(),
    hora_salida_real: new Date(),
    costo: "",
    id_chofer: -1,
    id_bus: -1,
    id_ruta: -1,
    id_pago: -1,
  });

  const [isLoading, setIsLoading] = useState(false);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState("");
  const [showChoferModal, setShowChoferModal] = useState(false);
  const [showBusModal, setShowBusModal] = useState(false);
  const [showRutaModal, setShowRutaModal] = useState(false);
  const [showPagoModal, setShowPagoModal] = useState(false);
  const [showCreateRuta, setShowCreateRuta] = useState(false);

  const methods = useForm({
    mode: "onChange",
  });
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = methods;
  const [nuevaRuta, setNuevaRuta] = useState({
    origen: "",
    parada_intermedia: "",
    destino: "",
    distancia: "",
    tiempo_estimado: "",
    camino: "",
  });

  const handleDateChange = (event, selectedDate) => {
    // console.log("Fecha seleccionada:", selectedDate);
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
    const nuevaRutaConId = { ...nuevaRuta, id_ruta: Date.now() };
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

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const dataToSend = formatDataForBackend();
      console.log("Datos a enviar:", dataToSend);

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
        <FormProvider {...methods}>
          <Controller
            control={control}
            name="departureDate"
            defaultValue={viaje.fecha_salida}
            rules={validator.fechaSalida}
            render={({ field: { onChange, value } }) => (
              <InputDate
                label="Fecha de salida *"
                name="departureDate"
                error={errors}
                onClick={() => setShowDatePicker(true)}
                text={value ? new Date(value).toLocaleDateString("es-ES") : ""}
                handleDateChange={(event, date) => {
                  console.log("Fecha seleccionada:", date);
                  onChange(date); // Actualiza el valor en react-hook-form
                  handleDateChange(date); // Lógica personalizada externa
                }}
                valueDateModal={value}
                showDatePicker={showDatePicker}
              />
            )}
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
        </FormProvider>

        <DriverModal
          title="Seleccionar Chofer"
          visible={showChoferModal}
          data={choferes}
          handleSelect={(item) => handleSelect("chofer", item)}
          setShowModal={() => setShowChoferModal(false)}
        />

        <BusModal
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
                {item.distancia} - {item.tiempo_estimado + "hrs"}
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
        onClick={handleSubmit(onSubmit)}
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
