import { useContext, useEffect } from "react";
import { DataContext } from "../../Context/dataContext";
import { DataRepoContext } from "../../Context/repoContext";
import ErrorPage from "./ErrorPage";
import CardInfo from "./CardInfo";
import { useLocalStorage } from "../../hooks/useLocaStorage";

const DisplayInfo = ({ username, clicked, setClicked }) => {
  const { data } = useContext(DataContext);
  const { error, loading } = useContext(DataRepoContext);
  const { getUserInfo } = useContext(DataContext);
  const { getRepoData } = useContext(DataRepoContext);
  const [localData, setLocalData] = useLocalStorage("data", "");

  console.log(username, "condicion true");
  console.log(error, "condicion false");
  console.log(loading, "condicion false");
  console.log(data, "DATAAAA");

  useEffect(() => {
    if (!data.user && clicked) {
      getUserInfo(username);
      getRepoData(username);
      setClicked(false);
    }
  }, [clicked]);

  return (
    <>
      {error ? (
        <ErrorPage error={error}></ErrorPage>
      ) : data?.user ? (
        <div className="container">
          <CardInfo data={data}></CardInfo>
        </div>
      ) : (
        <section>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DisplayInfo;
