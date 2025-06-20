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
import * as ImageManipulator from "expo-image-manipulator";
import * as FileSystem from "expo-file-system";
import { MaterialIcons } from "@expo/vector-icons";

// OCR.Space API Key gratuita - Reemplaza con tu propia key
const OCR_SPACE_API_KEY = "K87899142388957"; // Key de prueba, obten la tuya en https://ocr.space/ocrapi
const OCR_SPACE_URL = "https://api.ocr.space/parse/image";

export const OCRScanner = ({ visible, onClose, onScanSuccess }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    if (visible) {
      getCameraPermissions();
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
      await processImageWithOCRSpace(photo.uri);
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
        await processImageWithOCRSpace(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
      Alert.alert("Error", "Error al seleccionar imagen");
    }
  };

  const processImageWithOCRSpace = async (imageUri) => {
    try {
      console.log("Processing image with OCR.Space API:", imageUri);

      // Redimensionar imagen para optimizar la API
      const manipulatedImage = await ImageManipulator.manipulateAsync(
        imageUri,
        [
          { resize: { width: 1024 } }, // Tamaño óptimo para OCR.Space
        ],
        {
          compress: 0.8,
          format: ImageManipulator.SaveFormat.JPEG,
        }
      );

      // Convertir imagen a base64
      const base64Image = await FileSystem.readAsStringAsync(
        manipulatedImage.uri,
        {
          encoding: FileSystem.EncodingType.Base64,
        }
      );

      // Preparar FormData para OCR.Space API
      const formData = new FormData();
      formData.append("base64Image", `data:image/jpeg;base64,${base64Image}`);
      formData.append("language", "spa"); // Español
      formData.append("isOverlayRequired", "false");
      formData.append("detectOrientation", "true");
      formData.append("scale", "true");
      formData.append("isTable", "false");
      formData.append("OCREngine", "2"); // Engine 2 es mejor para documentos

      // Hacer llamada a OCR.Space API
      const response = await fetch(OCR_SPACE_URL, {
        method: "POST",
        headers: {
          apikey: OCR_SPACE_API_KEY,
        },
        body: formData,
      });

      const result = await response.json();

      if (result.IsErroredOnProcessing) {
        throw new Error(result.ErrorMessage || "Error en OCR.Space API");
      }

      if (result.ParsedResults && result.ParsedResults.length > 0) {
        const extractedText = result.ParsedResults[0].ParsedText;

        if (extractedText && extractedText.trim().length > 0) {
          console.log("Texto extraído:", extractedText);

          // Parsear los datos del carnet
          const parsedData = parseBolivianIDCard(extractedText);

          if (parsedData) {
            onScanSuccess(parsedData);
            onClose();
          } else {
            // Si no se puede parsear automáticamente, mostrar el texto
            Alert.alert(
              "Datos no reconocidos",
              `Texto detectado: "${extractedText.substring(
                0,
                150
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
            "Sin texto detectado",
            "No se detectó texto en la imagen. Intenta con mejor iluminación.",
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
        throw new Error("Respuesta inesperada de la API");
      }
    } catch (error) {
      console.error("OCR.Space API Error:", error);

      let errorMessage = "Error al procesar la imagen";
      if (error.message.includes("API key")) {
        errorMessage = "Error con la API Key. Verifica tu configuración.";
      } else if (
        error.message.includes("quota") ||
        error.message.includes("limit")
      ) {
        errorMessage = "Has excedido tu cuota gratuita de OCR.Space API.";
      } else if (
        error.message.includes("network") ||
        error.message.includes("fetch")
      ) {
        errorMessage = "Error de conexión. Verifica tu internet.";
      }

      Alert.alert(
        "Error de OCR",
        `${errorMessage}\n\n¿Deseas ingresar los datos manualmente?`,
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
            <Text style={styles.infoText}>✅ OCR con OCR.Space</Text>
          </View>

          {/* Procesando overlay */}
          {isProcessing && (
            <View style={styles.processingOverlay}>
              <ActivityIndicator size="large" color="#FFFFFF" />
              <Text style={styles.processingText}>
                Procesando con OCR.Space...
              </Text>
              <Text style={styles.apiInfoText}>
                🔄 Analizando texto en la nube
              </Text>
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
    // Limpiar el texto
    const cleanText = text
      .replace(/\r\n/g, " ")
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    // Patrones mejorados para el CI boliviano
    const patterns = {
      // Número de CI (buscar específicamente después de "N°" o números largos)
      ci: /(?:N[°]?\s*)(\d{7,10})\s*(?:[A-Z]{2})?/i,
      // Buscar nombres después de "NOMBRES:"
      firstName: /(?:NOMBRES?:?\s*)([A-ZÁÉÍÓÚÑ\s]+?)(?=\s*APELLIDOS?|$)/i,
      // Buscar apellidos después de "APELLIDOS:"
      lastName:
        /(?:APELLIDOS?:?\s*)([A-ZÁÉÍÓÚÑ\s]+?)(?=\s*(?:FECHA|NACIMIENTO|DOMICILIO|$))/i,
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

    // Extraer extensión
    const extensionMatch = cleanText.match(patterns.extension);
    const extension = extensionMatch ? extensionMatch[1] : "";

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
        extension: extension || "",
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
        /^[A-ZÁÉÍÓÚÑ]+$/i.test(word) &&
        ![
          "ESTADO",
          "PLURINACIONAL",
          "BOLIVIA",
          "N°",
          "IDENTIDAD",
          "CEDULA",
          "SERVICIO",
          "GENERAL",
          "REGISTRO",
          "CIVIL",
        ].includes(word.toUpperCase())
    );

    if (numbers.length > 0 && nameWords.length >= 2) {
      return {
        firstName: nameWords
          .slice(0, Math.ceil(nameWords.length / 2))
          .join(" "),
        lastName: nameWords.slice(Math.ceil(nameWords.length / 2)).join(" "),
        identityNumber: numbers[0],
        birthDate: dates.length > 0 ? formatDate(dates[0]) : "",
        extension: "",
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
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  closeButton: {
    padding: 8,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  placeholder: {
    width: 40,
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
  cardFrame: {
    width: 280,
    height: 180,
    position: "relative",
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 12,
  },
  cornerTopLeft: {
    position: "absolute",
    top: -2,
    left: -2,
    width: 30,
    height: 30,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: "#00FF00",
    borderTopLeftRadius: 12,
  },
  cornerTopRight: {
    position: "absolute",
    top: -2,
    right: -2,
    width: 30,
    height: 30,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: "#00FF00",
    borderTopRightRadius: 12,
  },
  cornerBottomLeft: {
    position: "absolute",
    bottom: -2,
    left: -2,
    width: 30,
    height: 30,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: "#00FF00",
    borderBottomLeftRadius: 12,
  },
  cornerBottomRight: {
    position: "absolute",
    bottom: -2,
    right: -2,
    width: 30,
    height: 30,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: "#00FF00",
    borderBottomRightRadius: 12,
  },
  scanAreaText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  infoText: {
    color: "#00FF00",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 8,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
  processingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  processingText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 12,
    textAlign: "center",
  },
  apiInfoText: {
    color: "#00FF00",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 8,
    textAlign: "center",
    opacity: 0.8,
  },
  footer: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: Platform.OS === "ios" ? 40 : 20,
  },
  instructionText: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    opacity: 0.8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  captureButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    flex: 0.48,
    justifyContent: "center",
  },
  captureButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
  imageButton: {
    backgroundColor: "#34C759",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    flex: 0.48,
    justifyContent: "center",
  },
  imageButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
  disabledButton: {
    opacity: 0.5,
  },
  retryButton: {
    backgroundColor: "#FF9500",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 10,
  },
  retryText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
  manualButton: {
    backgroundColor: "transparent",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: "center",
  },
  manualButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  errorText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
