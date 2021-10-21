import { useState } from "react";
import React from "react";
import { getUserData } from "./../Services/ApiGithubService";
import { useLocalStorage } from "../hooks/useLocaStorage";

export const DataContext = React.createContext({});

export function DataContextProvider({ children }) {
  const [data, setData] = useState({});
  const [localData, setLocalData] = useLocalStorage("data", "");

  const getUserInfo = async (username) => {
    const userData = await getUserData(username);
    setData(userData);
    console.log(data);
    setLocalData(data);
  };

  const value = {
    data,
    getUserInfo,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
