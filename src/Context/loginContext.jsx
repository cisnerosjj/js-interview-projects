import React, { useEffect, useState } from "react";

export const LoginContext = React.createContext({});

export function LoginContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const value = {
    isLogin,
    setIsLogin,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
