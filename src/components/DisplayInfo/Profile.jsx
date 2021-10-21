import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocaStorage";
import DisplayInfo from "./DisplayInfo";

const Profile = () => {
  const [clicked, setClicked] = useState(false);
  const [username, setUsername] = useLocalStorage("text", "");

  const submitHandler = (e) => {
    e.preventDefault();
    setUsername(username);

    setClicked(true);
  };

  return (
    <div>
      <div className="ui search mb-5 mt-5">
        <div className="ui icon input">
          <i className="search icon"></i>
          <input
            className="prompt"
            type="text"
            placeholder="Search username here..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <button
          className="ui primary button ms-3"
          onClick={submitHandler}
          type="submit"
          disabled={!username}
        >
          <i className="github icon"></i>
          Search
        </button>
      </div>
      {username && (
        <DisplayInfo
          username={username}
          clicked={clicked}
          setClicked={setClicked}
        ></DisplayInfo>
      )}
    </div>
  );
};

export default Profile;
