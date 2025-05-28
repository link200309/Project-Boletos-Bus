import { createContext, useState } from "react";
import { registrarUsuario } from "../api/auth.api.js"; // asegúrate de que esta ruta exista

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

  const login = async ({ email, password, rol }) => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        const fakeUser = { id: 1, name: "Juan", email, rol };
        setUser(fakeUser);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const registerAgency = async (datos) => {
    setIsLoading(true);
    try {
      const response = await registrarUsuario(datos);
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
      const response = await registrarUsuario(datos); // llamada a API
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
        register, // ← ahora disponible
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
