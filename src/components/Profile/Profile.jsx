import axios from "axios";
import { useEffect, useState } from "react";
import { getRepos, getUserData } from "../../Services/ApiGithubService";
import DisplayInfo from "../DisplayInfo/DisplayInfo";

const BASE_URL = "https://api.github.com";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRepos(username).then((repos) => {
      console.log(repos);
      setRepositories(repos);
    });
    getUserData(username).then((userData) => {
      console.log(userData)
      setData(userData)
    })
  }, [username]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    setData();
    setRepositories()

    console.log(username);

    setLoading(false);
  };
  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="ui search mb-5 mt-5">
            <div className="ui icon input">
              <i className="search icon"></i>
              <input
                className="prompt"
                type="text"
                placeholder="Search username here..."
                value={username}
                onChange={onChangeHandler}
              ></input>
            </div>
            <button
              className="ui primary button ms-3"
              onClick={submitHandler}
              type="submit"
            >
              <i className="github icon"></i>
              Search
            </button>
          </div>
          <DisplayInfo data={data} repositories={repositories}></DisplayInfo>
        </>
      )}
    </div>
  );
};

export default Profile;
