import { createContext, useState } from "react";
import { registerUser, loginUser } from "../api/auth.api.js";

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  registerAgency: () => {},
  register: () => {},
  isLoading: false,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const user = await loginUser({
        correo_electronico: email,
        contraseña: password,
      });
      setUser(user.data);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(`Error de login: ${error.response.data.message}`);
      } else {
        alert(
          "Error de login: credenciales incorrectas o problema del servidor."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const registerAgency = async (datos) => {
    setIsLoading(true);
    try {
      const response = await registerUser(datos);
      setIsLoading(false);
      return response;
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  const register = async (datos) => {
    setIsLoading(true);
    try {
      const response = await registerUser(datos);
      setIsLoading(false);
      return response;
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        registerAgency,
        register,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
