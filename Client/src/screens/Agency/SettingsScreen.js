import React, { useContext, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../../context/AuthContext";
import { GenericContainer } from "../../components/GenericContainer";
import { ButtonStyle } from "../../components/Button/ButtonStyle";
import { BlobBg } from "../../components/Background/BlobBg";
import { actualizarPerfilUsuario,cambiarPasswordUsuario } from "../../api/user.api";
import { obtenerHistorialReservas } from "../../api/reserva.api";
import {
  obtenerViajesActivos,
  generarReporteAccidentePDF,
} from "../../api/reporte.api";

export default function PassengerSettingsScreen() {
  const { user, logout,setUser } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  console.log("🧾 Datos del usuario:", JSON.stringify(user, null, 2));

const [reservas, setReservas] = useState([]);

const [errors, setErrors] = useState({});

const [viajes, setViajes] = useState([]);

const [viajesActivos, setViajesActivos] = useState([]);
const [viajeSeleccionado, setViajeSeleccionado] = useState("");
const [motivoAccidente, setMotivoAccidente] = useState("");
const [consecuenciasAccidente, setConsecuenciasAccidente] = useState("");



  const [personalInfo, setPersonalInfo] = useState({
    nombre: user?.usuario?.nombre || "",
    apellido: user?.usuario?.apellido || "",
    correo: user?.usuario?.correo_electronico || "",
    nacimiento: user?.datos_pasajero?.fecha_nacimiento?.slice(0, 10) || "",
  });

  const [agencyInfo, setAgencyInfo] = useState({
    nombre_agencia: user?.datos_agencia?.nombre_agencia || "",
    nit: user?.datos_agencia?.NIT || "",
    direccion: user?.datos_agencia?.direccion || "",
    contacto: user?.datos_agencia?.numero_celular_agencia?.toString() || "",
  });


  const [representanteLegal, setRepresentanteLegal] = useState({
    nombre_completo: `${user?.datos_agencia?.nombre_representante || ""} ${user?.datos_agencia?.apellido_representante || ""}`,
    ci: user?.datos_agencia?.ci_representante || "",
    correo: user?.datos_agencia?.correo_electronico_agencia || "", // si usas este como contacto
    telefono: user?.datos_agencia?.celular_representante || "",
  });


  const [adminCuenta, setAdminCuenta] = useState({
    nombre: user?.usuario?.nombre || "",
    apellido: user?.usuario?.apellido || "",
    correo: user?.usuario?.correo_electronico || "",
    telefono: user?.usuario?.numero_celular?.toString() || "", // ✅ aquí accedemos al número
  });




  const handleSavePersonalInfo = async () => {
    const newErrors = {};

    if (!personalInfo.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!personalInfo.apellido.trim()) newErrors.apellido = "El apellido es obligatorio.";
    if (!/^\d{4}-\d{2}-\d{2}$/.test(personalInfo.nacimiento)) {
      newErrors.nacimiento = "Formato de fecha inválido. Usa YYYY-MM-DD.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Debes tener setErrors y mostrar los errores en el form
      return;
    }

    try {
      const token = user?.token; // Asume que tienes el JWT en user
      const datos = {
        nombre: personalInfo.nombre,
        apellido: personalInfo.apellido,
        nacimiento: personalInfo.nacimiento,
      };

      const response = await actualizarPerfilUsuario(datos, token);
      setUser((prev) => ({
        ...prev,
        usuario: {
          ...prev.usuario,
          nombre: response.usuario.nombre,
          apellido: response.usuario.apellido,
        },
        datos_pasajero: {
          ...prev.datos_pasajero,
          fecha_nacimiento: response.usuario.datos_pasajero?.fecha_nacimiento,
        },
      }));

      setModalVisible(false);
    } catch (error) {
      console.error("Error al actualizar información:", error);
      alert("Error al actualizar. Intenta nuevamente.");
    }
  };

  const obtenerHistorialViajes = async () => {
    try {
      const token = user?.token;
      const res = await fetch("http://TU_API/agencia/mis-viajes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setViajes(data);
    } catch (err) {
      console.error("Error cargando viajes", err);
      setViajes([]);
    }
  };

  const cargarViajesActivos = async () => {
    const token = user?.token;
    const data = await obtenerViajesActivos(token);
    setViajesActivos(data || []);
  };

  const handleGenerarReportePDF = () => {
    generarReporteAccidentePDF({
      viajeId: viajeSeleccionado,
      motivo: motivoAccidente,
      consecuencias: consecuenciasAccidente,
    });
  };


  const handleSaveAgencyInfo = async () => {
    try {
      const token = user?.token;
      const datos = {
        nombre: agencyInfo.nombre_agencia,
        nit: agencyInfo.nit,
        direccion: agencyInfo.direccion,
        telefono: agencyInfo.contacto,
      };

      // Aquí deberías llamar a tu API real, ej. actualizarDatosAgencia(datos, token)
      console.log("Enviando datos de agencia:", datos);

      alert("Datos de la agencia actualizados correctamente");
      setModalVisible(false);
    } catch (error) {
      console.error("Error al guardar agencia:", error);
      alert("Error al guardar. Intenta nuevamente.");
    }
  };

  const handleSaveRepresentante = async () => {
    try {
      const token = user?.token;
      const datos = {
        nombre_completo: representanteLegal.nombre_completo,
        ci: representanteLegal.ci,
        correo: representanteLegal.correo,
        telefono: representanteLegal.telefono,
      };

      // Aquí deberías llamar a tu API real, ej. actualizarRepresentante(datos, token)
      console.log("Enviando datos del representante:", datos);

      alert("Datos del representante legal actualizados");
      setModalVisible(false);
    } catch (error) {
      console.error("Error al guardar representante:", error);
      alert("Error al guardar. Intenta nuevamente.");
    }
  };

const handleSaveAdminInfo = async () => {
  const newErrors = {};

  if (!adminCuenta.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
  if (!adminCuenta.apellido.trim()) newErrors.apellido = "El apellido es obligatorio.";
  if (!/^\d{8}$/.test(adminCuenta.telefono)) newErrors.telefono = "Teléfono inválido.";

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  try {
    const token = user?.token;
    const datos = {
      nombre: adminCuenta.nombre,
      apellido: adminCuenta.apellido,
      telefono: adminCuenta.telefono,
    };

    const response = await actualizarPerfilUsuario(datos, token);

    setUser((prev) => ({
      ...prev,
      usuario: {
        ...prev.usuario,
        nombre: response.usuario.nombre,
        apellido: response.usuario.apellido,
        numero_celular: response.usuario.numero_celular,
      },
    }));

    alert("Datos actualizados correctamente");
    setModalVisible(false);
  } catch (error) {
    console.error("Error al actualizar administrador:", error);
    alert("Error al guardar cambios");
  }
};




  const handleChangePassword = async () => {
    const newErrors = {};

    if (!passwordForm.actual.trim()) newErrors.actual = "Debe ingresar su contraseña actual.";
    if (passwordForm.nueva.length < 8) newErrors.nueva = "La nueva contraseña debe tener al menos 8 caracteres.";
    if (passwordForm.nueva !== passwordForm.confirmacion)
      newErrors.confirmacion = "Las contraseñas no coinciden.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const token = user?.token;
      const response = await cambiarPasswordUsuario(
        {
          actual: passwordForm.actual,
          nueva: passwordForm.nueva,
        },
        token
      );

      alert(response.mensaje || "Contraseña actualizada correctamente");
      setPasswordForm({ actual: "", nueva: "", confirmacion: "" });
      setModalVisible(false);
    } catch (error) {
      alert(error.message || "Error al cambiar contraseña.");
    }
  };

  const obtenerHistorialReservas = async () => {
    try {
      const token = user?.token;
      if (!token) {
        console.warn("No se encontró el token del usuario");
        return;
      }

      const data = await fetchHistorialReservas(token);

      if (Array.isArray(data)) {
        setReservas(data);
      } else {
        console.warn("La respuesta de reservas no es un array:", data);
        setReservas([]); // Valor seguro
      }
    } catch (error) {
      console.error("Error al cargar historial de reservas:", error);
      setReservas([]); // Valor seguro en caso de error
    }
  };

  const [passwordForm, setPasswordForm] = useState({
    actual: "",
    nueva: "",
    confirmacion: "",
  });

  const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
    if (content === "historial") {
      obtenerHistorialReservas();
    }
  };

  const renderItem = (iconName, text, contentKey, iconColor = "#4318D1") => (
    <TouchableOpacity
      style={styles.itemRow}
      onPress={() => openModal(contentKey)}
    >
      <Icon name={iconName} size={24} color={iconColor} />
      <Text style={styles.itemText}>{text}</Text>
    </TouchableOpacity>
  );

  const renderModalContent = () => {
    switch (modalContent) {
      case "info":
        return (
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nombre</Text>
              <TextInput
                style={styles.input}
                value={personalInfo.nombre}
                onChangeText={(text) => {
                  setPersonalInfo({ ...personalInfo, nombre: text });
                  setErrors({ ...errors, nombre: null });
                }}
              />
              {errors.nombre && <Text style={styles.errorText}>{errors.nombre}</Text>}

            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Apellido</Text>
                <TextInput
                  style={styles.input}
                  value={personalInfo.apellido}
                  onChangeText={(text) => {
                    setPersonalInfo({ ...personalInfo, apellido: text });
                    setErrors({ ...errors, apellido: null });
                  }}
                />
                {errors.apellido && <Text style={styles.errorText}>{errors.apellido}</Text>}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Correo electrónico</Text>
              <TextInput
                style={styles.input}
                value={personalInfo.correo}
                editable={false}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Fecha de nacimiento</Text>
                <TextInput
                  style={styles.input}
                  value={personalInfo.nacimiento}
                  onChangeText={(text) => {
                    setPersonalInfo({ ...personalInfo, nacimiento: text });
                    setErrors({ ...errors, nacimiento: null });
                  }}
                  placeholder="YYYY-MM-DD"
                />
                {errors.nacimiento && <Text style={styles.errorText}>{errors.nacimiento}</Text>}
            </View>

            <Pressable
              style={styles.saveButton}
              onPress={
                modalContent === "info"
                  ? handleSavePersonalInfo
                  : modalContent === "password"
                  ? handleChangePassword
                  : () => {}
              }
            >
              <Text style={styles.saveButtonText}>
                {modalContent === "info"
                  ? "Guardar cambios"
                  : modalContent === "password"
                  ? "Actualizar contraseña"
                  : "Aceptar"}
              </Text>
            </Pressable>

          </View>
        );


      case "password":
        return (
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Contraseña actual</Text>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor="#A0A0A0"
                secureTextEntry
                value={passwordForm.actual}
                onChangeText={(text) =>
                  setPasswordForm({ ...passwordForm, actual: text })
                }
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nueva contraseña</Text>
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="#A0A0A0"
                  secureTextEntry
                  value={passwordForm.nueva}
                  onChangeText={(text) => {
                    setPasswordForm({ ...passwordForm, nueva: text });
                    setErrors({ ...errors, nueva: null });
                  }}
              />
              {errors.nueva && <Text style={styles.errorText}>{errors.nueva}</Text>}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirmar nueva contraseña</Text>
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="#A0A0A0"
                  secureTextEntry
                  value={passwordForm.confirmacion}
                  onChangeText={(text) => {
                    setPasswordForm({ ...passwordForm, confirmacion: text });
                    setErrors({ ...errors, confirmacion: null });
                  }}
                />
                {errors.confirmacion && <Text style={styles.errorText}>{errors.confirmacion}</Text>}
            </View>

            <Pressable
              style={styles.popupCloseButton}
              onPress={handleChangePassword}
            >
              <Text style={styles.popupCloseText}>Actualizar contraseña</Text>
            </Pressable>
          </View>
        );

       case "nosotros":
         return (
           <ScrollView style={{ maxHeight: 450 }}>
             <Text style={styles.aboutTitle}>
               <Text style={styles.boldText}>BusRat - Proyecto Académico</Text>
             </Text>

             <Text style={styles.aboutText}>
               <Icon name="school-outline" size={16} color="#441AD1" /> Universidad Mayor de San Simón - Facultad de Ciencias y Tecnología
             </Text>

             <Text style={styles.aboutText}>
               <Icon name="person-outline" size={16} color="#441AD1" /> Docente: Américo Fiorilo Lozada P.Ph.D.
             </Text>

             <Text style={[styles.aboutText, { marginTop: 8 }]}>
               <Icon name="people-outline" size={16} color="#441AD1" /> <Text style={styles.boldText}>Integrantes:</Text>
               {"\n"}• Cáceres Telleria Jaime Cristhian
               {"\n"}• Chavarria Zurita John Henry
               {"\n"}• Flores García Cristian Adrian
               {"\n"}• Sahonero Garrado Sidney Angelly
               {"\n"}• Velasquez Ricaldez Rodrigo
             </Text>

             <Text style={[styles.aboutText, { marginTop: 10 }]}>
               <Icon name="document-text-outline" size={16} color="#441AD1" /> <Text style={styles.boldText}>Resumen:</Text>
               {"\n"}Este proyecto tiene como objetivo mejorar la experiencia de viaje de los usuarios del transporte interdepartamental mediante una app que permite:
               {"\n"}• Reservar asientos en tiempo real
               {"\n"}• Consultar horarios y disponibilidad
               {"\n"}• Ver historial de viajes y pagar por QR
             </Text>

             <Text style={[styles.aboutText, { marginTop: 10 }]}>
               <Icon name="layers-outline" size={16} color="#441AD1" /> <Text style={styles.boldText}>Tecnologías:</Text>
               {"\n"}• React Native
               {"\n"}• Node.js + Express
               {"\n"}• PostgreSQL
               {"\n"}• Firebase Auth
             </Text>

             <Text style={[styles.aboutText, { marginTop: 10 }]}>
               <Icon name="checkmark-done-outline" size={16} color="#441AD1" /> <Text style={styles.boldText}>Metodología:</Text>
               {"\n"}Desarrollo bajo metodología Scrum con entregables iterativos en sprints y control de versiones mediante GitHub.
             </Text>
           </ScrollView>
         );

      case "agencia":
        return (
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nombre de la agencia</Text>
              <TextInput
                style={styles.input}
                value={agencyInfo.nombre_agencia}
                editable={false}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>NIT</Text>
              <TextInput
                style={styles.input}
                value={agencyInfo.nit}
                editable={false}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Dirección</Text>
              <TextInput
                style={styles.input}
                value={agencyInfo.direccion}
                editable={false}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Teléfono o WhatsApp</Text>
              <TextInput
                style={styles.input}
                value={agencyInfo.contacto}
                editable={false}
              />
            </View>

            <Text style={{ marginTop: 12, color: "#666", textAlign: "center", fontSize: 13 }}>
              Para modificar esta información, por favor envía un correo a{" "}
              <Text style={{ fontWeight: "bold", color: "#441AD1" }}>soporte.busrat@gmail.com</Text>
            </Text>

          </View>
        );


      case "representante":
        return (
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nombre completo</Text>
              <TextInput
                style={styles.input}
                value={representanteLegal.nombre_completo}
                editable={false}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Cédula de identidad</Text>
              <TextInput
                style={styles.input}
                value={representanteLegal.ci}
                editable={false}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Correo electrónico</Text>
              <TextInput
                style={styles.input}
                value={representanteLegal.correo}
                editable={false}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Número de contacto</Text>
              <TextInput
                style={styles.input}
                value={representanteLegal.telefono}
                editable={false}
              />
            </View>

            <Text style={{ marginTop: 12, color: "#666", textAlign: "center", fontSize: 13 }}>
              Para modificar esta información, por favor envía un correo a{" "}
              <Text style={{ fontWeight: "bold", color: "#441AD1" }}>soporte.busrat@gmail.com</Text>
            </Text>

          </View>
        );


      case "admin":
        return (
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nombre</Text>
              <TextInput
                style={styles.input}
                value={adminCuenta.nombre}
                onChangeText={(text) => setAdminCuenta({ ...adminCuenta, nombre: text })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Apellido</Text>
              <TextInput
                style={styles.input}
                value={adminCuenta.apellido}
                onChangeText={(text) => setAdminCuenta({ ...adminCuenta, apellido: text })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Correo electrónico</Text>
              <TextInput
                style={styles.input}
                value={adminCuenta.correo}
                onChangeText={(text) => setAdminCuenta({ ...adminCuenta, correo: text })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Teléfono</Text>
              <TextInput
                style={styles.input}
                value={adminCuenta.telefono}
                onChangeText={(text) => setAdminCuenta({ ...adminCuenta, telefono: text })}
              />
            </View>

            <Pressable style={styles.saveButton} onPress={handleSaveAdminInfo}>
              <Text style={styles.saveButtonText}>Guardar cambios</Text>
            </Pressable>
          </View>
        );



      case "viajes":
        return (
          <ScrollView style={{ width: "100%", maxHeight: 400 }}>
            {viajes.length === 0 ? (
              <Text style={{ textAlign: "center", marginVertical: 20 }}>
                No hay viajes registrados.
              </Text>
            ) : (
              viajes.map((viaje) => (
                <View key={viaje.id_viaje} style={styles.historialCard}>
                  <Text style={styles.ruta}>
                    {viaje.ruta}
                  </Text>

                  <View style={styles.historialRow}>
                    <Icon name="calendar-outline" size={16} color="#441AD1" />
                    <Text style={styles.historialInfo}>
                      {new Date(viaje.fecha_salida).toLocaleDateString()} - {viaje.hora_programada}
                    </Text>
                  </View>

                  <View style={styles.historialRow}>
                    <Icon name="bus-outline" size={16} color="#441AD1" />
                    <Text style={styles.historialInfo}>
                      {viaje.tipo_bus} | {viaje.placa} ({viaje.marca})
                    </Text>
                  </View>

                  <View style={styles.historialRow}>
                    <Icon name="cash-outline" size={16} color="#441AD1" />
                    <Text style={styles.historialInfo}>Bs. {viaje.costo}</Text>
                  </View>
                </View>
              ))
            )}
          </ScrollView>
        );


        case "reporteAccidente":
          return (
            <ScrollView style={{ width: "100%", maxHeight: 400 }}>
              {viajesActivos.length === 0 ? (
                <Text style={{ textAlign: "center", marginVertical: 20 }}>
                  No hay viajes activos disponibles para generar un reporte.
                </Text>
              ) : (
                <View style={styles.formContainer}>
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Seleccionar viaje</Text>
                    <View style={styles.input}>
                      <Picker
                        selectedValue={viajeSeleccionado}
                        onValueChange={(itemValue) => setViajeSeleccionado(itemValue)}
                      >
                        <Picker.Item label="Seleccione un viaje" value="" />
                        {viajesActivos.map((v) => (
                          <Picker.Item
                            key={v.id_viaje}
                            label={`${v.ruta} - ${new Date(v.fecha_salida).toLocaleDateString()}`}
                            value={v.id_viaje}
                          />
                        ))}
                      </Picker>
                    </View>
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Motivo del accidente</Text>
                    <TextInput
                      style={styles.input}
                      value={motivoAccidente}
                      onChangeText={setMotivoAccidente}
                      placeholder="Describe el motivo del accidente"
                      multiline
                    />
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Consecuencias</Text>
                    <TextInput
                      style={styles.input}
                      value={consecuenciasAccidente}
                      onChangeText={setConsecuenciasAccidente}
                      placeholder="Ej: Retraso de 1 hora..."
                      multiline
                    />
                  </View>

                  <Pressable
                    style={styles.popupCloseButton}
                    onPress={handleGenerarReportePDF}
                  >
                    <Text style={styles.popupCloseText}>Generar PDF</Text>
                  </Pressable>
                </View>
              )}
            </ScrollView>
          );


        case "sugerencias":
          return (
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 16, marginBottom: 10 }}>
                ¿Tienes ideas, mejoras o detectaste un problema?
              </Text>
              <Text style={{ fontSize: 14, marginBottom: 20 }}>
                Envíanos tus sugerencias al siguiente correo:
              </Text>

              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#441AD1", marginBottom: 20 }}>
                soporte.busrat@gmail.com
              </Text>

              <Pressable
                style={styles.popupCloseButton}
                onPress={() =>
                  Linking.openURL("mailto:soporte.busrat@gmail.com?subject=Sugerencia BusRat")
                }
              >
                <Text style={styles.popupCloseText}>Enviar correo</Text>
              </Pressable>
            </View>
          );

      default:
        return <Text style={styles.popupContent}>En desarrollo...</Text>;
    }
  };

  return (
    <GenericContainer>
    <BlobBg />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Avatar y nombre */}
        <View style={styles.profileCard}>
          <Image
            source={require("./assets/avatar-default.jpg")}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>
              {user?.usuario?.nombre && user?.usuario?.apellido
                ? `${user.usuario.nombre} ${user.usuario.apellido}`
                : "Nombre no disponible"}
            </Text>
            <Text style={styles.email}>
              {user?.usuario?.correo_electronico || "Correo no disponible"}
            </Text>
          </View>
        </View>


        {/* Sección: Cuenta */}
        <Text style={styles.sectionTitle}>Cuenta</Text>
        <View style={styles.sectionBox}>
          {renderItem("business-outline", "Datos de la agencia", "agencia")}
          {renderItem("person-outline", "Representante legal", "representante")}
          {renderItem("settings-outline", "Administrador de la cuenta", "admin")}
          {renderItem("lock-closed-outline", "Cambiar contraseña", "password")}
          {renderItem("calendar-outline", "Historial de viajes", "viajes")}
          {renderItem("alert-circle-outline", "Reportar accidente", "reporteAccidente")}

        </View>

        {/* Sección: General */}
        <Text style={styles.sectionTitle}>General</Text>
        <View style={styles.sectionBox}>
          {renderItem("chatbox-ellipses-outline", "Enviar sugerencias", "sugerencias")}
          {renderItem("information-circle-outline", "Sobre nosotros", "nosotros")}
        </View>

        {/* Botón cerrar sesión */}
        <View style={styles.logoutContainer}>
          <ButtonStyle
            width="100%"
            height="50"
            text="Cerrar Sesión"
            onClick={logout}
          />
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="none"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.popupBox}>
            {/* Icono Cerrar */}
            <Pressable style={styles.closeIcon} onPress={() => setModalVisible(false)}>
              <Icon name="close" size={24} color="#555" />
            </Pressable>

            {/* Título */}
            <Text style={styles.popupTitle}>
              {modalContent === "agencia" && "Datos de la agencia"}
              {modalContent === "representante" && "Representante legal"}
              {modalContent === "admin" && "Administrador de la cuenta"}
              {modalContent === "viajes" && "Historial de viajes"}
              {modalContent === "reporteAccidente" && "Reporte de accidente"}
              {modalContent === "sugerencias" && "Enviar Sugerencias"}
              {modalContent === "nosotros" && "Sobre Nosotros"}
            </Text>



            {/* Contenido dinámico */}
            {renderModalContent()}
          </View>
        </View>
      </Modal>

    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 60,
  },
  profileBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    elevation: 2,
  },

  aboutTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#441AD1",
    marginBottom: 10,
    textAlign: "center",
  },

  aboutText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
    marginBottom: 8,
  },

  boldText: {
    fontWeight: "bold",
    color: "#441AD1",
  },


  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  email: {
    fontSize: 14,
    color: "#777",
  },
  sectionTitle: {
    fontSize: 16,              // ⬅ un poco más grande
    color: "#441AD1",          // ⬅ color púrpura intenso
    marginBottom: 8,
    marginTop: 9,
    fontWeight: "700",
  },
  sectionBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 10,
    elevation: 2,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 16,
    marginLeft: 15,
    color: "#333",
  },

  aboutTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#441AD1",
    marginBottom: 10,
    textAlign: "center",
  },
  aboutText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
    marginBottom: 10,
  },

  logoutContainer: {
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  popupBox: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: -6,
    marginBottom: 8,
  },

  popupTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  popupContent: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  popupCloseButton: {
    backgroundColor: "#4318D1",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  popupCloseText: {
    color: "white",
    fontWeight: "600",
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  inputGroup: {
    width: "100%",
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: "#555",
    fontWeight: "600",
  },

  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 5,
    zIndex: 1,
  },
  saveButton: {
    backgroundColor: "#4318D1",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  historialCard: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  ruta: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: "#555",
  },

  historialRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  historialInfo: {
    marginLeft: 8,
    fontSize: 14,
    color: "#555",
  },


});
