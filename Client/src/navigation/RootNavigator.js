import React, { useContext } from "react";
import AuthNavigator from "./AuthNavigator";
import TabPassengerNavigator from "./TabPassengerNavigator";
import TabAgencyNavigator from "./TabAgencyNavigator";
import { AuthContext } from "../context/AuthContext";

const RootNavigator = () => {
  const { user } = useContext(AuthContext);

  console.log("Los datos", user);

  if (!user) {
    return <AuthNavigator />;
  }

  return user.usuario.tipo_usuario == "cliente" ? (
    <TabPassengerNavigator />
  ) : user.usuario.tipo_usuario == "agencia" ? (
    <TabAgencyNavigator />
  ) : (
    <AuthNavigator />
  );
};

export default RootNavigator;
