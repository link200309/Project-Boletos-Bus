import { View, Text, StyleSheet } from "react-native";

export const InformativeTitle = ({ title, description }) => {
  return (
    <View style={Style.container}>
      <Text style={Style.text}>{title}</Text>
      <Text style={Style.description}>{description}</Text>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    backgroundColor: "#4318D1",
    borderRadius: 20,
    width: "100%",
    maxWidth: 400,
    padding: 20,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    color: "white",
  },
});
