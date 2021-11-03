import { useEffect, useState } from "react";
import { getRepos } from "../../Services/ApiGithubService";

const Repositories = ({ username }) => {
  const [repositories, setRepositories] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRepos(username).then((repos) => {
      setRepositories(repos);
      setLoading(false);
    });
  }, [username]);

  return (
    <>
      {loading ? (
        <section>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </section>
      ) : (
        <>
          <h3>Lastest Repositories</h3>
          <hr></hr>
          {repositories &&
            repositories.map((repo) => (
              <div
                key={repo.name}
                className="ui relaxed divided list"
                style={{ marginRight: 70 }}
              >
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
          )
        </>
      )}
    </>
  );
};

export default Repositories;
