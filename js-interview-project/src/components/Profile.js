import react, { useState } from "react";
import axios from "axios";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const BASE_URL = "https://api.github.com";

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await axios
      .get(`${BASE_URL}/users/${username}`)
      .then((response) => response.data);

    const repositories = await axios(profile.repos_url);

    if(profile) {
        setData(profile)
        setRepositories(repositories)
    }

    console.log(repositories);
  };

  return (
    <div>
      <input type="text" value={username} onChange={onChangeHandler}></input>
      <button onClick={submitHandler} type="submit">
        Search
      </button>
      <ul>
        <li>{data.location}</li>
      </ul>
    </div>
  );
};

export default Profile;
