import React, { useEffect, useState } from "react";

export const LoginContext = React.createContext({});

export function LoginContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin);
  let token = {};

  useEffect(() => {
    token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    } else setIsLogin(false);
  }, [token]);

  console.log(token);

  const value = {
    isLogin,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
