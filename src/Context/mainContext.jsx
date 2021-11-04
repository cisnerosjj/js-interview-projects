// import { children } from "react";

// export const mainContext = React.createContext({});

// export function mainContextProvider({ children }) {
//   const [data, setData] = useState(() => {
//     const localData = localStorage.getItem("data");
//     return localData ? JSON.parse(localData) : [];
//   });
//   const [repositories, setRepos] = useState(() => {
//     const localRepoData = localStorage.getItem("repos");
//     return localRepoData ? JSON.parse(localRepoData) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("data", JSON.stringify(data));
//     localStorage.setItem("repos", JSON.stringify(repositories));
//   }, [data]);

//   const value = {
//     data,
//     repositories,
//   };
//   return <mainContextProvider value={value}>{children}</mainContextProvider>;
// }
