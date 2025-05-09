import React, { useContext } from "react";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import { AuthContext } from "../context/AuthContext";

const RootNavigator = () => {
  const { user } = useContext(AuthContext);

  return user ? <TabNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
