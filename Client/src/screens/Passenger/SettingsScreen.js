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

export default function PassengerSettingsScreen() {
  const { user, logout } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

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

  const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const handleSavePersonalInfo = async () => {
    try {
      console.log("Actualizando datos:", personalInfo);
      // Aquí llamas a tu API con fetch o axios
      setModalVisible(false);
    } catch (error) {
      console.error("Error al actualizar información:", error);
    }
  };

  const handleChangePassword = async () => {
    if (passwordForm.nueva !== passwordForm.confirmacion) {
      alert("Las contraseñas no coinciden");
      return;
    }
    try {
      console.log("Cambiando contraseña:", passwordForm);
      // Aquí llamas a tu API
      setModalVisible(false);
    } catch (error) {
      console.error("Error al cambiar contraseña:", error);
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
                onChangeText={(text) =>
                  setPersonalInfo({ ...personalInfo, nombre: text })
                }
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Apellido</Text>
              <TextInput
                style={styles.input}
                value={personalInfo.apellido}
                onChangeText={(text) =>
                  setPersonalInfo({ ...personalInfo, apellido: text })
                }
              />
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
                onChangeText={(text) =>
                  setPersonalInfo({ ...personalInfo, nacimiento: text })
                }
              />
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
                onChangeText={(text) =>
                  setPasswordForm({ ...passwordForm, nueva: text })
                }
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirmar nueva contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor="#A0A0A0"
                secureTextEntry
                value={passwordForm.confirmacion}
                onChangeText={(text) =>
                  setPasswordForm({ ...passwordForm, confirmacion: text })
                }
              />
            </View>

            <Pressable
              style={styles.popupCloseButton}
              onPress={handleChangePassword}
            >
              <Text style={styles.popupCloseText}>Actualizar contraseña</Text>
            </Pressable>
          </View>
        );


      default:
        return <Text style={styles.popupContent}>En desarrollo...</Text>;
    }
  };

  return (
    <GenericContainer>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Avatar y nombre */}
        <View style={styles.profileBox}>
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
          {renderItem("person-outline", "Información personal", "info")}
          {renderItem("lock-closed-outline", "Cambiar contraseña", "password")}
          {renderItem("calendar-outline", "Historial de reservas", "historial")}
        </View>

        {/* Sección: General */}
        <Text style={styles.sectionTitle}>General</Text>
        <View style={styles.sectionBox}>
          {renderItem("share-social-outline", "Compartir la app", "compartir")}
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
            <Text style={styles.popupTitle}>Información</Text>

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
    fontSize: 14,
    color: "#999",
    marginBottom: 8,
    marginTop: 9,
    fontWeight: "600",
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
