import { createContext, useState } from "react";
import { registrarUsuario } from "../api/auth.api.js"; // ajusta la ruta según tu estructura

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  registerAgency: () => {},
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
      throw error; // importante: para que el componente que llama vea el error
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        registerAgency,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
