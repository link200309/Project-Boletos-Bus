import React from "react";
import { View, StyleSheet } from "react-native";

import Blob1 from "../../assets/svgs/blob/blob1.svg";

export const BlobBg = () => {
  return (
    <>
      <View style={styles.blob1}>
        <Blob1 width="100%" height="100%" />
      </View>
      <View style={styles.blob2}>
        <Blob1 width="100%" height="100%" />
      </View>
      <View style={styles.blob3}>
        <Blob1 width="100%" height="100%" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 800,
  },
  blob1: {
    position: "absolute",
    top: -200,
    left: -350,
    width: 600,
    height: 600,
    zIndex: -1000,
    opacity: 0.3,
  },
  blob2: {
    position: "absolute",
    top: 200,
    left: -150,
    width: 400,
    height: 800,
    zIndex: -1000,
    opacity: 0.3,
  },
  blob3: {
    position: "absolute",
    top: 150,
    left: 180,
    width: 500,
    height: 500,
    zIndex: -1000,
    opacity: 0.3,
  },
});
