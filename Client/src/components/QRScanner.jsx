// components/QRScanner.js
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Modal } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const QRScanner = ({ visible, onClose, onScanned }) => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Solicitando permiso para la cámara...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sin acceso a la cámara</Text>;
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={({ data }) => {
            onScanned(data);
            onClose();
          }}
          style={StyleSheet.absoluteFillObject}
        />
        <Button title="Cerrar" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default QRScanner;
