import React, { useState } from "react";
import axiosClient from "../components/auth/axiosClient";
import storage from "../utils/storage";

export const LoginContext = React.createContext({});

export function LoginContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState(null);

  const login = async (user, pass) => {
    try {
      const accessToken = await axiosClient.post(
        `http://localhost:8000/auth/login`,
        {
          user,
          pass,
        }
      );
      storage.set("token", accessToken);
      setError(null)
      return accessToken;
    } catch (error) {
      setError(error);
    }
  };

  const value = {
    error,
    isLogin,
    login,
    setIsLogin,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
