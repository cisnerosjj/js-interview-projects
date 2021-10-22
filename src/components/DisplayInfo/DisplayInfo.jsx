import { useContext, useEffect } from "react";
import { DataContext } from "../../Context/dataContext";
import { DataRepoContext } from "../../Context/repoContext";
import ErrorPage from "./ErrorPage";
import CardInfo from "./CardInfo";

const DisplayInfo = ({ username, clicked, setClicked }) => {
  const { data } = useContext(DataContext);
  const { error, loading } = useContext(DataRepoContext);
  const { getUserInfo } = useContext(DataContext);
  const { getRepoData } = useContext(DataRepoContext);

  useEffect(() => {
    if (clicked && username) {
      getUserInfo(username);
      getRepoData(username);
      setClicked(false);
    }
  }, [clicked, data, username]);

  return (
    <>
      {error ? (
        <ErrorPage error={error}></ErrorPage>
      ) : loading ? (
        <section>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </section>
      ) : (
        data.user && (
          <div className="container">
            <CardInfo data={data}></CardInfo>
          </div>
        )
      )}
    </>
  );
};

export default DisplayInfo;
