import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const ProfileCard = ({ user }) => {
  return (
    <View style={styles.profileCard}>
      <Image
        source={require("../../assets/avatar-default.jpg")}
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
  );
};

const styles = StyleSheet.create({
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    elevation: 2,
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
});
