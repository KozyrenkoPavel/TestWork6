"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

interface TAuthContext {
  token: string;
  setToken: (token: string) => void;
}

type TProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<TAuthContext | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth необходимо использовать внутри AuthProvider");
  }

  return context;
};

export default function AuthProvider({ children }: TProps) {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const savedToken = localStorage.getItem("jwtToken");

    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  return (
    <Provider store={store}>
      <AuthContext.Provider value={{ token, setToken }}>
        {children}
      </AuthContext.Provider>
    </Provider>
  );
}
