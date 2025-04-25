import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function TopBar() {
  return (
      <View style={styles.topBar}>
        <Image
            source={require("../../assets/banner.png")}
            style={styles.image}
            resizeMode="contain"
        />
      </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#111',
    paddingTop: 50,
    paddingBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 60,
  }
});