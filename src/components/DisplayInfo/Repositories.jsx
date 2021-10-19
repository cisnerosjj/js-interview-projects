import { useContext } from "react";
import { DataRepoContext } from "../../Context/repoContext";

const Repositories = () => {
  const { error, loading, repositories } = useContext(DataRepoContext);

  return (
    <>
    <h3>Lastest Repositories</h3>
    <hr></hr>
      {repositories &&
        repositories.map((repo) => (
          <div key={repo.name} className="ui relaxed divided list" style={{marginRight: 70}}>
            <div className="item" style={{ marginLeft: 105, width: 250 }}>
              <i className="large github aligned icon"></i>

              <div className="content">
                <a href={repo.html_url} className="header">
                  {repo.name}
                </a>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Repositories;
