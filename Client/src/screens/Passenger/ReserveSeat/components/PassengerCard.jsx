import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { ScanQRIcon } from "../../../../components/Icons";
import { QRScanner } from "./QRScanner";

export const PassengerCard = ({
  index,
  passenger,
  handlePassengerChange,
  containerStyle,
}) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isQRScannerVisible, setQRScannerVisible] = useState(false);
  const [isScanned, setIsScanned] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = date.toLocaleDateString("es-ES");
    handlePassengerChange(index, "birthDate", formattedDate);
    hideDatePicker();
  };

  const handleQRScan = () => {
    if (!isScanned) {
      setQRScannerVisible(true);
    }
  };

  const handleScanSuccess = (scannedData) => {
    handlePassengerChange(index, "firstName", scannedData.firstName);
    handlePassengerChange(index, "lastName", scannedData.lastName);
    handlePassengerChange(index, "identityNumber", scannedData.identityNumber);
    handlePassengerChange(index, "birthDate", scannedData.birthDate);

    setIsScanned(true);
    setQRScannerVisible(false);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Pasajero {index + 1}</Text>
        <Text style={styles.seat}>Asiento: {passenger.seat}</Text>
      </View>

      <TouchableOpacity
        style={[styles.scanGroup, isScanned && styles.scanGroupDisabled]}
        onPress={handleQRScan}
        disabled={isScanned}
      >
        <ScanQRIcon />
        <Text style={[styles.labelScan, isScanned && styles.labelScanDisabled]}>
          {isScanned ? "Documento escaneado ✓" : "Escanear CI del pasajero"}
        </Text>
      </TouchableOpacity>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Nombre <Text style={styles.asterisk}>*</Text>
        </Text>
        <TextInput
          placeholder="Ingresa nombre(s)"
          value={passenger.firstName}
          onChangeText={(text) =>
            handlePassengerChange(index, "firstName", text)
          }
          style={[styles.input, isScanned && styles.inputDisabled]}
          editable={!isScanned}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Apellido <Text style={styles.asterisk}>*</Text>
        </Text>
        <TextInput
          placeholder="Ingresa apellido(s)"
          value={passenger.lastName}
          onChangeText={(text) =>
            handlePassengerChange(index, "lastName", text)
          }
          style={[styles.input, isScanned && styles.inputDisabled]}
          editable={!isScanned}
        />
      </View>

      <View style={styles.rowContainer}>
        <View style={[styles.halfContainer, styles.inputGroup]}>
          <Text style={styles.label}>
            N° de Identidad <Text style={styles.asterisk}>*</Text>
          </Text>
          <TextInput
            placeholder="N° de Identidad"
            value={passenger.identityNumber}
            onChangeText={(text) =>
              handlePassengerChange(index, "identityNumber", text)
            }
            keyboardType="numeric"
            style={[styles.input, isScanned && styles.inputDisabled]}
            editable={!isScanned}
          />
        </View>

        <View style={[styles.halfContainer, styles.inputGroup]}>
          <Text style={styles.label}>
            Fecha de Nacimiento <Text style={styles.asterisk}>*</Text>
          </Text>
          <View
            style={[
              styles.dateInputContainer,
              isScanned && styles.inputDisabled,
            ]}
          >
            <TextInput
              value={passenger.birthDate}
              onChangeText={(text) =>
                handlePassengerChange(index, "birthDate", text)
              }
              keyboardType="numeric"
              style={styles.dateInput}
              editable={!isScanned}
            />
            <TouchableOpacity
              onPress={showDatePicker}
              style={styles.calendarIcon}
              disabled={isScanned}
            >
              <MaterialIcons
                name="calendar-today"
                size={24}
                color={isScanned ? "#CCCCCC" : "#000000"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {isScanned && (
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => {
            setIsScanned(false);
            handlePassengerChange(index, "firstName", "");
            handlePassengerChange(index, "lastName", "");
            handlePassengerChange(index, "identityNumber", "");
            handlePassengerChange(index, "birthDate", "");
          }}
        >
          <MaterialIcons name="refresh" size={20} color="#007AFF" />
          <Text style={styles.resetButtonText}>Escanear otro CI o ingresar manualmente</Text>
        </TouchableOpacity>
      )}

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
      />

      <QRScanner
        visible={isQRScannerVisible}
        onClose={() => setQRScannerVisible(false)}
        onScanSuccess={handleScanSuccess}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: 370,
    padding: 25,
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  seat: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  scanGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#F3F4F6",
    borderRadius: 10,
  },
  labelScan: {
    marginLeft: 10,
    fontSize: 14,
    color: "#000000",
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 8,
    color: "#000000",
    fontWeight: "bold",
    fontSize: 13,
  },
  asterisk: {
    color: "#FF0000",
  },
  input: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E8FF",
    color: "#000000",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfContainer: {
    width: "48%",
  },
  dateInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E8FF",
  },
  dateInput: {
    flex: 1,
    paddingVertical: 15,
    color: "#000000",
  },
  calendarIcon: {
    paddingLeft: 8,
  },
});

export default PassengerCard;
