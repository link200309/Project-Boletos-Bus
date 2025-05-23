//React
import { View, Text, StyleSheet } from "react-native";

//Components
import { ButtonStyle } from "./Button/ButtonStyle";

export const InformativeTitle = ({
  title,
  description,
  btnText = "",
  onClick,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {btnText != "" && (
        <ButtonStyle
          text={btnText}
          style={styles.btnAddTravel}
          onClick={onClick}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  btnAddTravel: {
    backgroundColor: "#10B981",
  },
});
