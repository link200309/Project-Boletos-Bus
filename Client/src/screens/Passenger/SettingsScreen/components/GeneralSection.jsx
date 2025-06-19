import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const GeneralSection = ({ onItemPress }) => {
  const renderItem = (iconName, text, contentKey, iconColor = "#4318D1") => (
    <TouchableOpacity
      style={styles.itemRow}
      onPress={() => onItemPress(contentKey)}
    >
      <Icon name={iconName} size={24} color={iconColor} />
      <Text style={styles.itemText}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Text style={styles.sectionTitle}>General</Text>
      <View style={styles.sectionBox}>
        {renderItem(
          "chatbox-ellipses-outline",
          "Enviar sugerencias",
          "sugerencias"
        )}
        {renderItem("information-circle-outline", "Sobre nosotros", "nosotros")}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    color: "#441AD1",
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
});
