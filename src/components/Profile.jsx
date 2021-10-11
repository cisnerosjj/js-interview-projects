import axios from "axios";
import { useState } from "react";
import DisplayInfo from "./DisplayInfo";

const BASE_URL = "https://api.github.com";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  // export { getRepos, getUserData };

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    console.log(username);
    e.preventDefault();
    setLoading(true);

    const url = `${BASE_URL}/users/${username}/repos?per_page=250`;

    const getRepos = await axios
      .get(url)
      .then((response) => response.data)
      .catch((e) => console.log(e));

    const getUserData = await axios
      .all([
        axios.get(`${BASE_URL}/users/${username}`),
        axios.get(`${BASE_URL}/users/${username}/orgs`),
      ])
      .then(([user, orgs]) => ({
        user: user.data,
        orgs: orgs.data,
      }))
      .catch((e) => console.log(e));

    setRepositories(getRepos);
    setData(getUserData);
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
