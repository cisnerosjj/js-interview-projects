import { useContext } from "react";
import { DataContext } from "../Context/dataContext";
import { DataRepoContext } from "../Context/repoContext";

export const useDataContext = () => {
  useContext(DataContext);
};

export const useRepoContext = () => {
  useContext(DataRepoContext);
};
