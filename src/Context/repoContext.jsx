import { useState } from "react";
import React from "react";
import { getRepos } from "./../Services/ApiGithubService";

export const DataRepoContext = React.createContext({});

export function DataRepoContextProvider({ children }) {
  const [repositories, setRepos] = useState();

  const getRepoData = (username) => {
    getRepos(username).then((res) => {
      setRepos(res);
    });
  };

  const value = {
    repositories,
    getRepoData,
  };
  return (
    <DataRepoContext.Provider value={value}>
      {children}
    </DataRepoContext.Provider>
  );
}
