import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/dataContext";
import { DataRepoContext } from "../../Context/repoContext";

const DisplayInfo = ({ username, clicked, setClicked }) => {
  const { data } = useContext(DataContext);
  const { error, loading, repositories } = useContext(DataRepoContext);
  const { getUserInfo } = useContext(DataContext);
  const { getRepoData } = useContext(DataRepoContext);

  useEffect(() => {
    if (clicked && username) {
      getUserInfo(username);
      getRepoData(username);
    }
    setClicked(false);
  }, [username, clicked, data, error]);

  return (
    <>
      {error && <h1>{error?.response?.status} Oh no! We are in troubles!</h1>}
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
              <td>{data?.user?.name}</td>
              <td>
                <a href={data?.user?.organizations_url}>
                  {data?.user?.organizations_url}
                </a>
              </td>
              <td>
                {repositories &&
                  repositories.map((repo) => (
                    <div key={repo.name} className="ui relaxed divided list">
                      <div className="item" style={{ marginLeft: 110 }}>
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
        </table>
      )}
    </>
  );
};

export default DisplayInfo;
