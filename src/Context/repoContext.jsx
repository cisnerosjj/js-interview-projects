import { useState } from "react";
import React from "react";
import { getRepos } from "./../Services/ApiGithubService";

export const DataRepoContext = React.createContext({});

export function DataRepoContextProvider({ children }) {
  const [repositories, setRepos] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  const getRepoData = (username) => {
    setError(null)
    setLoading(true)
    setRepos(null)
    getRepos(username)
      .then((res) => {
        console.log("Entra en response")

        setRepos(res);
        setLoading(false)
      })
      .catch((error) => {
        setError(error);
        setLoading(false)
      });
  };

  const value = {
    repositories,
    getRepoData,
    error,
    loading,
  };
  return (
    <DataRepoContext.Provider value={value}>
      {children}
    </DataRepoContext.Provider>
  );
}
