import React, { useState } from "react";
import axiosClient, { setAuthorizationHeader } from "../components/auth/axiosClient";
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
      return accessToken;
    } catch (err) {
      setError(error);
    }
  };

  const value = {
    error,
    login,
    isLogin,
    setIsLogin,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
