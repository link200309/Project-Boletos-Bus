import React from "react";
import { View, Text, Image } from "react-native";

export const commonHeaderOptions = {
  headerStyle: { backgroundColor: "#7B5DDF" },
  headerTintColor: "#fff",
  headerTitleAlign: "center",
  headerTitle: () => <HeaderLogoTitle />,
};

const HeaderLogoTitle = () => (
  <View style={styles.header}>
    <Image
      source={require("../../../assets/logoNavbar.png")}
      style={styles.logo}
      resizeMode="contain"
    />
    <Text style={styles.title}>BusRat</Text>
  </View>
);

const styles = {
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
};
