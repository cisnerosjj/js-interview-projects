import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/dataContext";
import { DataRepoContext } from "../../Context/repoContext";
import ErrorPage from "./ErrorPage";
import CardInfo from "./CardInfo";

const DisplayInfo = ({ username, clicked, setClicked }) => {
  const { data } = useContext(DataContext);
  const { error, loading, repositories } = useContext(DataRepoContext);
  const { getUserInfo } = useContext(DataContext);
  const { getRepoData } = useContext(DataRepoContext);

  console.log(repositories);
  console.log(data.user);

  useEffect(() => {
    if (clicked && username) {
      getUserInfo(username);
      getRepoData(username);
    }
    setClicked(false);
  }, [username, clicked, data, error]);

  return (
    <>
      {error && <ErrorPage error={error}></ErrorPage>}
      {loading && (
        <section>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </section>
      )}
      {!loading && !error && (
        <div className="container">
          <CardInfo></CardInfo>
        </div>
        /* 

        <table className="table table-striped">
          <thead>
            <tr>
              <th>User name</th>
              <th>Organizations</th>
              <th>Repositories</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {!data?.user?.avatar_url ? (
                  ""
                ) : (
                  <img
                    className="container ui small circular image"
                    src={data?.user?.avatar_url}
                    alt={data.user?.avatar_url}
                  />
                )}
                {data?.user?.name}
              </td>
              <td>
                <a href={data?.user?.organizations_url}>
                  {data?.user?.organizations_url}
                </a>
              </td>
              <td>
                {repositories &&
                  repositories.map((repo) => (
                    <div key={repo.name} className="ui relaxed divided list">
                      <div className="item" style={{ marginLeft: 250, width:250 }}>
                        <i className="large github aligned icon"></i>

                        <div className="content">
                          <a href={repo.html_url} className="header">
                            {repo.name}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </td>
            </tr>
          </tbody>
        </table> */
      )}
    </>
  );
};

export default DisplayInfo;
