import { createContext, useState } from "react";

export const AuthContext = createContext({
  user: null,
  login: (user) => {},
  logout: () => {},
  register: (user) => {},
  isLoading: false,
  setIsLoading: (isLoading) => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async ({ email, password }) => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        const fakeUser = { id: 1, name: "Juan", email };
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

  const register = async ({ name, email, password }) => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        const newUser = { id: 2, name, email };
        setUser(newUser);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Register error:", error);
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        register,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
