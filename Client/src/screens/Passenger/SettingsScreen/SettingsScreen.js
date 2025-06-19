import React, { useContext, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../../../context/AuthContext";
import { GenericContainer } from "../../../components/GenericContainer";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";
import { BlobBg } from "../../../components/Background/BlobBg";
import { ProfileCard } from "./components/ProfileCard";
import { AccountSection } from "./components/AccountSection";
import { GeneralSection } from "./components/GeneralSection";
import {
  actualizarPerfilUsuario,
  cambiarPasswordUsuario,
} from "../../../api/user.api";

export default function SettingsScreen({ navigation }) {
  const { user, logout, setUser } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [errors, setErrors] = useState({});

  const [personalInfo, setPersonalInfo] = useState({
    nombre: user?.usuario?.nombre || "",
    apellido: user?.usuario?.apellido || "",
    correo: user?.usuario?.correo_electronico || "",
    nacimiento: user?.datos_pasajero?.fecha_nacimiento?.slice(0, 10) || "",
  });

  const [passwordForm, setPasswordForm] = useState({
    actual: "",
    nueva: "",
    confirmacion: "",
  });

  const handleSavePersonalInfo = async () => {
    const newErrors = {};

    if (!personalInfo.nombre.trim())
      newErrors.nombre = "El nombre es obligatorio.";
    if (!personalInfo.apellido.trim())
      newErrors.apellido = "El apellido es obligatorio.";
    if (!/^\d{4}-\d{2}-\d{2}$/.test(personalInfo.nacimiento)) {
      newErrors.nacimiento = "Formato de fecha inválido. Usa YYYY-MM-DD.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const token = user?.token;
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

  const handleChangePassword = async () => {
    const newErrors = {};

    if (!passwordForm.actual.trim())
      newErrors.actual = "Debe ingresar su contraseña actual.";
    if (passwordForm.nueva.length < 8)
      newErrors.nueva = "La nueva contraseña debe tener al menos 8 caracteres.";
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

  const handleItemPress = (contentKey) => {
    if (contentKey === "historial") {
      // Navegar a HistorialReserver en lugar de abrir modal
      navigation.navigate("ReservationHistory");
    } else {
      // Para otros elementos, abrir modal como antes
      setModalContent(contentKey);
      setModalVisible(true);
    }
  };

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
              {errors.nombre && (
                <Text style={styles.errorText}>{errors.nombre}</Text>
              )}
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
              {errors.apellido && (
                <Text style={styles.errorText}>{errors.apellido}</Text>
              )}
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
              {errors.nacimiento && (
                <Text style={styles.errorText}>{errors.nacimiento}</Text>
              )}
            </View>

            <Pressable
              style={styles.saveButton}
              onPress={handleSavePersonalInfo}
            >
              <Text style={styles.saveButtonText}>Guardar cambios</Text>
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
                onChangeText={(text) => {
                  setPasswordForm({ ...passwordForm, actual: text });
                  setErrors({ ...errors, actual: null });
                }}
              />
              {errors.actual && (
                <Text style={styles.errorText}>{errors.actual}</Text>
              )}
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
              {errors.nueva && (
                <Text style={styles.errorText}>{errors.nueva}</Text>
              )}
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
              {errors.confirmacion && (
                <Text style={styles.errorText}>{errors.confirmacion}</Text>
              )}
            </View>

            <Pressable style={styles.saveButton} onPress={handleChangePassword}>
              <Text style={styles.saveButtonText}>Actualizar contraseña</Text>
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
              <Icon name="school-outline" size={16} color="#441AD1" />{" "}
              Universidad Mayor de San Simón - Facultad de Ciencias y Tecnología
            </Text>

            <Text style={styles.aboutText}>
              <Icon name="person-outline" size={16} color="#441AD1" /> Docente:
              Américo Fiorilo Lozada P.Ph.D.
            </Text>

            <Text style={[styles.aboutText, { marginTop: 8 }]}>
              <Icon name="people-outline" size={16} color="#441AD1" />{" "}
              <Text style={styles.boldText}>Integrantes:</Text>
              {"\n"}• Cáceres Telleria Jaime Cristhian
              {"\n"}• Chavarria Zurita John Henry
              {"\n"}• Sahonero Garrado Sidney Angelly
              {"\n"}• Velasquez Ricaldez Rodrigo
            </Text>

            <Text style={[styles.aboutText, { marginTop: 10 }]}>
              <Icon name="document-text-outline" size={16} color="#441AD1" />{" "}
              <Text style={styles.boldText}>Resumen:</Text>
              {"\n"}Este proyecto tiene como objetivo mejorar la experiencia de
              viaje de los usuarios del transporte interdepartamental mediante
              una app que permite:
              {"\n"}• Reservar asientos en tiempo real
              {"\n"}• Consultar horarios y disponibilidad
              {"\n"}• Ver historial de viajes y pagar por QR
            </Text>

            <Text style={[styles.aboutText, { marginTop: 10 }]}>
              <Icon name="layers-outline" size={16} color="#441AD1" />{" "}
              <Text style={styles.boldText}>Tecnologías:</Text>
              {"\n"}• React Native
              {"\n"}• Node.js + Express
              {"\n"}• PostgreSQL
              {"\n"}• Firebase Auth
            </Text>

            <Text style={[styles.aboutText, { marginTop: 10 }]}>
              <Icon name="checkmark-done-outline" size={16} color="#441AD1" />{" "}
              <Text style={styles.boldText}>Metodología:</Text>
              {"\n"}Desarrollo bajo metodología Scrum con entregables iterativos
              en sprints y control de versiones mediante GitHub.
            </Text>
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

            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#441AD1",
                marginBottom: 20,
              }}
            >
              soporte.busrat@gmail.com
            </Text>

            <Pressable
              style={styles.popupCloseButton}
              onPress={() =>
                Linking.openURL(
                  "mailto:soporte.busrat@gmail.com?subject=Sugerencia BusRat"
                )
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
        <ProfileCard user={user} />

        <AccountSection onItemPress={handleItemPress} />

        <GeneralSection onItemPress={handleItemPress} />

        <View style={styles.logoutContainer}>
          <ButtonStyle
            width="100%"
            height="50"
            text="Cerrar Sesión"
            onClick={logout}
          />
        </View>
      </ScrollView>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="none"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.popupBox}>
            <Pressable
              style={styles.closeIcon}
              onPress={() => setModalVisible(false)}
            >
              <Icon name="close" size={24} color="#555" />
            </Pressable>

            <Text style={styles.popupTitle}>
              {modalContent === "info" && "Información personal"}
              {modalContent === "password" && "Cambiar contraseña"}
              {modalContent === "sugerencias" && "Enviar Sugerencias"}
              {modalContent === "nosotros" && "Sobre Nosotros"}
            </Text>

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
});
