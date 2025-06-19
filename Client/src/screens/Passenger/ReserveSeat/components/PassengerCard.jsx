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
import { Controller, useFormContext } from "react-hook-form";
import { accountValidationRules } from "../../../Login/components/validation";

export const PassengerCard = ({
  index,
  passenger,
  handlePassengerChange,
  userAccountData,
}) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isQRScannerVisible, setQRScannerVisible] = useState(false);
  const [isScanned, setIsScanned] = useState(false);
  const [isAccountDataUsed, setIsAccountDataUsed] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
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
    setValue(`passengers[${index}].firstName`, scannedData.firstName);
    setValue(`passengers[${index}].lastName`, scannedData.lastName);
    setValue(`passengers[${index}].identityNumber`, scannedData.identityNumber);
    setValue(`passengers[${index}].birthDate`, scannedData.birthDate);

    handlePassengerChange(index, "firstName", scannedData.firstName);
    handlePassengerChange(index, "lastName", scannedData.lastName);
    handlePassengerChange(index, "identityNumber", scannedData.identityNumber);
    handlePassengerChange(index, "birthDate", scannedData.birthDate);

    setIsScanned(true);
    setIsAccountDataUsed(false);
    setQRScannerVisible(false);
  };

  const handleUseAccountData = () => {
    if (!isAccountDataUsed && userAccountData) {
      setValue(
        `passengers[${index}].firstName`,
        userAccountData.firstName || ""
      );
      setValue(`passengers[${index}].lastName`, userAccountData.lastName || "");
      setValue(
        `passengers[${index}].identityNumber`,
        userAccountData.identityNumber || ""
      );
      setValue(
        `passengers[${index}].birthDate`,
        userAccountData.birthDate || ""
      );
      handlePassengerChange(
        index,
        "firstName",
        userAccountData.firstName || ""
      );
      handlePassengerChange(index, "lastName", userAccountData.lastName || "");
      handlePassengerChange(
        index,
        "identityNumber",
        userAccountData.identityNumber || ""
      );
      handlePassengerChange(
        index,
        "birthDate",
        userAccountData.birthDate || ""
      );
      setIsAccountDataUsed(true);
      setIsScanned(false);
    }
  };

  const handleInputChange = (field, value, originalOnChange) => {
    originalOnChange(value);
    handlePassengerChange(index, field, value);

    if (isAccountDataUsed || isScanned) {
      setIsAccountDataUsed(false);
      setIsScanned(false);
    }
  };

  const handleReset = () => {
    setIsScanned(false);
    setIsAccountDataUsed(false);

    setValue(`passengers[${index}].firstName`, "");
    setValue(`passengers[${index}].lastName`, "");
    setValue(`passengers[${index}].identityNumber`, "");
    setValue(`passengers[${index}].birthDate`, "");

    handlePassengerChange(index, "firstName", "");
    handlePassengerChange(index, "lastName", "");
    handlePassengerChange(index, "identityNumber", "");
    handlePassengerChange(index, "birthDate", "");
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.headerContainer} onPress={toggleCollapse}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Pasajero {index + 1}</Text>
          <Text style={styles.seat}>Asiento: {passenger.seat}</Text>
        </View>
        <MaterialIcons
          name={isCollapsed ? "expand-more" : "expand-less"}
          size={24}
          color="#666666"
        />
      </TouchableOpacity>

      {!isCollapsed && (
        <>
          <View style={styles.groupData}>
            <TouchableOpacity
              style={[
                styles.accountDataGroup,
                isScanned && styles.accountDataGroupActive,
              ]}
              onPress={handleQRScan}
              disabled={isScanned}
            >
              <ScanQRIcon color={isScanned ? "#007AFF" : "#666666"} />
              <Text
                style={[
                  styles.labelAccountData,
                  isScanned && styles.labelAccountDataActive,
                ]}
              >
                {isScanned
                  ? "CI escaneado ✓"
                  : "Escanear CI"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.accountDataGroup,
                isAccountDataUsed && styles.accountDataGroupActive,
              ]}
              onPress={handleUseAccountData}
              disabled={isAccountDataUsed || !userAccountData}
            >
              <MaterialIcons
                name="account-circle"
                size={20}
                color={isAccountDataUsed ? "#007AFF" : "#666666"}
              />
              <Text
                style={[
                  styles.labelAccountData,
                  isAccountDataUsed && styles.labelAccountDataActive,
                ]}
              >
                {isAccountDataUsed
                  ? "Cuenta aplicada ✓"
                  : "Datos de cuenta"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Nombre(s) <Text style={styles.asterisk}>*</Text>
            </Text>
            <Controller
              control={control}
              name={`passengers[${index}].firstName`}
              rules={accountValidationRules.name}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Nombre(s) *"
                  placeholder="Ingrese nombre(s)"
                  value={value}
                  onChangeText={(text) =>
                    handleInputChange("firstName", text, onChange)
                  }
                  error={errors}
                  name="name"
                  style={styles.input}
                  editable={!isScanned}
                />
              )}
            />
            {errors?.passengers?.[index]?.firstName && (
              <Text style={styles.errorText}>
                {errors.passengers[index].firstName.message}
              </Text>
            )}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Apellido(s) <Text style={styles.asterisk}>*</Text>
            </Text>
            <Controller
              control={control}
              name={`passengers[${index}].lastName`}
              rules={accountValidationRules.lastName}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Ingresa apellido(s)"
                  value={value}
                  onChangeText={(text) =>
                    handleInputChange("lastName", text, onChange)
                  }
                  style={styles.input}
                  editable={!isScanned}
                />
              )}
            />
            {errors?.passengers?.[index]?.lastName && (
              <Text style={styles.errorText}>
                {errors.passengers[index].lastName.message}
              </Text>
            )}
          </View>

          <View style={styles.rowContainer}>
            <View style={[styles.halfContainer, styles.inputGroup]}>
              <Text style={styles.label}>
                N° de Identidad <Text style={styles.asterisk}>*</Text>
              </Text>
              <Controller
                control={control}
                name={`passengers[${index}].identityNumber`}
                rules={accountValidationRules.ci}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    placeholder="N° de Identidad"
                    value={value}
                    onChangeText={(text) =>
                      handleInputChange("identityNumber", text, onChange)
                    }
                    keyboardType="numeric"
                    style={styles.input}
                    editable={!isScanned}
                  />
                )}
              />
              {errors?.passengers?.[index]?.identityNumber && (
                <Text style={styles.errorText}>
                  {errors.passengers[index].identityNumber.message}
                </Text>
              )}
            </View>

            <View style={[styles.halfContainer, styles.inputGroup]}>
              <Text style={styles.label}>
                Fecha de Nacimiento <Text style={styles.asterisk}>*</Text>
              </Text>
              <View style={styles.dateInputContainer}>
                <Controller
                  control={control}
                  name={`passengers[${index}].birthDate`}
                  rules={{ required: "La fecha es obligatoria" }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <TextInput
                        value={value}
                        onChangeText={(text) =>
                          handleInputChange("birthDate", text, onChange)
                        }
                        keyboardType="numeric"
                        style={styles.dateInput}
                        editable={!isScanned}
                      />
                      <TouchableOpacity
                        onPress={showDatePicker}
                        style={styles.calendarIcon}
                      >
                        <MaterialIcons
                          name="calendar-today"
                          size={24}
                          color="#000000"
                        />
                      </TouchableOpacity>
                    </>
                  )}
                />
                {errors?.passengers?.[index]?.birthDate && (
                  <Text style={styles.errorText}>
                    {errors.passengers[index].birthDate.message}
                  </Text>
                )}
              </View>
            </View>
          </View>

          {(isScanned || isAccountDataUsed) && (
            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
              <MaterialIcons name="refresh" size={20} color="#007AFF" />
              <Text style={styles.resetButtonText}>
                {isScanned
                  ? "Escanear otro CI o ingresar manualmente"
                  : "Ingresar datos manualmente"}
              </Text>
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
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: 370,
    padding: 20,
    marginTop: 20,
    backgroundColor: "#FAFAFA",
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
  errorText: {
    marginLeft: 10,
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
  resetButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#F0F8FF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  resetButtonText: {
    marginLeft: 8,
    color: "#007AFF",
    fontSize: 14,
    fontWeight: "500",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  headerContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accountDataGroup: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#F8F9FA",
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: "#E9ECEF",
  },
  accountDataGroupActive: {
    backgroundColor: "#E3F2FD",
    borderColor: "#007AFF",
  },
  labelAccountData: {
    marginLeft: 12,
    fontSize: 13,
    color: "#666666",
    fontWeight: "500",
  },
  labelAccountDataActive: {
    color: "#007AFF",
  },
  groupData: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
});
export default PassengerCard;
