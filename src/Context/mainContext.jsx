// import { children, useEffect, useState } from "react";
// import React from "react";

// export const mainContext = React.createContext({});

// export function MainContextProvider({ children }) {
//   const [isLoged, setIslogin] = useState(false);

//   /* const [data, setData] = useState(() => {
//     const localData = localStorage.getItem("data");
//     return localData ? JSON.parse(localData) : [];
//   });
//   const [repositories, setRepos] = useState(() => {
//     const localRepoData = localStorage.getItem("repos");
//     return localRepoData ? JSON.parse(localRepoData) : [];
//   });
//  */
//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       setIslogin(true);
//     }
//     console.log(isLoged)
//     // localStorage.setItem("data", JSON.stringify(data));
//     // localStorage.setItem("repos", JSON.stringify(repositories));
//   }, [setIslogin]);
//   const value = {
//     isLoged,
//     /* data,
//     repositories, */
//   };
//   return <mainContext.Provider value={value}>{children}</mainContext.Provider>;
// }
