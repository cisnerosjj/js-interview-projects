import { useEffect, useState } from "react";
import React from "react";
import { getUserData } from "./../Services/ApiGithubService";

export const DataContext = React.createContext({});

export function DataContextProvider({ children }) {
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem("data");
    return localData ? JSON.parse(localData) : [];
  });

  const getUserInfo = async (username) => {
    const userData = await getUserData(username);
    setData(userData);
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const value = {
    data,
    getUserInfo,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
