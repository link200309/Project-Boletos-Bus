import { View, StyleSheet, Image, ScrollView } from "react-native";
import { GenericContainer } from "../../components/GenericContainer";
import { FormPassenger } from "./components/FormPassenger";
import { FormAgency } from "./components/FormAgency";
import { BackIcon } from "../../components/Icons";

export default function RegisterScreen({ navigation, route }) {
  const { userType = "Pasajero" } = route.params || {};

  return (
    <GenericContainer style={styles.container}>
      <BackIcon style={styles.btnBack} onPress={() => navigation.goBack()} />
      <ScrollView>
          <View style={styles.containerLogo}>
            <Image
              source={require("../../../assets/logo.png")}
              style={styles.logo}
            />
            <Image
              source={require("../../../assets/logoName.png")}
              style={styles.logoName}
            />
          </View>
          {userType === "Pasajero" ? <FormPassenger /> : <FormAgency />}
      </ScrollView>
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B0B94",
    minHeight: "100%",
  },
  containerLogo: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: 10,
    flexDirection: "row",
  },
  logo: {
    width: 50,
    height: 60,
    marginRight: 20,
  },
  logoName: {
    width: 120,
    height: 25,
    marginTop: 10,
  },
  btnBack: {
    position: "absolute",
    top: 60,
    left: 20,
    fontSize: 30,
    color: "#fff",
    zIndex: 1,
  },
});
