import { useContext, useEffect } from "react";
import { DataContext } from "../../Context/dataContext";
import { DataRepoContext } from "../../Context/repoContext";

const DisplayInfo = ({ username, clicked, setClicked }) => {
  const { data } = useContext(DataContext);
  const { repositories } = useContext(DataRepoContext);
  const { getUserInfo } = useContext(DataContext);
  const { getRepoData } = useContext(DataRepoContext);

  useEffect(() => {
    if (clicked && username) {
      setClicked(false);

      getUserInfo(username);
      getRepoData(username);

    }
  }, [username, clicked, getUserInfo, getRepoData, setClicked]);

  return (
    <div>
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
              {repositories?.map((repo) => (
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
    </div>
  );
};

export default DisplayInfo;
