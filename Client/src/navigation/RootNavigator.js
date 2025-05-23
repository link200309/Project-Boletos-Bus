import React, { useContext } from "react";
import AuthNavigator from "./AuthNavigator";
import TabPassengerNavigator from "./TabPassengerNavigator";
import TabAgencyNavigator from "./TabAgencyNavigator";
import { AuthContext } from "../context/AuthContext";

const RootNavigator = () => {
  const { user } = useContext(AuthContext);

  if (!user || !user.rol) {
    return <AuthNavigator />;
  }

  return user.rol == "Pasajero" ? (
    <TabPassengerNavigator />
  ) : user.rol == "Agencia" ? (
    <TabAgencyNavigator />
  ) : (
    <AuthNavigator />
  );
};

export default RootNavigator;
