import React, { useState, useEffect, useRef } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Platform,
} from "react-native";
import { CameraView, Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import MlkitOcr from "react-native-mlkit-ocr";

export const OCRScanner = ({ visible, onClose, onScanSuccess }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [ocrAvailable, setOcrAvailable] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    const checkOCRAvailability = () => {
      // Verificar si MlkitOcr está disponible
      if (MlkitOcr && typeof MlkitOcr.detectFromUri === "function") {
        setOcrAvailable(true);
      } else {
        console.warn("MlkitOcr not available, using fallback method");
        setOcrAvailable(false);
      }
    };

    if (visible) {
      getCameraPermissions();
      checkOCRAvailability();
      setCapturedImage(null);
      setIsProcessing(false);
    }
  }, [visible]);

  const captureAndProcessImage = async () => {
    if (!cameraRef.current || isProcessing) return;

    setIsProcessing(true);
    try {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.8,
        base64: false,
        skipProcessing: false,
      });

      setCapturedImage(photo.uri);
      await processImageWithOCR(photo.uri);
    } catch (error) {
      console.error("Error capturing image:", error);
      Alert.alert("Error", "Error al capturar la imagen");
      setIsProcessing(false);
    }
  };

  const pickImageFromGallery = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        setIsProcessing(true);
        setCapturedImage(result.assets[0].uri);
        await processImageWithOCR(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
      Alert.alert("Error", "Error al seleccionar imagen");
    }
  };

  const processImageWithOCR = async (imageUri) => {
    try {
      console.log("Processing image with OCR:", imageUri);

      let result;

      if (ocrAvailable && MlkitOcr) {
        // Usar MlkitOcr si está disponible
        result = await MlkitOcr.detectFromUri(imageUri);
        console.log("OCR Result:", result);
      } else {
        // Fallback: usar entrada manual
        Alert.alert(
          "OCR no disponible",
          "El reconocimiento automático no está disponible. ¿Deseas ingresar los datos manualmente?",
          [
            { text: "Cancelar", onPress: () => setIsProcessing(false) },
            { text: "Ingresar manualmente", onPress: () => showManualEntry() },
          ]
        );
        return;
      }

      if (result && result.length > 0) {
        // Extraer todo el texto
        const fullText = result.map((block) => block.text).join(" ");
        console.log("Full extracted text:", fullText);

        // Parsear los datos del carnet
        const parsedData = parseBolivianIDCard(fullText);

        if (parsedData) {
          onScanSuccess(parsedData);
          onClose();
        } else {
          // Si no se puede parsear automáticamente, mostrar el texto y permitir entrada manual
          Alert.alert(
            "Datos no reconocidos",
            `Texto detectado: "${fullText.substring(
              0,
              100
            )}..."\n\n¿Deseas ingresar los datos manualmente?`,
            [
              { text: "Reintentar", onPress: () => setIsProcessing(false) },
              {
                text: "Ingresar manualmente",
                onPress: () => showManualEntry(),
              },
            ]
          );
        }
      } else {
        Alert.alert(
          "Error",
          "No se detectó texto en la imagen. Intenta con mejor iluminación.",
          [
            { text: "Reintentar", onPress: () => setIsProcessing(false) },
            { text: "Ingresar manualmente", onPress: () => showManualEntry() },
          ]
        );
      }
    } catch (error) {
      console.error("OCR Error:", error);
      Alert.alert(
        "Error de OCR",
        `Error al procesar la imagen: ${error.message}\n\n¿Deseas ingresar los datos manualmente?`,
        [
          { text: "Reintentar", onPress: () => setIsProcessing(false) },
          { text: "Ingresar manualmente", onPress: () => showManualEntry() },
        ]
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const showManualEntry = () => {
    // Cerrar el escáner y permitir entrada manual
    setIsProcessing(false);
    onClose();
  };

  const retryCapture = () => {
    setCapturedImage(null);
    setIsProcessing(false);
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
          <Text style={styles.headerText}>Escanear Carnet de Identidad</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.cameraContainer}>
          <CameraView ref={cameraRef} style={styles.camera} facing="back" />

          {/* Overlay con guía para el carnet */}
          <View style={styles.overlay}>
            <View style={styles.cardFrame}>
              <View style={styles.cornerTopLeft} />
              <View style={styles.cornerTopRight} />
              <View style={styles.cornerBottomLeft} />
              <View style={styles.cornerBottomRight} />
            </View>
            <Text style={styles.scanAreaText}>
              Coloca el carnet dentro del marco
            </Text>
            {!ocrAvailable && (
              <Text style={styles.warningText}>
                ⚠️ OCR automático no disponible
              </Text>
            )}
          </View>

          {/* Procesando overlay */}
          {isProcessing && (
            <View style={styles.processingOverlay}>
              <ActivityIndicator size="large" color="#FFFFFF" />
              <Text style={styles.processingText}>Procesando imagen...</Text>
            </View>
          )}
        </View>

        <View style={styles.footer}>
          <Text style={styles.instructionText}>
            Coloca el carnet de identidad dentro del marco y presiona capturar
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.captureButton,
                isProcessing && styles.disabledButton,
              ]}
              onPress={captureAndProcessImage}
              disabled={isProcessing}
            >
              <MaterialIcons name="camera" size={24} color="#FFFFFF" />
              <Text style={styles.captureButtonText}>Capturar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.imageButton,
                isProcessing && styles.disabledButton,
              ]}
              onPress={pickImageFromGallery}
              disabled={isProcessing}
            >
              <MaterialIcons name="photo-library" size={24} color="#FFFFFF" />
              <Text style={styles.imageButtonText}>Desde Galería</Text>
            </TouchableOpacity>
          </View>

          {capturedImage && !isProcessing && (
            <TouchableOpacity style={styles.retryButton} onPress={retryCapture}>
              <Text style={styles.retryText}>Intentar de nuevo</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.manualButton}
            onPress={showManualEntry}
          >
            <Text style={styles.manualButtonText}>Ingresar manualmente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const parseBolivianIDCard = (text) => {
  try {
    console.log("Parsing text:", text);

    // Limpiar el texto
    const cleanText = text.replace(/\n/g, " ").replace(/\s+/g, " ").trim();

    // Patrones mejorados para el CI boliviano
    const patterns = {
      // Número de CI (buscar específicamente después de "N°" o números largos)
      ci: /(?:N°\s*)?(\d{7,10})\s*(?:[A-Z]{2})?/i,
      // Buscar nombres después de "NOMBRES:"
      firstName: /(?:NOMBRES?:?\s*)([A-ZÁÉÍÓÚÑ\s]+)(?=\s*APELLIDOS?)/i,
      // Buscar apellidos después de "APELLIDOS:"
      lastName:
        /(?:APELLIDOS?:?\s*)([A-ZÁÉÍÓÚÑ\s]+)(?=\s*(?:FECHA|NACIMIENTO|$))/i,
      // Fecha de nacimiento más específica
      birthDate:
        /(?:FECHA\s*DE\s*NACIMIENTO:?\s*)?(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{4})/i,
      // Buscar extensión
      extension: /\b(LP|CB|SC|OR|PT|TJ|CH|BN|PD)\b/i,
    };

    // Extraer CI
    const ciMatch = cleanText.match(patterns.ci);
    const identityNumber = ciMatch ? ciMatch[1] : "";

    // Extraer nombres
    const firstNameMatch = cleanText.match(patterns.firstName);
    const firstName = firstNameMatch ? firstNameMatch[1].trim() : "";

    // Extraer apellidos
    const lastNameMatch = cleanText.match(patterns.lastName);
    const lastName = lastNameMatch ? lastNameMatch[1].trim() : "";

    // Extraer fecha de nacimiento
    const birthMatch = cleanText.match(patterns.birthDate);
    let birthDate = "";
    if (birthMatch) {
      birthDate = formatDate(birthMatch[1]);
    }

    // Si no encontramos con patrones específicos, intentar extracción general
    if (!firstName && !lastName && !identityNumber) {
      return parseGeneralText(cleanText);
    }

    // Validar que tenemos al menos CI y nombre
    if (identityNumber && (firstName || lastName)) {
      return {
        firstName: firstName || "",
        lastName: lastName || "",
        identityNumber: identityNumber,
        birthDate: birthDate || "",
      };
    }

    return null;
  } catch (error) {
    console.error("Error parsing Bolivian ID card:", error);
    return null;
  }
};

// Función de respaldo para extracción general
const parseGeneralText = (text) => {
  try {
    // Patrones más generales
    const words = text.split(/\s+/).filter((word) => word.length > 1);
    const numbers = text.match(/\d{7,10}/g) || [];
    const dates = text.match(/\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{4}/g) || [];

    // Filtrar palabras que no son datos comunes del CI
    const nameWords = words.filter(
      (word) =>
        /^[A-ZÁÉÍÓÚÑ]+$/.test(word) &&
        ![
          "ESTADO",
          "PLURINACIONAL",
          "BOLIVIA",
          "CARNET",
          "IDENTIDAD",
          "CEDULA",
          "SERVICIO",
          "GENERAL",
        ].includes(word)
    );

    if (numbers.length > 0 && nameWords.length >= 2) {
      return {
        firstName: nameWords
          .slice(0, Math.ceil(nameWords.length / 2))
          .join(" "),
        lastName: nameWords.slice(Math.ceil(nameWords.length / 2)).join(" "),
        identityNumber: numbers[0],
        birthDate: dates.length > 0 ? formatDate(dates[0]) : "",
      };
    }

    return null;
  } catch (error) {
    console.error("Error in general parsing:", error);
    return null;
  }
};

const formatDate = (dateStr) => {
  if (!dateStr) return "";

  // Si ya está en formato DD/MM/YYYY
  if (dateStr.includes("/") && dateStr.split("/").length === 3) {
    const parts = dateStr.split("/");
    // Asegurar formato DD/MM/YYYY
    return `${parts[0].padStart(2, "0")}/${parts[1].padStart(2, "0")}/${
      parts[2]
    }`;
  }

  // Si está en formato con guiones
  if (dateStr.includes("-")) {
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return `${parts[0].padStart(2, "0")}/${parts[1].padStart(2, "0")}/${
        parts[2]
      }`;
    }
  }

  // Si está en formato con puntos
  if (dateStr.includes(".")) {
    const parts = dateStr.split(".");
    if (parts.length === 3) {
      return `${parts[0].padStart(2, "0")}/${parts[1].padStart(2, "0")}/${
        parts[2]
      }`;
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
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
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  cardFrame: {
    width: 300,
    height: 190,
    position: "relative",
  },
  cornerTopLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: "#FFFFFF",
  },
  cornerTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: "#FFFFFF",
  },
  cornerBottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: "#FFFFFF",
  },
  cornerBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: "#FFFFFF",
  },
  scanAreaText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  warningText: {
    color: "#FFA500",
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  processingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  processingText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 20,
  },
  footer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  instructionText: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  captureButton: {
    backgroundColor: "#007AFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  captureButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  imageButton: {
    backgroundColor: "#34C759",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  imageButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  disabledButton: {
    opacity: 0.5,
  },
  retryButton: {
    alignItems: "center",
    marginTop: 10,
  },
  retryText: {
    color: "#007AFF",
    fontSize: 16,
  },
  manualButton: {
    alignItems: "center",
    marginTop: 10,
    padding: 10,
  },
  manualButtonText: {
    color: "#FFA500",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    color: "#FFFFFF",
    fontSize: 16,
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
    fontWeight: "bold",
  },
});
