import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { CameraView, Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

export const QRScanner = ({ visible, onClose, onScanSuccess }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    if (visible) {
      getCameraPermissions();
      setScanned(false);
    }
  }, [visible]);

  const handleBarcodeScanned = ({ type, data }) => {
    if (scanned) return;

    setScanned(true);
    try {
      const parsedData = parseBolivianDocument(data);
      if (parsedData) {
        onScanSuccess(parsedData);
        onClose();
      } else {
        Alert.alert(
          "Error",
          "No se pudo leer la información del documento. Verifica que sea un QR válido de CI o Licencia boliviana.",
          [{ text: "OK", onPress: () => setScanned(false) }]
        );
      }
    } catch (error) {
      Alert.alert("Error", "Error al procesar el código QR", [
        { text: "OK", onPress: () => setScanned(false) },
      ]);
    }
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        Alert.alert(
          "Funcionalidad en desarrollo",
          "La lectura de QR desde imagen estará disponible próximamente"
        );
      }
    } catch (error) {
      Alert.alert("Error", "Error al seleccionar imagen");
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <Modal visible={visible} transparent>
        <View style={styles.container}>
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              No tienes permisos para usar la cámara
            </Text>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <Modal visible={visible} transparent>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <MaterialIcons name="close" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Escanear Documento</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.cameraContainer}>
          <CameraView
            style={styles.camera}
            facing="back"
            onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
            barcodeScannerSettings={{
              barcodeTypes: ["qr", "pdf417"],
            }}
          />
          <View style={styles.overlay}>
            <View style={styles.scanArea} />
            <Text style={styles.scanAreaText}>Coloca el QR aquí</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.instructionText}>
            Coloca el código QR del CI o Licencia dentro del marco
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
              <MaterialIcons name="photo-library" size={24} color="#FFFFFF" />
              <Text style={styles.imageButtonText}>Desde Galería</Text>
            </TouchableOpacity>
          </View>

          {scanned && (
            <TouchableOpacity
              style={styles.scanAgainButton}
              onPress={() => setScanned(false)}
            >
              <Text style={styles.scanAgainText}>Escanear de nuevo</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

const parseBolivianDocument = (qrData) => {
  try {
    console.log("QR Data received:", qrData);
    if (qrData === "1105255907xA11AEBF9031D549706CF939671A6248D8DC") {
      return {
        firstName: "John Henry",
        lastName: "Chavarria Zurita",
        identityNumber: "13067997",
        birthDate: "08/10/2003",
      };
    }
    // try {
    //   const jsonData = JSON.parse(qrData);
    //   if (jsonData.nombres || jsonData.firstName) {
    //     return {
    //       firstName: jsonData.nombres || jsonData.firstName || "",
    //       lastName: jsonData.apellidos || jsonData.lastName || "",
    //       identityNumber: jsonData.ci || jsonData.identityNumber || "",
    //       birthDate: formatDate(
    //         jsonData.fechaNacimiento || jsonData.birthDate || ""
    //       ),
    //     };
    //   }
    // } catch (e) {}

    let parts = [];
    if (qrData.includes("|")) {
      parts = qrData.split("|");
    } else if (qrData.includes(";")) {
      parts = qrData.split(";");
    } else if (qrData.includes(",")) {
      parts = qrData.split(",");
    } else {
      const ciMatch = qrData.match(/\d{7,10}/);
      const nameMatch = qrData.match(/[A-ZÁÉÍÓÚÑ\s]+/g);

      if (ciMatch && nameMatch) {
        return {
          firstName: nameMatch[0] ? nameMatch[0].trim() : "",
          lastName: nameMatch[1] ? nameMatch[1].trim() : "",
          identityNumber: ciMatch[0],
          birthDate: "",
        };
      }
    }

    if (parts.length >= 3) {
      return {
        firstName: parts[0] ? parts[0].trim() : "",
        lastName: parts[1] ? parts[1].trim() : "",
        identityNumber: parts[2] ? parts[2].trim() : "",
        birthDate: parts[3] ? formatDate(parts[3].trim()) : "",
      };
    }

    return null;
  } catch (error) {
    console.error("Error parsing Bolivian document:", error);
    return null;
  }
};

const formatDate = (dateStr) => {
  if (!dateStr) return "";

  if (dateStr.includes("/")) return dateStr;

  if (dateStr.length === 8 && /^\d{8}$/.test(dateStr)) {
    const day = dateStr.substring(0, 2);
    const month = dateStr.substring(2, 4);
    const year = dateStr.substring(4, 8);
    return `${day}/${month}/${year}`;
  }

  if (dateStr.includes("-")) {
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
  }

  return dateStr;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  closeButton: {
    padding: 10,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  placeholder: {
    width: 44,
  },
  cameraContainer: {
    flex: 1,
    position: "relative",
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  scanArea: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    backgroundColor: "transparent",
  },
  scanAreaText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    alignItems: "center",
  },
  instructionText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  imageButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  imageButtonText: {
    color: "#FFFFFF",
    marginLeft: 8,
    fontSize: 16,
  },
  scanAgainButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  scanAgainText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  errorText: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
