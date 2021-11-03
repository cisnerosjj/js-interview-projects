// import { useEffect, useState } from "react";
// import React from "react";
// import { getRepos } from "./../Services/ApiGithubService";

// export const DataRepoContext = React.createContext({});

// export function DataRepoContextProvider({ children }) {
//   const [repositories, setRepos] = useState(() => {
//     const localRepoData = localStorage.getItem("repos");
//     return localRepoData ? JSON.parse(localRepoData) : [];
//   });
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const getRepoData = (username) => {
//     setLoading(true);

//     getRepos(username)
//       .then((res) => {
//         setRepos(res);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   };
//   useEffect(() => {
//     localStorage.setItem("repos", JSON.stringify(repositories));
//   });

//   const value = {
//     repositories,
//     getRepoData,
//     error,
//     loading,
//     setLoading,
//   };
//   return (
//     <DataRepoContext.Provider value={value}>
//       {children}
//     </DataRepoContext.Provider>
//   );
// }
