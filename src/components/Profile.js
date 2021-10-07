import react, { useState } from "react";
import axios from "axios";
import DisplayInfo from "./DisplayInfo";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const BASE_URL = "https://api.github.com";

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const profile = await axios
      .get(`${BASE_URL}/users/${username}`)
      .then((response) => response.data);

    const repositories = await axios(profile.repos_url);

    const repoJson = repositories;

    if (profile) {
      setData(profile);
      setRepositories(repositories);
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div class="ui search">
            <div class="ui icon input">
              <i class="search icon"></i>
              <input
                type="text"
                value={username}
                onChange={onChangeHandler}
              ></input>
            </div>
          </div>
          <button onClick={submitHandler} type="submit">
            Search
          </button>
          <DisplayInfo data={data} repositories={repositories}></DisplayInfo>
        </>
      )}
    </div>
  );
};

export default Profile;
