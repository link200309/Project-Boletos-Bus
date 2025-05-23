//React
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useForm, FormProvider, Controller } from "react-hook-form";
//Components
import { InputLabel } from "../../../components/Input/InputLabel";
import { ButtonStyle } from "../../../components/Button/ButtonStyle";
import { ButtonText } from "../../../components/Button/ButtonText";
import { GlobalStyles } from "../../../components/Style/GlobalStyles";
//Context
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import { accountValidationRules } from "./validation";

export const FormLogin = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Pasajero");
  const { login, isLoading } = useContext(AuthContext);
  const methods = useForm();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const renderForm = () => {
    const onSubmit = (data) => {
      login({ email: data.email, password: data.password });
    };

    return (
      <FormProvider {...methods}>
        <Controller
          control={control}
          name="email"
          rules={accountValidationRules.email}
          render={({ field: { onChange, value } }) => (
            <InputLabel
              label="Correo electrónico"
              placeholder="ejemplo@gmail.com"
              value={value}
              onChange={onChange}
              error={errors}
              name={"email"}
              keyboardType="email-address"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={accountValidationRules.password}
          render={({ field: { onChange, value } }) => (
            <InputLabel
              label="Contraseña"
              placeholder="Contraseña"
              value={value}
              onChange={onChange}
              error={errors}
              name="password"
              secureTextEntry={true}
            />
          )}
        />

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <ButtonStyle text="Iniciar sesión" onClick={handleSubmit(onSubmit)} />
        )}

        <ButtonText
          text="¿Olvidaste tu contraseña?"
          onClick={() => navigation.navigate("RecoverPassword")}
        />

        <View style={styles.registerMessage}>
          <Text style={styles.textRegisterMessage}>¿No tienes cuenta?</Text>
          <ButtonText
            text="Regístrate"
            onClick={() =>
              navigation.navigate("Register", { userType: activeTab })
            }
          />
        </View>
      </FormProvider>
    );
  };

  return (
    <View style={[GlobalStyles.formCard, styles.container]}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Pasajero" && styles.activeTab]}
          onPress={() => setActiveTab("Pasajero")}
        >
          <Text style={styles.tabText}>Pasajero</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "Agencia" && styles.activeTab]}
          onPress={() => setActiveTab("Agencia")}
        >
          <Text style={styles.tabText}>Agencia</Text>
        </TouchableOpacity>
      </View>

      {renderForm()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
  },
  registerMessage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textRegisterMessage: {
    color: "#999",
    fontSize: 14,
    marginRight: 5,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 30,
    borderBottom: 1,
    borderColor: "#E6E8FF",
  },
  tab: {
    flex: 1,
    paddingBottom: 15,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: "#4318D1",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
