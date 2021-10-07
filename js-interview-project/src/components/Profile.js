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

    console.log(profile, "**********");

    console.log(repoJson);

    if (profile) {
      setData(profile);
      setRepositories(repositories);
      setLoading(false);
    }

    console.log(repositories.data);
  };

  return (
    <div>
      {loading ? (
        "Loading Content..."
      ) : (
        <>
          <input
            type="text"
            value={username}
            onChange={onChangeHandler}
          ></input>
          <button onClick={submitHandler} type="submit">
            Search
          </button>
          <DisplayInfo data={data} repositories={repositories}></DisplayInfo>)
        </>
      )}
    </div>
  );
};

export default Profile;
