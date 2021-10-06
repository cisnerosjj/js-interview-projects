import react, { useState } from "react";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([])

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const BASE_URL = "https://api.github.com";

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`${BASE_URL}/users/${username}`);
    const profileJson = await profile.json();
    
    const repositories = await fetch(profileJson.repos_url)
    const repoJson = await repositories.json()

    console.log(repoJson);

  };

  return (
    <div>
      <input type="text" value={username} onChange={onChangeHandler}></input>
      <button onClick={submitHandler} type="submit">
        Search
      </button>
    </div>
  );
};

export default Profile;
