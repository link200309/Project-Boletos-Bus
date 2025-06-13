//React
import React, { useState, useRef } from "react";
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
  const onChangeChoferRef = useRef(null);
  const onChangeBusRef = useRef(null);
  const onChangeRutaRef = useRef(null);

  const methods = useForm({
    mode: "onChange",
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
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
    if (onChangeChoferRef.current) {
      switch (idField) {
        case "id_chofer":
          onChangeChoferRef.current(item.id_chofer);
          break;
        case "id_bus":
          onChangeBusRef.current(item.id_bus);
          break;
        case "id_ruta":
          onChangeRutaRef.current(item.id_ruta);
      }
    }

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

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      console.log("Datos a enviar:", data);

      const res = await addTravel({
        fecha_salida: data.departureDate,
        hora_salida_programada: data.DepartureTime,
        costo: data.Cost,
        id_bus: data.Bus,
        id_ruta: data.Ruta,
        id_chofer: data.Chofer,
      });

      console.log("Respuesta del servidor:", res);
      // setViaje({
      //   fecha_salida: new Date(),
      //   hora_salida_programada: new Date(),
      //   hora_salida_real: new Date(),
      //   costo: "",
      //   id_chofer: "",
      //   id_bus: "",
      //   id_ruta: "",
      //   id_pago: "",
      // });

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
            rules={{ required: "La fecha es requerido" }}
            render={({ field: { onChange, value } }) => (
              <InputDate
                label="Fecha de salida *"
                name="departureDate"
                error={errors}
                onClick={() => setShowDatePicker(true)}
                text={value ? new Date(value).toLocaleDateString("es-ES") : ""}
                handleDateChange={(event, date) => {
                  onChange(date);
                  handleDateChange(date);
                }}
                valueDateModal={value}
                showDatePicker={showDatePicker}
              />
            )}
          />

          <Controller
            control={control}
            name="DepartureTime"
            defaultValue={viaje.hora_salida_programada}
            rules={{ required: "La hora de salida programada es requerido" }}
            render={({ field: { onChange, value } }) => (
              <InputTime
                label="Hora Salida Programada *"
                name="DepartureTime"
                error={errors}
                text={
                  value
                    ? new Date(value).toLocaleTimeString("es-ES", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : ""
                }
                handleTimeChange={(event, time) => {
                  onChange(time);
                  handleTimeChange(event, time);
                }}
                onClick={() => setShowTimePicker("hora_salida_programada")}
                valueTimeModal={value}
                showTimePicker={showTimePicker}
              />
            )}
          />

          <Controller
            control={control}
            name="Cost"
            rules={validator.costo}
            render={({ field: { onChange, value } }) => (
              <InputLabel
                label="Costo (Bs.) *"
                value={value}
                name="Cost"
                error={errors}
                onChange={onChange}
                placeholder="Ingrese el costo del viaje"
                keyboardType="numeric"
              />
            )}
          />

          <Controller
            control={control}
            name="Chofer"
            rules={{ required: "El chofer es requerido" }}
            render={({ field: { onChange, value } }) => {
              onChangeChoferRef.current = onChange;

              return (
                <SelectField
                  label="Chofer"
                  onPress={() => setShowChoferModal(true)}
                  name="Chofer"
                  error={errors}
                  value={
                    getSelected("chofer", choferes)
                      ? `${getSelected("chofer", choferes).nombre} ${
                          getSelected("chofer", choferes).apellido
                        }`
                      : null
                  }
                />
              );
            }}
          />
          <Controller
            control={control}
            name="Bus"
            rules={{ required: "El bus es requerido" }}
            render={({ field: { onChange, value } }) => {
              onChangeBusRef.current = onChange;

              return (
                <SelectField
                  label="Bus"
                  onPress={() => setShowBusModal(true)}
                  name={"Bus"}
                  error={errors}
                  value={
                    getSelected("bus", buses)
                      ? `${getSelected("bus", buses).placa} - ${
                          getSelected("bus", buses).marca
                        } ${getSelected("bus", buses).modelo}`
                      : null
                  }
                />
              );
            }}
          />

          <Controller
            control={control}
            name="Ruta"
            rules={{ required: "La ruta es requerido" }}
            render={({ field: { onChange, value } }) => {
              onChangeRutaRef.current = onChange;

              return (
                <SelectField
                  label="Ruta"
                  name={"Ruta"}
                  error={errors}
                  onPress={() => setShowRutaModal(true)}
                  value={
                    getSelected("ruta", rutas)
                      ? `${getSelected("ruta", rutas).origen} → ${
                          getSelected("ruta", rutas).destino
                        }`
                      : null
                  }
                />
              );
            }}
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
